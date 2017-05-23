
import * as WebSocket from 'ws';
import * as http from'http';
import * as https from'https';

var WebSocketServer = WebSocket.Server;

{
    var ws = new WebSocket('ws://www.host.com/path');
    ws.on('open', () => ws.send('something'));
    ws.on('message', (data, flags) => {});
}

{
    var ws = new WebSocket('ws://www.host.com/path');
    ws.on('open', () => {
        var array = new Float32Array(5);
        for (var i = 0; i < array.length; ++i) array[i] = i / 2;
        ws.send(array, {binary: true, mask: true});
    });
}

{
    var wss = new WebSocketServer({port: 8080});
    wss.on('connection', (ws) => {
        ws.on('message', (message) => console.log('received: %s', message));
        ws.send('something');
    });
}

{
    var wss = new WebSocketServer({port: 8080});

    const broadcast = function(data: any) {
        for(var i in wss.clients)
            wss.clients[i].send(data);
    };
}

{
    var wsc = new WebSocket('ws://echo.websocket.org/', {
        protocolVersion: 8,
        origin: 'http://websocket.org'
    });

    wsc.on('open',  () => wsc.send(Date.now().toString(), {mask: true}));
    wsc.on('close', () => console.log('disconnected'));

    wsc.on('message', (data, flags) => {
        console.log('Roundtrip time: ' + (Date.now() - parseInt(data)) + 'ms', flags);
        setTimeout(() => {
            wsc.send(Date.now().toString(), {mask: true});
        }, 500);
    });
}

{
    new WebSocket.Server({ server: https.createServer({}) });
    new WebSocket.Server({ server: http.createServer() });
}


{
    const verifyClient = function(
      info: {
        origin: string
        secure: boolean
        req: http.IncomingMessage
      }
      , callback: (res: boolean) => void
    ): void {
        callback(true)
    }

    var wsv = new WebSocketServer({
        verifyClient
    })

    wsv.on('connection', function connection(ws) {
        console.log(ws.protocol)
    })
}

{
    new WebSocket.Server({ perMessageDeflate: false });
    new WebSocket.Server({ perMessageDeflate: { } });
    new WebSocket.Server({
        perMessageDeflate: {
            serverNoContextTakeover: true,
            clientNoContextTakeover: true,
            serverMaxWindowBits: 0,
            clientMaxWindowBits: 0,
            memLevel: 0
        }
    });
}
