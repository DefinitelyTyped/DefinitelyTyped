
// From https://hapijs.com/api/16.1.1#serverlistener

import * as Hapi from '../../';
import SocketIO = require('socket.io');

const server = new Hapi.Server();
server.connection({ port: 80 });

// https://socket.io/docs/server-api/#server-attach-httpserver-options
const io = SocketIO.listen(server.listener);
io.sockets.on('connection', (socket) => {

    // TODO, FIXME by removing <any>, probably `socket` type given here is
    // a wrapper around socket.io.  Much less likely is either
    // a type error in the TypeScript definitions of socket.io or
    // an error in the Hapi docs.
    socket.emit(<any> { msg: 'welcome' });
});
