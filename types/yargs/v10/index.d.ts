// Type definitions for yargs 10.0
// Project: https://github.com/chevex/yargs
// Definitions by: Martin Poelstra <https://github.com/poelstra>
//                 Mizunashi Mana <https://github.com/mizunashi-mana>
//                 Jeffery Grajkowski <https://github.com/pushplay>
//                 Jimi (Dimitris) Charalampidis <https://github.com/JimiC>
//                 ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// The following TSLint rules have been disabled:
// unified-signatures: Because there is useful information in the argument names of the overloaded signatures

// Convention:
// Use 'union types' when:
//  - parameter types have similar signature type (i.e. 'string | string[]')
//  - parameter names have the same semantic meaning (i.e. ['command', 'commands'] , ['key', 'keys'])
//    An example for not using 'union types' is the declaration of 'env' where `prefix` and `enable` parameters
//    have different semantics. On the other hand, in the declaration of 'usage', a `command: string` parameter
//    has the same semantic meaning with declaring an overload method by using `commands: string[]`, thus
//    it's prefered to use `command: string | string[]`
// Use parameterless declaration instead of declaring all parameters optional,
// when all parameters are optional and more than one

declare namespace yargs {
    type BuilderCallback = ((args: Argv) => Argv) | ((args: Argv) => void);

    interface Argv {
        (): Arguments;
        (args: string[], cwd?: string): Arguments;

        alias(shortName: string | string[], longName: string | string[]): Argv;
        alias(aliases: { [shortName: string]: string | string[] }): Argv;

        argv: Arguments;

        array(key: string | string[]): Argv;

        boolean(key: string | string[]): Argv;

        check(func: (argv: Arguments, aliases: { [alias: string]: string }) => any, global?: boolean): Argv;

        choices(key: string, values: Choices): Argv;
        choices(choices: { [argName: string]: Choices }): Argv;

        coerce(key: string | string[], func: (arg: any) => any): Argv;
        coerce(opts: { [key: string]: (arg: any) => any; }): Argv;

        /**
         * Define the commands exposed by your application.
         * @param command Should be a string representing the command or an array of strings representing the command and its aliases.
         * @param description Use to provide a description for each command your application accepts (the values stored in `argv._`).
         * Set `description` to false to create a hidden command. Hidden commands don't show up in the help output and aren't available for completion.
         * @param [builder] Object to give hints about the options that your command accepts.
         * Can also be a function. This function is executed with a yargs instance, and can be used to provide advanced command specific help.
         * @param [handler] Function, which will be executed with the parsed `argv` object.
         */
        command(command: string | string[], description: string, builder?: BuilderCallback, handler?: (args: Arguments) => void): Argv;
        command(command: string | string[], description: string, builder?: { [key: string]: Options }, handler?: (args: Arguments) => void): Argv;
        command(command: string | string[], description: string, module: CommandModule): Argv;
        command(command: string | string[], showInHelp: false, builder?: BuilderCallback, handler?: (args: Arguments) => void): Argv;
        command(command: string | string[], showInHelp: false, builder?: { [key: string]: Options }, handler?: (args: Arguments) => void): Argv;
        command(command: string | string[], showInHelp: false, module: CommandModule): Argv;
        command(module: CommandModule): Argv;

        // Advanced API
        commandDir(dir: string, opts?: RequireDirectoryOptions): Argv;

        completion(): Argv;
        completion(cmd: string, func?: AsyncCompletionFunction): Argv;
        completion(cmd: string, func?: SyncCompletionFunction): Argv;
        completion(cmd: string, description?: string, func?: AsyncCompletionFunction): Argv;
        completion(cmd: string, description?: string, func?: SyncCompletionFunction): Argv;

        config(): Argv;
        config(key: string | string[], description?: string, parseFn?: (configPath: string) => object): Argv;
        config(key: string | string[], parseFn: (configPath: string) => object): Argv;
        config(explicitConfigurationObject: object): Argv;

        conflicts(key: string, value: string | string[]): Argv;
        conflicts(conflicts: { [key: string]: string | string[] }): Argv;

        count(key: string | string[]): Argv;

        default(key: string, value: any, description?: string): Argv;
        default(defaults: { [key: string]: any }, description?: string): Argv;

        /**
         * @deprecated since version 6.6.0
         * Use '.demandCommand()' or '.demandOption()' instead
         */
        demand(key: string | string[], msg: string): Argv;
        demand(key: string | string[], required?: boolean): Argv;
        demand(positionals: number, msg: string): Argv;
        demand(positionals: number, required?: boolean): Argv;
        demand(positionals: number, max: number, msg?: string): Argv;

        demandOption(key: string | string[], msg?: string): Argv;
        demandOption(key: string | string[], demand?: boolean): Argv;

        demandCommand(): Argv;
        demandCommand(min: number, minMsg?: string): Argv;
        demandCommand(min: number, max?: number, minMsg?: string, maxMsg?: string): Argv;

        describe(key: string | string[], description: string): Argv;
        describe(descriptions: { [key: string]: string }): Argv;

        detectLocale(detect: boolean): Argv;

        env(): Argv;
        env(prefix: string): Argv;
        env(enable: boolean): Argv;

        epilog(msg: string): Argv;

        epilogue(msg: string): Argv;

        example(command: string, description: string): Argv;

        exitProcess(enabled: boolean): Argv;

