const mongoose = require('mongoose');
const model = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    age: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }
})

module.exports = mongoose.model('model',model);