const mongoose = require('mongoose');
//LOCAL
const { sendResponse } = require('../util');
const OrderModel = require('../models/order.model');

exports.createOrder = (request, response) => {
    const order = new OrderModel({
        user_id: mongoose.Types.ObjectId(request.body.user_id),
        store_id: mongoose.Types.ObjectId(request.body.store_id),
        transaction_id: request.body.transaction_id || null,
        products: request.body.products,
        timestamp: request.body.timestamp
    });
    order.save((err, data) => sendResponse(err, data, request, response));
};

exports.getAllOrders = (request, response) => OrderModel.find({}, (err, data) => sendResponse(err, data, request, response));

exports.getOrdersOfUser = (request, response) => OrderModel.find({ user_id: request.params._id }, (err, data) => sendResponse(err, data, request, response));

exports.getOrdersOfStore = (request, response) => OrderModel.find({ store_id: request.params._id }, (err, data) => sendResponse(err, data, request, response));

exports.getOrder = (request, response) => OrderModel.findById(request.params._id, (err, data) => sendResponse(err, data, request, response));

exports.updateOrder = (request, response) => OrderModel.findByIdAndUpdate(request.params._id, {$set: request.body}, {new: true, runValidators: true}, (err, data) => sendResponse(err, data, request, response));

exports.deleteOrder = (request, response) => OrderModel.findByIdAndDelete(request.params._id, (err, data) => sendResponse(err, data, request, response));
