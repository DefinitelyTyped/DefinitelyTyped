import convert = require('heic-convert');

// $ExpectType Promise<ArrayBuffer>
convert({ buffer: new ArrayBuffer(10), format: 'PNG' });

// $ExpectType Promise<ArrayBuffer>
convert({ buffer: new ArrayBuffer(10), format: 'JPEG', quality: 0.4 });

// $ExpectType Promise<Convertible[]>
convert.all({ buffer: new ArrayBuffer(10), format: 'PNG' });

// $ExpectType Promise<Convertible[]>
convert.all({ buffer: new ArrayBuffer(10), format: 'JPEG', quality: 0.4 });
