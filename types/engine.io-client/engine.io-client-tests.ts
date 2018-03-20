import engine = require('engine.io');
import client = require('engine.io-client');

let server: engine.Server;
let socket: client.Socket;
const options: client.SocketOptions = {};

options.agent = false;
options.upgrade = true;
options.forceJSONP = false;
options.jsonp = false;
options.forceBase64 = false;
options.enablesXDR = false;
options.timestampRequests = true;
options.timestampParam = 't';
options.policyPort = 843;
options.path = '/engine.io';
options.transports = ['websocket'];
options.transportOptions = {};
options.rememberUpgrade = true;
options.pfx = '';
options.key = '';
options.passphrase = '';
options.cert = '';
options.ca = '';
options.ciphers = undefined;
options.rejectUnauthorized = true;
options.perMessageDeflate = false;
options.extraHeaders = {foo: 'bar'};
options.onlyBinaryUpgrades = true;
options.forceNode = false;
options.localAddress = 'localhost';

socket = client("ws://localhost:32767", options);
socket.on('close', (mes, detail) => {
	console.log('CLOSE', mes, detail);
});
socket.on('error', (err) => {
	console.log('ERROR', err);
});

server = engine.listen(8000, {pingTimeout: 100, pingInterval: 30});
server.on("connection", socket => {
	socket.send('hello');
});

socket = client("ws://localhost:8000");
socket.on("message", (data) => {
	console.log('MESSAGE', data);
});
socket.on('close', (mes, detail) => {
	console.log('CLOSE', mes, detail);
});
socket.on('ping', () => {
		console.log('client ping callback');
});
socket.on('pong', () => {
		console.log('client pong callback');
});
socket.on('flush', () => {
		console.log('client flush callback');
});
socket.on('drain', () => {
		console.log('client drain callback');
});
socket.on("open", () => {
	socket.send("hi", {compress: false}, () => {
		console.log('client send callback');
		setTimeout(() => {
			socket.close();
			setTimeout(() => {
				server.close();
				server.httpServer!.close();
			}, 200);
		}, 200);
	});
});
