import distance = require('jaro-winkler');

distance('hello', 'hllo'); // $ExpectType number
