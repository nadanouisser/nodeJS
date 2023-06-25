const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: { type: String, required: true },
    //orderedproduct { type: List, required: true },
    productnumber: { type: Number },
    cost: { type: Number},
         }, { timestamps: true })

module.exports = mongoose.model('Order', schema);