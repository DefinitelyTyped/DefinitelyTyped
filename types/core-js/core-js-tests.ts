interface Point { x: number; y: number; }
interface Point3D extends Point { z: number; }

let a: any;
let s: string;
let i: number;
let b: boolean;
let f: () => void;
let o: {};
let r: RegExp;
let sym: symbol;
let e: Error;
let date: Date;
let key: PropertyKey;
let point: Point;
let point3d: Point3D;
let arrayOfPoint: Point[];
let arrayOfPoint3D: Point3D[];
let arrayOfSymbol: symbol[];
let arrayOfPropertyKey: PropertyKey[];
let arrayOfAny: any[];
let arrayOfStringAny: Array<[string, any]>;
let arrayLikeOfAny: ArrayLike<any>;
let iterableOfPoint: Iterable<Point>;
let iterableOfStringPoint: Iterable<[string, Point]>;
let iterableOfPointPoint3D: Iterable<[Point, Point3D]>;
let iterableIteratorOfPoint: IterableIterator<Point>;
let iterableIteratorOfNumberPoint: IterableIterator<[number, Point]>;
let iterableIteratorOfNumber: IterableIterator<number>;
let iterableIteratorOfString: IterableIterator<string>;
let iterableIteratorOfPointPoint: IterableIterator<[Point, Point]>;
let iterableIteratorOfNode: IterableIterator<Node>;
let iterableIteratorOfStringPoint: IterableIterator<[string, Point]>;
let iterableIteratorOfAny: IterableIterator<any>;
let iterableIteratorOfPropertyKey: IterableIterator<PropertyKey>;
let iterableIteratorOfPropertyKeyPoint: IterableIterator<[PropertyKey, Point]>;
let nodeList: NodeList;
let pd: PropertyDescriptor;
let pdm: PropertyDescriptorMap;
let map: Map<string, Point>;
let set: Set<Point>;
let weakMap: WeakMap<Point, Point3D>;
let weakSet: WeakSet<Point>;
let $forOfPoint: $for<Point>;
let $forOfPoint3D: $for<Point3D>;
let promiseLikeOfPoint: PromiseLike<Point>;
let promiseLikeOfPoint3D: PromiseLike<Point3D>;
let promiseOfPoint: Promise<Point>;
let promiseOfPoint3D: Promise<Point3D>;
let promiseOfArrayOfPoint: Promise<Point[]>;
let promiseOfVoid: Promise<void>;
let dictOfPoint: Dict<Point>;
let dictOfPoint3D: Dict<Point3D>;
let dictOfAny: Dict<any>;

// #############################################################################################
// ECMAScript 6: Object & Function
// Modules: es6.object.assign, es6.object.is, es6.object.set-prototype-of,
//          es6.object.to-string, es6.function.name and es6.function.has-instance.
// #############################################################################################

point = Object.assign(point, point);
b = Object.is(point, point);
Object.setPrototypeOf(point, point);
s = f.name;
b = f[Symbol.hasInstance](point);

// #############################################################################################
// ECMAScript 6: Array
// Modules: es6.array.from, es6.array.of, es6.array.copy-within, es6.array.fill, es6.array.find,
//          and es6.array.find-index
// #############################################################################################

point = arrayOfPoint.find(p => b);
i = arrayOfPoint.findIndex(p => b);
arrayOfPoint = arrayOfPoint.fill(point, i, arrayOfPoint.length);
arrayOfPoint = arrayOfPoint.copyWithin(i, i, i);
a = arrayOfPoint[Symbol.unscopables];
arrayOfPoint = Array.from(arrayOfPoint);
arrayOfPoint = Array.from(iterableOfPoint);
arrayOfPoint3D = Array.from(arrayOfPoint, point => point3d);
arrayOfPoint3D = Array.from(arrayOfPoint, point => point3d, a);
arrayOfPoint3D = Array.from(iterableOfPoint, point => point3d);
arrayOfPoint3D = Array.from(iterableOfPoint, point => point3d, a);
arrayOfPoint = Array.of(point, point);

