const express= require('express')
const app=express()
app.set('view engine','ejs')
app.set('views',__dirname+ '/views')
const indexRouter = require('./routes/index')
app.set(express.static('public'))
app.use('/',indexRouter)
app.listen(3000,()=>{
    console.log("server listening!");
})
