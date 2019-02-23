import * as preset from './preset';

const util = AMap.Util;

// $ExpectType string
util.colorNameToHex('colorName');

// $ExpectType string
util.rgbHex2Rgba('rgbHex');

// $ExpectType string
util.argbHex2Rgba('argbHex');

// $ExpectType boolean
util.isEmpty({});
// $ExpectError
util.isEmpty(1);

// $ExpectType number[]
util.deleteItemFromArray([1], 1);

// $ExpectType number[]
util.deleteItemFromArrayByIndex([1], 1);

// $ExpectType number
util.indexOf([1], 1);
// $ExpectError
util.indexOf([1], '1');

// $ExpectType number
util.format(1);
// $ExpectType number
util.format(1, 1);

declare const value1: number | number[];
// $ExpectType boolean
util.isArray(value1);
if (util.isArray(value1)) {
    // $ExpectType number[]
    value1;
} else {
    // $ExpectType number
    value1;
}

declare const value2: number | HTMLElement;
// $ExpectType boolean
util.isDOM(value2);
if (util.isDOM(value2)) {
    // $ExpectType HTMLElement
    value2;
} else {
    // $ExpectType number
    value2;
}

// $ExpectType boolean
util.includes([1], 1);
// $ExpectError
util.includes([1], '1');

// $ExpectType number
util.requestIdleCallback(() => { });
// $ExpectType number
const idleCallbackHandle = util.requestIdleCallback(() => { }, { timeout: 1 });

// $ExpectType void
util.cancelIdleCallback(idleCallbackHandle);

// $ExpectType number
util.requestAnimFrame(() => { });
// $ExpectType number
const animFrameHandle = util.requestAnimFrame(function () {
    // $ExpectType number
    this.test;
}, { test: 1 });

// $ExpectType void
util.cancelAnimFrame(animFrameHandle);
