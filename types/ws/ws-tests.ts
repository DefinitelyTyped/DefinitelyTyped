
import * as WebSocket from 'ws';
import * as http from 'http';
import * as https from 'https';

{
    var ws = new WebSocket('ws://www.host.com/path');
    ws.on('open', () => ws.send('something'));
    ws.on('message', (data) => {});
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
    var wss = new WebSocket.Server({port: 8081});
    wss.on('connection', (ws, req) => {
        ws.on('message', (message) => console.log('received: %s', message));
        ws.send('something');
    });

    wss.on('headers', (headers, req) => {
        console.log(`received headers: ${headers}`);
        console.log(`received request: ${Object.keys(req)}`);
    });
}

{
    var wss = new WebSocket.Server({port: 8082});

    const broadcast = function(data: any) {
        for(var i in wss.clients)
            wss.clients[i].send(data);
    };
}

{
    var wsc = new WebSocket('ws://echo.websocket.org/');

    wsc.on('open',  () => wsc.send(Date.now().toString(), {mask: true}));
    wsc.on('close', () => console.log('disconnected'));
    wsc.on('error', (error) => {
        console.log(`unexpected response: ${error}`);
    });

    wsc.on('message', (data: string) => {
        console.log('Roundtrip time: ' + (Date.now() - parseInt(data)) + 'ms');
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

    var wsv = new WebSocket.Server({
        server: http.createServer(),
        clientTracking: true,
        perMessageDeflate: true
    })

    wsv.on('connection', function connection(ws) {
        console.log(ws.protocol)
    })
}

{
    new WebSocket.Server({ noServer: true, perMessageDeflate: false });
    new WebSocket.Server({ noServer: true, perMessageDeflate: { } });
    new WebSocket.Server({
        noServer: true,
        perMessageDeflate: {
            serverNoContextTakeover: true,
            clientNoContextTakeover: true,
            serverMaxWindowBits: 0,
            clientMaxWindowBits: 0,
            memLevel: 0
        }
    });
}
