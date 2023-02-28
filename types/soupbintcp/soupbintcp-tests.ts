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
// @ts-expect-error
new Client({host: ''});
// Invalid type

// @ts-expect-error
new Client({host: 8000});

// @ts-expect-error
new Client({port: ''});

// @ts-expect-error
new Client({port: 8000});

// @ts-expect-error
new Client();

// Invalid type
// @ts-expect-error
new Server({host: ''});
// Invalid type

// @ts-expect-error
new Server({host: 8000});

// @ts-expect-error
new Server({port: ''});

// @ts-expect-error
new Server({port: 8000});

// @ts-expect-error
new Server();

// @ts-expect-error
client.login({
    password: '',
    requestedSession: '',
    requestedSequenceNumber: 8000
});

// @ts-expect-error
client.login({
    username: '',
    requestedSession: '',
    requestedSequenceNumber: 8000
});

// @ts-expect-error
client.login({
    username: '',
    password: '',
    requestedSequenceNumber: 8000
});

// @ts-expect-error
client.login({
    username: '',
    password: '',
    requestedSession: '',
});

// @ts-expect-error
client.login();
