export interface StringifyOptions {
    /**
     * `rich`: encode Date, `undefined`, `Infinity`
     */
    rich?: boolean;
    /**
     * `short`: remove optional trailing delimiters
     */
    short?: boolean;
}

export function stringify(object: object, options?: StringifyOptions): string;

export interface ParseOptions {
    /**
     * Remove URI encoding and whitespace
     */
    deURI?: boolean;
}

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics -- allows the user to specify a specific type that they expect the string to parse to
export function parse<T extends object>(urlFragment: string, options?: ParseOptions): T;

/**
 * Same as `parse`, but returns `defaultValue` instead of throwing on error.
 */
export function tryParse<T extends object>(urlFragment: string, defaultValue: T, options?: ParseOptions): T;

export as namespace JSURL2;
