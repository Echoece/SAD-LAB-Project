const express = require('express');
const router = express.Router();
const viewcontroller = require('./../controller/viewController');
const userController = require('./../controller/userController');
const rankController= require('./../controller/rankController');


router.get('/',viewcontroller.home);
// shop routes
router.get('/products/',viewcontroller.getAllProducts);
router.get('/single-product',viewcontroller.getSingleProduct);
router.get('/product',viewcontroller.getProductByName);

// user panel routes
router.get('/userHistory',userController.getHistory);
router.get('/userProfile',userController.getUser);
router.get('/changePassword',userController.changePassword);

// admin panel routes
router.get('/admin',viewcontroller.adminHome);
router.get('/admin/form',viewcontroller.addProductFormPage);
router.post('/admin/addNewProduct',viewcontroller.addNewProduct);

// rank page route
router.get('/ranking',rankController.getAllrank);

router.get('/test')
module.exports = router;