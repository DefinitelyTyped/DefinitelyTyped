// Type definitions for detective 5.1
// Project: https://github.com/browserify/detective
// Definitions by: TeamworkGuy2 <https://github.com/TeamworkGuy2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as acorn from "acorn";

/**
 * Find all calls to require() by walking the AST
 */
declare namespace detective {
    interface Detective {
        /**
         * Give some source body src, return an array of all the require() calls with string arguments.
         * The options parameter opts is passed along to detective.find().
         */
        (src: string, opts?: Options): string[];
        /**
         * Give some source body 'src', return 'found' DetectiveResults
         */
		find(src: string, opts?: Options): DetectiveResults;
    }

    interface Options {
        /**
         * specify a different function name instead of "require"
         */
        word?: string;
        /**
         * when true, populate found.nodes
         */
        nodes?: string;
        /**
         * a function returning whether an AST CallExpression node is a require call
         */
        isRequire?: (node: any) => boolean;
        /**
         * supply options directly to acorn with some support for esprima-style options range and loc
         */
        parse?: acorn.Options;
        /**
         * Indicates the ECMAScript version to parse. Must be either 3, 5, 6 (2015),
         * 7 (2016), 8 (2017), 9 (2018) or 10 (2019, partial support). This influences
         * support for strict mode, the set of reserved words, and support for new syntax features.
         * Default is 9.
         */
        ecmaVersion?: string | number;

        /**
         * If false, using a reserved word will generate an error. Defaults to true for ecmaVersion 3,
         * false for higher versions. When given the value "never", reserved words and keywords can
         * also not be used as property names (as in Internet Explorer's old parser).
         */
        allowReserved?: boolean | "never";
        /**
         * By default, a return statement at the top level raises an error. Set this to true to accept such code.
         */
        allowReturnOutsideFunction?: boolean;
        /**
         * By default, import and export declarations can only appear at a program's top level.
         * Setting this option to true allows them anywhere where a statement is allowed.
         */
        allowImportExportEverywhere?: boolean;
        /**
         * When this is enabled (off by default), if the code starts with the
         * characters #! (as in a shellscript), the first line will be treated as a comment.
         */
        allowHashBang?: boolean;
        /**
         * When true, each node has a loc object attached with start and end subobjects, each of which
         * contains the one-based line and zero-based column numbers in {line, column} form. Default is false.
         */
        locations?: boolean;
        /**
         * Nodes have their start and end characters offsets recorded in start and end properties
         * (directly on the node, rather than the loc object, which holds line/column data.
         * To also add a semi-standardized range property holding a [start, end] array with
         * the same numbers, set the ranges option to true.
         */
        ranges?: string;
        /**
         * Indicate the mode the code should be parsed in. Can be either "script" or "module".
         * This influences global strict mode and parsing of import and export declarations.
         */
        sourceType?: ("script" | "module");
    }

    interface DetectiveResults {
        /**
         * an array of each string found in a require()
         */
        strings: string[];
        /**
         * an array of each stringified expression found in a require() call
         */
        expressions: string[];
        /**
         * (when opts.nodes === true) - an array of AST nodes for each argument found in a require() call
         */
        nodes?: any[];
    }
}

declare var detective: detective.Detective;

export = detective;
