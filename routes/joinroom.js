'use strict';

const express = require('express');
const router = express.Router();  
var http  = require('http');

var io = require('socket.io')(http);


router.post('/insert',(req, res) => {
   
});

io.on('connection',function(socket){

    socket.on('stream',function(image){
        socket.broadcast.emit(image);
    })
});

router.get('/',function(req,res){
    // res.send('Hello World');
    res.render('./search_page');
    
});



module.exports = router;