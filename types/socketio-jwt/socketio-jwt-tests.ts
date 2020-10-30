import * as fs from 'fs';
import * as http from 'http';
import * as SocketIo from 'socket.io';
import { authorize, JwtSecretFuncCallback } from 'socketio-jwt';

const app = http.createServer((req: any, rsp: any) => {
    fs.readFile(__dirname + '/index.html',
        (err: Error | null, data: any) => {
            if (err) {
                rsp.writeHead(500);
                return rsp.end('Error loading index.html');
            }

            rsp.writeHead(200);
            rsp.end(data);
        });
});

const io = SocketIo(app);

// This example test code is using the Node Http Server

io.on('connection', authorize({
    secret: 'Your Secret Here'
}));

io.on('authenticated', (socket: SocketIo.Socket) => {
    console.log('Authenticated!');
    console.log(JSON.stringify((socket as any).decoded_token));
});

const secrets: any = {
    user1: 'secret 1',
    user2: 'secret 2'
};

// Assume a claim name of userId
function secretFunc(request: any, payload: any, callback: JwtSecretFuncCallback): void {
    callback(null, secrets[payload.userId]);
}

// This example test code provides a callback function to get the secret
io.on('connection', authorize({
    secret: secretFunc
}));
