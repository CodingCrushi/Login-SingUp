const asyncHandler = require('express-async-handler')
//@des Get all the contact
//@route GET /api/contacts
//@access public
const getContacts = asyncHandler(async(req,res)=>{
    res.status(200).json({ message : 'Get all contacts'});
});
//@des GET contact
//@route GET /api/contacts/:id
//@access public
const createContact = asyncHandler(async(req,res)=>{
    console.log("The requset Body is :" , req.body)
    const {name , email , phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All filds are mandatory !")
    }
    res.status(200).json({ message : 'Create Contact'});
});
//@des GET contact
//@route GET /api/contacts
//@access public
const getContact = asyncHandler(async(req,res)=>{
    res.status(200).json({ message : `Get contacts ${req.params.id}`});
});
//@des Update a new contact
//@route PUT /api/contacts
//@access public
const updateContact = asyncHandler(async(req,res)=>{
    res.status(200).json({ message : `Update contacts ${req.params.id}`});
});
//@des Delete contact
//@route DELETE /api/contacts
//@access public
const deleteContact = asyncHandler(async(req,res)=>{
    res.status(200).json({ message : `Delete contacts ${req.params.id}`});
});


module.exports = {getContacts , createContact , getContact , updateContact , deleteContact}