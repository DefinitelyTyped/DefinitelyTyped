import { makeConstructor } from 'timezoned-date';

makeConstructor(0); // $ExpectType DateConstructor

makeConstructor('0'); // $ExpectError
