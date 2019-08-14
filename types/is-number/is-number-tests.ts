/// <reference types="node" />

import isNumber = require('is-number');

const numberTest: boolean = isNumber(-1.1);
const stringTest: boolean = isNumber('-1.1');
const arrayTest: boolean = isNumber([]);
const functionTest: boolean = isNumber(() => {});
const arrayConstructorTest: boolean = isNumber(new Array('abc'));
const bufferTest: boolean = isNumber(Buffer.from('abc'));
const nullTest: boolean = isNumber(null);
const undefinedTest: boolean = isNumber(undefined);
const objectTest: boolean = isNumber({ abc: 'abc' });

const anyValue: any = 5;
if (isNumber(anyValue)) {
    const guardTest: number | string = anyValue;
}

const someNumber = 5;
if (isNumber(someNumber)) {
    const test: number = someNumber;
}

const someString = '5';
if (isNumber(someString)) {
    const test: string = someString;
}
