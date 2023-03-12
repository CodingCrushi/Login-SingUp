//@des Get all the contact
//@route GET /api/contacts
//@access public
const getContacts = (req,res)=>{
    res.status(200).json({ message : 'Get all contacts'});
}
//@des GET contact
//@route GET /api/contacts/:id
//@access public
const createContact = (req,res)=>{
    res.status(200).json({ message : 'Create Contact'});
}
//@des GET contact
//@route GET /api/contacts
//@access public
const getContact = (req,res)=>{
    res.status(200).json({ message : `Get contacts ${req.params.id}`});
}
//@des Update a new contact
//@route PUT /api/contacts
//@access public
const updateContact = (req,res)=>{
    res.status(200).json({ message : `Update contacts ${req.params.id}`});
}
//@des Delete contact
//@route DELETE /api/contacts
//@access public
const deleteContact = (req,res)=>{
    res.status(200).json({ message : `Delete contacts ${req.params.id}`});
}


module.exports = {getContacts , createContact , getContact , updateContact , deleteContact}