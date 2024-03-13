export = Zlib;
declare function Zlib(): void;
declare class Zlib {}
declare namespace Zlib {
    let NO_COMPRESSION: number;
    let BEST_SPEED: number;
    let BEST_COMPRESSION: number;
    let DEFAULT_COMPRESSION: number;
    function compress(content: string, opt_level?: number): string;
    function decompress(content: string, windowsBit: number): string;
    function crc32(content: string, opt_initialCrc?: number): number;
    function adler32(content: string, opt_initialAdler?: number): number;
}
