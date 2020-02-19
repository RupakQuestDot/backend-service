const router = require('express').Router();
const product = require('./productRoute');


//Test Route
router.get('/', function (req, res) {
    res.json({
        message: 'Welcome to CRUD APP API..!'
    });
});

router.use('/products', product);


module.exports = router;