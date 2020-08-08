// Type definitions for minimalistic-assert 1.0
// Project: https://github.com/calvinmetcalf/minimalistic-assert
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

declare function assert(val: any, msg?: string): asserts val;

declare namespace assert {
    function equal<T>(l: T, r: T, msg?: string): void;
}

export = assert;
