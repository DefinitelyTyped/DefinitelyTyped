// Type definitions for dashdash 1.14
// Project: https://github.com/trentm/node-dashdash#readme
// Definitions by: Adam Voss <https://github.com/adamvoss>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export class Parser {
    /**  Allow interspersed arguments. @default true */
    interpersed: boolean;

    /** Don't allow unknown flags. @default true */
    allowUnknown: boolean;

    constructor(config: ParserConfiguration);

    /**  Return a string suitable for a Bash completion file for this tool. */
    bashCompletion(args: BashCompletionConfiguration): string;

    /**
     * Return help output for the current options.
     *
     * E.g.: if the current options are:
     *      [{names: ['help', 'h'], type: 'bool', help: 'Show help and exit.'}]
     * then this would return:
     *      '  -h, --help     Show help and exit.\n'
     */
    help(config?: HelpConfiguration): string;

    /** Parse options from the given argv. */
    parse(inputs?: string[] | ParsingConfiguration): Results;
}

/**
 * Add a new option type.
 */
export function addOptionType(optionType: OptionType): void;

export function bashCompletionFromOptions(args: BashCompletionConfiguration): string;

export function bashCompletionSpecFromOptions(args: BashCompletionSpecConfiguration): string;

export function createParser(config: ParserConfiguration): Parser;

export function getOptionType(name: string): OptionType;

/**
 * Parse argv with the given options.
 *
 * @param config A merge of all the available fields from
 *      `dashdash.Parser` and `dashdash.Parser.parse`: options, interspersed,
 *      argv, env, slice.
 */
export function parse(config: ParsingConfiguration): Results;

export interface Results {
    [key: string]: any;
    _order: Arg[];
    _args: string[];
}

export interface Arg {
    name: string;
    value: any;
    from: string;
}

/**
 * Return a synopsis string for the given option spec.
 *
 * Examples:
 *      > synopsisFromOpt({names: ['help', 'h'], type: 'bool'});
 *      '[ --help | -h ]'
 *      > synopsisFromOpt({name: 'file', type: 'string', helpArg: 'FILE'});
 *      '[ --file=FILE ]'
 */
export function synopsisFromOpt(o: Option): string;

export type Option = OptionWithoutAliases | OptionWithAliases;

export interface ParsingConfiguration {
    /**
     * The argv to parse. Defaults to `process.argv`.
     */
    argv?: string[];

    /**
     * The index into argv at which options/args begin.  Default is 2, as appropriate for `process.argv`.
     */
    slice?: number;

    /**
     * The env to use for 'env' entries in the option specs. Defaults to `process.env`.
     */
    env?: any; // NodeJS.ProcessEnv;

    options?: Array<Option | Group>;
}

export interface ParserConfiguration {
    /**
     * Array of option specs.
     */
    options: Array<Option | Group>;

    /**
     * Whether to throw on unknown options.
     * If false, then unknown args are included in the _args array.
     * Default: false
     */
    allowUnknown?: boolean;

    /**
     * Whether to allow interspersed arguments (non-options) and options.
     *
     * E.g.:
     *   node tool.js arg1 arg2 -v
     *
     * '-v' is after some args here. If `interspersed: false` then '-v'
     *  would not be parsed out. Note that regardless of `interspersed`
     * the presence of '--' will stop option parsing, as all good
     * option parsers should.
     *
     * Default: true
     */
    interspersed?: boolean;
}

export interface OptionWithoutAliases extends OptionBase {
    /**
     * The option name
     */
    name: string;
}

export interface OptionWithAliases extends OptionBase {
    /**
     * The option name and aliases. The first name (if more than one given) is the key for the parsed `opts` object.
     */
    names: string[];
}

export interface OptionBase {
    /**
     * One of: bool, string, number, integer, positiveInteger, arrayOfBool, arrayOfString,
     * arrayOfNumber, arrayOfInteger, arrayOfPositiveInteger, arrayOfDate,
     * date (epoch seconds, e.g. 1396031701, or ISO 8601 format YYYY-MM-DD[THH:MM:SS[.sss][Z]], e.g. "2014-03-28T18:35:01.489Z").
     * You can add your own custom option types with `dashdash.addOptionType`
     * These names attempt to match with asserts on `assert-plus`.
     */
    type: string;

    /**
     * This is used for Bash completion for an option argument.
     * If not specified, then the value of type is used. Any string may be specified, but only the following values have meaning:
     *  - none: Provide no completions.
     *  - file: Bash's default completion (i.e. complete -o default), which includes filenames.
     *  - Any string FOO for which a function complete_FOO Bash function is defined.
     * This is for custom completions for a given tool.
     * Typically these custom functions are provided in the specExtra argument to dashdash.bashCompletionFromOptions().
     */
    completionType?: string;

