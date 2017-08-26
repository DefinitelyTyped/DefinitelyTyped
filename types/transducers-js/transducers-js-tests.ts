// tests taken from https://github.com/cognitect-labs/transducers-js

import * as t from 'transducers-js';

const { map, filter, comp, into } = t;

// basic usage

function inc(n: number) { return n + 1; }
function isEven(n: number) { return n % 2 === 0; }
let xf = comp(map(inc), filter(isEven));

into([], xf, [0, 1, 2, 3, 4]); // [2, 4]

// integration

const arr   = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const apush = (arr: number[], x: number) => { arr.push(x); return arr; };
xf = comp(map(inc), filter(isEven));
const toFn  = t.toFn;

arr.reduce(toFn(xf, apush), []); // native

// source examples

function mapExample() {
  const xf = t.map(inc);
  t.into([], xf, [1, 2, 3]); // [2, 3, 4]
}

function filterExample() {
  const xf = t.filter(isEven);
  t.into([], xf, [0, 1, 2, 3, 4]); // [0, 2, 4];
}

function removeExample() {
  const xf = t.remove(isEven);
  t.into([], xf, [0, 1, 2, 3, 4]); // [1, 3];
}

function complementExample() {
  const isOdd = t.complement(isEven);
}

function keepIndexedExample() {
  const xf = t.keepIndexed((i: number, x: string|number) => { if (typeof x === "string") return "cool"; });
  t.into([], xf, [0, 1, "foo", 3, 4, "bar"]); // ["foo", "bar"]
}

function takeExample() {
  const xf = t.take(3);
  t.into([], xf, [0, 1, 2, 3, 4, 5]); // [0, 1, 2];
}

function takeWhileExample() {
  const xf = t.takeWhile(n => n < 3);
  t.into([], xf, [0, 1, 2, 3, 4, 5]); // [0, 1, 2];
}

function intoExample() {
  const xf = t.comp(t.map(inc), t.filter(isEven));
  t.into([], xf, [1, 2, 3, 4]); // [2, 4]
}

function toFnExample() {
  const arr = [0, 1, 2, 3, 4, 5];
  const xf = t.comp(t.map(inc), t.filter(isEven));
  arr.reduce(t.toFn(xf, apush), []); // [2, 4, 6]
}

function takeNthExample() {
  const xf = t.takeNth(3);
  t.into([], xf, [0, 1, 2, 3, 4, 5]); // [2, 5];
}

function dropExample() {
  const xf = t.drop(3);
  t.into([], xf, [0, 1, 2, 3, 4, 5]); // [3, 4, 5];
}

function dropWhileExample() {
  const xf = t.dropWhile(n => n < 3);
  t.into([], xf, [0, 1, 2, 3, 4, 5]); // [3, 4, 5];
}

function partitionByExample() {
  const xf = t.partitionBy((x: string|number) => typeof x === "string");
  t.into([], xf, [0, 1, "foo", "bar", 2, 3, "bar", "baz"]); // [[0, 1], ["foo", "bar"], [2, 3], ["bar", "baz"]];
}

function partitionAllExample() {
  const xf = t.partitionAll(3);
  t.into([], xf, [0, 1, 2, 3, 4, 5]); // [[0, 1, 2], [3, 4, 5]]
}

function wrapExample() {
  const arrayPush = t.wrap((arr: number[], x: number) => { arr.push(x); return arr; });
}

function ensureReducedExample() {
  const x = t.ensureReduced(1);
  const y = t.ensureReduced(x);
  x === y; // true
}

function unreducedExample() {
  const x = t.reduced(1);
  t.unreduced(x); // 1
  t.unreduced(t.unreduced(x)); // 1
}

function reverse(arr: number[]) {
  arr = Array.prototype.slice.call(arr, 0);
  arr.reverse();
  return arr;
}

function catExample() {
  const xf = t.comp(t.map(reverse), t.cat);
  t.into([], xf, [[3, 2, 1], [6, 5, 4]]); // [1, 2, 3, 4, 5, 6]
}

function mapcatExample() {
  const xf = t.mapcat(reverse);
  t.into([], xf, [[3, 2, 1], [6, 5, 4]]); // [1, 2, 3, 4, 5, 6]
}

// Original tests

function transduceExample() {
    const { completing, transduce, wrap } = t;
    const stringAppendFn = (acc: string, x: number) => acc + x;
    const stringAppendTransformer = wrap(stringAppendFn);
    const stringAppendThenLengthTransformer = completing(
        stringAppendFn,
        s => s.length,
    );
    const lengthsString1: string = transduce(
        t.map((s: string) => s.length),
        stringAppendFn,
        "",
        ["a", "b"],
    );
    const lengthsString2: string = transduce(
        t.map((s: string) => s.length),
        stringAppendTransformer,
        "",
        ["a", "b"],
    );
    const lengthsStringLength: number = transduce(
        t.map((s: string) => s.length),
        stringAppendThenLengthTransformer,
        "",
        ["a", "b"],
    );
}

function advancedIntoExample() {
    const array: number[] = into([], t.map((s: string) => s.length), [
        "a",
        "b",
    ]);
    const string: string = into("", t.map((s: string) => s + s), ["a", "b"]);
    const object1: { [key: string]: number } = into(
        {},
        t.map((s: string) => [s, s.length]),
        ["a", "b"],
    );
    const object2: { [key: string]: boolean } = into(
        {},
        t.map((kv: [string, number]) => [kv[0], true]),
        { a: 1, b: 2 }
    );
}

function compExample() {
    const fn1: t.Transducer<number, number> = comp(map(inc), filter(isEven));
    const fn2: t.Transducer<number, string> = comp(
        filter(isEven),
        map((x: number) => "" + x),
    );
}
