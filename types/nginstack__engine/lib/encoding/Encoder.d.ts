export = Encoder;
declare function Encoder(): void;
declare class Encoder {}
declare namespace Encoder {
    let ISO_8859_1: string;
    let UTF_8: string;
    let WINDOWS_1252: string;
    let STRING_FORMAT: string;
    let ARRAY_BUFFER_FORMAT: string;
    function convertToString(sourceEncoding: string, source: string | ArrayBuffer): string;
    function convertFromString(
        targetEncoding: string,
        source: string,
        encodeFmt?: string
    ): string | ArrayBuffer;
    function convert(
        sourceEncoding: string,
        targetEncoding: string,
        source: string | ArrayBuffer,
        encodeFmt?: string
    ): string | ArrayBuffer;
    function supports(encodingName: string): boolean;
    function listEncodings(): any[];
}
