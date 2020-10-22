import * as JsonRpcWs from 'json-rpc-ws';

const server = JsonRpcWs.createServer();

server.expose('mirror', function mirror(params, reply) {
    console.log('mirror handler', params);
    reply(null, params);
});

server.start({ port: 8080 }, function started() {
    console.log('Server started on port 8080');
});

const client = JsonRpcWs.createClient();

client.connect('ws://localhost:8080', function connected() {
    client.send('mirror', ['a param', 'another param'], function mirrorReply(error, reply) {
        console.log('mirror reply', reply);
    });
});

interface CustomConnection extends JsonRpcWs.Connection {
    rooms?: string[];
}

const serverWithCustomConnection = JsonRpcWs.createServer<CustomConnection>();

serverWithCustomConnection.expose('join', function(params: { room: string }) {
    this.rooms = this.rooms || [];
    this.rooms.push(params.room);
    console.log(`${this.id} joined ${params.room}`);
});

serverWithCustomConnection.start({ port: 8080 }, () => {
    console.log('Server started on port 8080');
});

const clientForServerWithCustomConnection = JsonRpcWs.createClient();

client.connect('ws://localhost:8080', () => {
    client.send('join', { room: 'my room' });
});
