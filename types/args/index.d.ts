// Type definitions for args 5.0
// Project: https://github.com/leo/args#readme
// Definitions by: Slessi <https://github.com/Slessi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare const c: args;
export = c;

console.log(typeof details);

interface args {
    option(name: string | [string, string], description: string, defaultValue?: any, init?: OptionInitFunction): args;
    options(list: Option[]): args;
    command(
        name: string,
        description: string,
        init?: (name: string, sub: string[], options: ConfigurationOptions) => void,
        aliases?: string[],
    ): args;
    example(usage: string, description: string): args;
    examples(list: Example[]): args;
    parse(argv: string[], options?: ConfigurationOptions): { [key: string]: any };
    showHelp(): void;
    showVersion(): void;
    // new
    details: {options: {defaultValue: any, usage: string[], description: string, init?: any}[], commands: Command[], examples: Example[]}; // TODO: wtf is init
    config: {exit: {help: boolean, version: boolean}, help: boolean, version: boolean, usageFilter: any, value: string, name: string, mainColor: string | string[], subColor: string | string[]}; // TODO: wtf is usagefilter
    printMainColor: any; // depends on chalk
    printSubColor: any; // depends on chalk
    Args(): any; // not sure what this is supposed to be
    handleType(value: any): (string | ((value: any) => any))[]; // value -> initialType
    readOption(option: {defaultValue: any, usage: string[], description: string, init?: any} | Command | Example | boolean): { [key: string]: any};
    getOptions(definedSubcommand: {defaultValue: any, usage: string[], description: string, init?: any} | Command | Example | boolean): boolean; // can also return map type options or details
    generateExamples(): string[];
    generateDetails(kind: {defaultValue: any, usage: string[], description: string, init?: any}[]): string[];
    runCommand(details: any, options: any): void;
    checkHelp(): void;
    checkVersion(): void;
    isDefined(name: any, list: string): {defaultValue: any, usage: string[], description: string, init?: any} | Command | Example | boolean;
    optionWasProvided(name: string): boolean;
    raw?: Object; // not too sure...
    binary?: string;
    sub?: string[];
    // test props
    reset?: () => any; // returns args object
    suppressOutput?: (fn: () => any) => {exit: {help: boolean, version: boolean}, help: boolean, version: boolean, usageFilter: any, value: string, name: string, mainColor: string | string[], subColor: string | string[]}; // returns config in test cases ?
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

interface ConfigurationOptions {
    help?: boolean | undefined;
    name?: string | undefined;
    version?: boolean | undefined;
    usageFilter?: ((output: any) => any) | undefined;
    value?: string | undefined;
    mri: MriOptions;
    minimist?: MinimistOptions | undefined;
    mainColor: string | string[];
    subColor: string | string[];
}

interface Option {
    name: string | [string, string];
    description: string;
    init?: OptionInitFunction | undefined;
    defaultValue?: any;
}

interface Example {
    usage: string;
    description: string;
}

interface Command {
    usage: string;
    description: string;
    init?: any;
    aliases?: any;
}

