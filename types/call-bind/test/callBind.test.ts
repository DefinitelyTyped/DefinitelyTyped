import callBind = require('call-bind');
import { apply as applyBind } from 'call-bind';

declare const unknown: unknown;

callBind(() => {}); // $ExpectType (thisArg: unknown) => void
callBind((a: string, b: number) => {}, null, 'foo'); // $ExpectType (b: number) => void

// $ExpectType (thisArg: unknown, v: string | number | symbol) => boolean || (thisArg: unknown, v: PropertyKey) => boolean
callBind(Object.prototype.hasOwnProperty);
// $ExpectType (v: string | number | symbol) => boolean || (v: PropertyKey) => boolean
callBind(Object.prototype.hasOwnProperty, unknown);

applyBind(() => {}); // $ExpectType (thisArg: unknown, args: readonly []) => void
applyBind((a: string, b: number) => {}, null, 'foo'); // $ExpectType (args: readonly [b: number]) => void

// $ExpectType (thisArg: unknown, args: readonly [v: string | number | symbol]) => boolean || (thisArg: unknown, args: readonly [v: PropertyKey]) => boolean
applyBind(Object.prototype.hasOwnProperty);
// $ExpectType (args: readonly [v: string | number | symbol]) => boolean || (args: readonly [v: PropertyKey]) => boolean
applyBind(Object.prototype.hasOwnProperty, unknown);

// These are invalid because of `package.json#exports`:
// @ts-expect-error
import callBindIllegal1 = require('call-bind/index');
// @ts-expect-error
import callBindIllegal2 = require('call-bind/index.js');
