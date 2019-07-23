const mongoose = require('mongoose');

const pseudoProductsSchema = {
    _id: { type: mongoose.Schema.Types.ObjectId, required: true, default: null },
    quantity: { type: Number, required: true, default: -1 }
};

const orderSchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true, default: null },
    store_id: { type: mongoose.Schema.Types.ObjectId, ref: 'store', required: true, default: null },
    products: { type: [pseudoProductsSchema], required: true, default: [] },
    type: { type: String, required: true, default: null, enum: ['PICKUP','DELIVERY'] }
}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema);