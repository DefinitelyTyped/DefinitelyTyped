export namespace convertString {
    function stringToBytes(str: string): number[];
    function bytesToString(bytes: number[]): string;

    namespace UTF8 {
        function stringToBytes(str: string): number[];
        function bytesToString(bytes: number[]): string;
    }
}