// #############################################################################################
// ECMAScript 6: String & RegExp
// Modules: es6.string.from-code-point, es6.string.raw, es6.string.code-point-at,
//          es6.string.ends-with, es6.string.includes, es6.string.repeat,
//          es6.string.starts-with, and es6.regexp
// #############################################################################################

i = s.codePointAt(i);
b = s.includes(s, i);
b = s.endsWith(s, i);
s = s.repeat(i);
b = s.startsWith(s, i);
s = String.fromCodePoint(i, i);
s = String.raw`abc`;
s = r.flags;

// #############################################################################################
// ECMAScript 6: Number & Math
// Modules: es6.number.constructor, es6.number.statics, and es6.math
// #############################################################################################

i = Number.EPSILON;
b = Number.isFinite(i);
b = Number.isInteger(i);
b = Number.isNaN(i);
b = Number.isSafeInteger(i);
i = Number.MAX_SAFE_INTEGER;
i = Number.MIN_SAFE_INTEGER;
i = Number.parseFloat(s);
i = Number.parseInt(s);
i = Number.parseInt(s, i);
i = Math.clz32(i);
i = Math.imul(i, i);
i = Math.sign(i);
i = Math.log10(i);
i = Math.log2(i);
i = Math.log1p(i);
i = Math.expm1(i);
i = Math.cosh(i);
i = Math.sinh(i);
i = Math.tanh(i);
i = Math.acosh(i);
i = Math.asinh(i);
i = Math.atanh(i);
i = Math.hypot(i, i);
i = Math.trunc(i);
i = Math.fround(i);
i = Math.cbrt(i);

// #############################################################################################
// ECMAScript 6: Symbols
// Modules: es6.symbol
// #############################################################################################

sym = Symbol();
sym = Symbol(s);
sym = Symbol.for(s);
s = Symbol.keyFor(sym);
sym = Symbol.hasInstance;
sym = Symbol.isConcatSpreadable;
sym = Symbol.iterator;
sym = Symbol.match;
sym = Symbol.replace;
sym = Symbol.search;
sym = Symbol.species;
sym = Symbol.split;
sym = Symbol.toPrimitive;
sym = Symbol.toStringTag;
sym = Symbol.unscopables;
b = o.hasOwnProperty(sym);
b = o.hasOwnProperty(i);
b = o.propertyIsEnumerable(sym);
b = o.propertyIsEnumerable(i);
arrayOfSymbol = Object.getOwnPropertySymbols(a);
pd = Object.getOwnPropertyDescriptor(a, sym);
pd = Object.getOwnPropertyDescriptor(a, i);
Object.defineProperty(a, sym, pd);
Object.defineProperty(a, i, pd);
s = Math[Symbol.toStringTag];
s = JSON[Symbol.toStringTag];

// Non-standard
Symbol.useSimple();
Symbol.userSetter();

// #############################################################################################
// ECMAScript 6: Collections
// Modules: es6.map, es6.set, es6.weak-map, and es6.weak-set
// #############################################################################################

map.clear();
map.delete(s);
map.forEach((value: Point, key: string) => { });
point = map.get(s);
b = map.has(s);
map = map.set(s, point);
i = map.size;
map = new Map<string, Point>();
map = new Map(iterableOfStringPoint);

set.clear();
set.delete(point);
set.forEach((value: Point, key: Point) => { });
b = set.has(point);
set = set.add(point);
i = set.size;
set = new Set<Point>();
set = new Set(iterableOfPoint);

weakMap.delete(point);
point3d = weakMap.get(point);
b = weakMap.has(point);
weakMap = weakMap.set(point, point3d);
weakMap = new WeakMap<Point, Point3D>();
weakMap = new WeakMap(iterableOfPointPoint3D);

weakSet.delete(point);
weakSet = weakSet.add(point);
b = weakSet.has(point);
weakSet = new WeakSet<Point>();
weakSet = new WeakSet(iterableOfPoint);

// #############################################################################################
// ECMAScript 6: Iterators
// Modules: es6.string.iterator, es6.array.iterator, es6.map, es6.set, web.dom.iterable
// #############################################################################################

