import { Response, Socket, WebSocketError, connect } from 'k6/ws';

const address = 'http://example.com';
const executor = (socket: Socket) => {};
const badHandler = (bad: never) => {};
const handler = () => {};

let response: Response;

// connect
connect(); // $ExpectError
connect(5); // $ExpectError
connect(address); // $ExpectError
response = connect(address, executor);
connect(address, 5, executor); // $ExpectError
response = connect(address, null, executor);
response = connect(address, {}, executor);
response = connect(address, {
    headers: { 'User-Agent': 'ITS' },
    tags: { user: 'zbt' }
}, executor);
connect(address, executor, 5); // $ExpectError
connect(address, {}, executor, 5); // $ExpectError

// Socket.close
connect(address, (socket: Socket) => {
    socket.close(); // $ExpectType void
    socket.close('not-a-close-code'); // $ExpectError
    socket.close(7); // $ExpectType void
    socket.close(7, 5); // $ExpectError
});

// Socket.on
connect(address, (socket: Socket) => {
    socket.on(); // $ExpectError
    socket.on(5); // $ExpectError
    socket.on('not-an-event'); // $ExpectError
    socket.on('message'); // $ExpectError
    socket.on('message', 5); // $ExpectError
    socket.on('close', badHandler); // $ExpectError
    socket.on('close', (code: number) => {});
    socket.on('error', badHandler); // $ExpectError
    socket.on('error', (error: WebSocketError) => {});
    socket.on('message', badHandler); // $ExpectError
    socket.on('message', (message: string) => {});
    socket.on('open', badHandler); // $ExpectError
    socket.on('open', () => {});
    socket.on('ping', badHandler); // $ExpectError
    socket.on('ping', () => {});
    socket.on('pong', badHandler); // $ExpectError
    socket.on('pong', () => {});
    socket.on('open', () => {}, 5); // $ExpectError
});

// Socket.ping
connect(address, (socket: Socket) => {
    socket.ping(); // $ExpectType void
    socket.ping(5); // $ExpectError
});

// Socket.send
connect(address, (socket: Socket) => {
    socket.send(); // $ExpectError
    socket.send(5); // $ExpectError
    socket.send('super secret information'); // $ExpectType void
    socket.send('super secret information', 5); // $ExpectError
});

// Socket.setInterval
connect(address, (socket: Socket) => {
    socket.setInterval(); // $ExpectError
    socket.setInterval(5); // $ExpectError
    socket.setInterval(handler); // $ExpectError
    socket.setInterval(handler, 'not-a-duration'); // $ExpectError
    socket.setInterval(handler, 7); // $ExpectType void
    socket.setInterval(handler, 7, 5); // $ExpectError
});

// Socket.setTimeout
connect(address, (socket: Socket) => {
    socket.setTimeout(); // $ExpectError
    socket.setTimeout(5); // $ExpectError
    socket.setTimeout(handler); // $ExpectError
    socket.setTimeout(handler, 'not-a-duration'); // $ExpectError
    socket.setTimeout(handler, 7); // $ExpectType void
    socket.setTimeout(handler, 7, 5); // $ExpectError
});
