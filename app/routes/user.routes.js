const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    const ext = process.env.EXT+'/users';
    app.post(ext, UserController.createUser);
    app.post(ext+'/login', UserController.login);
    app.get(ext, UserController.getAllUsers);
    app.get(ext+'/:_id', UserController.getUser);
    app.put(ext+'/:_id', UserController.updateUser);
    app.delete(ext+'/:_id', UserController.deleteUser);
};