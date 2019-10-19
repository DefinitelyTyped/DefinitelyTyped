import callBind = require('es-abstract/helpers/callBind');
import { apply as applyBind } from 'es-abstract/helpers/callBind';

const any: unknown = undefined;

callBind(() => {}); // $ExpectType (thisArg: unknown) => void
callBind(Object.prototype.hasOwnProperty); // $ExpectType (thisArg: unknown, v: string | number | symbol) => boolean
callBind(Object.prototype.hasOwnProperty, any as object); // $ExpectType (v: string | number | symbol) => boolean

applyBind(() => {}); // $ExpectType (args: [unknown]) => void
applyBind(Object.prototype.hasOwnProperty); // $ExpectType (args: [unknown, string | number | symbol]) => boolean
applyBind(Object.prototype.hasOwnProperty, any as object); // $ExpectType (args: [string | number | symbol]) => boolean
