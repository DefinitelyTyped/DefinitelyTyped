import { version, compress, decompress } from 'lzbase62';
import lzbase62 = require('lzbase62');

declare const data: string;

lzbase62.version; // $ExpectType string
version; // $ExpectType string

lzbase62.compress(data); // $ExpectType string
compress(data); // $ExpectType string
lzbase62.compress(data, {}); // $ExpectType string
compress(data, {}); // $ExpectType string
// $ExpectType string
lzbase62.compress(data, {
  onEnd() {},
});
// $ExpectType string
compress(data, {
  onEnd() {},
});
// $ExpectType ""
lzbase62.compress(data, {
  onData() {},
});
// $ExpectType ""
compress(data, {
  onData() {},
});
// $ExpectType ""
lzbase62.compress(data, {
  onData() {},
  onEnd() {},
});
// $ExpectType ""
compress(data, {
  onData() {},
  onEnd() {},
});
compress(data, {
  onData(data) {
    data; // $ExpectType string
  },
});
lzbase62.compress(data, {
  onData(data) {
    data; // $ExpectType string
  },
});

lzbase62.decompress(data); // $ExpectType string
decompress(data); // $ExpectType string
lzbase62.decompress(data, {}); // $ExpectType string
decompress(data, {}); // $ExpectType string
// $ExpectType string
lzbase62.decompress(data, {
  onEnd() {},
});
// $ExpectType string
decompress(data, {
  onEnd() {},
});
// $ExpectType ""
lzbase62.decompress(data, {
  onData() {},
});
// $ExpectType ""
decompress(data, {
  onData() {},
});
// $ExpectType ""
lzbase62.decompress(data, {
  onData() {},
  onEnd() {},
});
// $ExpectType ""
decompress(data, {
  onData() {},
  onEnd() {},
});
decompress(data, {
  onData(data) {
    data; // $ExpectType string
  },
});
lzbase62.decompress(data, {
  onData(data) {
    data; // $ExpectType string
  },
});
