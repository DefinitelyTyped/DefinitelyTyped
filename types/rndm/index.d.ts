declare function rndm(length: number): string;

declare namespace rndm {
    function base62(length: number): string;
    function base36(length: number): string;
    function base10(length: number): string;
    function create(characters: string): (length: number) => string;
}

export = rndm;
