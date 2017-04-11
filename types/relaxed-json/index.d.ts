// Type definitions for relaxed-json 1.0
// Project: https://github.com/phadej/relaxed-json
// Definitions by: Mikal Madsen <https://github.com/18steps>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function transform(text: string): string;
export function parse(text: string, reviver: (this: {}, key: string, value: any) => any): {};
export function parse(text: string, opts?: {
    relaxed?: boolean,
    warnings?: boolean,
    tolerant?: boolean,
    duplicate?: boolean,
}): {};
export function stringify(obj: any): string;

export default {
    transform,
    parse,
    stringify,
};
