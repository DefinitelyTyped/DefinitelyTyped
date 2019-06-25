import { Response, Socket, connect } from 'k6/ws';

const address = 'http://example.com';
const executor = (socket: Socket) => {};

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
