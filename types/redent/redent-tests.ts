import redent = require('redent');

// $ExpectType string
redent('\n  foo\n    bar\n');
// $ExpectType string
redent('\n  foo\n    bar\n', 1);
// $ExpectType string
redent('\n  foo\n    bar\n', 1, ' ');
