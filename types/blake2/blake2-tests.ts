import { createHash, createKeyedHash, Hash, KeyedHash } from 'blake2';

const fakeKey = Buffer.alloc(0);
const keyedHash: KeyedHash = createKeyedHash('blake2b', fakeKey);

keyedHash.update(Buffer.alloc(0)).digest();

const regularHash: Hash = createHash('blake2s', { digestLength: 256 });
const regularHashViaCtor: Hash = new Hash('blake2bp');

const copy: Hash = regularHash.copy();
