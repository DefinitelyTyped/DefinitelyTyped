import * as ipPacket from "ip-packet";

// test type exports
type Options = ipPacket.Options;
type Packet = ipPacket.Packet;
type DecodedPacket = ipPacket.DecodedPacket;

const configured = ipPacket.configure({ allowNullChecksum: true });

const packet = { version: 4 as const, sourceIp: "127.0.0.1", destinationIp: "127.0.0.1", data: Buffer.alloc(10) };
ipPacket.encode(packet); // $ExpectType Buffer
ipPacket.encode({ ...packet, ihl: 1 }); // $ExpectType Buffer
ipPacket.encode({ ...packet, dscp: 1 }); // $ExpectType Buffer
ipPacket.encode({ ...packet, ecn: 1 }); // $ExpectType Buffer
ipPacket.encode({ ...packet, identification: 1 }); // $ExpectType Buffer
ipPacket.encode({ ...packet, flags: 1 }); // $ExpectType Buffer
ipPacket.encode({ ...packet, fragmentOffset: 1 }); // $ExpectType Buffer
ipPacket.encode({ ...packet, ttl: 1 }); // $ExpectType Buffer
ipPacket.encode({ ...packet, protocol: 1 }); // $ExpectType Buffer
ipPacket.encode(packet, Buffer.alloc(20)); // $ExpectType Buffer
ipPacket.encode(packet, Buffer.alloc(20), 0); // $ExpectType Buffer
ipPacket.encode.bytes; // $ExpectType number | undefined

configured.encode(packet); // $ExpectType Buffer
configured.encode({ ...packet, ihl: 1 }); // $ExpectType Buffer
configured.encode({ ...packet, dscp: 1 }); // $ExpectType Buffer
configured.encode({ ...packet, ecn: 1 }); // $ExpectType Buffer
configured.encode({ ...packet, identification: 1 }); // $ExpectType Buffer
configured.encode({ ...packet, flags: 1 }); // $ExpectType Buffer
configured.encode({ ...packet, fragmentOffset: 1 }); // $ExpectType Buffer
configured.encode({ ...packet, ttl: 1 }); // $ExpectType Buffer
configured.encode({ ...packet, protocol: 1 }); // $ExpectType Buffer
configured.encode(packet, Buffer.alloc(20)); // $ExpectType Buffer
configured.encode(packet, Buffer.alloc(20), 0); // $ExpectType Buffer
configured.encode.bytes; // $ExpectType number | undefined

const decoded = ipPacket.decode(Buffer.alloc(1)); // $ExpectType DecodedPacket
ipPacket.decode(Buffer.alloc(1), 0); // $ExpectType DecodedPacket
ipPacket.decode.bytes; // $ExpectType number | undefined

configured.decode(Buffer.alloc(1)); // $ExpectType DecodedPacket
configured.decode(Buffer.alloc(1), 0); // $ExpectType DecodedPacket
configured.decode.bytes; // $ExpectType number | undefined

ipPacket.encodingLength(packet); // $ExpectType number
configured.encodingLength(packet); // $ExpectType number

decoded.version; // $ExpectType 4
decoded.sourceIp; // $ExpectType string
decoded.destinationIp; // $ExpectType string
decoded.data; // $ExpectType Buffer
decoded.ihl; // $ExpectType number
decoded.dscp; // $ExpectType number
decoded.ecn; // $ExpectType number
decoded.identification; // $ExpectType number
decoded.flags; // $ExpectType number
decoded.fragmentOffset; // $ExpectType number
decoded.ttl; // $ExpectType number
decoded.protocol; // $ExpectType number
decoded.length; // $ExpectType number
decoded.checksum; // $ExpectType number
