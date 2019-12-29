// Type definitions for relaxed-json 1.0
// Project: https://github.com/phadej/relaxed-json
// Definitions by: Mikal Madsen <https://github.com/18steps>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type Reviver = (this: {}, key: string, value: any) => any;
export function transform(text: string): string;
export function parse(text: string, reviver: Reviver): {};
export function parse(text: string, opts?: {
    reviver?: Reviver,
    relaxed?: boolean,
    warnings?: boolean,
    tolerant?: boolean,
    duplicate?: boolean,
}): {};
export function stringify(obj: any): string;
