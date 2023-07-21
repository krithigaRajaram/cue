const express= require('express')
const app=express()
app.set('view engine','ejs')
app.set('views',__dirname+ '/views')
const indexRouter = require('./routes/index')
app.set(express.static('public'))
app.use('/',indexRouter)
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/cue' ,{
    useNewUrlParser:true
})
const db=mongoose.connection
db.on('error', error =>{
    console.log("conection error!")
})
db.once('open',()=>{
    console.log("connection established")
})

app.listen(3003,()=>{
    console.log("server listening!");
})
