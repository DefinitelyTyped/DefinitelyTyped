// Type definitions for murmurhash3js-revisited 3.0
// Project: https://github.com/cimi/murmurhash3js-revisited#readme
// Definitions by: Carlo Francisco <https://github.com/jcfrancisco>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface X86 {
    hash32: (bytes: Uint8Array) => number;
    hash128: (bytes: Uint8Array) => string;
}
export interface X64 {
    hash128: (bytes: Uint8Array) => string;
}
export const x86: X86;
export const x64: X64;

export const MurmurHash3: {
    x86: X86;
    x64: X64;
};

export as namespace MurmurHash3;
