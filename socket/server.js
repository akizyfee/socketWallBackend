
const socketall = (socket) => {
    socket.on('chat message', (msg) => {
        socket.broadcast.emit('chat message', msg);
      });
};

module.exports = socketall;