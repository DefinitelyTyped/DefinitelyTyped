import setTZ = require('set-tz');

// $ExpectType void
setTZ('UTC');

// $ExpectType void
setTZ();

// @ts-expect-error
setTZ(1);
