const express = require('express');
const app = express();
const socket = require('./controllers/sockets');
const users = require('./routes/users');

app.use('/users', users);
const port = process.env.PORT || 8080;
const http = require('http').createServer(app);

http.listen(port, () => {
    console.log('listening on *:' + port);
});

socket.listen(http, {
    cors: {
        origin: '*',
    },
    path: "/socket"
});