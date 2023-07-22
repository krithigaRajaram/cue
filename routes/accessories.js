const express=require('express')
const router=express.Router()
 
 router.get('/',(req,res)=>
 {
    res.render('accessories/index')
 })
 router.get('/tops',(req,res)=>
 {
    res.render('accessories/tops')
 })
 router.get('/jeans',(req,res)=>{
    res.render('accessories/jeans')
 })
 module.exports = router