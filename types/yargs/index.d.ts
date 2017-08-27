// Type definitions for yargs 8.0
// Project: https://github.com/chevex/yargs
// Definitions by: Martin Poelstra <https://github.com/poelstra>
//                 Mizunashi Mana <https://github.com/mizunashi-mana>
//                 Jeffery Grajkowski <https://github.com/pushplay>
//                 Jeff Kenney <https://github.com/jeffkenney>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// unified-signatures: Because there is useful information in the argument names of the overloaded signatures
// prefer-method-signature: Because it makes more sense for optional functions provided in options objects
/* tslint:disable:unified-signatures prefer-method-signature */

declare namespace yargs {
    interface Argv {
        argv: Arguments;
        (args?: string[], cwd?: string): Arguments;
        parse(args: string | string[], context?: object, parseCallback?: ParseCallback): Arguments;

        reset(): Argv;

        locale(): string;
        locale(loc: string): Argv;

        detectLocale(detect: boolean): Argv;

        terminalWidth(): number;

        alias(shortName: string, longName: string | string[]): Argv;
        alias(shortNames: string[], longName: string): Argv;
        alias(aliases: { [shortName: string]: string | string[] }): Argv;

        array(key: string): Argv;
        array(keys: string[]): Argv;

        default(key: string, value: any, description?: string): Argv;
        default(defaults: { [key: string]: any }, description?: string): Argv;

        /**
         * @deprecated since version 6.6.0
         */
        demand(key: string, msg: string): Argv;
        demand(key: string, required?: boolean): Argv;
        demand(keys: string[], msg: string): Argv;
        demand(keys: string[], required?: boolean): Argv;
        demand(positionals: number, required?: boolean): Argv;
        demand(positionals: number, msg: string): Argv;
        demand(positionals: number, max: number, msg?: string): Argv;

        demandCommand(min: number, minMsg?: string): Argv;
        demandCommand(min: number, max?: number, minMsg?: string, maxMsg?: string): Argv;

        demandOption(key: string | string[], msg?: string): Argv;
        demandOption(key: string | string[], demand?: boolean): Argv;

        /**
         * @deprecated since version 6.6.0
         */
        require(key: string, msg: string): Argv;
        require(key: string, required: boolean): Argv;
        require(keys: number[], msg: string): Argv;
        require(keys: number[], required: boolean): Argv;
        require(positionals: number, required: boolean): Argv;
        require(positionals: number, msg: string): Argv;

        /**
         * @deprecated since version 6.6.0
         */
        required(key: string, msg: string): Argv;
        required(key: string, required: boolean): Argv;
        required(keys: number[], msg: string): Argv;
        required(keys: number[], required: boolean): Argv;
        required(positionals: number, required: boolean): Argv;
        required(positionals: number, msg: string): Argv;

        requiresArg(key: string): Argv;
        requiresArg(keys: string[]): Argv;

        describe(key: string | string[], description: string): Argv;
        describe(descriptions: { [key: string]: string }): Argv;

        option(key: string, options: Options): Argv;
        option(options: { [key: string]: Options }): Argv;
        options(key: string, options: Options): Argv;
        options(options: { [key: string]: Options }): Argv;

        usage(message: string, options?: { [key: string]: Options }): Argv;
        usage(options?: { [key: string]: Options }): Argv;

        command(command: string | string[], description: string): Argv;
        command(command: string | string[], description: string, builder: (args: Argv) => Argv): Argv;
        command(command: string | string[], description: string, builder: { [optionName: string]: Options }): Argv;
        command(command: string | string[], description: string, builder: { [optionName: string]: Options }, handler: (args: Arguments) => void): Argv;
        command(command: string | string[], description: string, builder: (args: Argv) => Argv, handler: (args: Arguments) => void): Argv;
        command(command: string | string[], description: string, module: CommandModule): Argv;
        command(module: CommandModule): Argv;

        commandDir(dir: string, opts?: RequireDirectoryOptions): Argv;

        completion(): Argv;
        completion(cmd: string, fn?: AsyncCompletionFunction): Argv;
        completion(cmd: string, fn?: SyncCompletionFunction): Argv;
        completion(cmd: string, description?: string, fn?: AsyncCompletionFunction): Argv;
        completion(cmd: string, description?: string, fn?: SyncCompletionFunction): Argv;

