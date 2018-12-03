import deprecate = require('deprecate');

deprecate('someMethod');
deprecate('someMethod', 'This is deprecated');
deprecate('someMethod', 'This is deprecated', 'foo', 'bar');

deprecate.color = '\x1b[31;1m';
deprecate.silence = true;
deprecate.stream = process.stderr;
