import filenamify = require('filenamify');

filenamify('<foo/bar>');
// => 'foo!bar'

filenamify('foo:"bar"', {replacement: '🐴'});
// => 'foo🐴bar'

filenamify.path('/some/!path');
// => '/some/path'
