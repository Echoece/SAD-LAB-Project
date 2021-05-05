// environment configuration
const dotEnv = require('dotenv');
dotEnv.config({path:'./config.env'});

const mongoose = require('mongoose');
const app =require('./app');

//starting server
const port = process.env.PORT || 8100;
app.listen(port,()=>console.log("server started"));

// Database configuration
const DB = process.env.DATABSE.replace('<password>',process.env.DATABASE_PASSWORD);

// connecting database
mongoose.connect(DB,{useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
}).then(()=>{
    console.log('db connected');
});