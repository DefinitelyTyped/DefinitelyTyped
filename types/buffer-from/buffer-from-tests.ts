import bufferFrom = require('buffer-from');

bufferFrom([1, 2, 3, 4]); // $ExpectType Buffer
bufferFrom(new Uint8Array([1, 2, 3, 4]).buffer, 1, 2); // $ExpectType Buffer
bufferFrom('test', 'utf8'); // $ExpectType Buffer
bufferFrom(bufferFrom('test')); // $ExpectType Buffer
