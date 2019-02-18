import pPipe = require('p-pipe');

const addUnicorn = (str: string) => Promise.resolve(`${str} Unicorn`);
const addRainbow = (str: string) => Promise.resolve(`${str} Rainbow`);

const pipeline = pPipe(addUnicorn, addRainbow);

pipeline('❤️'); // $ExpectType Promise<string>

const strToInt = (s: string) => Promise.resolve(1);
const intToBool = (i: number) => Promise.resolve(true);
const boolToObj = (b: boolean) => Promise.resolve({});
const objToNull = (o: object) => Promise.resolve(null);
const nullToVoid = (n: null) => Promise.resolve(undefined);
const voidToStr = (u: undefined) => Promise.resolve('');

pPipe(strToInt); // $ExpectType PromiseTask<string, number>
pPipe(strToInt, intToBool); // $ExpectType PromiseTask<string, boolean>
pPipe(strToInt, intToBool, boolToObj); // $ExpectType PromiseTask<string, {}>
pPipe(strToInt, intToBool, boolToObj, objToNull); // $ExpectType PromiseTask<string, null>
pPipe(strToInt, intToBool, boolToObj, objToNull, nullToVoid); // $ExpectType PromiseTask<string, undefined>
pPipe(strToInt, intToBool, boolToObj, objToNull, nullToVoid, voidToStr); // $ExpectType PromiseTask<string, string>
pPipe(strToInt, intToBool, boolToObj, objToNull, nullToVoid, voidToStr, strToInt); // $ExpectType PromiseTask<string, number>
pPipe(strToInt, intToBool, boolToObj, objToNull, nullToVoid, voidToStr, strToInt, intToBool); // $ExpectType PromiseTask<string, boolean>
// $ExpectType PromiseTask<any, any>
pPipe(
    strToInt,
    intToBool,
    boolToObj,
    objToNull,
    nullToVoid,
    voidToStr,
    strToInt,
    intToBool,
    boolToObj
);

pPipe([strToInt]); // $ExpectType PromiseTask<string, number>
pPipe([strToInt, intToBool]); // $ExpectType PromiseTask<string, boolean>
pPipe([strToInt, intToBool, boolToObj]); // $ExpectType PromiseTask<string, {}>
pPipe([strToInt, intToBool, boolToObj, objToNull]); // $ExpectType PromiseTask<string, null>
pPipe([strToInt, intToBool, boolToObj, objToNull, nullToVoid]); // $ExpectType PromiseTask<string, undefined>
pPipe([strToInt, intToBool, boolToObj, objToNull, nullToVoid, voidToStr]); // $ExpectType PromiseTask<string, string>
pPipe([strToInt, intToBool, boolToObj, objToNull, nullToVoid, voidToStr, strToInt]); // $ExpectType PromiseTask<string, number>
pPipe([strToInt, intToBool, boolToObj, objToNull, nullToVoid, voidToStr, strToInt, intToBool]); // $ExpectType PromiseTask<string, boolean>
// $ExpectType PromiseTask<any, any>
pPipe([
    strToInt,
    intToBool,
    boolToObj,
    objToNull,
    nullToVoid,
    voidToStr,
    strToInt,
    intToBool,
    boolToObj,
]);
