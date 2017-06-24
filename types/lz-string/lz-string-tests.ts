const input = "Someting to compress";
let encoded: string;
let decoded: string;
let encodedU8: Uint8Array;

encoded = LZString.compress(input);
decoded = LZString.decompress(encoded);
encoded = LZString.compressToUTF16(input);
decoded = LZString.decompressFromUTF16(encoded);
encoded = LZString.compressToBase64(input);
decoded = LZString.decompressFromBase64(encoded);
encoded = LZString.compressToEncodedURIComponent(input);
decoded = LZString.compressToEncodedURIComponent(encoded);
encodedU8 = LZString.compressToUint8Array(input);
decoded = LZString.decompressFromUint8Array(encodedU8);
