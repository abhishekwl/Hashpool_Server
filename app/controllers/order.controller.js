const { sendResponse } = require('../util');
const OrderModel = require('../models/order.model');

exports.createOrder = (request, response) => {
    const order = new OrderModel({
        user_id: request.body.user_id,
        store_id: request.body.store_id,
        products: request.body.products,
        type: request.body.type
    });
    order.save((err, data) => sendResponse(err, data, request, response));
};

exports.getAllOrders = (request, response) => OrderModel.find({}, (err, data) => sendResponse(err, data, request, response));

exports.getOrdersOfStore = (request, response) => OrderModel.find({ store_id: request.params._id }, (err, data) => sendResponse(err, data, request, response));

exports.getOrdersOfUser = (request, response) => OrderModel.find({ user_id: request.params._id }, (err, data) => sendResponse(err, data, request, response));

exports.getOrder = (request, response) => OrderModel.findById(request.params._id, (err, data) => sendResponse(err, data, request, response));
