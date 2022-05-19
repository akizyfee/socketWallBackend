
const socketall = (socket) => {
    socket.on('chat message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('chat message', msg);
      });
      socket.on('imgFileBase64', (img) => {
        // console.log(img);終端機會很壞的瘋狂洗版 先註解掉
        socket.broadcast.emit('imgFileBase64', img);
    });
};

module.exports = socketall;