const mongoose = require('mongoose');

// product model : name, price , discount, description , image
const productSchema = new mongoose.Schema({
    productName:{
        type: String,
        required: [true,'Please Enter productName'],
        trim: true,
        maxlength: [30, 'A product name can have at most 30 characters'],
        minlength: [3, 'A product name can have at least 3 characters']
    },
    price:{
        type: Number,
        required: [true,'Please Enter price']
    },
    priceDiscount:{
        type: Number
    },
    description:{
        type: String,
        trim: true
    },
    imageCover:{
        type: String,
        required: [true,'A tour must have a image']
    },

});

const product = mongoose.model('Product',productSchema);
module.exports = product;