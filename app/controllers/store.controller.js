const StoreModel = require('../models/store.model');

exports.createStore = (request, response) => {
    const store = new StoreModel({
        _id: request.body._id,
        name: request.body.name,
        email: request.body.email
    });
    store.save((err, data) => global.sendResponse(err, data, request, response));
};

exports.getAllStores = (request, response) => StoreModel.find({}, (err, data) => global.sendResponse(err, data, request, response));

exports.getStore = (request, response) => StoreModel.findById(request.params._id, (err, data) => global.sendResponse(err, data, request, response));

exports.updateStore = (request, response) => StoreModel.findByIdAndUpdate(request.params._id, { $set: request.body }, { new: true, runValidators: true }, (err, data) => global.sendResponse(err, data, request, response));

exports.deleteStore = (request, response) => StoreModel.findByIdAndDelete(request.params._id, (err, data) => global.sendResponse(err, data, request, response));
