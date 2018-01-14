import prettyBytes = require('pretty-bytes');

prettyBytes(1337);
// => '1.34 kB'

prettyBytes(100);
// => '100 B'
