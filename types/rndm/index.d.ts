// Type definitions for rndm 1.2
// Project: https://github.com/crypto-utils/rndm#readme
// Definitions by: Ankan Bhattacharya <https://github.com/Ankan002>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function rndm(length: number): string;

declare namespace rndm {
    function base62(length: number): string;
    function base36(length: number): string;
    function base10(length: number): string;
    function create(characters: string): (length: number) => string;
}

export = rndm;