iterableIteratorOfPoint = arrayOfPoint[Symbol.iterator]();
iterableIteratorOfNumberPoint = arrayOfPoint.entries();
iterableIteratorOfNumber = arrayOfPoint.keys();
iterableIteratorOfPoint = arrayOfPoint.values();
iterableIteratorOfStringPoint = map.entries();
iterableIteratorOfString = map.keys();
iterableIteratorOfPoint = map.values();
iterableIteratorOfStringPoint = map[Symbol.iterator]();
iterableIteratorOfPointPoint = set.entries();
iterableIteratorOfPoint = set.keys();
iterableIteratorOfPoint = set.values();
iterableIteratorOfPoint = set[Symbol.iterator]();
iterableIteratorOfNode = nodeList[Symbol.iterator]();

$for(iterableOfPoint).of((value: Point) => { });
arrayOfPoint = $for(iterableOfPoint).array();
arrayOfPoint3D = $for(iterableOfPoint).array(p => point3d);
$forOfPoint = $for(iterableOfPoint).filter(p => b);
$forOfPoint3D = $for(iterableOfPoint).map(p => point3d);

// #############################################################################################
// ECMAScript 6: Promises
// Modules: es6.promise
// #############################################################################################

promiseLikeOfPoint.then((point: Point) => { });
promiseLikeOfPoint = promiseLikeOfPoint.then();
promiseLikeOfPoint = promiseLikeOfPoint.then(p => point);
promiseLikeOfPoint = promiseLikeOfPoint.then(p => promiseLikeOfPoint);
promiseLikeOfPoint = promiseLikeOfPoint.then(p => point, e => point);
promiseLikeOfPoint = promiseLikeOfPoint.then(p => promiseLikeOfPoint, e => point);
promiseLikeOfPoint = promiseLikeOfPoint.then(p => point, e => promiseLikeOfPoint);
promiseLikeOfPoint = promiseLikeOfPoint.then(p => point, e => { throw e; });
promiseLikeOfPoint = promiseLikeOfPoint.then(p => promiseLikeOfPoint, e => { throw e; });
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => point3d);
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => promiseLikeOfPoint3D);
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => point3d, e => point3d);
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => promiseLikeOfPoint3D, e => point3d);
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => point3d, e => promiseLikeOfPoint3D);
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => point3d, e => { throw e; });
promiseLikeOfPoint3D = promiseLikeOfPoint.then(p => promiseLikeOfPoint3D, e => { throw e; });
promiseOfPoint.then((point: Point) => { });
promiseOfPoint = promiseOfPoint.then();
promiseOfPoint = promiseOfPoint.then(p => point);
promiseOfPoint = promiseOfPoint.then(p => promiseOfPoint);
promiseOfPoint = promiseOfPoint.then(p => promiseLikeOfPoint);
promiseOfPoint = promiseOfPoint.then(p => point, e => point);
promiseOfPoint = promiseOfPoint.then(p => promiseOfPoint, e => point);
promiseOfPoint = promiseOfPoint.then(p => promiseLikeOfPoint, e => point);
promiseOfPoint = promiseOfPoint.then(p => point, e => promiseOfPoint);
promiseOfPoint = promiseOfPoint.then(p => point, e => promiseLikeOfPoint);
promiseOfPoint = promiseOfPoint.then(p => point, e => { throw e; });
promiseOfPoint = promiseOfPoint.then(p => promiseOfPoint, e => { throw e; });
promiseOfPoint = promiseOfPoint.then(p => promiseLikeOfPoint, e => { throw e; });
promiseOfPoint3D = promiseOfPoint.then(p => point3d);
promiseOfPoint3D = promiseOfPoint.then(p => promiseOfPoint3D);
promiseOfPoint3D = promiseOfPoint.then(p => promiseLikeOfPoint3D);
promiseOfPoint3D = promiseOfPoint.then(p => point3d, e => point3d);
promiseOfPoint3D = promiseOfPoint.then(p => promiseOfPoint3D, e => point3d);
promiseOfPoint3D = promiseOfPoint.then(p => promiseLikeOfPoint3D, e => point3d);
promiseOfPoint3D = promiseOfPoint.then(p => point3d, e => promiseOfPoint3D);
promiseOfPoint3D = promiseOfPoint.then(p => point3d, e => promiseLikeOfPoint3D);
promiseOfPoint3D = promiseOfPoint.then(p => point3d, e => { throw e; });
promiseOfPoint3D = promiseOfPoint.then(p => promiseOfPoint3D, e => { throw e; });
promiseOfPoint3D = promiseOfPoint.then(p => promiseLikeOfPoint3D, e => { throw e; });
promiseOfPoint = promiseOfPoint.catch(e => point);
promiseOfPoint = promiseOfPoint.catch(e => promiseOfPoint);
promiseOfPoint = promiseOfPoint.catch(e => promiseLikeOfPoint);
promiseOfPoint = promiseOfPoint.catch(e => { throw e; });
promiseOfPoint3D = promiseOfPoint.then(p2d => ({ ...p2d, z: 0 })).catch(e => point3d);
promiseOfPoint3D = promiseOfPoint.then(p2d => ({ ...p2d, z: 0 })).catch(e => promiseOfPoint3D);
promiseOfPoint3D = promiseOfPoint.then(p2d => ({ ...p2d, z: 0 })).catch(e => promiseLikeOfPoint3D);
promiseOfPoint = new Promise<Point>((resolve, reject) => resolve(point));
promiseOfPoint = new Promise<Point>((resolve, reject) => resolve(promiseOfPoint));
promiseOfPoint = new Promise<Point>((resolve, reject) => resolve(promiseLikeOfPoint));
promiseOfPoint = new Promise<Point>((resolve, reject) => reject(e));
promiseOfArrayOfPoint = Promise.all(arrayOfPoint);
promiseOfArrayOfPoint = Promise.all(iterableOfPoint);
promiseOfPoint = Promise.race(arrayOfPoint);
promiseOfPoint = Promise.race(iterableOfPoint);
promiseOfVoid = Promise.resolve();
promiseOfPoint = Promise.resolve(point3d);
promiseOfPoint = Promise.resolve(promiseOfPoint);
promiseOfPoint = Promise.resolve(promiseLikeOfPoint);
promiseOfVoid = Promise.reject(e);
promiseOfPoint = Promise.reject<Point>(e);

