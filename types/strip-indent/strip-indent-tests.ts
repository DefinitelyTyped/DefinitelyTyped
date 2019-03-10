import stripIndent = require('strip-indent');

const str = '\tunicorn\n\t\tcake';
// $ExpectType string
stripIndent(str);
