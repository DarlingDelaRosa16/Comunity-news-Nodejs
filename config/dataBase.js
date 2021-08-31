const mongoose = require('mongoose')

module.exports = ()=>{

    const connect = () => {
        
        mongoose.connect(
        process.env.DB_URI,
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