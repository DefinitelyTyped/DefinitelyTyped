import randomItem = require('random-item');

// $ExpectType string
randomItem(['pony', 'unicorn', 'rainbow']);
// $ExpectType string | number
randomItem(['pony', 'unicorn', 'rainbow', 1]);
