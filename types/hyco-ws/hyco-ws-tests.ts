import * as WebSocket from 'ws';
import * as AzureRelay from 'hyco-ws';

const wss = AzureRelay.createRelayedServer(
    {
        server: AzureRelay.createRelayListenUri('uri_namespace', 'uri_path'),
        token: AzureRelay.createRelayToken(
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
