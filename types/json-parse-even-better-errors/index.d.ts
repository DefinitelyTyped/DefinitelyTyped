/**
 * Parse JSON with better error messages.
 */
declare function parseJson(raw: string, reviver?: (key: string, value: any) => any, context?: string): any;

declare namespace parseJson {
    class JSONParseError extends SyntaxError {
        constructor(er: Error, txt: string, context?: string, caller?: (...args: any[]) => any);

        /** Index where parsing failed. */
        position: number;

        /** Always 'EJSONPARSE'. */
        code: "EJSONPARSE";

        /** The original SyntaxError. */
        systemError: Error;
    }

    /**
     * Parse JSON without throwing. Returns undefined on failure.
     */
    function noExceptions(raw: string, reviver?: (key: string, value: any) => any): any;
}

export = parseJson;
