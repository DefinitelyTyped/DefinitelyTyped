import yn = require('yn');

yn('y'); // $ExpectType boolean | null
yn('mo', { lenient: true }); // $ExpectType boolean | null
yn('abomasum', { default: false }); // $ExpectType boolean
