// Type definitions for node-getopt 0.2.3
// Project: https://github.com/jiangmiao/node-getopt
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Type Script Declaration for node-getopt
 */


interface OptionMap {
    [index: string]: string | string[] | boolean;
}

/**
 * Parsed options.
 */
declare class ParsedOption {
    public argv: string[];
    public options: OptionMap;

    constructor(argv: string[], options: OptionMap);
    public empty(): boolean;
}

interface EventCallback {
    (args: string[], options: OptionMap): void;
}

interface ErrorFunc {
    (exception: Error): void;
}

interface OptionConfigurationArray {
    [index: number]: string[];
}

declare class Getopt {
    static HAS_ARGUMENT: boolean;
    static NO_ARGUMENT: boolean;
    static MULTI_SUPPORTED: boolean;
    static SINGLE_ONLY: boolean;
    static VERSION: string;

    /**
     * options is a set of option. each option contains 3 fields.
     *    [short_name, long_name_with_definition, comment]
     *    Definition:
     *    * '=ARG':   has argument
     *    * '[=ARG]': has argument but optional
     *    * '+':      multiple option supported
     *
     *    ARG can be replaced by any word.
     * @param options
     */
    public constructor(options: any[]);

    /**
     * after parsing, trigger the action if optionName is found.
     * the 'this' in action will be the instance of Getopt.
     * @param name
     * @param cb
     */
    public on(name: string, cb: EventCallback): Getopt;

    public emit(name: string, cb: EventCallback): Getopt;

    /**
     * parse argv
     *
     * Returns: {argv: '...', options: {...}}
     *
     */
    public parse(argv: string[]): ParsedOption;

    /**
     * alias of parse(process.argv.slice(2))
     */
    public parse_system(): ParsedOption;

    public parseSystem(): ParsedOption;

    /**
     * Set help template. the placeholders will be replaced by getopt.
     *
     * Placeholders:
     *    * [[OPTIONS]] - The options list
     *
     * Returns: String
     * @param help
     */
    public setHelp(help: string): Getopt;

    /**
     * console.info(getopt.getHelp());
     */
    public showHelp(): Getopt;

    /**
     * Get the help generated.
     */
    public getHelp(): string;

    /**
     * set help template to HELP if HELP is not empty.
     * bind 'help' option to default action, show help and exit with 0.
     * @param help
     */
    public bindHelp(help?: string): Getopt;

    public getVersion(): string;

    static getVersion(): string;

    /**
     * when parse failed callback will be trigger. default is display error message and exit with 1.
     * @param errorFunc
     */
    public error(errorFunc: ErrorFunc): Getopt;

    /**
     * equals new Getopt(options)
     * @param options
     */
    static create(options: string[][]): Getopt;
}

export = Getopt;
