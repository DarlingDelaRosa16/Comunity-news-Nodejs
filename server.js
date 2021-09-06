require('dotenv').config();
const cors = require('cors')

const favicon = require("serve-favicon")
const express = require('express')
const initDB = require('./config/dataBase')
const app = express()
const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const newsRouter = require('./app/routes/news')
const categoryRouter = require('./app/routes/category')
const comunityRouter = require('./app/routes/comunity')
const userRouter = require('./app/routes/user');
const router = require('./app/routes/news');


app.use(favicon(__dirname + '/app/img/node_icon.png'));

app.use(express.json({limit: '20mb'}))
app.use(express.urlencoded({limit: '20mb', extended: true}))

app.use(newsRouter)
app.use(categoryRouter)
app.use(comunityRouter)
app.use(userRouter)
app.use(cors())

app.listen(process.env.PORT, () =>{
    console.log( "The aplication is working" )
})
initDB()