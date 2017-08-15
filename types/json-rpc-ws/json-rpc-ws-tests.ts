import * as JsonRpcWs from 'json-rpc-ws';

let server = JsonRpcWs.createServer();

server.expose('mirror', function mirror(params, reply) {
    console.log('mirror handler', params);
    reply(null, params);
});

server.start({ port: 8080 }, function started() {
    console.log('Server started on port 8080');
});

let client = JsonRpcWs.createClient();

client.connect('ws://localhost:8080', function connected() {
    client.send('mirror', ['a param', 'another param'], function mirrorReply(error, reply) {
        console.log('mirror reply', reply);
    });
});

interface CustomConnection extends JsonRpcWs.Connection {
    rooms?: string[];
}

let serverWithCustomConnection = JsonRpcWs.createServer<CustomConnection>();

serverWithCustomConnection.expose('join', function(params: { room: string }) {
    this.rooms = this.rooms || [];
    this.rooms.push(params.room);
    console.log(this.id + ' joined ' + params.room);
});

serverWithCustomConnection.start({ port: 8080 }, () => {
    console.log('Server started on port 8080');
});

let clientForServerWithCustomConnection = JsonRpcWs.createClient();

client.connect('ws://localhost:8080', () => {
    client.send('join', { room: 'my room' });
});
