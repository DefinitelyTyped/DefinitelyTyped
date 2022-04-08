// Type definitions for stringify-object 3.3
// Project: https://github.com/yeoman/stringify-object
// Definitions by: Chris Khoo <https://github.com/khoomeister>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace stringifyObject { }

declare function stringifyObject(input: any, options?: {
    /**
     * Preferred indentation
     * @default '\t'
     */
    indent?: string,
    /**
     * Set to false to get double-quoted strings
     * @default true
     */
    singleQuotes?: boolean,
    /**
     * Expected to return a boolean of whether to include the property property of the object object in the output.
     */
    filter?(input: any, prop: string | symbol): boolean,
    /**
     * When set, will inline values up to inlineCharacterLimit length for the sake of more terse output.
     */
    inlineCharacterLimit?: number,
    /**
     * Expected to return a string that transforms the string that resulted from stringifying object[property].
     * This can be used to detect special types of objects that need to be stringified in a particular way.
     * The transform function might return an alternate string in this case, otherwise returning the originalResult.
     */
    transform?: (input: any[] | object, prop: number | string | symbol, originalResult: string) => string,
}, pad?: string): string;

export = stringifyObject;
