// var mongoose = require('mongoose');

// var userSchema = new mongoose.Schema({
//     email : {
//         type: String,
//         unique: [true, 'Email is already exists'],
//     },
//     password : {
//         type: String,
//         min: 5,
//     }
// },
// { timestamps: true });

// module.exports =mongoose.model('User',userSchema,'users');


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
