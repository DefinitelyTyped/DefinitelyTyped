import { Bitstring } from "@digitalbazaar/bitstring";

Bitstring.decodeBits({ encoded: "abc" }); // $ExpectType Promise<Uint8Array>
Bitstring.uncompressBits({ compressed: new Uint8Array([]) }); // $ExpectType Promise<Uint8Array>
new Bitstring({ length: 1 }); // $ExpectType Bitstring
new Bitstring({ buffer: new Uint8Array([]) }); // $ExpectType Bitstring

const bitstring = new Bitstring({ length: 1 });
bitstring.compressBits(); // $ExpectType Promise<Uint8Array>
bitstring.encodeBits(); // $ExpectType Promise<string>
bitstring.get(0); // $ExpectType boolean
bitstring.set(0, true); // $ExpectType void
