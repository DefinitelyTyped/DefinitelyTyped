// Type definitions for args 3.0
// Project: https://github.com/leo/args#readme
// Definitions by: Slessi <https://github.com/Slessi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = args;

declare namespace args {
    let sub: string[];

    function option(name: string | [string, string], description: string, defaultValue?: any, init?: OptionInitFunction): typeof args;
    function options(list: Option[]): typeof args;
    function command(name: string, description: string, init?: CommandInitFunction, aliases?: string[]): typeof args;
    function example(usage: string, description: string): typeof args;
    function examples(list: Example[]): typeof args;
    function parse(argv: string[], options?: ConfigurationOptions): { [key: string]: any };
    function showHelp(): void;
}

type MriUnknownFunction = (param: string) => boolean;
type MinimistUnknownFunction = (param: string) => boolean;

type OptionInitFunction = (value: any) => any;
type CommandInitFunction = (name: string, sub: string[], options: ConfigurationOptions) => void;
type UsageFilterFunction = (output: any) => any;

interface MriOptions {
    args?: string[];
    alias?: {
        [key: string]: string | string[]
    };
    boolean?: string | string[];
    default?: {
        [key: string]: any
    };
    string?: string | string[];
    unknown?: MriUnknownFunction;
}

interface MinimistOptions {
    string?: string | string[];
    boolean?: boolean | string | string[];
    alias?: {
        [key: string]: string | string[]
    };
    default?: {
        [key: string]: any
    };
    stopEarly?: boolean;
    "--"?: boolean;
    unknown?: MinimistUnknownFunction;
}

interface ConfigurationOptions {
    help?: boolean;
    name?: string;
    version?: boolean;
    usageFilter?: UsageFilterFunction;
    value?: string;
    mri: MriOptions;
    minimist?: MinimistOptions;
    mainColor: string | string[];
    subColor: string | string[];
}

interface Option {
    name: string;
    description: string;
    init?: OptionInitFunction;
    defaultValue?: any;
}

interface Example {
    usage: string;
    description: string;
}
