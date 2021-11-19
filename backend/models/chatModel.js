const { Schema, model } = require('mongoose')

const chatModel = new Schema({
    chatName: {type: String, trim: true, required: true},
    isGroupChat: {type: Boolean, required: true, default: false},
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User", },],
    latestMessage: { type: mongoose.Schema.Types.ObjectId, ref: "Message", },
    groupAdmin: { type: mongoose.Schema.Types.ObjectId, ref: "User", },
}, {
    timestamps: true
});

module.exports = model('Chat', chatModel)
