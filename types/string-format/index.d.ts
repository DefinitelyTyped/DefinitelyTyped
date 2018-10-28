// Type definitions for string-format 2.0
// Project: https://github.com/davidchambers/string-format
// Definitions by: Luca Lindhorst <https://github.com/lal12>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function Format(template: string, ...args: Array<({ [k: string]: any } | string)>): string;

interface Transformers {
    [k: string]: (s: any) => string;
}

declare namespace Format {
    /**
     * create a format function with given transformers
     * @param transformers functions which convert a string, indexed by a name
     */
    function create(transformers: Transformers): (typeof Format);

    /**
     * @param prototype prototype which should be extended by format (usually String.prototype)
     * @param transformers functions which convert a string, indexed by a name
     */
    function extend(prototype: any, transformers: Transformers): void;
}

export = Format;
