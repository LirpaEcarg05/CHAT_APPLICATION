const io = require('socket.io')(2005)

io.on('connection', socket =>{
    console.log('new user')
    socket.emit('chat-message', 'Hello World')
})