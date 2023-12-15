import groupBy = require("object.groupby");

// $ExpectType { [P in number]?: string }
groupBy(["a", "bb", "ccc"], v => v.length);

// $ExpectType { odd?: number[]; even?: number[] }
groupBy([1, 2, 3], v => v ? "odd" : "even");

// $ExpectType { odd?: number[]; even?: number[] }
groupBy([2, 4, 6], v => v % 2 !== 0 ? "odd" : "even");

// $ExpectType { [P in symbol]?: any[] }
groupBy([235, {} as any], v => Symbol(v.toString()));
