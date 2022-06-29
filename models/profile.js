const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    reviews: [
        {
            types: Schema.Types.ObjectId,
            // got the ref from review.js
            ref: 'Review'
        }
    ]
})