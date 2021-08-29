const mongoose = require('mongoose')
require('dotenv').config();

module.exports = ()=>{
    
    const connect = () => {
        mongoose.connect('mongodb://localhost:27017/my_comunity_app',
        {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err)=>{
            if (err) {
                console.log("Error in Data Base !!")
            }else{
                console.log("The DB is conected !!")
            }
        }
        )
    }

    connect();
}