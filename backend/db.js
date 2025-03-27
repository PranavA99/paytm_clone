const mongoose = require('mongoose');

mongoose.connect('');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        trim : true,
        minLength : 6,
        maxLength : 200,
        unique : true,
        lowercase : true
    },
    password : {
        type : String,
        required : true,
        minLength : 6,
        maxLength : 40
    },
    firstName : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 40
    },
    lastName : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 40
    }
});

const UserModel = new mongoose.model("User", userSchema)
module.exports = {
    UserModel
};