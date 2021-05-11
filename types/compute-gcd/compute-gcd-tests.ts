import gcd = require('compute-gcd');

// $ExpectType number
gcd(1, 2, 3);
// $ExpectType number
gcd([1, 2, 3]);
// $ExpectType number
gcd([{ foo: 1 }, { foo: 2 }, { foo: 3 }], ({ foo }) => foo);
// $ExpectType null
gcd(1);
// $ExpectType null
gcd([1]);
// $ExpectType null
gcd([{ foo: 1 }], ({ foo }) => foo);
