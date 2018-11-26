// Type definitions for yargs 12.0
// Project: https://github.com/chevex/yargs
// Definitions by: Martin Poelstra <https://github.com/poelstra>
//                 Mizunashi Mana <https://github.com/mizunashi-mana>
//                 Jeffery Grajkowski <https://github.com/pushplay>
//                 Jeff Kenney <https://github.com/jeffkenney>
//                 Jimi (Dimitris) Charalampidis <https://github.com/JimiC>
//                 Teddy Cross <https://github.com/tkazec>
//                 Steffen Viken Valvåg <https://github.com/steffenvv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

// The following TSLint rules have been disabled:
// unified-signatures: Because there is useful information in the argument names of the overloaded signatures

// Convention:
// Use 'union types' when:
//  - parameter types have similar signature type (i.e. 'string | ReadonlyArray<string>')
//  - parameter names have the same semantic meaning (i.e. ['command', 'commands'] , ['key', 'keys'])
//    An example for not using 'union types' is the declaration of 'env' where `prefix` and `enable` parameters
//    have different semantics. On the other hand, in the declaration of 'usage', a `command: string` parameter
//    has the same semantic meaning with declaring an overload method by using `commands: ReadonlyArray<string>`,
//    thus it's preferred to use `command: string | ReadonlyArray<string>`
// Use parameterless declaration instead of declaring all parameters optional,
// when all parameters are optional and more than one

declare namespace yargs {
    // The type parameter T is the expected shape of the parsed arguments.
    // Arguments<T> is those arguments plus _ and $0, and an indexer falling
    // back to any for unknown arguments.
    //
    // For the return type / argv property, we create a mapped type over
    // Arguments<T> to simplify the inferred type signature in client code.
    interface Argv<T = {}> {
        (): { [K in keyof Arguments<T>]: Arguments<T>[K] };
        (args: ReadonlyArray<string>, cwd?: string): { [K in keyof Arguments<T>]: Arguments<T>[K] };

        /* Aliases for previously declared arguments can inherit the types of those arguments. */
        alias<K1 extends keyof T, K2 extends string>(shortName: K1, longName: K2): Argv<T & { [key in K2]: T[K1] }>;
        alias<K1 extends keyof T, K2 extends string>(shortName: K2, longName: K1): Argv<T & { [key in K2]: T[K1] }>;
        
        alias(shortName: string | ReadonlyArray<string>, longName: string | ReadonlyArray<string>): Argv<T>;
        alias(aliases: { [shortName: string]: string | ReadonlyArray<string> }): Argv<T>;

        argv: { [K in keyof Arguments<T>]: Arguments<T>[K] };

        array<K extends string>(key: K | ReadonlyArray<K>): Argv<T & { [key in K]: string[] }>;

        boolean<K extends string>(key: K | ReadonlyArray<K>): Argv<T & { [key in K]: boolean }>;

        check(func: (argv: Arguments<T>, aliases: { [alias: string]: string }) => any, global?: boolean): Argv<T>;

        choices<K extends string, C extends ReadonlyArray<any>>(key: K, values: C): Argv<T & { [key in K]: C[number] }>;
        choices<C extends { [key: string]: ReadonlyArray<any> }>(choices: C): Argv<T & { [K in keyof C]: C[K][number] }>;

        /* For previously declared arguments, we can infer the parameter type of the coercion function. */
        coerce<K extends keyof T, V>(key: K | ReadonlyArray<K>, func: (arg: T[K]) => V): Argv<T & { [key in K]: V }>;
        coerce<K extends keyof T, O extends { [key in K]: (arg: T[K]) => any }>(opts: O): Argv<T & { [K in keyof O]: ReturnType<O[K]> }>;

        coerce<K extends string, V>(key: K | ReadonlyArray<K>, func: (arg: any) => V): Argv<T & { [key in K]: V }>;
        coerce<O extends { [key: string]: (arg: any) => any }>(opts: O): Argv<T & { [K in keyof O]: ReturnType<O[K]> }>;

