import WebSocket = require('ws');
import * as http from 'http';
import * as https from 'https';
import * as url from 'url';

{
    const ws = new WebSocket('ws://www.host.com/path');
    ws.on('open', () => ws.send('something'));
    ws.on('message', (data) => {});
}

{
    const addr = new url.URL('ws://www.host.com/path');
    const ws = new WebSocket(addr);
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
        ws.send('something', (error?: Error) => {});
        ws.send('something', {}, (error?: Error) => {});
    });
    wss.once('connection', (ws, req) => {
        ws.send('something');
    });
    wss.off('connection', (ws, req) => {
        ws.send('something');
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
            zlibDeflateOptions: {
                flush: 0,
                finishFlush: 0,
                chunkSize: 0,
                windowBits: 0,
                level: 0,
                memLevel: 0,
                strategy: 0,
                dictionary: new Buffer('test'),
                info: false
            },
            zlibInflateOptions: {
                chunkSize: 0
            }
        },
        verifyClient: (info: any, cb: any) => {
            cb(true, 123, 'message', { Upgrade: 'websocket' });
        },
    });
}

{
    const ws = new WebSocket('ws://www.host.com/path', {
        timeout: 5000,
        maxPayload: 10 * 1024 * 1024
    });
    ws.on('open', () => ws.send('something assume to be really long'));
}

{
    const ws = new WebSocket('ws://www.host.com/path');
    ws.onopen = (event: WebSocket.OpenEvent) => {
        console.log(event.target);
    };
    ws.onerror = (event: WebSocket.ErrorEvent) => {
        console.log(event.error, event.message, event.target, event.type);
    };
    ws.onclose = (event: WebSocket.CloseEvent) => {
        console.log(event.code, event.reason, event.target, event.wasClean);
    };
    ws.onmessage = (event: WebSocket.MessageEvent) => {
        console.log(event.data, event.target, event.type);
    };
}

{
    const ws = new WebSocket('ws://www.host.com/path');

    const duplex = WebSocket.createWebSocketStream(ws, {
        allowHalfOpen: true
    });

    duplex.pipe(process.stdout);
    process.stdin.pipe(duplex);
}

{
    const ws = new WebSocket('ws://www.host.com/path');

    const duplex = WebSocket.createWebSocketStream(ws);

    duplex.pipe(process.stdout);
    process.stdin.pipe(duplex);
}

{
    const ws = new WebSocket('ws://www.host.com/path');
    ws.addEventListener('other', () => {});
    ws.addEventListener('other', () => {}, { once: true });
    ws.addEventListener('other', () => {}, { once: true });
}

{
    const ws = new WebSocket('ws://www.host.com/path');
    ws.addEventListener('message', (event: WebSocket.MessageEvent) => {
        console.log(event.data, event.target, event.type);
    }, { once: true });
}
