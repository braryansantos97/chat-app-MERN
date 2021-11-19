const { Schema, model } = require('mongoose')

const userModel = new Schema({
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, required: true, unique: true },
    password: { type: String, required: true, required: true },
    pic: { type: String, required: true, required: true, default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg" }
    
}, {
    timestamps: true
});

module.exports = model('User', userModel)