export = template;

/** Data passed to a template function for interpolation. */
interface Data {
    [key: string]: string | Data;
}

/** Returns a stored template string, interpolating the given data. */
interface Template {
    (obj: Data): string;
}

/** Creates a template function with the given template string. */
declare function template(thing: string | { toString: () => string }): Template;
