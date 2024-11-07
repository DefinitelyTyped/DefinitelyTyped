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
    details: {options: {defaultValue: any, usage: any, description: any}[], commands: Command[], examples: Example[]}; // TODO: un-any this
    config: any;
    printMainColor: any;
    printSubColor: any;
    Args: any;
    handleType: any;
    readOption: any;
    getOptions: any;
    generateExamples: any;
    generateDetails: any;
    runCommand: any;
    checkHelp: any;
    checkVersion: any;
    isDefined: any;
    optionWasProvided: any;
    raw?: any;
    binary?: any;
    sub?: string[];
    // test props
    reset?: any;
    suppressOutput?: any;
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

