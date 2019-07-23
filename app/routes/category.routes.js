const CategoryController = require('../controllers/category.controller');

module.exports = (app) => {
    const ext = process.env.EXT+'/categories';
    app.post(ext, CategoryController.createCategory);
    app.get(ext, CategoryController.getAllCategories);
    app.get(ext+'/store/:_id', CategoryController.getCategoriesOfStore);
    app.get(ext+'/:_id', CategoryController.getCategory);
    app.put(ext+'/name/:_id', CategoryController.updateCategoryName);
    app.put(ext+'/:_id/products/add', CategoryController.addProductToCategory);
    app.put(ext+'/:_id/products/update', CategoryController.updateProductInCategory);
    app.delete(ext+'/:_id/products/delete', CategoryController.deleteProductFromCategory);
    app.delete(ext+'/:_id', CategoryController.deleteCategory);
};