import * as Protocol from 'bittorrent-protocol';
import * as net from 'net';

net.createServer(function(socket) {
    var wire = new Protocol();

    // pipe to and from the protocol
    socket.pipe(wire).pipe(socket);

    wire.on('handshake', function(infoHash, peerId) {
        // receive a handshake (infoHash and peerId are hex strings)

        // lets emit a handshake of our own as well
        wire.handshake('my info hash (hex)', 'my peer id (hex)');
    });

    wire.on('unchoke', function() {
        console.log('peer is no longer choking us: ' + wire.peerChoking);
    });
}).listen(6881);
