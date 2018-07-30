const express = require('express');
const app = express();
var path = require("path");



//body parser
var bodyParser = require('body-parser');
// app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended: true}));   // to support URL-encoded bodies

//intializing route files
app.set('views', path.join(__dirname, './views/pages'));
app.use(express.static(__dirname + '/views'));



app.set('view engine', 'ejs');
const home = require('./routes/home');
const search_result = require('./routes/joinroom');
app.use('/result',search_result);
app.use('/home', home);


const login = require('./routes/login');
app.use('/login',login);






module.exports=app;