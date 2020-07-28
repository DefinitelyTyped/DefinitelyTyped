import Protocol = require('bittorrent-protocol');
import * as net from 'net';

class TestExtension implements Protocol.Extension {
    constructor(protected wire: Protocol.Wire) { }
    name = 'extname';
}

net.createServer(socket => {
    const wire = new Protocol();

    wire.use(TestExtension);

    // pipe to and from the protocol
    socket.pipe(wire).pipe(socket);

    wire.on('handshake', (infoHash, peerId) => {
        // receive a handshake (infoHash and peerId are hex strings)

        // lets emit a handshake of our own as well
        wire.handshake('my info hash (hex)', 'my peer id (hex)');
    });

    wire.on('unchoke', () => {
        console.log('peer is no longer choking us: ' + wire.peerChoking);
    });

    // Extend wire using the test extension
    wire.extended('extname', {});
}).listen(6881);
