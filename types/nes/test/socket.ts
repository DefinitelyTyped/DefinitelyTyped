// from https://github.com/hapijs/nes/blob/v6.4.3/lib/socket.js

import Nes = require('nes');

const socket: Nes.Socket = undefined;

const cb = () => { };
socket.disconnect(cb);
const s: string = socket.id;
const o: Object = socket.app;
const auth: Nes.SocketAuthObject = socket.auth;

const cb2 = (err?: any) => { };
socket.send('message', (err?: any) => { });
socket.publish('path', 'message', cb2);
socket.revoke('path', 'message', cb2);