        command<U>(command: string | ReadonlyArray<string>, description: string, builder?: (args: Argv<T>) => Argv<U>, handler?: (args: Arguments<U>) => void): Argv<T>;
        command<O extends { [key: string]: Options }>(command: string | ReadonlyArray<string>, description: string, builder?: O, handler?: (args: Arguments<InferredOptionTypes<O>>) => void): Argv<T>;
        command<U>(command: string | ReadonlyArray<string>, description: string, module: CommandModule<T, U>): Argv<T>;
        command<U>(command: string | ReadonlyArray<string>, showInHelp: false, builder?: (args: Argv<T>) => Argv<U>, handler?: (args: Arguments<U>) => void): Argv<T>;
        command<O extends { [key: string]: Options }>(command: string | ReadonlyArray<string>, showInHelp: false, builder?: O, handler?: (args: Arguments<InferredOptionTypes<O>>) => void): Argv<T>;
        command<U>(command: string | ReadonlyArray<string>, showInHelp: false, module: CommandModule<T, U>): Argv<U>;
        command<U>(module: CommandModule<T, U>): Argv<U>;

        // Advanced API
        commandDir(dir: string, opts?: RequireDirectoryOptions): Argv<T>;

        completion(): Argv<T>;
        completion(cmd: string, func?: AsyncCompletionFunction): Argv<T>;
        completion(cmd: string, func?: SyncCompletionFunction): Argv<T>;
        completion(cmd: string, description?: string, func?: AsyncCompletionFunction): Argv<T>;
        completion(cmd: string, description?: string, func?: SyncCompletionFunction): Argv<T>;

        config(): Argv<T>;
        config(key: string | ReadonlyArray<string>, description?: string, parseFn?: (configPath: string) => object): Argv<T>;
        config(key: string | ReadonlyArray<string>, parseFn: (configPath: string) => object): Argv<T>;
        config(explicitConfigurationObject: object): Argv<T>;

        conflicts(key: string, value: string | ReadonlyArray<string>): Argv<T>;
        conflicts(conflicts: { [key: string]: string | ReadonlyArray<string> }): Argv<T>;

        count<K extends string>(key: K | ReadonlyArray<K>): Argv<T & { [key in K]: number }>;

        default<K extends string, V>(key: K, value: V, description?: string): Argv<T & { [key in K]: V }>;
        default<D extends { [key: string]: any }>(defaults: D, description?: string): Argv<T & D>;

        /**
         * @deprecated since version 6.6.0
         * Use '.demandCommand()' or '.demandOption()' instead
         */
        demand(key: string | ReadonlyArray<string>, msg: string): Argv<T>;
        demand(key: string | ReadonlyArray<string>, required?: boolean): Argv<T>;
        demand(positionals: number, msg: string): Argv<T>;
        demand(positionals: number, required?: boolean): Argv<T>;
        demand(positionals: number, max: number, msg?: string): Argv<T>;

        demandOption(key: string | ReadonlyArray<string>, msg?: string): Argv<T>;
        demandOption(key: string | ReadonlyArray<string>, demand?: boolean): Argv<T>;

        demandCommand(): Argv<T>;
        demandCommand(min: number, minMsg?: string): Argv<T>;
        demandCommand(min: number, max?: number, minMsg?: string, maxMsg?: string): Argv<T>;

        describe(key: string | ReadonlyArray<string>, description: string): Argv<T>;
        describe(descriptions: { [key: string]: string }): Argv<T>;

        detectLocale(detect: boolean): Argv<T>;

        env(): Argv<T>;
        env(prefix: string): Argv<T>;
        env(enable: boolean): Argv<T>;

        epilog(msg: string): Argv<T>;

        epilogue(msg: string): Argv<T>;

        example(command: string, description: string): Argv<T>;

        exitProcess(enabled: boolean): Argv<T>;

        fail(func: (msg: string, err: Error) => any): Argv<T>;

        getCompletion(args: ReadonlyArray<string>, done: (completions: ReadonlyArray<string>) => void): Argv<T>;

        global(key: string | ReadonlyArray<string>): Argv<T>;

        group(key: string | ReadonlyArray<string>, groupName: string): Argv<T>;

        hide(key: string): Argv<T>;

        help(): Argv<T>;
        help(enableExplicit: boolean): Argv<T>;
        help(option: string, enableExplicit: boolean): Argv<T>;
        help(option: string, description?: string, enableExplicit?: boolean): Argv<T>;

