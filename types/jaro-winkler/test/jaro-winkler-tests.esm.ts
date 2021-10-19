import distance from 'jaro-winkler';

distance('hello', 'hllo'); // $ExpectType number
