import isBlank = require('is-blank');

isBlank([]);              // => true
isBlank({});              // => true
isBlank(0);               // => true
isBlank(() => {});    // => true
isBlank(null);            // => true
isBlank(undefined);       // => true
isBlank('');              // => true
isBlank('    ');          // => true
isBlank('\r\t\n ');       // => true

isBlank(['a', 'b']);      // => false
isBlank({ a: 'b' });      // => false
isBlank('string');        // => false
isBlank(42);              // => false
isBlank((a: number, b: number) => a + b);
