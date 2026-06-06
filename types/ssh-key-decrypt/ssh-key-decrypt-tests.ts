import decrypt = require("ssh-key-decrypt");

decrypt("", ""); // $ExpectType Buffer || Buffer<ArrayBufferLike>
decrypt(new Buffer(""), ""); // $ExpectType Buffer || Buffer<ArrayBufferLike>
decrypt("", "", "buffer"); // $ExpectType Buffer || Buffer<ArrayBufferLike>
decrypt(new Buffer(""), "", "buffer"); // $ExpectType Buffer || Buffer<ArrayBufferLike>
decrypt("", "", "latin1"); // $ExpectType string
decrypt(new Buffer(""), "", "latin1"); // $ExpectType string
