// Type definitions for lua-json 1.0
// Minimum Typescript Version: 3.7
// Project: https://github.com/kcwiki/lua-json#readme
// Definitions by: bitomic <https://github.com/bitomic>
//                 Tommy Josépovic <https://github.com/tommy-josepovic>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Json = null | boolean | number | string | Json[] | { [ _: string ]: Json };

/**
 * Takes a JSON object and returns a Lua table as a string.
 */
export function format(
    value: Json,
    options?: {
        eol?: string;
        singleQuote?: boolean;
        spaces?: null | number | string;
    },
): string;

/**
 * Takes a Lua table (string) and returns a JSON object.
 */
export function parse(value: string): Json;

/**
 * lua-json provides a way to convert between JSON and Lua tables.
 */
export as namespace luajson;
