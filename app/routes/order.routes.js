const OrderController = require('../controllers/order.controller');

module.exports = (app) => {
    const ext = process.env.EXT+'/orders';
    app.post(ext, OrderController.createOrder);
    app.get(ext, OrderController.getAllOrders);
    app.get(ext+'/stores/:_id', OrderController.getOrdersOfStore);
    app.get(ext+'/users/:_id', OrderController.getOrdersOfUser);
    app.get(ext+'/:_id', OrderController.getOrder);
};