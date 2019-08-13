import { add } from 'ramda';

// $ExpectType (b: number) => number
add(3);

// $ExpectType number
add(2, 3); // =>  5

// $ExpectType number
add(7)(10); // => 17

// $ExpectType string
add('Hello', ' World'); // =>  "Hello World"

// $ExpectType string
add('Hello')(' World'); // =>  "Hello World"
