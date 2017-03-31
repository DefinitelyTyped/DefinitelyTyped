import stripBom = require('strip-bom');

stripBom('\uFEFFunicorn');
// => 'unicorn'
