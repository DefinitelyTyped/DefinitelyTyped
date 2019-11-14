// Type definitions for string-placeholder 1.0
// Project: https://github.com/crysalead-js/string-placeholder#readme
// Definitions by: Filipe Ferreira <https://github.com/iTsFILIPOficial>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = template;
export as namespace template;

declare function template(str: string, data: [] | {}, options?: Options): string;

interface Options {
    before?: string;
    after?: string;
    escape?: string;
    clean?: boolean | [];
}
