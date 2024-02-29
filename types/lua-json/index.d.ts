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
