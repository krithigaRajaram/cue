const express=require('express')
const router=express.Router()
const Accessorie=require('../models/accessorie')
 router.get('/',(req,res)=>
 {
    res.render('accessories/index')
 })
 router.get('/tops',(req,res)=>
 {
    res.render('accessories/tops',{ accessorie : new Accessorie()})
 })
 router.get('/jeans',(req,res)=>{ 
    res.render('accessories/jeans')
 })
 router.post('/',(req,res)=>{
    res.send(req.body.name)
 })

 module.exports = router