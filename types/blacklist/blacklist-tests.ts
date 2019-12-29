const someInput = { a: 1, b: 2, c: 3 };

import blacklist = require('blacklist');

blacklist(someInput, 'b', 'c');
// => { a: 1 }

blacklist(someInput, {
    a: true,   // a will not be in the result
    b: false,  // b will be in the result
    c: 1 > 2   // false, therefore c will be in the result
});
// => { b: 2, c: 3 }
