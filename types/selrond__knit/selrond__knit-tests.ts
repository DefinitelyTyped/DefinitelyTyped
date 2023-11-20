import { knit } from "@selrond/knit";

// $ExpectType number[]
knit([10, 9, 8], 3);

// $ExpectType (string | number)[]
knit([1, 2, 3], " + ");

// @ts-expect-error
knit([1, 2, 3]);
