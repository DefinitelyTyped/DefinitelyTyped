import callBind = require('es-abstract/helpers/callBind');
import { apply as applyBind } from 'es-abstract/helpers/callBind';

declare const any: unknown;

callBind(() => {}); // $ExpectType (thisArg: unknown) => void
callBind(Object.prototype.hasOwnProperty); // $ExpectType (thisArg: unknown, v: string | number | symbol) => boolean || (thisArg: unknown, v: PropertyKey) => boolean
callBind(Object.prototype.hasOwnProperty, any); // $ExpectType (v: string | number | symbol) => boolean || (v: PropertyKey) => boolean

applyBind(() => {}); // $ExpectType (thisArg: unknown, args: readonly []) => void
// $ExpectType (thisArg: unknown, args: readonly [string | number | symbol]) => boolean || (thisArg: unknown, args: readonly [v: PropertyKey]) => boolean
applyBind(Object.prototype.hasOwnProperty);
// $ExpectType (args: readonly [string | number | symbol]) => boolean || (args: readonly [v: PropertyKey]) => boolean
applyBind(Object.prototype.hasOwnProperty, any);
