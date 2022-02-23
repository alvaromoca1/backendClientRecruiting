const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
    name: {
        type: String
    },
    lastName: {
        type: String
    },
    birthDay: {
        type: String,
    }
});

module.exports = mongoose.model('clients', ClientSchema);
