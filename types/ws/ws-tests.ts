import WebSocket = require('ws');
import * as http from 'http';
import * as https from 'https';

{
    const ws = new WebSocket('ws://www.host.com/path');
    ws.on('open', () => ws.send('something'));
    ws.on('message', (data) => {});
}

{
    const ws = new WebSocket('ws://www.host.com/path');
    ws.on('open', () => {
        const array = new Float32Array(5);
        for (let i = 0; i < array.length; ++i) array[i] = i / 2;
        ws.send(array, {binary: true, mask: true});
    });
}

{
    const wss = new WebSocket.Server({port: 8081});
    wss.on('connection', (ws, req) => {
        ws.on('message', (message) => console.log('received: %s', message));
        ws.send('something');
    });

    wss.on('upgrade', (res) => {
        console.log(`response: ${Object.keys(res)}`);
    });
}

{
    const wss = new WebSocket.Server({port: 8082});

    const broadcast = (data: any) => {
        wss.clients.forEach((ws) => ws.send(data));
    };
}

{
    const wsc = new WebSocket('ws://echo.websocket.org/');

    wsc.on('open',  () => wsc.send(Date.now().toString(), {mask: true}));
    wsc.on('close', () => console.log('disconnected'));
    wsc.on('error', (error) => {
        console.log(`unexpected response: ${error}`);
    });

    wsc.on('message', (data: string) => {
        console.log(`Roundtrip time: ${(Date.now() - parseInt(data, 10))} ms`);
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
    const verifyClient = (
      info: { origin: string, secure: boolean, req: http.IncomingMessage },
      callback: (res: boolean) => void
    ): void => {
        callback(true);
    };

    const wsv = new WebSocket.Server({
        server: http.createServer(),
        clientTracking: true,
        perMessageDeflate: true
    });

    wsv.on('connection', function connection(ws) {
        console.log(ws.protocol);
    });
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
