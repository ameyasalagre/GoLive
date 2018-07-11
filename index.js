'use strict';

const app = require('./app');


var http = require('http').Server(app);

var PORT = process.env.PORT || 80;



var io = require('socket.io').listen(http);




http.listen(PORT);

console.log('server running on '+PORT+'....');