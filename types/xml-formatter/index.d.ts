// Type definitions for xml-formatter 1.1
// Project: https://github.com/chrisbottin/xml-formatter/
// Definitions by: Joachim Holwech <https://github.com/holwech>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = Format;

declare function Format(xml: string, options?: Format.Options): string;

declare namespace Format {
    interface Options {
        debug?: boolean;
        indentation?: string;
        stripComments?: boolean;
        collapseContent?: boolean;
    }
}