// #############################################################################################
// ECMAScript 6: Reflect
// Modules: es6.reflect
// #############################################################################################

a = Reflect.apply(f, a, arrayLikeOfAny);
a = Reflect.construct(f, arrayLikeOfAny, a);
b = Reflect.defineProperty(a, s, pd);
b = Reflect.defineProperty(a, i, pd);
b = Reflect.defineProperty(a, sym, pd);
b = Reflect.deleteProperty(a, s);
b = Reflect.deleteProperty(a, i);
b = Reflect.deleteProperty(a, sym);
iterableIteratorOfAny = Reflect.enumerate(a);
a = Reflect.get(a, s, a);
a = Reflect.get(a, i, a);
a = Reflect.get(a, sym, a);
pd = Reflect.getOwnPropertyDescriptor(a, s);
pd = Reflect.getOwnPropertyDescriptor(a, i);
pd = Reflect.getOwnPropertyDescriptor(a, sym);
a = Reflect.getPrototypeOf(a);
b = Reflect.has(a, s);
b = Reflect.has(a, i);
b = Reflect.has(a, sym);
b = Reflect.isExtensible(a);
arrayOfPropertyKey = Reflect.ownKeys(a);
b = Reflect.preventExtensions(a);
b = Reflect.set(a, s, a, a);
b = Reflect.set(a, i, a, a);
b = Reflect.set(a, sym, a, a);
b = Reflect.setPrototypeOf(a, a);

// #############################################################################################
// ECMAScript 7
// Modules: es7.array.includes, es7.string.at, ees7.string.pad-start, es7.string.pad-end,
//          es7.object.to-array, es7.object.get-own-property-descriptors, es7.regexp.escape,
//          es7.map.to-json, and es7.set.to-json
// #############################################################################################

b = arrayOfPoint.includes(point, i);
s = s.at(i);
s = s.padStart(i, s);
s = s.padEnd(i, s);
arrayOfAny = Object.values(a);
arrayOfStringAny = Object.entries(a);
pdm = Object.getOwnPropertyDescriptors(a);
s = RegExp.escape(s);
a = map.toJSON();
a = set.toJSON();

