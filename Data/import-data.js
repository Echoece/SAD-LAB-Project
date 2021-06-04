const dotEnv = require('dotenv');
dotEnv.config({path: './../config.env'});

const fs = require('fs');
const mongoose = require('mongoose');
const products = require('./../model/productModel');
const users = require('./../model/userModel');
const history = require('./../model/HistoryModel');
const ranks = require('./../model/rankModel');

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
const user = JSON.parse(fs.readFileSync(`${__dirname}/user-data.json`,'utf-8'));
const pHistory = JSON.parse(fs.readFileSync(`${__dirname}/history-data.json`,'utf-8'));
const rank = JSON.parse(fs.readFileSync(`${__dirname}/rank-data.json`,'utf-8'));
//import data into database
const importData = async ()=>{
    try{
        await ranks.create(rank);
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