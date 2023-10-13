import * as R from "ramda";

(() => {
    const abcdObj: { a: 1; b: 2; c: 3; d: 4 } = { a: 1, b: 2, c: 3, d: 4 };

    const a10: { a: number; d: number } = R.pick(["a", "d"], { a: 1, b: 2, c: 3, d: 4 }); // => {a: 1, d: 4}
    const a11: { a: 1; d: 4 } = R.pick(["a", "d"], abcdObj); // => {a: 1, d: 4}

    // @ts-expect-error
    const a20: { a: number } = R.pick(["a", "e", "f"], { a: 1, b: 2, c: 3, d: 4 }); // => {a: 1}
    // @ts-expect-error
    const a21: { a: 1 } = R.pick(["a", "e", "f"], abcdObj); // => {a: 1}

    // @ts-expect-error
    const a30: { a: number } = R.pick(["a", "e", "f"])({ a: 1, b: 2, c: 3, d: 4 }); // => {a: 1}
    // @ts-expect-error
    const a31: { a: 1 } = R.pick(["a", "e", "f"])(abcdObj); // => {a: 1}

    // @ts-expect-error
    const a40: {} = R.pick(["a", "e", "f"], [1, 2, 3, 4]); // => {}

    const abcdTuple: ["a", "b", "c", "d"] = ["a", "b", "c", "d"];
    const a50: { 1: string; 2: string } = R.pick([1, 2], ["a", "b", "c", "d"]); // => {1: 'b', 2: 'c'}
    const a51: { 1: "b"; 2: "c" } = R.pick([1, 2], abcdTuple); // => {1: 'b', 2: 'c'}
    const a52: { 0: string } = R.pick([12, 0], ["a", "b", "c", "d"]); // => {0: 'a'}
    const a53: { 0: "a" } = R.pick([12, 0], abcdTuple); // => {0: 'a'}

    // @ts-expect-error
    const a60: { 1: string; 2: string } = R.pick([1, 2])(["a", "b", "c", "d"]); // => {1: 'b', 2: 'c'}
    const a61: { 1: "b"; 2: "c" } = R.pick([1, 2])(abcdTuple); // => {1: 'b', 2: 'c'}
    // @ts-expect-error
    const a62: { 0: string } = R.pick([12, 0])(["a", "b", "c", "d"]); // => {0: 'a'}
    // @ts-expect-error
    const a63: { 0: "a" } = R.pick([12, 0])(abcdTuple); // => {0: 'a'}

    const s = Symbol("s");
    const sObj: { [s]: "a" } = { [s]: "a" };
    const a7: { [s]: string } = R.pick([s], { [s]: "a" }); // => {Symbol(s): 'a'}
    const a7_const: { [s]: "a" } = R.pick([s], sObj); // => {Symbol(s): 'a'}
});
