const express = require('express');
const req = require('express/lib/request');
const Form = require('../models/form');
const router = express.Router();



// GET BACL ALL THE DATAS

router.get('/',async(req,res)=>
{
    try{
        const forms = await Form.find();
        res.json(forms);
    }
    catch(err){
        res.json({message:err});
    }

});


//post dat\

router.post('/',async(req,res)=>
{
    const form= new Form({
            email:req.body.email,
            textarea: req.body.textarea
    });

    try{
        const savedForm = await form.save();
        res.json(savedForm);
    }
    catch(err){
        res.json({message:err});
    }
});

// specific post

router.get('/:formId',async(req,res)=>
{
    try{
        const form= await Form.findById(req.params. formId);
        res.json(form);
    }
    catch(err){
        res.json({message:err});
    }
});

// //delete post

router.delete('/:formId',async(req,res)=>
{
    try{
        const removedForm=await Form.remove({_id:req.params.formId});
        res.json(removedForm);
    }
    catch(err){
        res.json({message:err});
    }
});

// //update the post

router.patch('/:formId',async(req,res)=>
{
    try{
        const updatedForm = await Form.updateOne(
                        {_id:req.params.formId},
                        {$set:{email: req.body.email}}
                    );
                    res.json(updatedForm);
                }

                catch(err){
                    res.json({message: err});
                }
            
        
    
 });

module.exports= router;
