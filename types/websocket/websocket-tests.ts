
import websocket = require('websocket');
import http = require('http');
import os = require('os');

/*
function serverTest() {
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

    var wsRouter = new websocket.router({
      server: wsServer
    });

    wsRouter.mount('*', (request) => {
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

    wsRouter.mount('*', 'protocol', (request) => {
    });

    wsRouter.mount(/^route\/[a-zA-Z]+$/, (request) => {

    });

    wsRouter.unmount('*');
    wsRouter.unmount('*', 'protocol');

    wsRouter.unmount(/^route\/[a-zA-Z]+$/);
    wsRouter.unmount(/^route\/[a-zA-Z]+$/, 'protocol');
}

function clientTest() {
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
}*/

function getLocalIpArray(): Array<string> {
    var interfaces: any = os.networkInterfaces();
    var ipArray: Array<string> = [];
    for (var dev in interfaces) {
        for (var i = 0; i < interfaces[dev].length; i++) {
            if (interfaces[dev][i].family == "IPv4" && interfaces[dev][i].internal == false) {
                ipArray.push(interfaces[dev][i].address);
            }
        }
    }
    return ipArray;
}

function serverTest2() {
    var server = http.createServer((req, rsp) => {
        rsp.writeHead(200);
        rsp.end("Hello, world!");
    });
    server.listen(8888);

    var wsServer = new websocket.server({
        httpServer: server,
        autoAcceptConnections: true
    });

    wsServer.on("connect", (conn) => {
        conn.sendUTF(`Your IP Address is - ${conn.remoteAddress}`)
    });
}

function clientTest2() {
    var ipArray = getLocalIpArray();
    
    var client = new websocket.client();
    client.on("connect", (conn) => {
        console.log(`on connect`);
        conn.on("frame", (frame) => {
            console.log(`on frame - ${frame.binaryPayload.toString()}`);
        });
        conn.on("message", (data) => {
            console.log(`on message - ${data.utf8Data}`);
        });
    });
    client.on("connectFailed", (err) => {
        console.log(`on failed: ${err}`);
    });
    client.connect(`ws://${ipArray[0]}:8888`, undefined, undefined, undefined, {
        localAddress: ipArray[0]
    });
    
}

function testClientAbortApi() {
    var ipArray = getLocalIpArray();
    var client = new websocket.client();
    client.connect(`ws://${ipArray[0]}:8888`, undefined, undefined, undefined, {
        localAddress: ipArray[0]
    });
    client.abort();
}

{
    console.log(`websocket test start.`);
    serverTest2();
    clientTest2();
    testClientAbortApi();
}
