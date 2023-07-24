const mongoose=require('mongoose')
const accessorieSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model('Accessorie',accessorieSchema) 