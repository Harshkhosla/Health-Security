const mongoose = require('mongoose');
const { Schema }= mongoose
 
const ImageSchema =new Schema({
   
    schema:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    name:{
        type: String
        
    },
    image:{
        type: String,
        required:true
    }

})
module.exports=mongoose.model('image',ImageSchema)