const express = require('express');
const ImageSchema =require('../modules/Imagesave');
const router = express.Router();
const multer=require('multer')
var fetchUser= require('../middleware/fetchuser')
const Storage =multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null, file.originalname);
    }
 })
 const upload = multer({
    storage:Storage
 }).single('image')




router.post('/saveimage',async(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err);
        }else{
            const newImage =new ImageSchema({
                name: req.body.name,
            
                image:req.file.filename
            }) 
            newImage.save()
           
            .then(()=>res.send('suscessfully uploaded'))
            .catch((err)=>console.log(err))
        }
    })
 
})
module.exports=router;