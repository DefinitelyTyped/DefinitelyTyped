import * as peers from "ipv4-peers";

// test type exports
type Peer = peers.Peer;

const list = [
    {
        host: "127.0.0.1",
        port: 8080,
    },
    {
        id: Buffer.alloc(10),
        host: "127.0.0.1",
        port: 9090,
    },
];

peers.encode(list); // $ExpectType Buffer || Buffer<ArrayBufferLike>
peers.encode(list, Buffer.alloc(10)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
peers.encode(list, Buffer.alloc(10), 1); // $ExpectType Buffer || Buffer<ArrayBufferLike>

peers.encode.bytes; // $ExpectType number

peers.decode(Buffer.alloc(10)); // $ExpectType Peer[]
peers.decode(Buffer.alloc(10), 1); // $ExpectType Peer[]
peers.decode(Buffer.alloc(10), 1, 2); // $ExpectType Peer[]

peers.decode.bytes; // $ExpectType number

peers.encodingLength(list); // $ExpectType number

const withIdCodec = peers.idLength(10);

withIdCodec.encode(list); // $ExpectType Buffer || Buffer<ArrayBufferLike>
withIdCodec.encode(list, Buffer.alloc(10)); // $ExpectType Buffer || Buffer<ArrayBufferLike>
withIdCodec.encode(list, Buffer.alloc(10), 1); // $ExpectType Buffer || Buffer<ArrayBufferLike>

withIdCodec.encode.bytes; // $ExpectType number

withIdCodec.decode(Buffer.alloc(10)); // $ExpectType Peer[]
withIdCodec.decode(Buffer.alloc(10), 1); // $ExpectType Peer[]
withIdCodec.decode(Buffer.alloc(10), 1, 2); // $ExpectType Peer[]

withIdCodec.decode.bytes; // $ExpectType number

withIdCodec.encodingLength(list); // $ExpectType number
