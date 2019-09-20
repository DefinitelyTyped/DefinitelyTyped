import minIndent = require('min-indent');

const str = '\tunicorn\n\t\tcake';
// $ExpectType number
minIndent(str);
