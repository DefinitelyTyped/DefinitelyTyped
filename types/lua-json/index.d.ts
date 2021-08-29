// Type definitions for lua-json 1.0
// Project: https://github.com/kcwiki/lua-json#readme
// Definitions by: bitomic <https://github.com/bitomic>
//                 Tommy Josépovic <https://github.com/tommy-josepovic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Takes a JSON object and returns a Lua table as a string.
 */
export function format(
    value: object,
    options?: {
        eol?: string;
        singleQuote?: boolean;
        spaces?: number;
    },
): string;

/**
 * Takes a Lua table (string) and returns a JSON object.
 */
export function parse(value: string): object;

/**
 * lua-json provides a way to convert between JSON and Lua tables.
 */
export as namespace luajson;
