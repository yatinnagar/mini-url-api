
const mongoose=require('mongoose');
const shortId=require('shortid');


const UrlSchema=new mongoose.Schema({
    urlCode:{
        type:String
    },
    full_url:{
        type:String
    },
    short_url:{
        type:String
    },
    date:{
        type:String,
        default:Date.now
    }
})

module.exports=mongoose.model('Url',UrlSchema)