const mongoose = require('mongoose');
//LOCAL
const { sendResponse } = require('../util');
const CategoryModel = require('../models/category.model');

exports.createCategory = (request, response) => {
    const category = new CategoryModel({
        store_id: mongoose.Types.ObjectId(request.body.store_id),
        name: request.body.name,
    });
    category.save((err, data) => sendResponse(err, data, request, response));
};

exports.getAllCategories = (request, response) => CategoryModel.find({}, (err, data) => sendResponse(err, data, request, response));

exports.getCategoriesOfStore = (request, response) => CategoryModel.find({ store_id: request.params._id }, (err, data) => sendResponse(err, data, request, response));

exports.getCategory = (request, response) => CategoryModel.findById(request.params._id, (err, data) => sendResponse(err, data, request, response));

exports.updateCategoryName = (request, response) => CategoryModel.findByIdAndUpdate(request.params._id, {$set: { name: request.body.name } }, { new: true, runValidators: true }, (err, data) => sendResponse(err, data, request, response));

exports.addProductToCategory = (request, response) => {
    const product = { name: request.body.name, price: request.body.price, image: request.body.image };
    CategoryModel.findByIdAndUpdate(
        request.params._id,
        { $push: { products: product } },
        { new: true, runValidators: true },
        (err, data) => sendResponse(err, data, request, response)
    );
};

exports.deleteProductFromCategory = (request, response) =>
    CategoryModel.findOneAndUpdate(
        { _id: request.params._id, 'products._id': request.query.product_id },
        { $pull: { products: { _id: request.query.product_id } } },
        { new: true, runValidators: true },
        (err, data) => sendResponse(err, data, request, response)
    );

exports.updateProductInCategory = (request, response) =>
    CategoryModel.findOneAndUpdate(
        { _id: request.params._id, 'products._id': request.query.product_id },
        { $set: { 'products.$': request.body } },
        { new: true, runValidators: true },
        (err, data) => sendResponse(err, data, request, response)
    );

exports.deleteCategory = (request, response) => CategoryModel.findByIdAndDelete(request.params._id, (err, data) => sendResponse(err, data, request, response));
