import getIterator = require("es-get-iterator");

// $ExpectType Iterator<string, any, undefined> || Iterator<string, any, unknown>
getIterator("foo");

// $ExpectType Iterator<never, any, undefined> || Iterator<never, any, unknown>
getIterator([]);

// $ExpectType Iterator<number, any, undefined> || Iterator<number, any, unknown>
getIterator([0, 1, 2, 3, 4]);

// $ExpectType Iterator<string | number | boolean | undefined, any, undefined> || Iterator<string | number | boolean | undefined, any, unknown>
getIterator([undefined, true, "bar", 0]);

// $ExpectType Iterator<[symbol, unknown], any, undefined> || Iterator<[symbol, unknown], any, unknown>
getIterator(new Map<symbol, unknown>());

// $ExpectType Iterator<boolean, any, undefined> || Iterator<boolean, any, unknown>
getIterator(new Set<boolean>());

// $ExpectType Iterator<"foo" | "bar", void, unknown> || Iterator<"foo" | "bar", void, any>
getIterator((function*() {
    yield "foo";
    yield "bar";
})());

// $ExpectType Iterator<0 | 1, number, unknown> || Iterator<0 | 1, number, any>
getIterator((function*() {
    yield 0;
    yield 1;
    return 2;
})());

declare const ARGUMENTS: IArguments;
// $ExpectType Iterator<any, any, undefined> || Iterator<any, any, unknown>
getIterator(ARGUMENTS);

declare const ITERABLE_UNION: number[] | Set<Date>;
// $ExpectType Iterator<number, any, undefined> | Iterator<Date, any, undefined> || Iterator<number, any, unknown> | Iterator<Date, any, unknown>
getIterator(ITERABLE_UNION);

declare const ITERABLE_OR_OTHERS_UNION: Map<Error, DataView> | ArrayBuffer;
// $ExpectType Iterator<[Error, DataView], any, undefined> | undefined || Iterator<[Error, DataView], any, unknown> | undefined || Iterator<[Error, DataView<ArrayBuffer>], any, unknown> | undefined
getIterator(ITERABLE_OR_OTHERS_UNION);

declare const UNKNOWN: unknown;
// $ExpectType Iterator<unknown, any, undefined> | undefined || Iterator<unknown, any, any> | undefined
getIterator(UNKNOWN);

// $ExpectType undefined
getIterator(0);
