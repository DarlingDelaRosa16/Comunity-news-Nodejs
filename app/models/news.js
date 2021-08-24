const mongoose = require('mongoose')
const mongoosePaginate =  require('mongoose-paginate-v2')

const NewsSchema = new mongoose.Schema(
    {
        title:{
            type: String
        },
        caption:{
            type: String
        },
        img:{
            type: String
        },
        categoryId:{
            type: String
        },
        comunityId:{
            type: String
        },
        journalistName:{
            type: String
        },
        description:{
            type: String
        }        
    },
    {
        versionKey: false,
        timestamps: true
    }
)

NewsSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('news', NewsSchema)