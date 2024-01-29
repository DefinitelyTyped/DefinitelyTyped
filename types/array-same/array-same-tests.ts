import hasSameElements = require("array-same");

hasSameElements([1, 2], [2, 1]); // $ExpectType boolean
hasSameElements(["a", "b"], ["b", "c"]); // $ExpectType boolean
hasSameElements([1, 2, 3], [1, 2]); // $ExpectType boolean
hasSameElements([1, 2] as const, [1, 2, 3] as const); // $ExpectType boolean
hasSameElements([1, 2, 3], [1, 2], [1, 2]); // $ExpectType boolean
