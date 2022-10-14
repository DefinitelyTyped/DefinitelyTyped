// Type definitions for tiny-templater 1.0
// Project: https://github.com/jarofghosts/tiny-templater#readme
// Definitions by: Jimmy Cuadra <https://github.com/jimmycuadra>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = template;

type Data = string | { [key: string]: Data };

declare function template(thing: string | { toString: () => string }): (obj: Data) => string;
