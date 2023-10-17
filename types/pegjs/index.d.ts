declare namespace PEG {
    function parse(input: string): any;

    interface Location {
        line: number;
        column: number;
        offset: number;
    }

    interface LocationRange {
        start: Location;
        end: Location;
    }

    class SyntaxError {
        line: number;
        column: number;
        offset: number;
        location: LocationRange;
        expected: any[];
        found: any;
        name: string;
        message: string;
    }
}

export type Location = PEG.Location;
export type LocationRange = PEG.LocationRange;

export interface ExpectedItem {
    type: string;
    value?: string | undefined;
    description: string;
}

export interface PegjsError extends Error {
    name: string;
    message: string;
    location: LocationRange;
    found?: any;
    expected?: ExpectedItem[] | undefined;
    stack?: any;
}

export type GrammarError = PegjsError;
export var GrammarError: any;

export interface ParserOptions {
    startRule?: string | undefined;
    tracer?: any;
    [key: string]: any;
}

export interface Parser {
    parse(input: string, options?: ParserOptions): any;

    SyntaxError: any;
}

export interface BuildOptionsBase {
    /** rules the parser will be allowed to start parsing from (default: the first rule in the grammar) */
    allowedStartRules?: string[] | undefined;
    /** if `true`, makes the parser cache results, avoiding exponential parsing time in pathological cases but making the parser slower (default: `false`) */
    cache?: boolean | undefined;
    /** selects between optimizing the generated parser for parsing speed (`"speed"`) or code size (`"size"`) (default: `"speed"`) */
    optimize?: "speed" | "size" | undefined;
    /** plugins to use */
    plugins?: any[] | undefined;
    /** makes the parser trace its progress (default: `false`) */
    trace?: boolean | undefined;
}

export interface ParserBuildOptions extends BuildOptionsBase {
    /** if set to `"parser"`, the method will return generated parser object; if set to `"source"`, it will return parser source code as a string (default: `"parser"`) */
    output?: "parser" | undefined;
}

export interface OutputFormatAmdCommonjs extends BuildOptionsBase {
    /** if set to `"parser"`, the method will return generated parser object; if set to `"source"`, it will return parser source code as a string (default: `"parser"`) */
    output: "source";
    /** format of the genreated parser (`"amd"`, `"bare"`, `"commonjs"`, `"globals"`, or `"umd"`); valid only when `output` is set to `"source"` (default: `"bare"`) */
    format: "amd" | "commonjs";
    /** parser dependencies, the value is an object which maps variables used to access the dependencies in the parser to module IDs used to load them; valid only when `format` is set to `"amd"`, `"commonjs"`, or `"umd"` (default: `{}`) */
    dependencies?: any;
}

export interface OutputFormatUmd extends BuildOptionsBase {
    /** if set to `"parser"`, the method will return generated parser object; if set to `"source"`, it will return parser source code as a string (default: `"parser"`) */
    output: "source";
    /** format of the genreated parser (`"amd"`, `"bare"`, `"commonjs"`, `"globals"`, or `"umd"`); valid only when `output` is set to `"source"` (default: `"bare"`) */
    format: "umd";
    /** parser dependencies, the value is an object which maps variables used to access the dependencies in the parser to module IDs used to load them; valid only when `format` is set to `"amd"`, `"commonjs"`, or `"umd"` (default: `{}`) */
    dependencies?: any;
    /** name of a global variable into which the parser object is assigned to when no module loader is detected; valid only when `format` is set to `"globals"` or `"umd"` (default: `null`) */
    exportVar?: any;
}

export interface OutputFormatGlobals extends BuildOptionsBase {
    /** if set to `"parser"`, the method will return generated parser object; if set to `"source"`, it will return parser source code as a string (default: `"parser"`) */
    output: "source";
    /** format of the genreated parser (`"amd"`, `"bare"`, `"commonjs"`, `"globals"`, or `"umd"`); valid only when `output` is set to `"source"` (default: `"bare"`) */
    format: "globals";
    /** name of a global variable into which the parser object is assigned to when no module loader is detected; valid only when `format` is set to `"globals"` or `"umd"` (default: `null`) */
    exportVar?: any;
}

export interface OutputFormatBare extends BuildOptionsBase {
    /** if set to `"parser"`, the method will return generated parser object; if set to `"source"`, it will return parser source code as a string (default: `"parser"`) */
    output: "source";
    /** format of the genreated parser (`"amd"`, `"bare"`, `"commonjs"`, `"globals"`, or `"umd"`); valid only when `output` is set to `"source"` (default: `"bare"`) */
    format?: "bare" | undefined;
}

/** Returns a generated parser object. It will throw an exception if the grammar is invalid. The exception will contain `message` property with more details about the error. */
export function generate(grammar: string, options?: ParserBuildOptions): Parser;
/** Returns the generated source code as a `string`. It will throw an exception if the grammar is invalid. The exception will contain `message` property with more details about the error. */
export function generate(grammar: string, options: OutputFormatAmdCommonjs): string;
/** Returns the generated source code as a `string`. It will throw an exception if the grammar is invalid. The exception will contain `message` property with more details about the error. */
export function generate(grammar: string, options: OutputFormatUmd): string;
/** Returns the generated source code as a `string`. It will throw an exception if the grammar is invalid. The exception will contain `message` property with more details about the error. */
export function generate(grammar: string, options: OutputFormatGlobals): string;
/** Returns the generated source code as a `string`. It will throw an exception if the grammar is invalid. The exception will contain `message` property with more details about the error. */
export function generate(grammar: string, options: OutputFormatBare): string;

export namespace parser {
    type SyntaxError = PegjsError;
    var SyntaxError: any;
}
export as namespace PEG;
