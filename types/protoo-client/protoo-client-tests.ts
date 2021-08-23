import * as protoo from 'protoo-client';

// $ExpectType WebSocketTransport
const transport = new protoo.WebSocketTransport('ws://foo', {
    protocols: ['foo', 'bar'],
    origin: 'https://example.com',
    headers: {
        'X-Foo': 'bar',
    },
    requestOptions: {},
    clientConfig: {
        closeTimeout: 1000,
    },
    retry: {
        retries: 10,
    },
});

// $ExpectType Peer
const peer = new protoo.Peer(transport);

// $ExpectType boolean
peer.closed;

// $ExpectType boolean
peer.connected;
