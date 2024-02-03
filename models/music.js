const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
    title: String,
    artist: String,
    genre: String,
    releaseDate: Date
});

module.exports = mongoose.model('Music', musicSchema);
