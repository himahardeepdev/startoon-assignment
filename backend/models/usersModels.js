const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: {type : String , unique : true},
    count: Number,
    gender: String,
    lastLoginDate: String
});

const usersModel = mongoose.model('users', usersSchema);

module.exports = usersModel;
