// Type definitions for pretty-format 20.0
// Project: https://github.com/facebook/jest/tree/master/packages/pretty-format
// Definitions by: Ika <https://github.com/ikatyang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/**
 * Stringify any JavaScript value.
 */
declare function prettyFormat(value: any, options?: prettyFormat.Options): string;

declare namespace prettyFormat {
    interface Options {
        /**
         * Call `toJSON()` on passed object.
         */
        callToJSON?: boolean;
        /**
         * Escape special characters in regular expressions.
         */
        escapeRegex?: boolean;
        /**
         * Highlight syntax for terminal (works only with `ReactTestComponent` and `ReactElement` plugins.
         */
        highlight?: boolean;
        /**
         * Number of spaces for indentation.
         */
        indent?: number;
        /**
         * Print only this number of levels.
         */
        maxDepth?: number;
        /**
         * Print without whitespace.
         */
        min?: boolean;
        /**
         * plugins to serialize application-specific data types
         */
        plugins?: Plugin[];
        /**
         * Print function names or just [Function].
         */
        printFunctionName?: boolean;
        /**
         * Syntax highlight theme.
         * Uses [ansi-styles colors](https://github.com/chalk/ansi-styles#colors) + `reset` for no color.
         */
        theme?: Theme;
    }

    interface Plugin {
        test(value: any): boolean;
        print(value: any, serialize: Print, indent: Indent, options: Options, colors: Colors): string;
    }

    const plugins: Record<'AsymmetricMatcher' | 'ConvertAnsi' | 'HTMLElement' | 'Immutable' | 'ReactElement' | 'ReactTestComponent', Plugin>;

    type Print = (value: any) => string;
    type Indent = (value: string) => string;

    interface Colors {
        comment: { close: string; open: string };
        content: { close: string; open: string };
        prop: { close: string; open: string };
        tag: { close: string; open: string };
        value: { close: string; open: string };
    }

    interface Theme {
        comment?: string;
        content?: string;
        prop?: string;
        tag?: string;
        value?: string;
    }
}

export = prettyFormat;
