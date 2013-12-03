/// <reference path="websocket.d.ts" />

import websocket = require('websocket');
import http = require('http');

{
    var server = http.createServer((req, res) => {
        console.log((new Date()) + ' Received request for ' + req.url);
        res.writeHead(404);
        res.end();
    });

    server.listen(8080, () => {
        console.log((new Date()) + ' Server is listening on port 8080');
    });

    var wsServer = new websocket.server({
        httpServer: server,
        autoAcceptConnections: false
    });

    function originIsAllowed(origin: string) { return true; }

    wsServer.on('request', (request: websocket.request) => {
        if(!originIsAllowed(request.origin)) {
          request.reject();
          console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
          return;
        }

        var connection = request.accept('echo-protocol', request.origin);
        console.log((new Date()) + ' Connection accepted.');
        connection.on('message', (message: websocket.IMessage) => {
            if (message.type === 'utf8') {
                console.log('Received Message: ' + message.utf8Data);
                connection.sendUTF(message.utf8Data);
            }
            else if (message.type === 'binary') {
                console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
                connection.sendBytes(message.binaryData);
            }
        });

        connection.on('close', (code: number) => {
            console.log(Date.now() + ' Peer ' + connection.remoteAddress + ' disconnected.');
        });
    });
}

{
    var WebSocketClient = require('websocket').client;
    var client = new WebSocketClient();

    client.on('connectFailed', (error: Error) => {
        console.log('Connect Error: ' + error.toString());
    });

    client.on('connect', (connection: websocket.connection) => {
        console.log('WebSocket client connected');
        connection.on('error', (error: Error) => {
            console.log("Connection Error: " + error.toString());
        });

        connection.on('close', () => {
            console.log('echo-protocol Connection Closed');
        });

        connection.on('message', (message: websocket.IMessage) => {
            if (message.type === 'utf8') {
                console.log("Received: '" + message.utf8Data + "'");
            }
        });

        function sendNumber() {
            if (connection.connected) {
                var number = Math.round(Math.random() * 0xFFFFFF);
                connection.sendUTF(number.toString());
                setTimeout(sendNumber, 1000);
            }
        }
        
        sendNumber();
    });

    client.connect('ws://localhost:8080/', 'echo-protocol');
}
