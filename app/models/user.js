const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String 
        },
        lastName: {
            type: String 
        },
        userName: {
            type: String,
            unique: true 
        },
        role: {
            type: String
        },
        password: {
            type: String 
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('user', userSchema)