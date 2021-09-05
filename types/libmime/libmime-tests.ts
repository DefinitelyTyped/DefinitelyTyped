import libmime = require('libmime');

libmime.encodeWord('foo'); // $ExpectType string
libmime.encodeWord('foo', 'Q'); // $ExpectType string
