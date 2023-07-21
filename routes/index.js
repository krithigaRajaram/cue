const express=require('express')
const router=express.Router()
 router.get('/',(req,res)=>
 {
    res.send("hello everyone")
 })
 module.exports = router