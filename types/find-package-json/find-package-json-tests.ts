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

type FindResult = find.FindResult; // $ExpectType FindResult
type Pkg = find.Package; // $ExpectType PackageJSON
type PkgJSON = find.PackageJSON; // $ExpectType PackageJSON
type PkgWithPath = find.PackageWithPath; // $ExpectType PackageWithPath
type Done = find.Done; // $ExpectType Done
type Iter = find.FinderIterator; // $ExpectType FinderIterator
type FoundPkg = find.FoundPackage; // $ExpectType FoundPackage
