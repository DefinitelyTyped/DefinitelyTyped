import {
    isHexPrefixed,
    stripHexPrefix,
    padToEven,
    intToHex,
    intToBuffer,
    getBinarySize,
    arrayContainsArray,
    toUtf8,
    toAscii,
    fromUtf8,
    fromAscii,
    getKeys,
    isHexString,
} from 'ethjs-util';

const isHexPrefixedResult: boolean = isHexPrefixed('hoo');
const stripHexPrefixResult: string = stripHexPrefix('hoo');
const padToEvenResult: string = padToEven('hoo');
const intToHexResult: string = intToHex(1);
const intToBufferResult: Buffer = intToBuffer(1);
const getBinarySizeResult: number = getBinarySize('hoo');
const arrayContainsArraySomeResult: boolean = arrayContainsArray([1], [1], true);
const arrayContainsArrayResult: boolean = arrayContainsArray([1], [1]);
const toUtf8Result: string = toUtf8('hoo');
const toAsciiResult: string = toAscii('hoo');
const fromUtf8Result: string = fromUtf8('hoo');
const fromAsciiResult: string = fromAscii('hoo');
const getKeysResult: any[] = getKeys([{ hoo: 123 }], 'hoo');
const getKeysAlloEmptyResult: any[] = getKeys([{ hoo: 123 }], 'hoo', true);
const isHexStringResult: boolean = isHexString('hoo');
const isHexStringWithNumberResult: boolean = isHexString('hoo', 123);
