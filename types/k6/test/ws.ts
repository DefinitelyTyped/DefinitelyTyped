import { Response, Socket, WebSocketError, connect } from 'k6/ws';

const address = 'http://example.com';
const executor = (socket: Socket) => {};
const badHandler = (bad: never) => {};

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

// Socket.send
connect(address, (socket: Socket) => {
    socket.send(); // $ExpectError
    socket.send(5); // $ExpectError
    socket.send('super secret information'); // $ExpectType void
    socket.send('super secret information', 5); // $ExpectError
});
