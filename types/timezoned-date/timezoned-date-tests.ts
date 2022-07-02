import { makeConstructor } from 'timezoned-date';

makeConstructor(0); // $ExpectType DateConstructor

// @ts-expect-error
makeConstructor('0');
