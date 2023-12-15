import groupBy = require("object.groupby");

// $ExpectType { [x: number]: string[] | undefined }
groupBy(["a", "bb", "ccc"], v => v.length);

// $ExpectType { odd?: number[] | undefined; even?: number[] | undefined }
groupBy([1, 2, 3], v => v ? "odd" : "even");

// $ExpectType { odd?: number[] | undefined; even?: number[] | undefined }
groupBy([2, 4, 6], v => v % 2 !== 0 ? "odd" : "even");

// $ExpectType { [x: symbol]: any[] | undefined }
groupBy([235, {} as any], v => Symbol(v.toString()));
