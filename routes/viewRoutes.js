const express = require('express');
const router = express.Router();
const viewcontroller = require('./../controller/viewController');


router.get('/',viewcontroller.home);
router.get('/products/',viewcontroller.getAllProducts);
router.get('/single-product',viewcontroller.getSingleProduct);
router.get('/products/:name',viewcontroller.getProductByName);

module.exports = router;