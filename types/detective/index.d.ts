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
        word?: string | undefined;
        /**
         * when true, populate found.nodes
         */
        nodes?: string | undefined;
        /**
         * a function returning whether an AST CallExpression node is a require call
         */
        isRequire?: ((node: any) => boolean) | undefined;
        /**
         * supply options directly to acorn with some support for esprima-style options range and loc
         */
        parse?: acorn.Options | undefined;
        /**
         * Indicates the ECMAScript version to parse. Must be either 3, 5, 6 (2015),
         * 7 (2016), 8 (2017), 9 (2018) or 10 (2019, partial support). This influences
         * support for strict mode, the set of reserved words, and support for new syntax features.
         * Default is 9.
         */
        ecmaVersion?: string | number | undefined;

        /**
         * If false, using a reserved word will generate an error. Defaults to true for ecmaVersion 3,
         * false for higher versions. When given the value "never", reserved words and keywords can
         * also not be used as property names (as in Internet Explorer's old parser).
         */
        allowReserved?: boolean | "never" | undefined;
        /**
         * By default, a return statement at the top level raises an error. Set this to true to accept such code.
         */
        allowReturnOutsideFunction?: boolean | undefined;
        /**
         * By default, import and export declarations can only appear at a program's top level.
         * Setting this option to true allows them anywhere where a statement is allowed.
         */
        allowImportExportEverywhere?: boolean | undefined;
        /**
         * When this is enabled (off by default), if the code starts with the
         * characters #! (as in a shellscript), the first line will be treated as a comment.
         */
        allowHashBang?: boolean | undefined;
        /**
         * When true, each node has a loc object attached with start and end subobjects, each of which
         * contains the one-based line and zero-based column numbers in {line, column} form. Default is false.
         */
        locations?: boolean | undefined;
        /**
         * Nodes have their start and end characters offsets recorded in start and end properties
         * (directly on the node, rather than the loc object, which holds line/column data.
         * To also add a semi-standardized range property holding a [start, end] array with
         * the same numbers, set the ranges option to true.
         */
        ranges?: string | undefined;
        /**
         * Indicate the mode the code should be parsed in. Can be either "script" or "module".
         * This influences global strict mode and parsing of import and export declarations.
         */
        sourceType?: ("script" | "module") | undefined;
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
        nodes?: any[] | undefined;
    }
}

declare var detective: detective.Detective;

export = detective;
