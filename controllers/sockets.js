
const io = require("socket.io");
const server = new io.Server();

server.of('/user').on('connection', async (socket) => {
    let userId = socket.handshake.query.userId;
    console.log(userId)
    console.log(socket.handshake.query)
    socket.join(userId);
});

module.exports = server;