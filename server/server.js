const path = require('path');
const http = require('http');
var express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
var port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));
io.on('connection', (socket) => { //event handlers
  console.log('New User connected')

  socket.emit('newMessage',generateMessage("Admin", "Welcome to the app"));

  socket.broadcast.emit('newMessage', generateMessage("Admin", 'New user joined'))

  socket.on('disconnect', () => {
    console.log('Disconnected from user')
  })

  socket.on('createMessage', (message) => {
    console.log('newMessage', message);

    io.emit('newMessage', generateMessage(message.from, message.text));
  });
});



server.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