        implies(key: string, value: string | ReadonlyArray<string>): Argv<T>;
        implies(implies: { [key: string]: string | ReadonlyArray<string> }): Argv<T>;

        locale(): string;
        locale(loc: string): Argv<T>;

        middleware(callbacks: MiddlewareFunction<T> | ReadonlyArray<MiddlewareFunction<T>>): Argv<T>;

        nargs(key: string, count: number): Argv<T>;
        nargs(nargs: { [key: string]: number }): Argv<T>;

        normalize<K extends string>(key: K | ReadonlyArray<K>): Argv<T & { [key in K]: string }>;

        number<K extends string>(key: K | ReadonlyArray<K>): Argv<T & { [key in K]: number }>;

        option<K extends string, O extends Options>(key: K, options: O): Argv<T & { [key in K]: InferredOptionType<O> }>;
        option<O extends { [key: string]: Options }>(options: O): Argv<T & InferredOptionTypes<O>>;

        options<K extends string, O extends Options>(key: K, options: O): Argv<T & { [key in K]: InferredOptionType<O> }>;
        options<O extends { [key: string]: Options }>(options: O): Argv<T & InferredOptionTypes<O>>;

        parse(): Arguments<T>;
        parse(arg: string | ReadonlyArray<string>, context?: object, parseCallback?: ParseCallback<T>): Arguments<T>;

        pkgConf(key: string | ReadonlyArray<string>, cwd?: string): Argv<T>;

        /**
         * 'positional' should be called in a command's builder function, and is not
         * available on the top-level yargs instance. If so, it will throw an error.
         */
        positional(key: string, opt: PositionalOptions): Argv<T>;

        recommendCommands(): Argv<T>;

        /**
         * @deprecated since version 6.6.0
         * Use '.demandCommand()' or '.demandOption()' instead
         */
        require(key: string, msg: string): Argv<T>;
        require(key: string, required: boolean): Argv<T>;
        require(keys: ReadonlyArray<number>, msg: string): Argv<T>;
        require(keys: ReadonlyArray<number>, required: boolean): Argv<T>;
        require(positionals: number, required: boolean): Argv<T>;
        require(positionals: number, msg: string): Argv<T>;

        /**
         * @deprecated since version 6.6.0
         * Use '.demandCommand()' or '.demandOption()' instead
         */
        required(key: string, msg: string): Argv<T>;
        required(key: string, required: boolean): Argv<T>;
        required(keys: ReadonlyArray<number>, msg: string): Argv<T>;
        required(keys: ReadonlyArray<number>, required: boolean): Argv<T>;
        required(positionals: number, required: boolean): Argv<T>;
        required(positionals: number, msg: string): Argv<T>;

        requiresArg(key: string | ReadonlyArray<string>): Argv<T>;

        /**
         * @deprecated since version 6.6.0
         * Use '.global()' instead
         */
        reset(): Argv<T>;

        scriptName($0: string): Argv<T>;

        showCompletionScript(): Argv<T>;

        showHidden(option?: string | boolean): Argv<T>;
        showHidden(option: string, description?: string): Argv<T>;

        showHelp(consoleLevel?: string): Argv<T>;

        showHelpOnFail(enable: boolean, message?: string): Argv<T>;

        skipValidation(key: string | ReadonlyArray<string>): Argv<T>;

        strict(): Argv<T>;

        string<K extends string>(key: K | ReadonlyArray<K>): Argv<T & { [key in K]: string }>;

        // Intended to be used with '.wrap()'
        terminalWidth(): number;

        updateLocale(obj: { [key: string]: string }): Argv<T>;

        updateStrings(obj: { [key: string]: string }): Argv<T>;

        usage(message: string): Argv<T>;
        usage<U>(command: string | ReadonlyArray<string>, description: string, builder?: (args: Argv<T>) => Argv<U>, handler?: (args: Arguments<U>) => void): Argv<T>;
        usage<U>(command: string | ReadonlyArray<string>, showInHelp: boolean, builder?: (args: Argv<T>) => Argv<U>, handler?: (args: Arguments<U>) => void): Argv<T>;
        usage<O extends { [key: string]: Options }>(command: string | ReadonlyArray<string>, description: string, builder?: O, handler?: (args: Arguments<InferredOptionTypes<O>>) => void): Argv<T>;
        usage<O extends { [key: string]: Options }>(command: string | ReadonlyArray<string>, showInHelp: boolean, builder?: O, handler?: (args: Arguments<InferredOptionTypes<O>>) => void): Argv<T>;

