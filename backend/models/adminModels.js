const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name : String,
    email : {type : String , unique : true},
    password : String , 
    gender : String,
    lastLoginDate : String 
});

const AdminModel = mongoose.model('admin', adminSchema);

module.exports = AdminModel;