const UserModel = require('../models/user.model');

exports.createUser = (request, response) => {
    const user = new UserModel({
        _id: request.body._id,
        name: request.body.name,
        email: request.body.email
    });
    user.save((err, data) => global.sendResponse(err, data, request, response));
};

exports.getAllUsers = (request, response) => UserModel.find({}, (err, data) => global.sendResponse(err, data, request, response));

exports.getUser = (request, response) => UserModel.findById(request.params._id, (err, data) => global.sendResponse(err, data, request, response));

exports.updateUser = (request, response) => UserModel.findByIdAndUpdate(request.params._id, { $set: request.body }, { new: true }, (err, data) => global.sendResponse(err, data, request, response));

exports.deleteUser = (request, response) => UserModel.findByIdAndDelete(request.params._id, (err, data) => global.sendResponse(err, data, request, response));
