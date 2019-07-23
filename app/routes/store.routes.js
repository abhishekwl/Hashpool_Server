const StoreController = require('../controllers/store.controller');

module.exports = (app) => {
    const ext = process.env.EXT+'/stores';
    app.post(ext, StoreController.createStore);
    app.get(ext, StoreController.getAllStores);
    app.get(ext+'/:_id', StoreController.getStore);
    app.put(ext+'/:_id', StoreController.updateStore);
    app.delete(ext+'/:_id', StoreController.deleteStore);
};