const router = require('express').Router();
const productController = require('../controller/product');
const Product = require('../models/products');
 const { tokenPayload } = require('../middeleware/token');
const multer = require('multer');


 // Destination for file storage & handled file name
  var storage = multer.diskStorage({
      destination: function(req, file, cb) {
         cb(null, './upload');
    },
     filename: function (req, file, cb) {
         cb(null , file.originalname.toString());
    }
});
var upload = multer({ storage : storage});

router.post('/', tokenPayload,  upload.single('broucher'), (req, res, next) => {
    
       var product = new Product();
    product.title = req.body.title;
    product.description = req.body.description;
    product.images = req.body.images;
    product.category = req.body.category;
   // product.broucher =  req.body.broucher;
   product.broucher =  req.file.filename;
   product.save(function (err) {
    if (err)
      res.json(err);
res.json({
       message: 'New product created!',
       data: product
   });
});
}
)

router.put('/:productId',upload.single('broucher'), function (req, res, next) {
    const product_id =req.params.productId;
    //console.log(req.params);
    next();
    Product.findById(product_id, function (err, product) {
        if (err)
            res.send(err);
            product.title = req.body.title;
            product.description = req.body.description;
             product.images = req.body.images;
            product.category = req.body.category;
            product.broucher = req.file.path;

        product.save(product_id,function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Info updated',
                data: product
            });
        });
    });

}
)
router.route('/')
        .get(productController.listProducts);

router.route('/:productId') 
    .get(productController.getProduct)
    .delete(productController.deleteProduct);



module.exports = router;