'use strict';

import find = require('find-package-json');

const f = find();
find(__dirname); // $ExpectType FinderIterator
const fModule = find(module); // $ExpectType FinderIterator

const iter = fModule[Symbol.iterator](); // $ExpectType IterableIterator<PackageWithPath>
const iterResult = iter.next(); // $ExpectType IteratorResult<PackageWithPath, any>
if (iterResult.done) {
    iterResult; // $ExpectType IteratorReturnResult<any>
    iterResult.value; // $ExpectType any
} else {
    iterResult; // $ExpectType IteratorYieldResult<PackageWithPath>
    iterResult.value; // $ExpectType PackageWithPath
}

const findResult = f.next();

if (findResult.done) {
    findResult; // $ExpectType Done
    findResult.value; // $ExpectType undefined
    findResult.filename; // $ExpectType undefined
} else {
    findResult; // $ExpectType FoundPackage
    findResult.value; // $ExpectType PackageWithPath
    findResult.filename; // $ExpectType string
}
