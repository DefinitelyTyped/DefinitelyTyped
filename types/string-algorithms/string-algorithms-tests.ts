import {
    longestCommonPrefix,
    longestCommonSubstring,
    radixSort,
    search,
    StringIndexMap,
    suffixArray,
} from "string-algorithms";

// $ExpectType number[]
search("", "");

// $ExpectType number[][]
radixSort([[1]]);
// $ExpectType number[][]
radixSort([[1]], x => x);
// $ExpectType number[][]
radixSort([{ x: [1] }], ({ x }) => x);
// @ts-expect-error
radixSort([{ x: [1] }]);

// $ExpectType number[]
suffixArray([1, 2, 3]);
// $ExpectType number[]
suffixArray([1, 2, 3], -1);
// $ExpectType number[]
suffixArray("");

// $ExpectType number[]
longestCommonPrefix([""], [0]);

// $ExpectType string[]
longestCommonSubstring([""]);
// $ExpectType string[]
longestCommonSubstring([""], "linear");
// @ts-expect-error
longestCommonSubstring([""], new StringIndexMap(1));
// $ExpectType string[]
longestCommonSubstring([""], new (class extends StringIndexMap {})(1));
