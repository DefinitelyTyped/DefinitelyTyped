export = Zlib;
declare function Zlib(): void;
declare class Zlib {}
declare namespace Zlib {
    const NO_COMPRESSION: number;
    const BEST_SPEED: number;
    const BEST_COMPRESSION: number;
    const DEFAULT_COMPRESSION: number;
    function compress(content: string, opt_level?: number): string;
    function decompress(content: string, windowsBit: number): string;
    function crc32(content: string, opt_initialCrc?: number): number;
    function adler32(content: string, opt_initialAdler?: number): number;
}
