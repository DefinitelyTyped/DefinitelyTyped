import rword = require('rword');

rword.generate(); // $ExpectType string
rword.generate(5, { length: 5 }); // $ExpectType string[]
rword.generate(3, { length: '3-4' }); // $ExpectType string[]
rword.generate(5, { contains: '.*ed' }); // $ExpectType string[]
rword.generate(5, { contains: 'af' }); // $ExpectType string[]
rword.generate(5, { contains: /.*ing$/ }); // $ExpectType string[]
rword.generate(3, { capitalize: 'all' }); // $ExpectType string[]
rword.generate(3, { capitalize: 'first' }); // $ExpectType string[]
rword.generateFromPool(5); // $ExpectType string[]
rword.shuffle(); // $ExpectType void
