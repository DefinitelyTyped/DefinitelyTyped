// https://github.com/hapijs/hapi/blob/master/API.md#-serverlistener
import {Server} from "hapi";
import * as SocketIO from "socket.io"

const server = new Server({
    port: 8000,
});

const io = SocketIO.listen(server.listener);
io.sockets.on('connection', (socket) => {
    socket.emit('welcome');
});

server.start();
