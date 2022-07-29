const express = require('express');
const router = express.Router();
var fetchUser= require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
const UniqueId =require('../modules/Uniqueid');
const Notes =require('../modules/Notes');
const UserSignin =require('../modules/UserSignin');


router.post('/healthId',async(req,res)=>{
        try{
            let user =await Notes.find({schema:req.body.schema});
        // const notes =await Notes.find({schema:req.user.id})
            res.json(user)
            console.log(user)
        }catch(error){
            console.error(error.message);
            res.status(500).send("backend ki error")
        }
    })
      

module.exports=router; 