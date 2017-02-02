import * as WebSocketRelay from 'hyco-ws';
import * as WebSocket from 'ws';

const wss: any = WebSocketRelay.createRelayedServer(
    {
        server: WebSocketRelay.createRelayListenUri('uri_namespace', 'uri_path'),
        token: WebSocketRelay.createRelayToken(
            'http://exampleurl.com}',
            'key_rule',
            'key')
    },
    (ws: WebSocket) => {
        console.log('New connection accepted');
        ws.onmessage = (event: any) => {
            console.log('New message!!');
        };
    });

wss.on('error', (err: any) => {
    console.log('error' + err);
});