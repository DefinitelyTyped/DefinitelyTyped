declare function assert(val: any, msg?: string): asserts val;

declare namespace assert {
    function equal<T>(l: T, r: T, msg?: string): void;
}

export = assert;
