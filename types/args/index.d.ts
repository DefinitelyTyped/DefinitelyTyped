// Type definitions for args 5.0
// Project: https://github.com/leo/args#readme
// Definitions by: Slessi <https://github.com/Slessi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const c: args< { }>;
export = c;

interface args <TOptions extends Record<string, any>> {
    sub: string[];

    option<TName extends string | [string, string]>(name: TName, description: string, defaultValue?: any, init?: OptionInitFunction): args<TOptions & {[key in OptionName<TName>]: any}>;
    options<TNames extends string>(list: Array<Option<TNames>>): args<TOptions & {[key in TNames]: any}>;
    command(name: string, description: string, init?: (name: string, sub: string[], options: TOptions) => void, aliases?: string[]): args<TOptions>;
    example(usage: string, description: string): args<TOptions>;
    examples(list: Example[]): args<TOptions>;
    parse(argv: string[], options?: ConfigurationOptions): TOptions;
    showHelp(): void;
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
 * @see https://github.com/leo/args#configuration
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

type OptionName<TOptionName extends string | [string, string]> = TOptionName extends string ? TOptionName : TOptionName extends [string, string] ? TOptionName[0] | TOptionName[1] : never;
