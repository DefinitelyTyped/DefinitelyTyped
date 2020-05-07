import * as util from 'util';
import * as fs from 'fs';
import promisify = require('util.promisify');

import 'util.promisify/auto';

/**
 * The `expectType` function from https://www.npmjs.com/package/tsd,
 * except instead of returning `void`, it returns `T`.
 */
declare function expectType<T>(value: T): T;

expectType<typeof fs.readFile.__promisify__>(promisify(fs.readFile));
expectType<typeof fs.readFile.__promisify__>(util.promisify(fs.readFile));

// $ExpectType typeof promisify | typeof promisify
let implementation = promisify.getPolyfill();
implementation = promisify.shim();

// $ExpectType typeof promisify
const polyfillImpl = promisify.implementation;
implementation = polyfillImpl;

import getPolyfill = require('util.promisify/polyfill');
implementation = getPolyfill();

import shimUtilPromisify = require('util.promisify/shim');
implementation = shimUtilPromisify();

// The `promisify.custom` symbols are considered equal by the type system:

expectType<typeof util.promisify.custom>(implementation.custom); // $ExpectType typeof custom
expectType<typeof util.promisify.custom>(polyfillImpl.custom); // $ExpectType typeof custom
expectType<typeof implementation.custom>(util.promisify.custom); // $ExpectType typeof custom
expectType<typeof implementation.custom>(polyfillImpl.custom); // $ExpectType typeof custom
expectType<typeof polyfillImpl.custom>(implementation.custom); // $ExpectType typeof custom
expectType<typeof polyfillImpl.custom>(util.promisify.custom); // $ExpectType typeof custom

promisify.customPromisifyArgs; // $ExpectType typeof customPromisifyArgs | undefined
polyfillImpl.customPromisifyArgs; // $ExpectType typeof customPromisifyArgs
implementation.customPromisifyArgs; // $ExpectType typeof customPromisifyArgs | undefined
