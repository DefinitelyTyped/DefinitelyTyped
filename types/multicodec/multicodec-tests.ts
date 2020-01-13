// import Multicodec from 'multicodec';

const buf = Buffer.from('hey');

const prefixedBuf1 = Multicodec.addPrefix('protobuf', buf);
console.log(Multicodec.getCodec(prefixedBuf1));
// protobuf
console.log(Multicodec.rmPrefix(prefixedBuf1) === buf);
// true

const prefixedBuf2 = Multicodec.addPrefix(Buffer.from('70', 'hex'), buf);
console.log(Multicodec.getCodec(prefixedBuf2));
// dag-pb
console.log(Multicodec.rmPrefix(prefixedBuf2) === buf);
// true

const prefixedBuf3 = Multicodec.addPrefix('eth-block', buf);
console.log(Multicodec.getCodec(prefixedBuf3));
// eth-block
console.log(Multicodec.rmPrefix(prefixedBuf2) === buf);
// true

const code1 = Multicodec.getCodeVarint('keccak-256');
console.log(code1); // Equal to Buffer.from('1b', 'hex')

const prefixedBuf4 = Multicodec.addPrefix('dag-cbor', buf);
const code2 = Multicodec.getCode(prefixedBuf4);
console.log(code2 === Multicodec.DAG_CBOR);

const code3 = Multicodec.getVarint(Multicodec.KECCAK_256);
console.log(code3);
// [0x1b]

Multicodec.getName(144); // 'eth-block'
Multicodec.getName(112); // 'dag-pb'
Multicodec.getName(0xb201); // 'blake2b-8'

Multicodec.getNumber('eth-block'); // 144
Multicodec.getNumber('dag-pb'); // 112

Multicodec.ETH_BLOCK; // $ExpectType 144
Multicodec.DAG_PB; // $ExpectType 112
Multicodec.BLAKE2B_8; // $ExpectType 45569

Multicodec.print[144]; // $ExpectType string
Multicodec.print[112]; // $ExpectType string
Multicodec.print[0x0111]; // $ExpectType string
Multicodec.print[0xb201]; // $ExpectType string

Multicodec.print[Multicodec.ETH_BLOCK]; // 'eth-block'
Multicodec.print[Multicodec.DAG_PB]; // 'dag-pb'
Multicodec.print[Multicodec.UDP]; // 'udp'
Multicodec.print[Multicodec.BLAKE2B_8]; // 'blake2b-8'

// `ipfs` and `p2p` are assigned to `0x01a5`, `ipfs` is deprecated
Multicodec.print[0x01a5]; // 'p2p'
