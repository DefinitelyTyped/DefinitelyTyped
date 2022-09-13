import paths = require('npm-paths');

paths(); // $ExpectType string[]
paths('some/directory'); // $ExpectType string[]
paths({ cwd: 'some/directory' }); // $ExpectType string[]
