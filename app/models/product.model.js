const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true, default: null },
    price: { type: Number, required: true, default: -1 },
    image: { type: String, required: false, default: null },
    category: {
        type: String,
        required: true,
        default: null,
        enum: [
            'Home Needs',
            'Grocery Staples and More',
            'Fruits and Vegetables',
            'Beverages',
            'Bread Dairy and Eggs',
            'Personal Care',
            'Kids Utilities'
        ]
    },
    store_id: { type: mongoose.Schema.Types.ObjectId, ref: 'store', required: true, default: null }
});

module.exports = mongoose.model('product', productSchema);