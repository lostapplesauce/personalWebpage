const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    types: Schema.Types.ObjectId,
    body: String,
    rating: Number
});

module.exports = mongoose.model('Review', reviewSchema);