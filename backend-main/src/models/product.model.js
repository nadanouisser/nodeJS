const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    availability: { type: Boolean, required: true},
    batterylife: { type: Number, required: true },
    image: { type: String, required: true },
    price: { type: Float32Array, required: true },
    length: { type: Float32Array, required: true },
    width: { type: Float32Array, required: true },
    weigth: { type: Float32Array, required: true },
    rating: { type: Number, required: true },
    isOn : { type: Boolean, required: true },
    birthday: { type: String, required: true },
    batterylevel: { type: Number, required: true },
    location: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model('Product', schema);