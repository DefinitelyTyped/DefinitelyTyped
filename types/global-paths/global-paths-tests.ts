import paths = require('global-paths');

paths(); // $ExpectType string[]
paths('foo'); // $ExpectType string[]