    /**
     * An environment variable name (or names) that can be used as a fallback for this option.
     * An environment variable is only used as a fallback, i.e. it is ignored if the associated option is given in `argv`.
     */
    env?: string | string[];

    /**
     * Used for parser.help() output.
     */
    help?: string;

    /**
     * Used in help output as the placeholder for the option argument.
     */
    helpArg?: string;

    /**
     * Set this to false to have that option's help not be text wrapped in <parser>.help() output.
     */
    helpWrap?: boolean;

    /**
     * A default value used for this option, if the option isn't specified in argv.
     */
    default?: string;

    /**
     * If true, help output will not include this option.
     */
    hidden?: boolean;
}

export interface Group {
    group: string;
}

export interface OptionType {
    name: string;
    /**
     * Whether this type of option takes an
     * argument on process.argv. Typically this is true for all but the
     * "bool" type.
     */
    takesArg: boolean;
    /**
     * Required iff `takesArg === true`. The string to show in generated help for options of this type.
     */
    helpArg?: string;
    /**
     * parser that takes a string argument and returns an instance of the
     * appropriate type, or throws an error if the arg is invalid.
     */
    parseArg(option: Option, optstr: string, arg: string): any;
    /**
     * Set to true if this is an 'arrayOf' type
     * that collects multiple usages of the option in process.argv and puts results in an array.
     */
    array?: boolean;
    arrayFlatten?: boolean;
    /**
     * Default value for options of this type, if no default is specified in the option type usage.
     */
    default?: any;
    completionType?: any;
}

export interface BashCompletionConfiguration {
    /**
     * The tool name.
     */
    name: string;

    /**
     * The array of dashdash option specs.
     */
    options?: Array<Option | Group>;

    /**
     * Extra Bash code content to add
     * to the end of the "spec". Typically this is used to append Bash
     * "complete_TYPE" functions for custom option types.
     */
    specExtra?: string;

    /**
     * Array of completion types for positional args (i.e. non-options).
     * If not given, positional args will use Bash's 'default' completion.
     */
    argtypes?: string[];
}

export interface BashCompletionSpecConfiguration {
    /**
     * The array of dashdash option specs.
     */
    options: Array<Option | Group>;

    /**
     * A context string for the "local cmd*"
     * vars in the spec. By default it is the empty string. When used to
     * scope for completion on a *sub-command*.
     */
    context?: string;

    /**
     * By default
     * hidden options and subcmds are "excluded". Here excluded means they
     * won't be offered as a completion, but if used, their argument type
     * will be completed. "Hidden" options and subcmds are ones with the
     * `hidden: true` attribute to exclude them from default help output.
     */
    includeHidden?: boolean;

    /**
     * Array of completion types for positional args (i.e. non-options).
     * If not given, positional args will use Bash's 'default' completion.
     */
    argtypes?: string[];
}

export interface HelpConfiguration {
    /**
     * Set to a number (for that many spaces) or a string for the literal indent.
     * Default: 4
     */
    indent?: number | string;

    /**
     * Set to a number (for that many spaces) or a string for the literal indent.
     * This indent applies to group heading lines, between normal option lines.
     * Default: half length of `indent`
     */
    headingIndent?: number | string;

    /**
     * By default the names are sorted to put the short opts first (i.e. '-h, --help' preferred to '--help, -h').
     * Set to 'none' to not do this sorting.
     * Default: 'length'
     */
    nameSort?: string;

    /**
     * Note that reflow is just done on whitespace so a long token in the option help can overflow maxCol.
     * Default: 80
     */
    maxCol?: number;

    /**
     * If not set a reasonable value will be determined between minHelpCol and maxHelpCol.
     */
    helpCol?: number;

    /**
     * Default: 20
     */
    minHelpCol?: number;

    /**
     * Default: 40
     */
    maxHelpCol?: number;

    /**
     * Set to `false` to have option `help` strings not be textwrapped to the helpCol..maxCol range.
     * Default: true
     */
    helpWrap?: boolean;

    /**
     * If the option has associated environment variables (via the env option spec attribute), then append mentioned of those envvars to the help string.
     * Default: false
     */
    includeEnv?: boolean;

    /**
     * If the option has a default value (via the default option spec attribute, or a default on the option's type), then a "Default: VALUE" string will be appended to the help string.
     * Default: false
     */
    includeDefault?: boolean;
}
