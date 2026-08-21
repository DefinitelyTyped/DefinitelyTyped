import groupBy = require("object.groupby");

// $ExpectType Record<number, string[]>
groupBy(["a", "bb", "ccc"], v => v.length);

// $ExpectType Record<"odd" | "even", number[]>
groupBy([1, 2, 3], v => v ? "odd" : "even");

// $ExpectType Record<symbol, any[]>
groupBy([235, {} as any], v => Symbol(v.toString()));

import "object.groupby/auto";

// $ExpectType Record<number, string[]>
Object.groupBy(["a", "bb", "ccc"], v => v.length);

// $ExpectType Record<"odd" | "even", number[]>
Object.groupBy([1, 2, 3], v => v ? "odd" : "even");

// $ExpectType Record<symbol, any[]>
Object.groupBy([235, {} as any], v => Symbol(v.toString()));
