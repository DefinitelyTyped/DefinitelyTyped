import names = require('all-the-package-names');
// $ExpectType string[]
names.slice(0, 5);
// $ExpectType number
names.indexOf('superagent');
