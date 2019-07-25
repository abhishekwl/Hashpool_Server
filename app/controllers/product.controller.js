const mongoose = require('mongoose');
//LOCAL
const { sendResponse } = require('../util');
const ProductModel = require('../models/product.model');

exports.createProduct = (request, response) => {
    const product = new ProductModel({
        name: request.body.name,
        price: request.body.price,
        image: request.body.image,
        category: request.body.category,
        store_id: mongoose.Types.ObjectId(request.body.store_id)
    });
    product.save((err, data) => sendResponse(err, data, request, response));
};

exports.getAllProducts = (request, response) => ProductModel.find({}, (err, data) => sendResponse(err, data, request, response));

exports.getProduct = (request, response) => ProductModel.findById(request.params._id, (err, data) => sendResponse(err, data, request, response));

exports.getProductsOfStore = (request, response) => ProductModel.find({ store_id: request.params._id }, (err, data) => sendResponse(err, data, request, response));

exports.updateProduct = (request, response) => ProductModel.findByIdAndUpdate(request.params._id, {$set: request.body}, {new: true, runValidators: true}, (err, data) => sendResponse(err, data, request, response));

exports.deleteProduct = (request, response) => ProductModel.findByIdAndDelete(request.params._id, (err, data) => sendResponse(err, data, request, response));
