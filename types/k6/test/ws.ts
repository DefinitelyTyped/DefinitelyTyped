import { CookieJar } from 'k6/http';
import { Response, Socket, WebSocketError, connect } from 'k6/ws';

const address = 'http://example.com';
const executor = (socket: Socket) => {};
const badHandler = (bad: never) => {};
const handler = () => {};

let response: Response;

// connect
// @ts-expect-error
connect();
// @ts-expect-error
connect(5);
// @ts-expect-error
connect(address);
response = connect(address, executor);
// @ts-expect-error
connect(address, 5, executor);
response = connect(address, null, executor);
response = connect(address, {}, executor);
response = connect(address, {
    headers: { 'User-Agent': 'ITS' },
    tags: { user: 'zbt' }
}, executor);
response = connect(address, {
    compression: 'deflate'
}, executor);
response = connect(address, {
    jar: new CookieJar()
}, executor);
// @ts-expect-error
connect(address, executor, 5);
// @ts-expect-error
connect(address, {}, executor, 5);

// Socket.close
connect(address, (socket: Socket) => {
    socket.close(); // $ExpectType void
    // @ts-expect-error
    socket.close('not-a-close-code');
    socket.close(7); // $ExpectType void
    // @ts-expect-error
    socket.close(7, 5);
});

// Socket.on
connect(address, (socket: Socket) => {
    // @ts-expect-error
    socket.on();
    // @ts-expect-error
    socket.on(5);
    // @ts-expect-error
    socket.on('not-an-event');
    // @ts-expect-error
    socket.on('message');
    // @ts-expect-error
    socket.on('message', 5);
    // @ts-expect-error
    socket.on('binaryMessage');
    // @ts-expect-error
    socket.on('binaryMessage', 5);
    // @ts-expect-error
    socket.on('close', badHandler);
    socket.on('close', (code: number) => {});
    // @ts-expect-error
    socket.on('error', badHandler);
    socket.on('error', (error: WebSocketError) => {});
    // @ts-expect-error
    socket.on('message', badHandler);
    socket.on('message', (message: string) => {});
    // @ts-expect-error
    socket.on('binaryMessage', badHandler);
    socket.on('binaryMessage', (message: ArrayBuffer) => {});
    // @ts-expect-error
    socket.on('open', badHandler);
    socket.on('open', () => {});
    // @ts-expect-error
    socket.on('ping', badHandler);
    socket.on('ping', () => {});
    // @ts-expect-error
    socket.on('pong', badHandler);
    socket.on('pong', () => {});
    // @ts-expect-error
    socket.on('open', () => {}, 5);
});

// Socket.ping
connect(address, (socket: Socket) => {
    socket.ping(); // $ExpectType void
    // @ts-expect-error
    socket.ping(5);
});

// Socket.send
connect(address, (socket: Socket) => {
    // @ts-expect-error
    socket.send();
    // @ts-expect-error
    socket.send(5);
    socket.send('super secret information'); // $ExpectType void
    // @ts-expect-error
    socket.send('super secret information', 5);
});

// Socket.sendBinary
connect(address, (socket: Socket) => {
    // @ts-expect-error
    socket.sendBinary();
    // @ts-expect-error
    socket.sendBinary(5);
    socket.sendBinary(new Uint8Array([10, 12]).buffer); // $ExpectType void
    // @ts-expect-error
    socket.sendBinary(new Uint8Array([10, 12]).buffer, 5);
});

// Socket.setInterval
connect(address, (socket: Socket) => {
    // @ts-expect-error
    socket.setInterval();
    // @ts-expect-error
    socket.setInterval(5);
    // @ts-expect-error
    socket.setInterval(handler);
    // @ts-expect-error
    socket.setInterval(handler, 'not-a-duration');
    socket.setInterval(handler, 7); // $ExpectType void
    // @ts-expect-error
    socket.setInterval(handler, 7, 5);
});

// Socket.setTimeout
connect(address, (socket: Socket) => {
    // @ts-expect-error
    socket.setTimeout();
    // @ts-expect-error
    socket.setTimeout(5);
    // @ts-expect-error
    socket.setTimeout(handler);
    // @ts-expect-error
    socket.setTimeout(handler, 'not-a-duration');
    socket.setTimeout(handler, 7); // $ExpectType void
    // @ts-expect-error
    socket.setTimeout(handler, 7, 5);
});
