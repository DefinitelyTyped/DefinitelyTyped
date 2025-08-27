declare namespace parse {
    /**
     * Line coverage detail
     */
    interface LcovLine {
        line: number;
        hit: number;
    }
    /**
     * Function coverage detail
     */
    interface LcovFunc {
        name: string;
        line: number;
        hit: number;
    }
    /**
     * Branch coverage detail
     */
    interface LcovBranch {
        line: number;
        block: number;
        branch: number;
        taken: number;
    }
    /**
     * Code coverage for lines, functions or branches in a file
     */
    interface LcovPart<T> {
        hit: number;
        found: number;
        details: T[];
    }
    /**
     * Code coverage for a file
     */
    interface LcovFile {
        title: string;
        file: string;
        lines: LcovPart<LcovLine>;
        functions: LcovPart<LcovFunc>;
        branches: LcovPart<LcovBranch>;
    }
    /**
     * Parses an LCOV code coverage string:
     * ```
     *  parse(lcovString, function(err, data) {
     *      //process the data here
     *  });
     * ```
     *
     * @param str LCOV string to parse
     * @param cb Callback: first arg is `null` or error string,
     *                     second arg is parsed data or `undefined` if an error occurred
     */
    function source(str: string, cb: (err: null | string, data: LcovFile[] | undefined) => void): void;
}

/**
 * Parses an LCOV code coverage file:
 * ```
 *  parse('./path/to/file.info', function(err, data) {
 *      //process the data here
 *  });
 * ```
 *
 * The first argument can also be an LCOV string to parse:
 * ```
 *  parse(lcovString, function(err, data) {
 *      //process the data here
 *  });
 * ```
 *
 * @param file Path to the LCOV file or string to parse
 * @param cb Callback: first arg is `null` or error string,
 *                     second arg is parsed data or `undefined` if an error occurred
 */
declare function parse(file: string, cb: (err: null | string, data: parse.LcovFile[] | undefined) => void): void;

export = parse;
