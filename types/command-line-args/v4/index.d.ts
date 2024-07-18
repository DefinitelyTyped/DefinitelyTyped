/**
 * Returns an object containing option values parsed from the command line. By default it parses the global `process.argv` array.
 */
declare function commandLineArgs(
    optionDefinitions: commandLineArgs.OptionDefinition[],
    options?: commandLineArgs.ParseOptions,
): commandLineArgs.CommandLineOptions;

declare namespace commandLineArgs {
    interface CommandLineOptions {
        /**
         * Command-line arguments not parsed by `commandLineArgs`.
         */
        _unknown?: string[] | undefined;
        [propName: string]: any;
    }

    interface ParseOptions {
        /**
         * An array of strings which if present will be parsed instead of `process.argv`.
         */
        argv?: string[] | undefined;

        /**
         * If `true`, `commandLineArgs` will not throw on unknown options or values, instead returning them in the `_unknown` property of the output.
         */
        partial?: boolean | undefined;
    }

    interface OptionDefinition {
        /**
         * The long option name.
         */
        name: string;

        /**
         * A setter function (you receive the output from this) enabling you to be specific about the type and value received. Typical values
         * are `String` (the default), `Number` and `Boolean` but you can use a custom function. If no option value was set you will receive `null`.
         */
        type?: ((input: string) => any) | undefined;

        /**
         * A getopt-style short option name. Can be any single character except a digit or hyphen.
         */
        alias?: string | undefined;

        /**
         * Set this flag if the option accepts multiple values. In the output, you will receive an array of values each passed through the `type` function.
         */
        multiple?: boolean | undefined;

        /**
         * Any values unaccounted for by an option definition will be set on the `defaultOption`. This flag is typically set
         * on the most commonly-used option to enable more concise usage.
         */
        defaultOption?: boolean | undefined;

        /**
         * An initial value for the option.
         */
        defaultValue?: any;

        /**
         * One or more group names the option belongs to.
         */
        group?: string | string[] | undefined;
    }
}

export = commandLineArgs;
