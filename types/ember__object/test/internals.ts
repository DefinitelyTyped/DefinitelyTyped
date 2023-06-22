import { guidFor } from '@ember/object/internals';

// $ExpectType string
const strGuid = guidFor('a string');
// $ExpectType string
const numGuid = guidFor(123);
// $ExpectType string
const objGuid = guidFor({ hello: 'world' });
// $ExpectType string
const arrGuid = guidFor([1, 2, 3]);
