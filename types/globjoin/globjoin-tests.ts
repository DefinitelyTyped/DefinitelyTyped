import join = require('globjoin');

join(); // $ExpectType string
join('1', '2', '3'); // $ExpectType string
join('1', '2', ['a', 'b']); // $ExpectType string[]
