const Product = require('../models/products');
 const multer = require('multer');

 // Destination for file storage & handled file name
  var storage = multer.diskStorage({
      destination: function(req, file, cb) {
         cb(null, './upload');
    },
     filename: function (req, file, cb) {
         cb(null , file.originalname);
    }
});
var upload = multer({ storage : storage});


const addProduct = function (req, res){
    
    // Function to upload a file 
     upload.single('broucher'), (req, res) => {
       try {
          res.send(req.file);
        } catch(err) {
          res.send(400);
       }
      }
      console.log(res.getHeaders()); // headers check
      res.removeHeader('x-powered-by'); // to remove header
      //res.end(body);
    var product = new Product();
    product.title = req.body.title;
    product.description = req.body.description;
    product.images = req.body.images;
    product.category = req.body.category;
   // product.broucher =  req.body.broucher;
    product.broucher =  req.body.file
    

    product.save(function (err) {
         if (err)
           res.json(err);
res.json({
            message: 'New product created!',
            data: product
        });
    });
}

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
    Product.findById(req.params.id, function (err, product) {
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
            product.broucher = req.body.broucher;

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
    addProduct, 
    listProducts, 
    getProduct,
    updateProduct,
    deleteProduct
}