export = Encoder;
declare function Encoder(): void;
declare class Encoder {}
declare namespace Encoder {
    const ISO_8859_1: string;
    const UTF_8: string;
    const WINDOWS_1252: string;
    const STRING_FORMAT: string;
    const ARRAY_BUFFER_FORMAT: string;
    function convertToString(sourceEncoding: string, source: any): string;
    function convertFromString(targetEncoding: string, source: string, encodeFmt?: string): any;
    function convert(
        sourceEncoding: string,
        targetEncoding: string,
        source: any,
        encodeFmt?: string
    ): any;
    function supports(encodingName: string): boolean;
    function listEncodings(): any[];
}
