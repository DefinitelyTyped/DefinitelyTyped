import DOMException = require('domexception');

new DOMException(); // $ExpectType DOMException
new DOMException('foo'); // $ExpectType DOMException
new DOMException('foo', 'SyntaxError'); // $ExpectType DOMException
