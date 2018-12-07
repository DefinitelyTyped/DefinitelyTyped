import compressible = require('compressible');

// $ExpectType boolean | undefined
compressible('text/html');
compressible('image/png');
