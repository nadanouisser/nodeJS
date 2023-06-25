const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    discountpercent: { type: Number},
    releasedate: { type: Date},
    likesnumber: { type: Number },
    dislikenumber: { type: Number },
    comment: { type: String },
    image: { type: String },
         }, { timestamps: true })

module.exports = mongoose.model('Announcement', schema);