import callBind = require('call-bind');
import { apply as applyBind } from 'call-bind';

declare const unknown: unknown;

callBind(() => {}); // $ExpectType (thisArg: unknown) => void
callBind((a: string, b: number) => {}, null, 'foo'); // $ExpectType (b: number) => void
callBind(Object.prototype.hasOwnProperty); // $ExpectType (thisArg: unknown, v: string | number | symbol) => boolean
callBind(Object.prototype.hasOwnProperty, unknown); // $ExpectType (v: string | number | symbol) => boolean

applyBind(() => {}); // $ExpectType (thisArg: unknown, args: readonly []) => void
applyBind((a: string, b: number) => {}, null, 'foo'); // $ExpectType (args: readonly [number]) => void
applyBind(Object.prototype.hasOwnProperty); // $ExpectType (thisArg: unknown, args: readonly [string | number | symbol]) => boolean
applyBind(Object.prototype.hasOwnProperty, unknown); // $ExpectType (args: readonly [string | number | symbol]) => boolean
