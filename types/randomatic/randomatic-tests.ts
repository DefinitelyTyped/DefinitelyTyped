import randomize = require('randomatic');

randomize('*', 10); // $ExpectedType string
randomize('?', 20, { chars: 'jonschlinkert' }); // $ExpectedType string
randomize('*', 20, { exclude: '0oOiIlL1' }); // $ExpectedType string
randomize(10); // $ExpectTYpe string
