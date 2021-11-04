import getIterator = require("es-get-iterator");

// $ExpectType Iterator<string, any, undefined>
getIterator("foo");

// $ExpectType Iterator<never, any, undefined>
getIterator([]);

// $ExpectType Iterator<number, any, undefined>
getIterator([0, 1, 2, 3, 4]);

// $ExpectType Iterator<string | number | boolean | undefined, any, undefined>
getIterator([undefined, true, "bar", 0]);

// $ExpectType Iterator<[symbol, unknown], any, undefined>
getIterator(new Map<symbol, unknown>());

// $ExpectType Iterator<boolean, any, undefined>
getIterator(new Set<boolean>());

// $ExpectType Iterator<"foo" | "bar", void, unknown> || Iterator<"foo" | "bar", void, any>
getIterator((function*() { yield "foo"; yield "bar"; })());

// $ExpectType Iterator<0 | 1, number, unknown> || Iterator<0 | 1, number, any>
getIterator((function*() { yield 0; yield 1; return 2; })());

declare const ARGUMENTS: IArguments;
// $ExpectType Iterator<any, any, undefined>
getIterator(ARGUMENTS);

declare const ITERABLE_UNION: number[] | Set<Date>;
// $ExpectType Iterator<number, any, undefined> | Iterator<Date, any, undefined>
getIterator(ITERABLE_UNION);

declare const ITERABLE_OR_OTHERS_UNION: Map<Error, DataView> | ArrayBuffer;
// $ExpectType Iterator<[Error, DataView], any, undefined> | undefined
getIterator(ITERABLE_OR_OTHERS_UNION);

declare const UNKNOWN: unknown;
// $ExpectType Iterator<unknown, any, undefined> | undefined
getIterator(UNKNOWN);

// $ExpectType undefined
getIterator(0);
