// Type definitions for style-search 0.1
// Project: https://github.com/davidtheclark/style-search#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function styleSearch(options: styleSearch.Options, callback: styleSearch.StyleSearchCallback): void;

declare namespace styleSearch {
    /**
     * Syntax feature options.
     * An error will be thrown if you use `only` more than once
     */
    type SyntaxFeatureOption = 'skip' | 'check' | 'only';

    /**
     * For every match found your callback is invoked with:
     * - `match` object
     * - `count` The count of how many matches have been found up to this point
     */
    type StyleSearchCallback = (match: StyleSearchMatch, count: number) => void;

    interface StyleSearchMatch {
        /** where the match begins */
        readonly startIndex: number;
        /** where the match ends */
        readonly endIndex: number;
        /** what got matched (useful if your target option is an array instead of a single string) */
        readonly target: string;
        /** whether the match is inside a function — this includes the parentheses around the arguments */
        readonly insideFunctionArguments: boolean;
        /** whether the match is inside a comment */
        readonly insideComment: boolean;
        /** whether the match is inside a string */
        readonly insideString: boolean;
    }
    /**
     * Syntax feature options all accept three keywords:"skip", "check", "only".
     * An error will be thrown if you use "only" more than once
     */
    interface Options {
        /** The source string to search through. */
        source: string;
        /**
         * The target of the search. Can be
         * - a single character
         * - a string with some length
         * - an array of strings, all of which count as matches
         * (the match object passed to the callback will differentiate which string in the array
         * got matched via its target property)
         */
        target: string | string[];
        /**
         * If true, the search will stop after one match is found.
         * @default false
         */
        once?: boolean;
        /**
         * This includes both standard `/* CSS comments *\/`
         * and non-standard but widely used `// single line comments`.
         * @default 'skip'
         */
        comments?: SyntaxFeatureOption;
        /**
         * @default 'skip'
         */
        strings?: SyntaxFeatureOption;
        /**
         * @default 'skip'
         */
        functionNames?: SyntaxFeatureOption;
        /**
         * @default 'check'
         */
        functionArguments?: SyntaxFeatureOption;
        /**
         * This designates anything inside parentheses, which includes standard functions,but also Sass maps and other non-standard constructs.
         * `parentheticals` is a broader category than `functionArguments`
         * @default 'check'
         */
        parentheticals?: SyntaxFeatureOption;
    }
}

export = styleSearch;
