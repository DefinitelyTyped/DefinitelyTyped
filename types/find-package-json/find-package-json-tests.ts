"use strict";

import finder = require("find-package-json");

const f = finder();
const fDirname = finder(__dirname);
const fModule: finder.FinderIterator = finder(module);

const findResult = f.next();

if (findResult.done) {
    const res: finder.Done = findResult;
    const value: undefined = findResult.value;
    const filename: undefined = findResult.filename;
} else {
    const res: finder.FoundPackage = findResult;
    const value: finder.Package = findResult.value;
    const filename: string = findResult.filename;
}
