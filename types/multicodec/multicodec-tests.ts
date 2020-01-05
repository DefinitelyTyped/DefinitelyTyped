import multicodec from 'multicodec';

const buf = Buffer.from('hey');

const prefixedBuf1 = multicodec.addPrefix('protobuf', buf);
console.log(multicodec.getCodec(prefixedBuf1));
// protobuf
console.log(multicodec.rmPrefix(prefixedBuf1) === buf);
// true

const prefixedBuf2 = multicodec.addPrefix(Buffer.from('70', 'hex'), buf);
console.log(multicodec.getCodec(prefixedBuf2));
// dag-pb
console.log(multicodec.rmPrefix(prefixedBuf2) === buf);
// true

const prefixedBuf3 = multicodec.addPrefix('eth-block', buf);
console.log(multicodec.getCodec(prefixedBuf3));
// eth-block
console.log(multicodec.rmPrefix(prefixedBuf2) === buf);
// true

const code1 = multicodec.getCodeVarint('keccak-256');
console.log(code1); // Equal to Buffer.from('1b', 'hex')

const prefixedBuf4 = multicodec.addPrefix('dag-cbor', buf);
const code2 = multicodec.getCode(prefixedBuf4);
console.log(code2 === multicodec.DAG_CBOR);

const code3 = multicodec.getVarint(multicodec.KECCAK_256);
console.log(code3);
// [0x1b]

multicodec.getName(144); // 'eth-block'
multicodec.getName(112); // 'dag-pb'
multicodec.getName(0xb201); // 'blake2b-8'

multicodec.getNumber('eth-block'); // 144
multicodec.getNumber('dag-pb'); // 112

multicodec.ETH_BLOCK; // $ExpectType 144
multicodec.DAG_PB; // $ExpectType 112
multicodec.BLAKE2B_8; // $ExpectType 45569

multicodec.print[144]; // $ExpectType string
multicodec.print[112]; // $ExpectType string
multicodec.print[0x0111]; // $ExpectType string
multicodec.print[0xb201]; // $ExpectType string

multicodec.print[multicodec.ETH_BLOCK]; // 'eth-block'
multicodec.print[multicodec.DAG_PB]; // 'dag-pb'
multicodec.print[multicodec.UDP]; // 'udp'
multicodec.print[multicodec.BLAKE2B_8]; // 'blake2b-8'

// `ipfs` and `p2p` are assigned to `0x01a5`, `ipfs` is deprecated
multicodec.print[0x01a5]; // 'p2p'
