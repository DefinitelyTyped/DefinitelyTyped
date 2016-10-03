/// <reference path="transducers-js.d.ts" />
/// <reference path="../lodash/lodash.d.ts" />
/// <reference path="../immutable/immutable.d.ts" />

// tests taken from https://github.com/cognitect-labs/transducers-js

import * as t from 'transducers-js';

var map    = t.map,
    filter = t.filter,
    comp   = t.comp,
    into   = t.into;

// basic usage

var inc = function(n: number) { return n + 1; };
var isEven = function(n: number) { return n % 2 == 0; };
var xf = comp(map(inc), filter(isEven));

console.log(into([], xf, [0,1,2,3,4])); // [2,4]

// integration

var arr   = [0,1,2,3,4,5,6,7,8,9,10],
    apush = function(arr: number[], x: number) { arr.push(x); return arr; },
    xf    = comp(map(inc), filter(isEven)),
    toFn  = t.toFn;

arr.reduce(toFn(xf, apush), []); // native
_(arr).reduce(toFn(xf, apush), []); // underscore or lodash

// immutable-js

import * as Immutable from 'immutable';

var inc = function(n: number): number { return n + 1; };
var isEven = function(n: number): boolean { return n % 2 == 0; };
var sum = function(a: number, b: number): number { return a + b; };
var transduce = t.transduce;

var largeVector = Immutable.List();

for(var i = 0; i < 1000000; i++) {
  largeVector = largeVector.push(i);
}

// built in Immutable-js functionality
largeVector.map(inc).filter(isEven).reduce(sum);

// faster with transducers
var xf = comp(map(inc),filter(isEven));
transduce(xf, sum, 0, largeVector);

// source examples

function mapExample () {
  var inc = function(n: number) { return n+1; };
  var xf = t.map(inc);
  t.into([], xf, [1,2,3]); // [2,3,4]
}

function filterExample () {
  var isEven = function(n: number) { return n % 2 == 0; };
  var xf = t.filter(isEven);
  t.into([], xf, [0,1,2,3,4]); // [0,2,4];
}

function removeExample () {
  var isEven = function(n: number) { return n % 2 == 0; };
  var xf = t.remove(isEven);
  t.into([], xf, [0,1,2,3,4]); // [1,3];
}

function complementExample () {
  var isEven = function(n: number) { return n % 2 == 0; };
  var isOdd = t.complement(isEven);
}

function keepIndexedExample () {
  var xf = t.keepIndexed(function(i: number, x: string|number) { if (typeof x == "string") return "cool"; });
  t.into([], xf, [0,1,"foo",3,4,"bar"]); // ["foo","bar"]
}

function takeExample () {
  var xf = t.take(3);
  t.into([], xf, [0,1,2,3,4,5]); // [0,1,2];
}

function takeWhileExample () {
  var xf = t.takeWhile(function(n) { return n < 3; });
  t.into([], xf, [0,1,2,3,4,5]); // [0,1,2];
}

function intoExample () {
  var inc = function(n: number) { return n+1; };
  var isEven = function(n: number) { return n % 2 == 0; };
  var apush = function(arr: number[], x: number) { arr.push(x); return arr; };
  var xf = t.comp(t.map(inc),t.filter(isEven));
  t.into([], xf, [1,2,3,4]); // [2,4]
}

function toFnExample () {
  var arr = [0,1,2,3,4,5];
  var apush = function(arr: number[], x: number) { arr.push(x); return arr; };
  var xf = t.comp(t.map(inc),t.filter(isEven));
  arr.reduce(t.toFn(xf, apush), []); // [2,4,6]
}

function takeNthExample () {
  var xf = t.takeNth(3);
  t.into([], xf, [0,1,2,3,4,5]); // [2,5];
}

function dropExample () {
  var xf = t.drop(3);
  t.into([], xf, [0,1,2,3,4,5]); // [3,4,5];
}

function dropWhileExample () {
  var xf = t.dropWhile(function(n: number) { return n < 3; });
  t.into([], xf, [0,1,2,3,4,5]); // [3,4,5];
}

function partitionByExample () {
  var xf = t.partitionBy(function(x: string|number) { return typeof x == "string"; });
  t.into([], xf, [0,1,"foo","bar",2,3,"bar","baz"]); // [[0,1],["foo","bar"],[2,3],["bar","baz"]];
}

function partitionAllExample () {
  var xf = t.partitionAll(3);
  t.into([], xf, [0,1,2,3,4,5]); // [[0,1,2],[3,4,5]]
}

function wrapExample () {
  var arrayPush = t.wrap(function(arr: number[], x: number) { arr.push(x); return arr; });
}

function ensureReducedExample () {
  var x = t.ensureReduced(1);
  var y = t.ensureReduced(x);
  x === y; // true
}

function unreducedExample () {
  var x = t.reduced(1);
  t.unreduced(x); // 1
  t.unreduced(t.unreduced(x)); // 1
}

function catExample () {
  var reverse = function(arr: number[]) { 
    var arr: number[] = Array.prototype.slice.call(arr, 0);
    arr.reverse();
    return arr; 
  };
  var xf = t.comp(t.map(reverse), t.cat);
  t.into([], xf, [[3,2,1],[6,5,4]]); // [1,2,3,4,5,6]
}

function mapcatExample () {
  var reverse = function(arr: number[]) { 
    var arr: number[] = Array.prototype.slice.call(arr, 0);
    arr.reverse();
    return arr; 
  };
  var xf = t.mapcat(reverse);
  t.into([], xf, [[3,2,1],[6,5,4]]); // [1,2,3,4,5,6]
}
