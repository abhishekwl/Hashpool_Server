const ProductController = require('../controllers/product.controller');

module.exports = app => {
    const ext = process.env.EXT+'/products';
    app.post(ext, ProductController.createProduct);
    app.get(ext, ProductController.getAllProducts);
    app.get(ext+'/:_id', ProductController.getProduct);
    app.get(ext+'/store/:_id', ProductController.getProductsOfStore);
    app.put(ext+'/:_id', ProductController.updateProduct);
    app.delete(ext+'/:_id', ProductController.deleteProduct);
};
