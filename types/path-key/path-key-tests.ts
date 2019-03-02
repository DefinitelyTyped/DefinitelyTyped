import pathKey = require('path-key');

pathKey(); // $ExpectType string
pathKey({ env: {} }); // $ExpectType string
pathKey({ platform: 'win32' }); // $ExpectType string
