import axios from 'axios';
import './BuyButton.css';

function BuyButton({userId,cartItems,total,address}){
    const handleBuy=async ()=>{
        try{
            const res=await axios.post('http://localhost:3001/buy', {
                userId,
                items:cartItems,
                total,
                address
            });
            alert('Order placed successfully!');
        }catch(err){
            alert('Purchase failed: '+(err.response?.data?.error || err.message));
        }
    }
    return (
        <button className='buybutton' onClick={handleBuy}>
            Buy
        </button>
    )
}

export default BuyButton;