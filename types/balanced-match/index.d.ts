// Type definitions for balanced-match 1.0
// Project: https://github.com/juliangruber/balanced-match
// Definitions by:  Adam Zerella <https://github.com/adamzerella>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Output {
    /**
     * The index of the first match of a
     */
    start: number;
    /**
     * The index of the matching b
     */
    end: number;
    /**
     * The preamble, a and b not included
     */
    pre: string;
    /**
     * The match, a and b not included
     */
    body: string;
    /**
     * The postscript, a and b not included
     */
    post: string;
}

declare class Balanced {
    balanced(a: string|RegExp, b: string|RegExp, str: string): Output|void;

    range(a: string|RegExp, b: string|RegExp, str: string): Output|void;
}

export = Balanced;
