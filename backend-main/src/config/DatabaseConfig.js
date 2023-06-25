require('dotenv').config()
const mongoose = require('mongoose');

exports.getConnections = () => mongoose.connect("mongodb://localhost:27017/pi",{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch((err) => console.log(err))

    