        fail(func: (msg: string, err: Error, yargs: Argv) => any): Argv;

        getCompletion(args: string[], done: (completions: string[]) => void): Argv;

        global(key: string | string[]): Argv;

        group(key: string | string[], groupName: string): Argv;

        help(): Argv;
        help(enableExplicit: boolean): Argv;
        help(option: string, enableExplicit: boolean): Argv;
        help(option: string, description?: string, enableExplicit?: boolean): Argv;

        implies(key: string, value: string | string[]): Argv;
        implies(implies: { [key: string]: string | string[] }): Argv;

        locale(): string;
        locale(loc: string): Argv;

        nargs(key: string, count: number): Argv;
        nargs(nargs: { [key: string]: number }): Argv;

        normalize(key: string | string[]): Argv;

        number(key: string | string[]): Argv;

        option(key: string, options: Options): Argv;
        option(options: { [key: string]: Options }): Argv;

        options(key: string, options: Options): Argv;
        options(options: { [key: string]: Options }): Argv;

        parse(arg?: string | ReadonlyArray<string>): Arguments;
        parse(arg: string | ReadonlyArray<string>, parseCallback: ParseCallback): Arguments;
        parse(arg: string | ReadonlyArray<string>, context: object, parseCallback?: ParseCallback): Arguments;

        pkgConf(key: string | string[], cwd?: string): Argv;

        /**
         * 'positional' should be called in a command's builder function, and is not
         * available on the top-level yargs instance. If so, it will throw an error.
         */
        positional(key: string, opt: PositionalOptions): Argv;

        recommendCommands(): Argv;

        /**
         * @deprecated since version 6.6.0
         * Use '.demandCommand()' or '.demandOption()' instead
         */
        require(key: string, msg: string): Argv;
        require(key: string, required: boolean): Argv;
        require(keys: number[], msg: string): Argv;
        require(keys: number[], required: boolean): Argv;
        require(positionals: number, required: boolean): Argv;
        require(positionals: number, msg: string): Argv;

        /**
         * @deprecated since version 6.6.0
         * Use '.demandCommand()' or '.demandOption()' instead
         */
        required(key: string, msg: string): Argv;
        required(key: string, required: boolean): Argv;
        required(keys: number[], msg: string): Argv;
        required(keys: number[], required: boolean): Argv;
        required(positionals: number, required: boolean): Argv;
        required(positionals: number, msg: string): Argv;

        requiresArg(key: string | string[]): Argv;

        /**
         * @deprecated since version 6.6.0
         * Use '.global()' instead
         */
        reset(): Argv;

        showCompletionScript(): Argv;

        showHelp(consoleLevel?: string): Argv;

        showHelpOnFail(enable: boolean, message?: string): Argv;

        skipValidation(key: string | string[]): Argv;

        strict(): Argv;

        string(key: string | string[]): Argv;

        // Intended to be used with '.wrap()'
        terminalWidth(): number;

        updateLocale(obj: { [key: string]: string }): Argv;

        updateStrings(obj: { [key: string]: string }): Argv;

        usage(message: string): Argv;
        usage(command: string | string[], description: string, builder?: (args: Argv) => Argv, handler?: (args: Arguments) => void): Argv;
        usage(command: string | string[], showInHelp: boolean, builder?: (args: Argv) => Argv, handler?: (args: Arguments) => void): Argv;
        usage(command: string | string[], description: string, builder?: { [key: string]: Options }, handler?: (args: Arguments) => void): Argv;
        usage(commands: string | string[], showInHelp: boolean, builder?: { [key: string]: Options }, handler?: (args: Arguments) => void): Argv;

        version(): Argv;
        version(version: string): Argv;
        version(enable: boolean): Argv;
        version(optionKey: string, version: string): Argv;
        version(optionKey: string, description: string, version: string): Argv;

        wrap(columns: number | null): Argv;
    }

    interface Arguments {
        /** Non-option arguments */
        _: string[];
        /** The script name or node command */
        $0: string;
        /** All remaining options */
        [argName: string]: any;
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
        conflicts?: string | string[] | { [key: string]: string | string[] };
        count?: boolean;
        default?: any;
        defaultDescription?: string;
        /**
         *  @deprecated since version 6.6.0
         *  Use 'demandOption' instead
         */
        demand?: boolean | string;
        demandOption?: boolean | string;
        desc?: string;
        describe?: string;
        description?: string;
        global?: boolean;
        group?: string;
        hidden?: boolean;
        implies?: string | string[] | { [key: string]: string | string[] };
        nargs?: number;
        normalize?: boolean;
        number?: boolean;
        require?: boolean | string;
        required?: boolean | string;
        requiresArg?: boolean | string;
        skipValidation?: boolean;
        string?: boolean;
        type?: "array" | "count" | PositionalOptionsType;
    }

    interface PositionalOptions {
        alias?: string | string[];
        array?: boolean;
        choices?: Choices;
        coerce?: (arg: any) => any;
        conflicts?: string | string[] | { [key: string]: string | string[] };
        default?: any;
        desc?: string;
        describe?: string;
        description?: string;
        implies?: string | string[] | { [key: string]: string | string[] };
        normalize?: boolean;
        type?: PositionalOptionsType;
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
    type Choices = Array<string | true | undefined>;
    type PositionalOptionsType = "boolean" | "number" | "string";
}

declare var yargs: yargs.Argv;
export = yargs;
