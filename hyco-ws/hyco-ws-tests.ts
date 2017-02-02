import * as WebSocketRelay from 'hyco-ws';

let wss = WebSocketRelay.createRelayedServer(
    {
        server: WebSocketRelay.createRelayListenUri('uri_namespace', 'uri_path'),
        token: WebSocketRelay.createRelayToken(
            'http://exampleurl.com}',
            'key_rule',
            'key')
    },
    (ws: WebSocket) => {
        console.log('New connection accepted');
        ws.onmessage = function (event) {
            console.log('New message!!');
        };
    });

wss.on('error', function (err) {
    console.log('error' + err);
});