'use strict'
let http = require('http').createServer(server),
    io = require('socket.io')(http),
    fs = require('fs')

function server(req, res){
    
}

http.listen(3000)
console.log('Servidor corriendo desde el localhost:3000')
