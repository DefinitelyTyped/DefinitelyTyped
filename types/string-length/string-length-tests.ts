import stringLength = require('string-length');

stringLength('🐴'); // $ExpectType number
stringLength('\u001B[1municorn\u001B[22m'); // $ExpectType number
