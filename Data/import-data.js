const dotEnv = require('dotenv');
dotEnv.config({path: './../config.env'});

const fs = require('fs');
const mongoose = require('mongoose');
const products = require('./../model/productModel');

const DB = process.env.DATABSE.replace('<password>',process.env.DATABASE_PASSWORD);


mongoose.connect(DB,{useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
}).then(()=>{
    console.log('db connected');
});

// read json file
const product =JSON.parse(fs.readFileSync(`${__dirname}/products-data.json`,'utf-8')) ;
//import data into database
const importData = async ()=>{
    try{
        await products.create(product);
        console.log('data loaded');
        process.exit();
    }catch (e) {
        console.log(e);
    }
}
//delete all database data
const deleteData = async ()=>{
    try{
        await products.deleteMany();
        console.log('data deleted');
        process.exit();
    }catch (e) {
        console.log(e);
    }
}

if(process.argv[2] === '--import'){
    importData().then();
}else if(process.argv[2] === '--delete'){
    deleteData().then();
}
console.log(process.argv);