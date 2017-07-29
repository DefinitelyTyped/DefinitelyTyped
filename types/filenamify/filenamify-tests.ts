import * as filenamify from 'filenamify';

filenamify('<foo/bar>');
// => 'foo!bar'

filenamify('foo:"bar"', {replacement: '🐴'});
// => 'foo🐴bar'

filenamify.path('/some/!path');
// => '/some/path'
