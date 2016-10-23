// Type definitions for murmurhash-js v1.0.0
// Project: https://github.com/mikolalysenko/murmurhash-js
// Definitions by: Chi Vinh Le <https://github.com/cvle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type MurmurFunc = (str: string, seed?: number) => number;

declare const murmur: MurmurFunc & {
    murmur3: MurmurFunc;
    murmur2: MurmurFunc;
};

export = murmur;
