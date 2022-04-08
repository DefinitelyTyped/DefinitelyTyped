import cwd = require('cwd');

cwd(); // $ExpectType string
cwd('one/two.js'); // $ExpectType string
cwd('one', 'two.js'); // $ExpectType string
cwd(['one', 'two.js']); // $ExpectType string
