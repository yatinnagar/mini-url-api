const express=require('express');
const router=express.Router();
const validUrl=require('valid-url');
const shortId=require('shortid');

const Url=require('../models/Url');

// route    POST /api/url/shorten
// description  create short url
router.post('/shorten',async(req,res)=>{
    const {full_url}=req.body;
    console.log(full_url);
    const baseUrl='http://localhost:5000';
    if(!validUrl.isUri(baseUrl))
    {
        return res.status(401).json('Invalid base url ');
    }

    //create url code

    const urlCode=shortId.generate();
    //check long url
    if(validUrl.isUri(full_url)){
         try{
             let url=await Url.findOne({full_url});
             if(url)
             {
                 res.json(url);
             }else{
                 const short_url=baseUrl+'/'+urlCode;
                 url =new Url({
                     full_url,
                     short_url,
                     urlCode,
                     date:new Date
                 })
                await url.save();
                res.json(url);
             }
         } catch(err){
             console.error(err);
             res.status(500).json('server error');

         }
    }else{
           res.status(401).json('Invalid Url');
    }
})
module.exports=router;