        example(command: string, description: string): Argv;

        check(func: (argv: Arguments, aliases: { [alias: string]: string }) => any, global?: boolean): Argv;

        boolean(key: string): Argv;
        boolean(keys: string[]): Argv;

        string(key: string): Argv;
        string(keys: string[]): Argv;

        number(key: string): Argv;
        number(keys: string[]): Argv;

        choices(choices: { [argName: string]: Choices }): Argv;
        choices(key: string, values: Choices): Argv;

        config(): Argv;
        config(explicitConfigurationObject: object): Argv;
        config(key: string, description?: string, parseFn?: (configPath: string) => object): Argv;
        config(keys: string[], description?: string, parseFn?: (configPath: string) => object): Argv;
        config(key: string, parseFn: (configPath: string) => object): Argv;
        config(keys: string[], parseFn: (configPath: string) => object): Argv;

        conflicts(key: string, value: string): Argv;
        conflicts(conflicts: { [key: string]: string }): Argv;

        wrap(columns: number): Argv;

        strict(): Argv;

        help(): Argv;
        help(enableExplicit: boolean): Argv;
        help(option: string, enableExplicit: boolean): Argv;
        help(option: string, description?: string, enableExplicit?: boolean): Argv;

        env(prefix?: string): Argv;
        env(enable: boolean): Argv;

        epilog(msg: string): Argv;
        epilogue(msg: string): Argv;

        version(version?: string, option?: string, description?: string): Argv;
        version(version: () => string, option?: string, description?: string): Argv;

        showHelpOnFail(enable: boolean, message?: string): Argv;

        showHelp(consoleLevel?: string): Argv;

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

        coerce<T, U>(key: string | string[], func: (arg: T) => U): Argv;
        coerce<T, U>(opts: { [key: string]: (arg: T) => U; }): Argv;

        getCompletion(args: string[], done: (completions: string[]) => void): Argv;

        pkgConf(key: string, cwd?: string): Argv;
        pkgConf(keys: string[], cwd?: string): Argv;

        recommendCommands(): Argv;

        showCompletionScript(): Argv;

        skipValidation(key: string): Argv;
        skipValidation(keys: string[]): Argv;

        updateLocale(obj: { [key: string]: string }): Argv;

        updateStrings(obj: { [key: string]: string }): Argv;
    }

    interface Arguments {
        /** Non-option arguments */
        _: string[];
        /** The script name or node command */
        $0: string;

        /** All remaining options */
        [ argName: string ]: any;
    }

    interface RequireDirectoryOptions {
        recurse?: boolean;
        extensions?: string[];
        visit?: (commandObject: any, pathToFile?: string, filename?: string) => any;
        include?: RegExp | ((pathToFile: string) => boolean);
        exclude?: RegExp | ((pathToFile: string) => boolean);
    }

    interface Options {
        alias?: string | string[];
        array?: boolean;
        boolean?: boolean;
        choices?: Choices;
        coerce?: (arg: any) => any;
        config?: boolean;
        configParser?: (configPath: string) => object;
        conflicts?: string | object;
        count?: boolean;
        default?: any;
        defaultDescription?: string;
        /** @deprecated since version 6.6.0 */
        demand?: boolean | string;
        demandOption?: boolean | string;
        desc?: string;
        describe?: string;
        description?: string;
        global?: boolean;
        group?: string;
        implies?: string | object;
        nargs?: number;
        normalize?: boolean;
        number?: boolean;
        require?: boolean | string;
        required?: boolean | string;
        requiresArg?: boolean | string;
        skipValidation?: boolean;
        string?: boolean;
        type?: "array" | "boolean" | "count" | "number" | "string";
    }

    interface CommandModule {
        aliases?: string[] | string;
        builder?: CommandBuilder;
        command?: string[] | string;
        describe?: string | false;
        handler: (args: any) => void;
    }

    type ParseCallback = (err: Error | undefined, argv: Arguments, output: string) => void;
    type CommandBuilder = { [key: string]: Options } | ((args: Argv) => Argv);
    type SyncCompletionFunction = (current: string, argv: any) => string[];
    type AsyncCompletionFunction = (current: string, argv: any, done: (completion: string[]) => void) => void;
    type Choice = string | true | undefined;
    type Choices = Choice[];
}

declare var yargs: yargs.Argv;
export = yargs;
