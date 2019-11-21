import bytewise = require('bytewise');

// $ExpectType Buffer
bytewise.encode([1, 2, 3]);

// $ExpectType any
bytewise.decode(bytewise.encode([1, 2 , 3]));

// $ExpectType Buffer
bytewise.encode(bytewise.sorts.array.bound.lower(['123', -1, 0x123, Buffer.from('test')]));
