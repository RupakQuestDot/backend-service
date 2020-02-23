const Product = require('../models/products');


const listProducts = function (req, res){
    Product.find(function (err, product) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json(product);
    });
};

const getProduct = function (req,res){
    Product.findById(req.params.productId, function (err, product) {
        if (err)
            res.send(err);
        res.json(product);
    }); 
};

const updateProduct = function (req, res){
    const product_id =req.params.productId;
    //console.log(req.params);
    Product.findById(product_id, function (err, product) {
        if (err)
            res.send(err);
            product.title = req.body.title;
            product.description = req.body.description;
             product.images = req.body.images;
            product.category = req.body.category;
            product.broucher = req.filename;

        product.save(product_id,function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Info updated',
                data: product
            });
        });
    });
};

const deleteProduct = function (req, res) {

    Product.remove({
        _id: req.params.id
    }, function (err, product) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'Product has been deleted'
        });
    });
}
module.exports = {
    listProducts, 
    getProduct,
    deleteProduct
}
