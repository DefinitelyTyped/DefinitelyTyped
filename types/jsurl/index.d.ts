// eslint-disable-next-line @definitelytyped/no-unnecessary-generics -- easier to use this function using a generic rather than casting
export function stringify<T>(value: T): string;

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics -- easier to use this function using a generic rather than casting
export function parse<T extends object>(urlFragment: string): T;

/**
 * Same as `parse`, but returns `def` if parsing fails.
 * @param urlFragment the URL fragment to parse
 * @param def the default value to return if parsing fails
 */
export function tryParse<T extends object>(urlFragment: string, def?: T): T;
