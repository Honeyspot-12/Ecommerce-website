const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
    items: [
        {
            productId: { type: String, required: true },
            name: String,
            price: Number,
            quantity: Number
        }
    ],
    total: { type: Number, required: true },
    address: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Order', orderSchema);