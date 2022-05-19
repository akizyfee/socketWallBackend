
const socketall = (socket) => {
    socket.on('chat message', (msg) => {
        socket.broadcast.emit('chat message', msg);
      });
    socket.on('imgFileBase64', (img) => {
        socket.broadcast.emit('imgFileBase64', img);
    });
};

module.exports = socketall;