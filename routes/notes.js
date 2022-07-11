const express = require('express');
const { NotBeforeError } = require('jsonwebtoken');
const router = express.Router();

//get all notes
router.get('/',(req,res) =>{
  res.send('hi');

});

//get one specific notes
router.get('/:id',(req,res) =>{
  
  
});

//create a note
router.post('/',(req,res) =>{
  
  
});

//update a note
router.patch('/:id',(req,res) =>{
  
  
});

//delete a note
router.delete('/:id',(req,res) =>{
  
  
});

module.exports = router