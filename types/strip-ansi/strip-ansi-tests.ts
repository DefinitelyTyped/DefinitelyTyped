import stripAnsi = require('strip-ansi');

stripAnsi('\u001b[4mcake\u001b[0m');
// => 'cake'
