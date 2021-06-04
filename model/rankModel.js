const mongoose = require('mongoose');

// table : name, Race, Kills

const rankSchema = new mongoose.Schema({
    name: String,
    race: String,
    kills: Number,
    serial: Number
})

const rank = mongoose.model('Ranking',rankSchema);
module.exports = rank;