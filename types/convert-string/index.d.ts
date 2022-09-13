// Type definitions for convert-string 0.1
// Project: https://github.com/baz/foo
// Definitions by: Haseeb Majid <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export namespace convertString {
    function stringToBytes(str: string): number[];
    function bytesToString(bytes: number[]): string;

    namespace UTF8 {
        function stringToBytes(str: string): number[];
        function bytesToString(bytes: number[]): string;
    }
}
