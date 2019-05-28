import { DateLike } from 'goog:goog.date';

// tslint:disable:ban-types

// Test the type assertions
function wantsArray(a: any[]) {}
function wantsBoolean(b: boolean) {}
function wantsDateLike(d: DateLike) {}
function wantsFunction(f: Function) {}
function wantsNumber(n: number) {}
function wantsObject(o: Object) {}
function wantsString(s: string) {}
function allowsNull(s: string|null) {}

const obj: string|any[]|boolean|DateLike|(() => void)|number|Object|null|undefined = undefined;
if (goog.isArray(obj)) {
  wantsArray(obj);
}
if (goog.isBoolean(obj)) {
  wantsBoolean(obj);
}
if (goog.isDateLike(obj)) {
  wantsDateLike(obj);
}
if (goog.isFunction(obj)) {
  wantsFunction(obj);
}
if (goog.isNumber(obj)) {
  wantsNumber(obj);
}
if (goog.isObject(obj)) {
  wantsObject(obj);
}
if (goog.isString(obj)) {
  wantsString(obj);
}

const s: string|undefined|null = '';
if (goog.isDef(s)) {
  allowsNull(s);
}
if (goog.isDefAndNotNull(s)) {
  wantsString(s);
}
