/**
 * Serialize an object as TOML.
 *
 * If an object `TOML.stringify` is serializing has a toJSON method then it will call it to transform the object before serializing it.
 * This matches the behavior of JSON.stringify.
 * The one exception to this is that toJSON is not called for Date objects because JSON represents dates as strings and TOML can represent them natively.
 */
declare function stringify(obj: Record<string, any>): string;

declare namespace stringify {
    /** Serialize a value as TOML would. This is a fragment and not a complete valid TOML document. */
    function value(v: any): string;
}

export = stringify;
