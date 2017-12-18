// from https://github.com/hapijs/nes/blob/v6.4.3/lib/socket.js

import Nes = require('nes');

const socket: Nes.Socket = undefined;

socket.disconnect();
const s: string = socket.id;
const o: Object = socket.app;
const auth: Nes.SocketAuthObject = socket.auth;

socket.send('message');
socket.publish('path', 'message');
socket.revoke('path', 'message');
