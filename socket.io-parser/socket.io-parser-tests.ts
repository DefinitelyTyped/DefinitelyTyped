import * as parser from 'socket.io-parser';
var encoder = new parser.Encoder();
var packet = {
    type: parser.EVENT,
    data: 'test-packet',
    id: 13
};
encoder.encode(packet, function (encodedPackets) {
    var decoder = new parser.Decoder();
    decoder.on('decoded', function (decodedPacket) {
        decodedPacket.type == parser.EVENT
        decodedPacket.data == 'test-packet'
        decodedPacket.id == 13
    });

    for (var i = 0; i < encodedPackets.length; i++) {
        decoder.add(encodedPackets[i]);
    }
});

var packet2 = {
    type: parser.BINARY_EVENT,
    data: { i: new Buffer(1234), j: new Blob([new ArrayBuffer(2)]) },
    id: 15
};
encoder.encode(packet2, function (encodedPackets) {
    var decoder = new parser.Decoder();
    decoder.on('decoded', function (decodedPacket) {
        decodedPacket.type == parser.BINARY_EVENT
        Buffer.isBuffer(decodedPacket.data.i) == true
        Buffer.isBuffer(decodedPacket.data.j) == true
        decodedPacket.id == 15
    });

    for (var i = 0; i < encodedPackets.length; i++) {
        decoder.add(encodedPackets[i]);
    }
});
