const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: { type: String, required: true },
    cardnumber: { type: Number, required: true },
    cardholdername: { type: String, required: true },
    date: { type: Date, required: true},
}, {timestamps: true })

module.exports = mongoose.model('Payment', schema);