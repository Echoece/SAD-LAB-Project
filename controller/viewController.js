const product = require('./../model/productModel');
const catchAsync = require('./../utils/catchAsync');

exports.getAllProducts = catchAsync(async (req,res)=>{
    const products =await product.find();
    console.log(products);
    res.status(200).render('products',{
        title: "All Products",
        products
    })
});

exports.getProductByName = catchAsync( async (req,res)=>{
    const productByName = await product.find({productName:req.params.name});
    //console.log(productByName);
    res.status(200).render('single-product',{
        title:productByName.productName,
        productByName
    })
});

exports.getSingleProduct = (req,res)=>{
    res.status(200).render('single-product',{
        title: "Single Products"
    })
}

exports.home = (req,res)=>{
    res.status(200).render('base',{
        title: 'Home'
    });
}

exports.adminHome=(req,res)=> {
    res.status(200).render('./admin/adminHome');
}

exports.addProductFormPage=(req,res)=>{
    res.status(200).render('./admin/addProductForm');
}


exports.addNewProduct = catchAsync (async (req,res)=>{
    const newProduct = await product.create(req.body);
    res.status(201).json({
        status : 'success',
        message: 'product added successfully',
        newProduct
    })
    console.log(req.body);
})