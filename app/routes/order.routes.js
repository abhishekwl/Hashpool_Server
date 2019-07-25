const OrderController = require('../controllers/order.controller');

module.exports = app => {
    const ext = process.env.EXT+'/orders';
    app.post(ext, OrderController.createOrder);
    app.get(ext, OrderController.getAllOrders);
    app.get(ext+'/:_id', OrderController.getOrder);
    app.get(ext+'/user/:_id', OrderController.getOrdersOfUser);
    app.get(ext+'/store/:_id', OrderController.getOrdersOfStore);
    app.put(ext+'/:_id', OrderController.updateOrder);
    app.delete(ext+'/:_id', OrderController.deleteOrder);
};