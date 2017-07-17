import { expect } from 'chai';
import { assert } from 'chai';

import chai = require('chai');
import ChaiArrays = require('chai-arrays');

chai.use(ChaiArrays);
chai.should();

const arr: any[] = [1, 2, 3];
const str: string = 'abcdef';

const otherArr: number[] = [1, 2, 3];
const anotherArr: number[] = [2, 4];
const yetAnotherArr: number[] = [8, 5, 7];

arr.should.be.array();
str.should.not.be.array();

expect(arr).to.be.array();
expect(str).not.to.be.array();

assert.array(arr, 'is array');

arr.should.be.ofSize(3);
arr.should.not.be.ofSize(4);

expect(arr).to.be.ofSize(3);
expect(str).not.to.be.ofSize(4);

assert.ofSize(arr, 3, 'has 3 elements');

arr.should.be.equalTo(otherArr);
arr.should.not.be.equalTo(anotherArr);

expect(arr).to.be.equalTo(otherArr);
expect(str).to.be.not.equalTo(anotherArr);

assert.equalTo(arr, otherArr, 'is equal to');

arr.should.be.containing(1);
arr.should.not.be.containing(4);

expect(arr).to.be.containing(1);
expect(str).to.be.not.containing(4);

assert.containing(arr, 1, 'contains');

arr.should.be.containingAllOf(otherArr);
arr.should.not.be.containingAllOf(anotherArr);

expect(arr).to.be.containingAllOf(otherArr);
expect(str).to.be.not.containingAllOf(anotherArr);

assert.containingAllOf(arr, otherArr, 'contains all of');

arr.should.be.containingAnyOf(otherArr);
arr.should.be.containingAnyOf(anotherArr);
arr.should.not.be.containingAnyOf(yetAnotherArr);

expect(arr).to.be.containingAnyOf(otherArr);
expect(str).to.be.containingAnyOf(anotherArr);
expect(str).to.be.not.containingAnyOf(yetAnotherArr);

assert.containingAnyOf(arr, otherArr, 'contains any of');
assert.containingAnyOf(arr, anotherArr, 'contains any of');

arr.should.be.sorted();
anotherArr.should.be.sorted();
yetAnotherArr.should.be.sorted();

expect(arr).to.be.sorted();
expect(anotherArr).to.be.sorted();
expect(yetAnotherArr).to.be.not.sorted();

assert.sorted(arr, 'sorted');
