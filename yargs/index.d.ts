// Type definitions for yargs
// Project: https://github.com/chevex/yargs
// Definitions by: Martin Poelstra <https://github.com/poelstra>, Mizunashi Mana <https://github.com/mizunashi-mana>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace yargs {
    interface Argv {
        argv: any;
        (...args: any[]): any;
        parse(...args: any[]): any;

        reset(): Argv;

        locale(): string;
        locale(loc: string): Argv;

        detectLocale(detect: boolean): Argv;

        terminalWidth(): number;

			terminalWidth(): number;

			terminalWidth(): number;

			terminalWidth(): number;

        alias(shortName: string, longName: string): Argv;
        alias(aliases: { [shortName: string]: string }): Argv;
        alias(aliases: { [shortName: string]: string[] }): Argv;

        array(key: string): Argv;
        array(keys: string[]): Argv;

        default(key: string, value: any): Argv;
        default(defaults: { [key: string]: any }): Argv;

        demand(key: string, msg: string): Argv;
        demand(key: string, required?: boolean): Argv;
        demand(keys: string[], msg: string): Argv;
        demand(keys: string[], required?: boolean): Argv;
        demand(positionals: number, required?: boolean): Argv;
        demand(positionals: number, msg: string): Argv;

        require(key: string, msg: string): Argv;
        require(key: string, required: boolean): Argv;
        require(keys: number[], msg: string): Argv;
        require(keys: number[], required: boolean): Argv;
        require(positionals: number, required: boolean): Argv;
        require(positionals: number, msg: string): Argv;

        required(key: string, msg: string): Argv;
        required(key: string, required: boolean): Argv;
        required(keys: number[], msg: string): Argv;
        required(keys: number[], required: boolean): Argv;
        required(positionals: number, required: boolean): Argv;
        required(positionals: number, msg: string): Argv;

        requiresArg(key: string): Argv;
        requiresArg(keys: string[]): Argv;

        describe(key: string, description: string): Argv;
        describe(descriptions: { [key: string]: string }): Argv;

        option(key: string, options: Options): Argv;
        option(options: { [key: string]: Options }): Argv;
        options(key: string, options: Options): Argv;
        options(options: { [key: string]: Options }): Argv;

        usage(message: string, options?: { [key: string]: Options }): Argv;
        usage(options?: { [key: string]: Options }): Argv;

        command(command: string, description: string): Argv;
        command(command: string, description: string, handler: (args: Argv) => void): Argv;
        command(command: string, description: string, builder: (args: Argv) => Options): Argv;
        command(command: string, description: string, builder: { [optionName: string]: Options }): Argv;
        command(command: string, description: string, builder: { [optionName: string]: Options }, handler: (args: Argv) => void): Argv;
        command(command: string, description: string, builder: (args: Argv) => Options, handler: (args: Argv) => void): Argv;

        commandDir(dir: string, opts?: RequireDirectoryOptions): Argv;

        completion(cmd: string, fn?: AsyncCompletionFunction): Argv;
        completion(cmd: string, fn?: SyncCompletionFunction): Argv;
        completion(cmd: string, description?: string, fn?: AsyncCompletionFunction): Argv;
        completion(cmd: string, description?: string, fn?: SyncCompletionFunction): Argv;

        example(command: string, description: string): Argv;

        check(func: (argv: any, aliases: { [alias: string]: string }) => any): Argv;

        boolean(key: string): Argv;
        boolean(keys: string[]): Argv;

        string(key: string): Argv;
        string(keys: string[]): Argv;

        choices(choices: Object): Argv;
        choices(key: string, values: any[]): Argv;

        config(key: string): Argv;
        config(keys: string[]): Argv;

        wrap(columns: number): Argv;

        strict(): Argv;

        help(): Argv;
        help(option: string, description?: string): Argv;

        env(prefix?: string): Argv;
        env(enable: boolean): Argv;

        epilog(msg: string): Argv;
        epilogue(msg: string): Argv;

        version(version: string, option?: string, description?: string): Argv;
        version(version: () => string, option?: string, description?: string): Argv;

        showHelpOnFail(enable: boolean, message?: string): Argv;

        showHelp(func?: (message: string) => any): Argv;

        exitProcess(enabled: boolean): Argv;

        global(key: string): Argv;
        global(keys: string[]): Argv;

        group(key: string, groupName: string): Argv;
        group(keys: string[], groupName: string): Argv;

        nargs(key: string, count: number): Argv;
        nargs(nargs: { [key: string]: number }): Argv;

        normalize(key: string): Argv;
        normalize(keys: string[]): Argv;

        implies(key: string, value: string): Argv;
        implies(implies: { [key: string]: string }): Argv;

        count(key: string): Argv;
        count(keys: string[]): Argv;

			fail(func: (msg: string, err: Error) => any): Argv;

        coerce<T, U>(key: string|string[], func: (arg: T) => U): Argv;
        coerce<T, U>(opts: { [key: string]: (arg: T) => U; }): Argv;
    }

    interface RequireDirectoryOptions {
        recurse?: boolean;
        extensions?: string[];
        visit?: (commandObject: any, pathToFile?: string, filename?: string) => any;
        include?: RegExp | ((pathToFile: string)=>boolean);
        exclude?: RegExp | ((pathToFile: string)=>boolean);
    }

    interface Options {
        type?: string;
        group?: string;
        alias?: any;
        demand?: any;
        required?: any;
        require?: any;
        default?: any;
        defaultDescription?: string;
        boolean?: boolean;
        string?: boolean;
        count?: boolean;
        describe?: any;
        description?: any;
        desc?: any;
        requiresArg?: any;
        choices?: string[];
        global?: boolean;
        array?: boolean;
        config?: boolean;
        number?: boolean;
        normalize?: boolean;
        nargs?: number;
    }

    type SyncCompletionFunction = (current: string, argv: any) => string[];
    type AsyncCompletionFunction = (current: string, argv: any, done: (completion: string[]) => void) => void;
}

declare var yargs: yargs.Argv;
export = yargs;
