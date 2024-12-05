declare const c: args;
export = c;

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
    details: {options: DetailsOptions[], commands: Command[], examples: Example[]};
    config: {exit: {help: boolean, version: boolean}, help: boolean, version: boolean, usageFilter: ((...args: any[]) => any) | null, value: string, name: string, mainColor: string | string[], subColor: string | string[]};
    //printMainColor: depends on chalk
    //printSubColor: depends on chalk
    handleType(value: string | number | any[] | undefined | ((input: string) => number)): Array<(string | ((value: string) => number))>; // value -> initialType
    readOption(option: DetailsOptions | Command | Example | boolean): { [key: string]: any};
    getOptions(definedSubcommand: DetailsOptions | Command | Example | boolean): boolean | Option[]; // can also return map type options or details
    generateExamples(): string[];
    generateDetails(kind: Array<{defaultValue: any, usage: string[], description: string, init?: any}>): string[];
    runCommand(details: CommandDetails, options: {[key: string]: any}): void;
    checkHelp(): void;
    checkVersion(): void;
    isDefined(name: string, list: 'options' | 'commands' | 'examples'): Option | Command | Example | false;
    optionWasProvided(name: string): boolean;
    raw?: any; // not too sure...
    binary?: string;
    _?: string[];
    sub?: string[] | undefined;
    // test props
    reset?: () => args; // returns args object
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

interface DetailsOptions {
    defaultValue: any;
    usage: string[];
    description: string;
    init?: ((...args: any[]) => any) | undefined;
}

interface CommandDetails {
   usage: string | string[];
   init?: ((name: string, sub: string[], options: any) => any) | false;
}
