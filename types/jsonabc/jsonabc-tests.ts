import * as myJsonAbc from 'jsonabc';

myJsonAbc.sortObj({ c: 0, b: 1, a: 0 });
myJsonAbc.sortObj({ c: 0, b: 1, a: 0 }, false);

myJsonAbc.sort('{ c: 0, b: 1, a: 0 }');
myJsonAbc.sort('{ c: 0, b: 1, a: 0 }', true);

myJsonAbc.cleanJSON('{ c: 0, b: 1, a: 0 }');

interface MyInterface { a: number; }
const test: MyInterface = { a: 1 };

myJsonAbc.sortObj(test); // $ExpectType MyInterface
