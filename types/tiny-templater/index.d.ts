// Type definitions for tiny-templater 1.0
// Project: https://github.com/jarofghosts/tiny-templater#readme
// Definitions by: Jimmy Cuadra <https://github.com/jimmycuadra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
