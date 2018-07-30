'use strict';

var express = require('express');
var router = express.Router();


var cryptr = require('cryptr');

var Cryptr = require('cryptr'),cryptr = new Cryptr('#4%$7$&*ashdaisyd68a76y8*&^*^*&^*98978934032');

var jwt = require('jsonwebtoken');



router.get('/',function(req,res){
    // res.send('Hello World');
    res.render('./login');
    
});

// post method on login page to check user authentication ang generate 
// appropriate JW Token
router.post('/checklogin',(req,res)=>{

var username = req.body.username;
var password = req.body.password;

console.log(username);
console.log(password);


var encryptedString = cryptr.encrypt(password),
    decryptedString = cryptr.decrypt(encryptedString);
   
   
var token = jwt.sign({ data: username }, 'asdfakdfjhaiuhdfiuahi*&^&^*(&^*kjhajfhn',
    { expiresIn: 60 } );

    res.send(token);
   

    
});

module.exports = router;
