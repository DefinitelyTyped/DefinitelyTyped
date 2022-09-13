import * as brotli from 'brotli';
import compress = require('brotli/compress');
import decompress = require('brotli/decompress');

// $ExpectType Uint8Array
brotli.compress(Buffer.from('hello'));
// $ExpectType Uint8Array
brotli.decompress(Buffer.from('hello'));

// $ExpectType Uint8Array
compress(Buffer.from('hello'));
compress(Buffer.from('hello'), {});
// $ExpectType Uint8Array
decompress(Buffer.from('hello'));

// @ts-expect-error
compress(Buffer.from('hello'), { mode: 3 });
// @ts-expect-error
compress(Buffer.from('hello'), { quality: 12 });
