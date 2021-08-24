const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema(
    {
        categoryName: {
            type: String 
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('category', categorySchema)