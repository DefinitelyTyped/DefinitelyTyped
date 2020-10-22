import * as parser from 'socket.io-parser';
const encoder = new parser.Encoder();
const packet = {
    type: parser.EVENT,
    data: 'test-packet',
    id: 13,
};
encoder.encode(packet, encodedPackets => {
    const decoder = new parser.Decoder();
    decoder.on('decoded', decodedPacket => {
        decodedPacket.type === parser.EVENT;
        decodedPacket.data === 'test-packet';
        decodedPacket.id === 13;
    });

    for (const encoded of encodedPackets) {
        decoder.add(encoded);
    }
});

const packet2 = {
    type: parser.BINARY_EVENT,
    data: { i: new Buffer(1234), j: new Blob([new ArrayBuffer(2)]) },
    id: 15,
};
encoder.encode(packet2, encodedPackets => {
    const decoder = new parser.Decoder();
    decoder.on('decoded', decodedPacket => {
        decodedPacket.type === parser.BINARY_EVENT;
        Buffer.isBuffer(decodedPacket.data.i); // $ExpectType boolean
        Buffer.isBuffer(decodedPacket.data.j); // $ExpectType boolean
        decodedPacket.id === 15;
    });

    for (const encoded of encodedPackets) {
        decoder.add(encoded);
    }
});
