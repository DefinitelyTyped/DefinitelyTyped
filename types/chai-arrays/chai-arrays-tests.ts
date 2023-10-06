import { assert, expect, should, use } from "chai";
import ChaiArrays = require("chai-arrays");

use(ChaiArrays);
should();

const arr: any[] = [1, 2, 3];
const str = "abcdef";

const uint8Array: Uint8Array = new Uint8Array([1, 2, 3]);
const uint16Array: Uint16Array = new Uint16Array([1, 2, 3]);
const uint32Array: Uint32Array = new Uint32Array([1, 2, 3]);
const uint8ClampedArray: Uint8ClampedArray = new Uint8ClampedArray([1, 2, 3]);

const otherArr: number[] = [1, 2, 3];
const anotherArr: number[] = [2, 4];
const yetAnotherArr: number[] = [8, 5, 7];

arr.should.be.array();
str.should.not.be.array();

expect(arr).to.be.array();
expect(str).not.to.be.array();

assert.array(arr, "is array");

uint8Array.should.be.Uint8Array();
uint16Array.should.be.Uint16Array();
uint32Array.should.be.Uint32Array();
uint8ClampedArray.should.be.Uint8ClampedArray();

expect(uint8Array).to.be.Uint8Array();
expect(uint16Array).to.be.Uint16Array();
expect(uint32Array).to.be.Uint32Array();
expect(uint8ClampedArray).to.be.Uint8ClampedArray();

assert.Uint8Array(uint8Array, "is an Uint8Array");
assert.Uint16Array(uint16Array, "is an Uint16Array");
assert.Uint32Array(uint32Array, "is an Uint32Array");
assert.Uint8ClampedArray(uint8ClampedArray, "is an Uint8ClampedArray");

arr.should.be.ofSize(3);
arr.should.not.be.ofSize(4);

expect(arr).to.be.ofSize(3);
expect(str).not.to.be.ofSize(4);

assert.ofSize(arr, 3, "has 3 elements");

arr.should.be.equalTo(otherArr);
arr.should.not.be.equalTo(anotherArr);

expect(arr).to.be.equalTo(otherArr);
expect(str).to.be.not.equalTo(anotherArr);

assert.equalTo(arr, otherArr, "is equal to");

arr.should.be.containing(1);
arr.should.not.be.containing(4);

expect(arr).to.be.containing(1);
expect(str).to.be.not.containing(4);

assert.containing(arr, 1, "contains");

arr.should.be.containingAllOf(otherArr);
arr.should.not.be.containingAllOf(anotherArr);

expect(arr).to.be.containingAllOf(otherArr);
expect(str).to.be.not.containingAllOf(anotherArr);

assert.containingAllOf(arr, otherArr, "contains all of");

arr.should.be.containingAnyOf(otherArr);
arr.should.be.containingAnyOf(anotherArr);
arr.should.not.be.containingAnyOf(yetAnotherArr);

expect(arr).to.be.containingAnyOf(otherArr);
expect(str).to.be.containingAnyOf(anotherArr);
expect(str).to.be.not.containingAnyOf(yetAnotherArr);

assert.containingAnyOf(arr, otherArr, "contains any of");
assert.containingAnyOf(arr, anotherArr, "contains any of");

arr.should.be.sorted();
anotherArr.should.be.sorted();
yetAnotherArr.should.not.be.sorted();

expect(arr).to.be.sorted();
expect(anotherArr).to.be.sorted();
expect(yetAnotherArr).to.be.not.sorted();

assert.sorted(arr, "sorted");

// sorted with compareFn overload
const strArr = ["a", "b", "c"];
const strArrNot = ["a", "z", "c"];
const compareFn = (a: string, b: string) => a.localeCompare(b);

strArr.should.be.sorted(compareFn);
strArrNot.should.not.be.sorted(compareFn);

expect(strArr).to.be.sorted(compareFn);
expect(strArrNot).to.be.not.sorted(compareFn);

assert.sorted(strArr, compareFn, "sorted");
