const mongoose = require('mongoose')

const comunitySchema = new mongoose.Schema(
    {
        comunityName: {
            type: String 
        },
        categoryId:{
            type: String
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('comunity', comunitySchema)