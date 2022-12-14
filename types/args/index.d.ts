// Type definitions for args 5.0
// Project: https://github.com/leo/args#readme
// Definitions by: Slessi <https://github.com/Slessi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const c: args< { }>;
export = c;

interface args <TOptions extends Record<string, any>> {
    /**
     * This property exposes all sub arguments that have been parsed by mri.
     * This is useful when trying to get the value after the command.
     *
     * https://github.com/leo/args#sub
     */
    sub: string[];
    /**
     * Register a new option for the binary in which it's being called.
     *
     * https://github.com/leo/args#optionname-description-default-init
     */
    option<TName extends string | [string, string]>(name: TName, description: string, defaultValue?: any, init?: OptionInitFunction): args<TOptions & {[key in UnwrapOptionName<TName>]: any}>;
    /**
     * Takes in an array of objects that are each defining an option that shall be registered.
     * This is basically a minimalistic way to register a huge list of options at once.
     *
     * https://github.com/leo/args#optionslist
     */
    options<TNames extends string>(list: Array<Option<TNames>>): args<TOptions & {[key in TNames]: any}>;
    /**
     * Register a new sub command. Args requires all binaries to be defined in the style of git's.
     *
     * https://github.com/leo/args#commandname-description-init-aliases
     */
    command(name: string, description: string, init?: (name: string, sub: string[], options: TOptions) => void, aliases?: string[]): args<TOptions>;
    /**
     * Register an example which will be shown when calling `help`.
     *
     * https://github.com/leo/args#exampleusage-description
     */
    example(usage: string, description: string): args<TOptions>;
    /**
     * Takes in an array of objects that are each defining an example that shall be registered.
     * This is basically a minimalistic way to register a huge list of examples at once.
     *
     * https://github.com/leo/args#exampleslist
     */
    examples(list: Example[]): args<TOptions>;
    /**
     * This method takes the process' command line arguments (command and options) and uses the internal methods
     * to get their values and assign them to the current instance of args.
     * It needs to be run after all of the `.option` and `.command` calls.
     *
     * https://github.com/leo/args#parseargv-options
     */
    parse(argv: string[], options?: ConfigurationOptions): TOptions;
    /**
     * Outputs the usage information based on the options and comments you've registered
     * so far and exits, if configured to do so.
     *
     * https://github.com/leo/args#showhelp
     */
    showHelp(): void;
    /**
     * Outputs the version and exits, if configured to do so.
     * https://github.com/leo/args#showversion
     */
    showVersion(): void;
}

type OptionInitFunction = (value: any) => any;

interface MriOptions {
    args?: string[] | undefined;
    alias?: {
        [key: string]: string | string[]
    } | undefined;
    boolean?: string | string[] | undefined;
    default?: {
        [key: string]: any
    } | undefined;
    string?: string | string[] | undefined;
    unknown?: ((param: string) => boolean) | undefined;
}

interface MinimistOptions {
    string?: string | string[] | undefined;
    boolean?: boolean | string | string[] | undefined;
    alias?: {
        [key: string]: string | string[]
    } | undefined;
    default?: {
        [key: string]: any
    } | undefined;
    stopEarly?: boolean | undefined;
    "--"?: boolean | undefined;
    unknown?: ((param: string) => boolean) | undefined;
}

/**
 * Parsing options
 *
 * https://github.com/leo/args#configuration
 */
interface ConfigurationOptions {
    help?: boolean | undefined;
    name?: string | undefined;
    version?: boolean | undefined;
    usageFilter?: ((output: any) => any) | undefined;
    value?: string | undefined;
    mri?: MriOptions;
    minimist?: MinimistOptions | undefined;
    mainColor?: string | string[];
    subColor?: string | string[];
}

interface Option<TName extends string> {
    name: TName | [TName, TName];
    description: string;
    init?: OptionInitFunction | undefined;
    defaultValue?: any;
}

interface Example {
    usage: string;
    description: string;
}

type UnwrapOptionName<TOptionName extends string | [string, string]> = TOptionName extends string
    ? TOptionName
    : TOptionName extends [string, string]
        ? TOptionName[0] | TOptionName[1]
        : never;
