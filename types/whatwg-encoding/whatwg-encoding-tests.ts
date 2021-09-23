import whatwgEncoding = require('whatwg-encoding');

console.assert(whatwgEncoding.labelToName('latin1') === 'windows-1252');
console.assert(whatwgEncoding.labelToName('  CYRILLic ') === 'ISO-8859-5');

console.assert(whatwgEncoding.isSupported('IBM866'));

// Not supported by the Encoding Standard
console.assert(!whatwgEncoding.isSupported('UTF-32'));

// In the Encoding Standard, but this package can't decode it
console.assert(!whatwgEncoding.isSupported('x-mac-cyrillic'));

console.assert(whatwgEncoding.getBOMEncoding(Buffer.from([0xfe, 0xff])) === 'UTF-16BE');
console.assert(whatwgEncoding.getBOMEncoding(Buffer.from([0x48, 0x69])) === null);

console.assert(whatwgEncoding.decode(Buffer.from([0x48, 0x69]), 'UTF-8') === 'Hi');
