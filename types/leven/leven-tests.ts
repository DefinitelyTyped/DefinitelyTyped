import leven = require('leven');

leven('baz', 'bar');
// => "1"

leven('foo', 'bar');
// => "3"
