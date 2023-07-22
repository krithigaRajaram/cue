const express= require('express')
const ejs=require('ejs')
const app=express()
const expressLayouts=require('express-ejs-layouts')
app.set('view engine','ejs')
app.set('views',__dirname+ '/views')
app.set('layout','layouts/layout')
const indexRouter = require('./routes/index')
const accessoriesRouter = require('./routes/accessories')
app.set(express.static('public'))
app.use(expressLayouts)
app.use('/',indexRouter)
app.use('/accessories',accessoriesRouter)

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

app.listen(3013,()=>{
    console.log("server listening!");
})
