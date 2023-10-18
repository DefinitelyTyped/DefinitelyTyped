/// <reference types="node" />

/**
 * Parse a .gitignore or .npmignore file into an array of patterns.
 */
declare function gitignore(input: string | Buffer): string[];

declare namespace gitignore {
    /**
     * Pass the contents of a .gitignore file as a string or buffer
     */
    function parse(input: string | Buffer, fn?: FormatLine): State;

    function format(section: Section): string;

    function stringify(sections: Section[], fn?: typeof format): string;

    interface State {
        patterns: string[];
        sections: Section[];
    }

    interface Section {
        readonly name: string;
        readonly patterns: string[];
    }

    interface FormatLine {
        (line: string, section?: Section, state?: State): string;
    }
}

export = gitignore;
