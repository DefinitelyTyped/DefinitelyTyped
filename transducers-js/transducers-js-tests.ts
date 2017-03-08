// tests taken from https://github.com/cognitect-labs/transducers-js

import * as t from 'transducers-js';
import * as _ from "lodash";

var map    = t.map,
    filter = t.filter,
    comp   = t.comp,
    into   = t.into;

// basic usage

function inc(n: number) { return n + 1; };
function isEven(n: number) { return n % 2 === 0; };
var xf = comp(map(inc), filter(isEven));

console.log(into([], xf, [0, 1, 2, 3, 4])); // [2, 4]

// integration

var arr   = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    apush = (arr: number[], x: number) => { arr.push(x); return arr; },
    xf    = comp(map(inc), filter(isEven)),
    toFn  = t.toFn;

arr.reduce(toFn(xf, apush), []); // native
_(arr).reduce(toFn(xf, apush), []); // underscore or lodash

// immutable-js

import * as Immutable from 'immutable';

function sum(a: number, b: number): number { return a + b; };
var transduce = t.transduce;

var largeVector = Immutable.List();

for (var i = 0; i < 1000000; i++) {
  largeVector = largeVector.push(i);
}

// built in Immutable-js functionality
largeVector.map(inc).filter(isEven).reduce(sum);

// faster with transducers
var xf = comp(map(inc), filter(isEven));
transduce(xf, sum, 0, largeVector);

// source examples

function mapExample() {
  var xf = t.map(inc);
  t.into([], xf, [1, 2, 3]); // [2, 3, 4]
}

function filterExample() {
  var xf = t.filter(isEven);
  t.into([], xf, [0, 1, 2, 3, 4]); // [0, 2, 4];
}

function removeExample() {
  var xf = t.remove(isEven);
  t.into([], xf, [0, 1, 2, 3, 4]); // [1, 3];
}

function complementExample() {
  var isOdd = t.complement(isEven);
}

function keepIndexedExample() {
  var xf = t.keepIndexed((i: number, x: string|number) => { if (typeof x === "string") return "cool"; });
  t.into([], xf, [0, 1, "foo", 3, 4, "bar"]); // ["foo", "bar"]
}

function takeExample() {
  var xf = t.take(3);
  t.into([], xf, [0, 1, 2, 3, 4, 5]); // [0, 1, 2];
}

function takeWhileExample() {
  var xf = t.takeWhile(n => n < 3);
  t.into([], xf, [0, 1, 2, 3, 4, 5]); // [0, 1, 2];
}

function intoExample() {
  var xf = t.comp(t.map(inc), t.filter(isEven));
  t.into([], xf, [1, 2, 3, 4]); // [2, 4]
}

function toFnExample() {
  var arr = [0, 1, 2, 3, 4, 5];
  var xf = t.comp(t.map(inc), t.filter(isEven));
  arr.reduce(t.toFn(xf, apush), []); // [2, 4, 6]
}

function takeNthExample() {
  var xf = t.takeNth(3);
  t.into([], xf, [0, 1, 2, 3, 4, 5]); // [2, 5];
}

function dropExample() {
  var xf = t.drop(3);
  t.into([], xf, [0, 1, 2, 3, 4, 5]); // [3, 4, 5];
}

function dropWhileExample() {
  var xf = t.dropWhile(n => n < 3);
  t.into([], xf, [0, 1, 2, 3, 4, 5]); // [3, 4, 5];
}

function partitionByExample() {
  var xf = t.partitionBy((x: string|number) => typeof x === "string");
  t.into([], xf, [0, 1, "foo", "bar", 2, 3, "bar", "baz"]); // [[0, 1], ["foo", "bar"], [2, 3], ["bar", "baz"]];
}

function partitionAllExample() {
  var xf = t.partitionAll(3);
  t.into([], xf, [0, 1, 2, 3, 4, 5]); // [[0, 1, 2], [3, 4, 5]]
}

function wrapExample() {
  var arrayPush = t.wrap((arr: number[], x: number) => { arr.push(x); return arr; });
}

function ensureReducedExample() {
  var x = t.ensureReduced(1);
  var y = t.ensureReduced(x);
  x === y; // true
}

function unreducedExample() {
  var x = t.reduced(1);
  t.unreduced(x); // 1
  t.unreduced(t.unreduced(x)); // 1
}

function reverse(arr: number[]) {
  var arr: number[] = Array.prototype.slice.call(arr, 0);
  arr.reverse();
  return arr;
}

function catExample() {
  var xf = t.comp(t.map(reverse), t.cat);
  t.into([], xf, [[3, 2, 1], [6, 5, 4]]); // [1, 2, 3, 4, 5, 6]
}

function mapcatExample() {
  var xf = t.mapcat(reverse);
  t.into([], xf, [[3, 2, 1], [6, 5, 4]]); // [1, 2, 3, 4, 5, 6]
}
