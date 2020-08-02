import hexColorRegex = require('hex-color-regex');

hexColorRegex(); // $ExpectType RegExp
hexColorRegex({ strict: true }); // $ExpectType RegExp
