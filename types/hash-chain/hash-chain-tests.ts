import HashChain = require('hash-chain');

// test type exports
type HC = HashChain;

HashChain.SEEDBYTES; // $ExpectType 32
HashChain.BYTES; // $ExpectType 32

HashChain.seedgen(); // $ExpectType Buffer
HashChain.seedgen(Buffer.allocUnsafe(HashChain.SEEDBYTES)); // $ExpectType Buffer

const hc = HashChain.generate(HashChain.seedgen(), 10); // $ExpectType HashChain
HashChain.generate(HashChain.seedgen(), 10, 3); // $ExpectType HashChain

HashChain.fromAnchors([Buffer.alloc(0)] as const, 10); // $ExpectType HashChain
HashChain.fromAnchors(hc.anchors(10), 10); // $ExpectType HashChain
HashChain.fromAnchors([Buffer.alloc(0)] as const, 10, 3); // $ExpectType HashChain
HashChain.fromAnchors(hc.anchors(10), 10, 3); // $ExpectType HashChain

HashChain.verify(hc.get(1), hc.get(0)); // $ExpectType boolean

hc.chain; // $ExpectType Buffer
hc.offset; // $ExpectType number
hc.length; // $ExpectType number

hc.get(0); // $ExpectType Buffer
hc.anchors(10); // $ExpectType Buffer[]

for (const e of hc) {
    e; // $ExpectType Buffer
}
