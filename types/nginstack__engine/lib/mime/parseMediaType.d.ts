export = parseMediaType;
declare function parseMediaType(content: string): ParseResult;
declare namespace parseMediaType {
    export { ParseResult };
}
interface ParseResult {
    mediaType: string;
    params: any;
}
