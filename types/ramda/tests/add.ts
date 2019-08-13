import { add } from 'ramda';

add(3);

add(2, 3); // =>  5

add(7)(10); // => 17

add('Hello', ' World'); // =>  "Hello World"

add('Hello')(' World'); // =>  "Hello World"
