import { Client, Server } from 'soupbintcp';

// Arrange
const client = new Client({port: 8000, host: ''});
const server = new Server({port: 8000, host: ''});

// Act & Assert
// $ExpectType Client
new Client({port: 8000, host: ''});

// $ExpectType Server
new Server({port: 8000, host: ''});

// Invalid type
// $ExpectError
new Client({host: ''});
// Invalid type

// $ExpectError
new Client({host: 8000});

// $ExpectError
new Client({port: ''});

// $ExpectError
new Client({port: 8000});

// $ExpectError
new Client();

// Invalid type
// $ExpectError
new Server({host: ''});
// Invalid type

// $ExpectError
new Server({host: 8000});

// $ExpectError
new Server({port: ''});

// $ExpectError
new Server({port: 8000});

// $ExpectError
new Server();

// $ExpectError
client.login({
    password: '',
    requestedSession: '',
    requestedSequenceNumber: 8000
});

// $ExpectError
client.login({
    username: '',
    requestedSession: '',
    requestedSequenceNumber: 8000
});

// $ExpectError
client.login({
    username: '',
    password: '',
    requestedSequenceNumber: 8000
});

// $ExpectError
client.login({
    username: '',
    password: '',
    requestedSession: '',
});

// $ExpectError
client.login();
