const express = require('express') ; 
const { addUser, getUsers, deleteUser, updateUser } = require('../controllers/userControllers');
const router = express.Router() ;
const User =require('../models/userModel')

router.post('/',addUser)

router.get('/',getUsers)

router.delete('/:id' , deleteUser)

router.put('/:id', updateUser)

module.exports = router 