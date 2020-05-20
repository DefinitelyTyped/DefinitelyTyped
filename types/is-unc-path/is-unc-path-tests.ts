import isUncPath = require('is-unc-path');

isUncPath('\\/foo/bar'); // $ExpectType boolean
