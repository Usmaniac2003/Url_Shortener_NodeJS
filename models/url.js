const mongoose=require('mongoose');

//Schema for Short URL 
const urlSchema=new mongoose.Schema(
{

    shortID:{
        type:String,
        required:true,
        unique:true,
    },
    redirectURL:{
        type:String,
        required:true,
    },
    visitHistory:[{timestamps:{type:Number}}]
}
,{timestamps:true});


//Model of Short URL
const URL=new mongoose.model('url',urlSchema);

module.exports=URL;