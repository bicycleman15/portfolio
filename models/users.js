const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    date:{type:Date,default:Date.now}
})

module.exports = User = mongoose.model('user',userSchema)