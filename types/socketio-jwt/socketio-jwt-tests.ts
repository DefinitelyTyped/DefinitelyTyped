import * as fs from 'fs';
import * as http from 'http';
import * as SocketIo from 'socket.io';
import {authorize,SecretFuncCallback} from 'socketio-jwt';

let app = http.createServer((req: any, rsp: any) => {
	fs.readFile(__dirname + '/index.html',
		function (err, data) {
			if (err) {
				rsp.writeHead(500);
				return rsp.end('Error loading index.html');
			}

			rsp.writeHead(200);
			rsp.end(data);
		});
});

let io = SocketIo(app);

// This example test code is using the Node Http Server

io.on('connection', authorize({
	secret: 'Your Secret Here',
	decodedPropertyName: 'anyNameYouWant'
}));

io.on('authenticated', (socket: SocketIo.Socket) => {
	console.log('authenticated!!');
	console.log(JSON.stringify((<any>socket)['anyNameYouWant']));
});

let secrets: any = {
	'user1': 'secret 1',
	'user2': 'secret 2'
};

// Assume a claim name of userId
function secretFunc(request: any, payload: any, callback: JwtSecretFuncCallback): void {
	callback(null, secrets[payload.userId]);
}

// This example test code provides a callback function to get the secret
io.on('connection', authorize({
	secret: secretFunc,
	decodedPropertyName: 'anyNameYouWant'
}));
