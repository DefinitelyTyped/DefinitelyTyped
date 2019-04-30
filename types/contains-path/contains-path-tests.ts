import containsPath = require('contains-path');

containsPath('foo/bar', 'foo'); // $ExpectType boolean
containsPath('foo/bar', 'FOO', { nocase: true }); // $ExpectType boolean
containsPath('foobar', 'foo', { partialMatch: true }); // $ExpectType boolean
