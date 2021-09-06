import setTZ = require('set-tz');

// $ExpectType void
setTZ('UTC');

// $ExpectType void
setTZ();

// $ExpectError
setTZ(1);