// #############################################################################################
// Mozilla JavaScript: Array generics
// Modules: js.array.statics
// #############################################################################################

i = Array.push(arrayOfPoint, point, point);
point = Array.pop(arrayOfPoint);
arrayOfPoint = Array.concat(arrayOfPoint, arrayOfPoint);
s = Array.join(arrayOfPoint, s);
arrayOfPoint = Array.reverse(arrayOfPoint);
point = Array.shift(arrayOfPoint);
arrayOfPoint = Array.slice(arrayOfPoint, i, i);
arrayOfPoint = Array.sort(arrayOfPoint, (a: Point, b: Point) => i);
arrayOfPoint = Array.splice(arrayOfPoint, i);
arrayOfPoint = Array.splice(arrayOfPoint, i, i, point, point);
i = Array.unshift(arrayOfPoint, point, point);
i = Array.indexOf(arrayOfPoint, point, i);
i = Array.lastIndexOf(arrayOfPoint, point, i);
b = Array.every(arrayOfPoint, (value: Point, index: number, array: Point[]) => b, a);
b = Array.some(arrayOfPoint, (value: Point, index: number, array: Point[]) => b, a);
Array.forEach(arrayOfPoint, (value: Point, index: number, array: Point[]) => { }, a);
arrayOfPoint3D = Array.map(arrayOfPoint, (value: Point, index: number, array: Point[]) => point3d, a);
arrayOfPoint = Array.filter(arrayOfPoint, (value: Point, index: number, array: Point[]) => b, a);
point = Array.reduce(arrayOfPoint, (prev: Point, value: Point, index: number, array: Point[]) => point, point);
point3d = Array.reduce(arrayOfPoint, (prev: Point3D, value: Point, index: number, array: Point[]) => point3d, point3d);
point = Array.reduceRight(arrayOfPoint, (prev: Point, value: Point, index: number, array: Point[]) => point, point);
point3d = Array.reduceRight(arrayOfPoint, (prev: Point3D, value: Point, index: number, array: Point[]) => point3d, point3d);
iterableIteratorOfNumberPoint = Array.entries(arrayOfPoint);
iterableIteratorOfNumber = Array.keys(arrayOfPoint);
iterableIteratorOfPoint = Array.values(arrayOfPoint);
point = Array.find(arrayOfPoint, p => b);
i = Array.findIndex(arrayOfPoint, p => b);
arrayOfPoint = Array.fill(arrayOfPoint, point, i, arrayOfPoint.length);
arrayOfPoint = Array.copyWithin(arrayOfPoint, i, i, i);
b = Array.includes(arrayOfPoint, point, i);
arrayOfPoint = Array.turn(arrayOfPoint, (memo: Point[], value: Point, index: number, array: Point[]) => arrayOfPoint, arrayOfPoint);
arrayOfPoint3D = Array.turn(arrayOfPoint, (memo: Point3D[], value: Point, index: number, array: Point[]) => arrayOfPoint3D, arrayOfPoint3D);

// #############################################################################################
// Object - https://github.com/zloirock/core-js/#object
// Modules: core.object
// #############################################################################################

// Non-standard
b = Object.isObject(a);
s = Object.classof(a);
point = Object.define(point, a);
point = Object.make(point, a);

// #############################################################################################
// Console - https://github.com/zloirock/core-js/#console
// Modules: core.log
// #############################################################################################

// Non-standard
log(a, a, a);
log.log(a, a, a);
log.enable();
log.disable();

// #############################################################################################
// Dict - https://github.com/zloirock/core-js/#dict
// Modules: core.dict
// #############################################################################################

