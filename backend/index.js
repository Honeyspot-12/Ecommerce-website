const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const user=require('./models/user.model');
const Order=require('./models/order.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret';



const app=express();
app.use(express.json())
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce');

app.post('/signup', async (req, res) => {
    try {
        const { username, email, password, phone } = req.body;
        const hash = await bcrypt.hash(password, 10);
        const newUser = await user.create({ username, email, password: hash, phone });
        res.json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
})

app.post('/buy',async (req,res)=>{
    try{
        const { userId, items, total, address } = req.body;
        const order = await Order.create({ userId, items, total, address });
        res.status(201).json({success:true,order})
    }catch(err){
        res.status(500).json({success:false,error:err.message});
    }
});

app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    const foundUser=await user.findOne({email})
    if(!foundUser) return res.status(400).json({error:"Invalid Credentials"});

    const match=await bcrypt.compare(password,foundUser.password)
    if(!match) return res.status(400).json({error:"Invalid Credentials"})

        //Create JWT
        const token=jwt.sign(
            {id:foundUser._id,username:foundUser.username,email:foundUser.email},
            JWT_SECRET,
            {expiresIn:'1d'}
        );
        res.json({
            token,
            user:{
                _id:foundUser._id,
                username:foundUser.username,
                email:foundUser.email
            }
        });
})

app.listen(3001,()=>{
    console.log('server is running');
})