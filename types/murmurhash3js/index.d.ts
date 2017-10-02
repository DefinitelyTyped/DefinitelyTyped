// Type definitions for murmurhash3js v3.0.1
// Project: https://github.com/pid/murmurHash3js
// Definitions by: Dave Lee <https://github.com/dlee-nvisia>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'murmurhash3js' {
    export module x86 {
        function hash32(val: string, seed?: number): string;
        function hash128(val: string, seed?: number): string;
    }
    
    export module x64 {
        function hash128(val: string, seed?: number): string;
    }
}
