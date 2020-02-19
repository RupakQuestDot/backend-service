const router = require('express').Router();
const productController = require('../controller/product');
const { tokenPayload} = require('../middeleware/token');


router.route('/')
    .get(productController.listProducts)
    .post(tokenPayload, productController.addProduct);

router.route('/:productId')
    .get(productController.getProduct)
    .put(productController.updateProduct)
    .delete(productController.deleteProduct);

module.exports = router;