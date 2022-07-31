const express = require('express');
const router = express.Router();
var fetchUser= require('../middleware/fetchuser')
const { body, validationResult } = require('express-validator');
const Notes =require('../modules/Notes');
// const { pdf } = require('react-native-ico-file-folder/src/data');
const pdfTemplate = require('./documents');
const pdf = require('html-pdf');

router.get('/fetchallnotes',fetchUser,async(req,res)=>{
    try{
        
        const notes =await Notes.find({user:req.user.id})
        res.json(notes)
    }catch(error){
        console.error(error.message);
        res.status(500).send("backend ki error")
    }
})
router.post('/addnote',[fetchUser,[ 
    body('title','Enter a valid title').isLength({ min: 3 }),
    body('discription','description must be 5 characters').isLength({ min: 5}),
     
]],async(req,res)=>{
    try{

        const {title,discription,tag}=req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        const note = new Notes({
            title,discription,tag,user:req.user.id,schema:req.user.id
        })
        const savedNote = await note.save()
        res.json(savedNote)
    }catch(error){
        console.error(error.message);
        res.status(500).send("backend ki error in notes")
    }
})
router.post('/create-pdf',async(req,res)=>{
    
        pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
            if(err) {
                res.send(Promise.reject());
            }
    
            res.send(Promise.resolve());
        });
    });
router.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

module.exports=router; 