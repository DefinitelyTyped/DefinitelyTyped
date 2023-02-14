export = Hex;
declare function Hex(): void;
declare class Hex {}
declare namespace Hex {
    function encode(str: string): string;
    function decode(str: string): string;
    function encodeToString(src: any): string;
    function decodeString(s: string): Uint8Array;
}
