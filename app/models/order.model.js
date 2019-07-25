const mongoose = require('mongoose');

const pesudoProductSchema = {
    _id: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true, default: null },
    quantity: { type: Number, required: true, default: 0 }
};

const orderSchema = mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true, default: null },
    store_id: { type: mongoose.Schema.Types.ObjectId, ref: 'store', required: true, default: null },
    transaction_id: { type: String, required: false, default: null },
    products: { type: [pesudoProductSchema], required: true, default: [] },
    timestamp: { type: Number, required: true, default: -1 }
});

module.exports = mongoose.model('order', orderSchema);