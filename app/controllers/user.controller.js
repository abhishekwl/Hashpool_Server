const { sendResponse } = require('../util');
const UserModel = require('../models/user.model');

exports.createUser = (request, response) => {
    const newUser = new UserModel({
        name: request.body.name,
        password: request.body.password,
        email: request.body.email
    });
    newUser.save((err, data) => sendResponse(err, { _id: data._id }, request, response));
};

exports.login = (request, response) => {
    const candidatePassword = request.body.password;
    UserModel.findOne({ email: request.body.email }, (errUser, user) => {
        user.isPasswordValid(candidatePassword, (err, isValid) => {
            if(isValid) {
                user.password = undefined;
                sendResponse(err || errUser, user, request, response);
            }
            else sendResponse(err || errUser || 'Invalid password', null, request, response);
        });
    });
};

exports.getAllUsers = (request, response) => UserModel.find({}, (err, data) => sendResponse(err, data, request, response));

exports.getUser = (request, response) => UserModel.findById(request.params._id, (err, data) => sendResponse(err, data, request, response));

exports.updateUser = (request, response) => UserModel.findByIdAndUpdate(request.params._id, { $set: request.body }, { new: true, runValidators: true }, (err, data) => sendResponse(err, data, request, response));

exports.deleteUser = (request, response) => UserModel.findByIdAndDelete(request.params._id, (err, data) => sendResponse(err, data, request, response));