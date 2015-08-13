/// <reference path="lz-string.d.ts" />

var input = "Someting to compress";
var encoded: string;
var decoded: string;

encoded = LZString.compress(input);
decoded = LZString.decompress(encoded);
encoded = LZString.compressToUTF16(input);
decoded = LZString.decompressFromUTF16(encoded);
encoded = LZString.compressToBase64(input);
decoded = LZString.decompressFromBase64(encoded);