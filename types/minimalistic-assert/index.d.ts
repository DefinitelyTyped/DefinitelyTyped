// Type definitions for minimalistic-assert 1.0
// Project: https://github.com/calvinmetcalf/minimalistic-assert
// Definitions by: Junxiao Shi <https://github.com/yoursunny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function assert(val: any, msg?: string): void;

declare namespace assert {
    function equal<T>(l: T, r: T, msg?: string): void;
}

export = assert;
