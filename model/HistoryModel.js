const mongoose = require('mongoose');

const historySchema =new mongoose.Schema({
    productName: String,
    category: String,
    time: Date,
    price: Number
})


const history= mongoose.model('History',historySchema);
module.exports = history;