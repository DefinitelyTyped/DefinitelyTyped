import MultisigHMAC = require('multisig-hmac');

// test type exports
type Key = MultisigHMAC.Key;
type Signature = MultisigHMAC.Signature;
type MSHMAC = MultisigHMAC;

MultisigHMAC.BYTES; // $ExpectType 32
MultisigHMAC.KEYBYTES; // $ExpectType 64
MultisigHMAC.PRIMITIVE; // $ExpectType "sha256"
MultisigHMAC.SHA256_BYTES; // $ExpectType 32
MultisigHMAC.SHA256_KEYBYTES; // $ExpectType 64
MultisigHMAC.SHA256_PRIMITIVE; // $ExpectType "sha256"
MultisigHMAC.SHA384_BYTES; // $ExpectType 48
MultisigHMAC.SHA384_KEYBYTES; // $ExpectType 128
MultisigHMAC.SHA384_PRIMITIVE; // $ExpectType "sha384"
MultisigHMAC.SHA512_BYTES; // $ExpectType 64
MultisigHMAC.SHA512_KEYBYTES; // $ExpectType 128
MultisigHMAC.SHA512_PRIMITIVE; // $ExpectType "sha512"
MultisigHMAC.SHA512_256_BYTES; // $ExpectType 32
MultisigHMAC.SHA512_256_KEYBYTES; // $ExpectType 128
MultisigHMAC.SHA512_256_PRIMITIVE; // $ExpectType "sha512_256"

MultisigHMAC.keysCount(1); // $ExpectType number
MultisigHMAC.keyIndexes(1); // $ExpectType number[]

const multisigHmac = new MultisigHMAC(); // $ExpectType MultisigHMAC
new MultisigHMAC('sha256'); // $ExpectType MultisigHMAC
new MultisigHMAC('sha384'); // $ExpectType MultisigHMAC
new MultisigHMAC('sha512'); // $ExpectType MultisigHMAC
new MultisigHMAC('sha512_256'); // $ExpectType MultisigHMAC
// @ts-expect-error
new MultisigHMAC('foo');

const key = multisigHmac.keygen(0); // $ExpectType Key
multisigHmac.keygen(0, Buffer.alloc(0)); // $ExpectType Key

multisigHmac.seedgen(); // $ExpectType Buffer
multisigHmac.seedgen(Buffer.alloc(0)); // $ExpectType Buffer

multisigHmac.deriveKey(Buffer.alloc(0), 0); // $ExpectType Key
multisigHmac.deriveKey(Buffer.alloc(0), 0, Buffer.alloc(0)); // $ExpectType Key

const signature = multisigHmac.sign(key, 'foo'); // $ExpectType Signature
multisigHmac.sign(key, 'foo', Buffer.alloc(0)); // $ExpectType Signature
multisigHmac.sign(key, Buffer.from('foo')); // $ExpectType Signature
multisigHmac.sign(key, Buffer.from('foo'), Buffer.alloc(0)); // $ExpectType Signature

multisigHmac.combine([signature, signature] as const); // $ExpectType Signature
multisigHmac.combine([signature, signature] as const, Buffer.alloc(0)); // $ExpectType Signature

multisigHmac.verify([key, key] as const, signature, 'foo', 1); // $ExpectType boolean
multisigHmac.verify([key, key] as const, signature, 'foo', 1, Buffer.alloc(0)); // $ExpectType boolean
multisigHmac.verify([key, key] as const, signature, Buffer.from('foo'), 1); // $ExpectType boolean
multisigHmac.verify([key, key] as const, signature, Buffer.from('foo'), 1, Buffer.alloc(0)); // $ExpectType boolean

multisigHmac.verifyDerived(Buffer.alloc(0), signature, 'foo', 1); // $ExpectType boolean
multisigHmac.verifyDerived(Buffer.alloc(0), signature, 'foo', 1, Buffer.alloc(0)); // $ExpectType boolean
multisigHmac.verifyDerived(Buffer.alloc(0), signature, 'foo', 1, Buffer.alloc(0), Buffer.alloc(0)); // $ExpectType boolean
multisigHmac.verifyDerived(Buffer.alloc(0), signature, Buffer.from('foo'), 1); // $ExpectType boolean
multisigHmac.verifyDerived(Buffer.alloc(0), signature, Buffer.from('foo'), 1, Buffer.alloc(0)); // $ExpectType boolean
multisigHmac.verifyDerived(Buffer.alloc(0), signature, Buffer.from('foo'), 1, Buffer.alloc(0), Buffer.alloc(0)); // $ExpectType boolean

key.index; // $ExpectType number
key.key; // $ExpectType Buffer

signature.bitfield; // $ExpectType number
signature.signature; // $ExpectType Buffer
