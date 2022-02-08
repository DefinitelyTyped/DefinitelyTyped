export = parseContentDisposition;
declare function parseContentDisposition(content: string): ParseResult;
declare namespace parseContentDisposition {
    export { ParseResult };
}
interface ParseResult {
    type: string;
    params: any;
}