        version(): Argv<T>;
        version(version: string): Argv<T>;
        version(enable: boolean): Argv<T>;
        version(optionKey: string, version: string): Argv<T>;
        version(optionKey: string, description: string, version: string): Argv<T>;

        wrap(columns: number | null): Argv<T>;
    }

    type Arguments<T> = T & {
        /** Non-option arguments */
        _: string[];
        /** The script name or node command */
        $0: string;
        /** All remaining options */
        [argName: string]: any;
    }

    interface RequireDirectoryOptions {
        recurse?: boolean;
        extensions?: ReadonlyArray<string>;
        visit?: (commandObject: any, pathToFile?: string, filename?: string) => any;
        include?: RegExp | ((pathToFile: string) => boolean);
        exclude?: RegExp | ((pathToFile: string) => boolean);
    }

    interface Options {
        alias?: string | ReadonlyArray<string>;
        array?: boolean;
        boolean?: boolean;
        choices?: Choices;
        coerce?: (arg: any) => any;
        config?: boolean;
        configParser?: (configPath: string) => object;
        conflicts?: string | ReadonlyArray<string> | { [key: string]: string | ReadonlyArray<string> };
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
        implies?: string | ReadonlyArray<string> | { [key: string]: string | ReadonlyArray<string> };
        nargs?: number;
        normalize?: boolean;
        number?: boolean;
        /**
         *  @deprecated since version 6.6.0
         *  Use 'demandOption' instead
         */
        require?: boolean | string;
        /**
         *  @deprecated since version 6.6.0
         *  Use 'demandOption' instead
         */
        required?: boolean | string;
        requiresArg?: boolean;
        skipValidation?: boolean;
        string?: boolean;
        type?: "array" | "count" | PositionalOptionsType;
    }

    interface PositionalOptions {
        alias?: string | ReadonlyArray<string>;
        choices?: Choices;
        coerce?: (arg: any) => any;
        conflicts?: string | ReadonlyArray<string> | { [key: string]: string | ReadonlyArray<string> };
        default?: any;
        desc?: string;
        describe?: string;
        description?: string;
        implies?: string | ReadonlyArray<string> | { [key: string]: string | ReadonlyArray<string> };
        normalize?: boolean;
        type?: PositionalOptionsType;
    }

    type InferredOptionType<O extends Options | PositionalOptions> =
        O extends { type: "array" } ? string[] :
        O extends { type: "boolean" } ? boolean :
        O extends { type: "number" } ? number :
        O extends { type: "string" } ? string :
        O extends { type: "count" } ? number :
        O extends { array: true } ? string[] :
        O extends { boolean: true } ? boolean :
        O extends { number: true } ? number :
        O extends { string: true } ? string :
        O extends { normalize: true } ? string :
        O extends { choices: Array<infer C> } ? C :
        O extends { default: infer D } ? D :
        O extends { coerce: (arg: any) => infer T } ? T :
        any;

    type InferredOptionTypes<O extends { [key: string]: Options }> =
        { [K in keyof O]: InferredOptionType<O[K]> };

    interface CommandModule<T, U> {
        aliases?: ReadonlyArray<string> | string;
        builder?: CommandBuilder<T, U>;
        command?: ReadonlyArray<string> | string;
        describe?: string | false;
        handler: (args: Argv<U>) => void;
    }

    type ParseCallback<T> = (err: Error | undefined, argv: Arguments<T>, output: string) => void;
    type CommandBuilder<T, U> = { [key: string]: Options } | ((args: Argv<T>) => Argv<U>);
    type SyncCompletionFunction = (current: string, argv: any) => string[];
    type AsyncCompletionFunction = (current: string, argv: any, done: (completion: ReadonlyArray<string>) => void) => void;
    type MiddlewareFunction<T> = (args: Arguments<T>) => void;
    type Choices = Array<string | true | undefined>;
    type PositionalOptionsType = "boolean" | "number" | "string";
}

declare var yargs: yargs.Argv;
export = yargs;
