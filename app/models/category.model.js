const mongoose = require('mongoose');

const productSchema = {
    name: { type: String, required: true, default: null },
    price: { type: Number, required: true, default: -1 },
    image: { type: String, required: false, default: null }
};

const categorySchema = mongoose.Schema({
    store_id: { type: mongoose.Schema.Types.ObjectId, ref: 'store', required: true, default: null },
    name: { type: String, required: true, default: null },
    products: { type: [productSchema], required: false, default: [] }
});

module.exports = mongoose.model('category', categorySchema);