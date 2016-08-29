///<reference path="mitm.d.ts"/>

import Mitm, {BypassableSocket, SocketOptions} from 'mitm';
import {Socket} from 'net';
import {IncomingMessage, ServerResponse} from 'http';

const mitm = Mitm();
mitm.disable();

mitm.on('connect', (socket: BypassableSocket, opts: SocketOptions): void => {
	socket.bypass();
});

mitm.on('connection', (socket: Socket, opts: SocketOptions): void => {
});

mitm.on('request', (request: IncomingMessage, response: ServerResponse): void => {
});
