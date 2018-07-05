'use strict';

const express = require('express');
const router = express.Router(); 
var ip = require("ip");


//encytption Library Cryptr
// var Cryptr = require('cryptr'),cryptr = new Cryptr('#4%$7$&*ashdaisyd68a76y8*&^*^*&^*98978934032');
 


router.post('/insert',(req, res) => {

   
});


router.get('/',function(req,res){
    // res.send('Hello World');
    res.render('./home');
    
});



module.exports = router;