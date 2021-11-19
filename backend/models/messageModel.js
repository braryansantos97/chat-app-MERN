const { Schema, model } = require('mongoose')

const messageModel = new Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: {type: String, required: true, trim: true},
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", },
}, {
    timestamps: true
});

module.exports = model('Message', messageModel)
