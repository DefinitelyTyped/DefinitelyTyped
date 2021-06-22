import deflatejs = require("deflate-js");

deflatejs.deflate(new Uint8Array([1, 2, 3, 4]), 3); // $ExpectType Uint8Array
deflatejs.deflate(new Uint8Array([1, 2, 3, 4])); // $ExpectType Uint8Array
deflatejs.inflate(new Uint8Array([1, 2, 3, 4])); // $ExpectType Uint8Array
