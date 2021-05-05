const catchAsync = require('./../utils/catchAsync');
const product = require('./../model/productModel');

exports.getAllProducts = catchAsync( async (req,res)=>{
    const products= await product.find();
    res.status(200).json({
        status: 'success',
        results: products.length,
        data:{
            products
        }
    })
});

