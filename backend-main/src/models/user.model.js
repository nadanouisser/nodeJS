const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: { type: String, required: true },
    firstname: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    sex: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    birthday: { type: String, required: true },
    image: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model('User', schema);