// Non-standard
point = dictOfPoint[s];
point = dictOfPoint[i];
point = dictOfPoint[sym];
dictOfPoint = new Dict(dictOfPoint);
dictOfAny = new Dict(point);
dictOfPoint = Dict(dictOfPoint);
dictOfAny = Dict(point);
b = Dict.isDict(a);
iterableIteratorOfPoint = Dict.values(dictOfPoint);
iterableIteratorOfPropertyKey = Dict.keys(dictOfPoint);
iterableIteratorOfPropertyKeyPoint = Dict.entries(dictOfPoint);
b = Dict.has(dictOfPoint, s);
b = Dict.has(dictOfPoint, i);
b = Dict.has(dictOfPoint, sym);
point = Dict.get(dictOfPoint, s);
point = Dict.get(dictOfPoint, i);
point = Dict.get(dictOfPoint, sym);
dictOfPoint = Dict.set(dictOfPoint, s, point);
dictOfPoint = Dict.set(dictOfPoint, i, point);
dictOfPoint = Dict.set(dictOfPoint, sym, point);
Dict.forEach(dictOfPoint, (value: Point, key: PropertyKey, dict: Dict<Point>) => { }, a);
dictOfPoint3D = Dict.map(dictOfPoint, (value: Point, key: PropertyKey, dict: Dict<Point>) => point3d, a);
dictOfPoint3D = Dict.mapPairs(dictOfPoint, (value: Point, key: PropertyKey, dict: Dict<Point>) => [s, point3d], a);
dictOfPoint3D = Dict.mapPairs(dictOfPoint, (value: Point, key: PropertyKey, dict: Dict<Point>) => [i, point3d], a);
dictOfPoint3D = Dict.mapPairs(dictOfPoint, (value: Point, key: PropertyKey, dict: Dict<Point>) => [sym, point3d], a);
dictOfPoint = Dict.filter(dictOfPoint, (value: Point, key: PropertyKey, dict: Dict<Point>) => b, a);
b = Dict.some(dictOfPoint, (value: Point, key: PropertyKey, dict: Dict<Point>) => b, a);
b = Dict.every(dictOfPoint, (value: Point, key: PropertyKey, dict: Dict<Point>) => b, a);
point = Dict.find(dictOfPoint, (value: Point, key: PropertyKey, dict: Dict<Point>) => b, a);
key = Dict.findKey(dictOfPoint, (value: Point, key: PropertyKey, dict: Dict<Point>) => b, a);
key = Dict.keyOf(dictOfPoint, point);
b = Dict.includes(dictOfPoint, point);
point = Dict.reduce(dictOfPoint, (prev: Point, value: Point, key: PropertyKey, dict: Dict<Point>) => point, point);
point3d = Dict.reduce(dictOfPoint, (prev: Point3D, value: Point, key: PropertyKey, dict: Dict<Point>) => point3d, point3d);
dictOfPoint = Dict.turn(dictOfPoint, (memo: Dict<Point>, value: Point, key: PropertyKey, dict: Dict<Point>) => { }, dictOfPoint);
dictOfPoint3D = Dict.turn(dictOfPoint, (memo: Dict<Point3D>, value: Point, key: PropertyKey, dict: Dict<Point>) => { }, dictOfPoint3D);

// #############################################################################################
// Partial application - https://github.com/zloirock/core-js/#partial-application
// Modules: core.function.part
// #############################################################################################

// Non-standard
a = f.part(a, a);

// #############################################################################################
// Date formatting - https://github.com/zloirock/core-js/#date-formatting
// Modules: core.date
// #############################################################################################

// Non-standard
s = date.format(s, s);
s = date.formatUTC(s, s);

// #############################################################################################
// Array - https://github.com/zloirock/core-js/#array
// Modules: core.array.turn
// #############################################################################################

// Non-standard
arrayOfPoint = arrayOfPoint.turn((memo: Point[], value: Point, key: PropertyKey, array: Point[]) => { }, arrayOfPoint);
arrayOfPoint3D = arrayOfPoint.turn((memo: Point3D[], value: Point, key: PropertyKey, array: Point[]) => { }, arrayOfPoint3D);

// #############################################################################################
// Number - https://github.com/zloirock/core-js/#number
// Modules: core.number.iterator
// #############################################################################################

iterableIteratorOfNumber = i[Symbol.iterator]();

// #############################################################################################
// Escaping characters - https://github.com/zloirock/core-js/#escaping-characters
// Modules: core.string.escape-html
// #############################################################################################

s = s.escapeHTML();
s = s.unescapeHTML();

// #############################################################################################
// delay - https://github.com/zloirock/core-js/#delay
// Modules: core.delay
// #############################################################################################

promiseOfVoid = delay(i);

console.log('core-js version number:', core.version);
