import create from 'keccak';

const keccak = create('keccak224'); // $ExpectType Keccak
keccak.update('alice').digest(); // $ExpectType Buffer

const sha3 = create('sha3-224'); // $ExpectType Keccak
sha3.update('alice').digest(); // $ExpectType Buffer

const shake = create('shake128'); // $ExpectType Shake
shake.update('alice').squeeze(42); // $ExpectType Buffer
