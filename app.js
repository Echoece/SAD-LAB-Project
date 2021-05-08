const express = require('express');
const app = express();
const productRouter = require('./routes/productRoutess');
const path = require('path');
const viewRouter= require('./routes/viewRoutes');


app.use(express.json());
app.use(express.urlencoded({extended:true,limit:'10kb'}));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'views'));



app.use('/',viewRouter);
app.use('/api/v1/products',productRouter);


module.exports = app;