import Marshal = require('marshal');

const marshall = new Marshal(''); // $ExpectType Marshal
marshall.load(Buffer.from('')); // $ExpectType Marshal
marshall.load(''); // $ExpectType Marshal
marshall.parsed; // $ExpectType unknown
marshall.toJSON(); // $ExpectType unknown
marshall.toString(); // $ExpectType string
