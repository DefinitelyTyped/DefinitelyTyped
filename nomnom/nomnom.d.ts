// Type definitions for nomnom
// Project: https://github.com/harthur/nomnom
// Definitions by: Paul Vick <https://github.com/panopticoncentral>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// NOTE: Extra identifier's been published is a work-around for the TypeScript 1.0.0.
// original is here -> https://github.com/borisyankov/DefinitelyTyped/commit/9aef1ad84dc006e3d25f5e57709198e33996ba84#diff-0d78c90325d4bfb40327dcc36dcd939a

declare module NomnomInternal
{
    /**
     * The command-line parser.
     */
    module Parser
    {
        /**
         * A command-line option.
         */
        export interface Option
        {
            /**
             * The abbreviated name of the option.
             */
            abbr?: string;

            /**
             * The full name of the option.
             */
            full?: string;

            /**
             * Whether the option is a flag.
             */
            flag?: boolean;

            /**
             * A string to be used in the usage printout.
             */
            metavar?: string;

            /**
             * A shorthand for abbr, full, and metavar.
             */
            string?: string;

            /**
             * A help string for the option.
             */
            help?: string;

            /**
             * The default value of the option.
             */
            default?: any;

            /**
             * A callback for the option.
             */
            callback?: (option: any) => string;

            /**
             * The position of the option if it's a positional argument.
             */
            position?: number;

            /**
             * Whether the option is a list.
             */
            list?: boolean;

            /**
             * Whether the option is required.
             */
            required?: boolean;

            /**
             * The choices for the option.
             */
            choices?: string[];

            /**
             * If you don't want the option JSON-parsed, specify type "string".
             */
            type?: string;

            /**
             * Whether the option is hidden.
             */
            hidden?: boolean;
        }

        /**
         * A command-line command specification.
         */
        export interface Command
        {
            /**
             * The name of the command.
             */
            name: string;

            /**
             * Sets the options of the command.
             * @param specs The specifications of the options.
             * @returns The command.
             */
            options(specs: { [index: string]: Option }): Command;

            /**
             * Sets an option of the command.
             * @param name The name of the option.
             * @param spec The specifiction of the option.
             * @returns The command.
             */
            option(name: string, spec: Option): Command;

            /**
             * Sets a callback for the command.
             * @param func The callback function.
             * @returns The command.
             */
            callback(func: (options: any) => void): Command;

            /**
             * Sets the help string for the command.
             * @param help The help string.
             * @returns The command.
             */
            help(help: string): Command;

            /**
             * Sets the usage string for the command.
             * @param usage The usage string.
             * @returns The command.
             */
            usage(usage: string): Command;
        }
    }

    /**
     * The command-line parser.
     */
    export interface Parser
    {
        /**
         * Returns the parser.
         */
        (): Parser;

        /**
         * Creates a new command.
         * @param name The name of the command.
         * @returns The new command.
         */
        command(name: string): Parser.Command;

        /**
         * Returns the commmand representing no command.
         * @returns The command representing no command.
         */
        nocommand(): Parser.Command;

        /**
         * Sets the options of the command-line.
         * @param specs The specifications of the options.
         * @returns The command-line parser.
         */
        options(specs: { [index: string]: Parser.Option }): Parser;

        /**
         * Sets an option of the command-line.
         * @param name The name of the option.
         * @param spec The specifiction of the option.
         * @returns The command-line parser.
         */
        option(name: string, spec: Parser.Option): Parser;

        /**
         * Sets the usage string for the command-line.
         * @param usage The usage string.
         * @returns The command-line parser.
         */
        usage(usage: string): Parser;

        /**
         * Provides a printer to the command-line processor.
         * @param print The print function to use.
         * @returns The command-line parser.
         */
        printer(print: (message: string, code?: number) => void): Parser;

        /**
         * Sets the name of the script.
         * @param script The script name.
         * @returns The command-line parser.
         */
        script(script: string): Parser;

        /**
         * Sets the help string for the command-line.
         * @param help The help string.
         * @returns The command-line parser.
         */
        help(help: string): Parser;

        /**
         * Sets the command-line parser not to use colors.
         * @returns The command-line parser.
         */
        nocolors(): Parser;

        /**
         * Parses the command-line.
         * @param argv The command-line arguments.
         * @returns The parsed command-line.
         */
        nom(argv?: string[]): any;

        /**
         * Parses the command-line.
         * @param argv The command-line arguments.
         * @returns The parsed command-line.
         */
        parse(argv?: string[]): any;
    }
}

declare var _nomnom: NomnomInternal.Parser;
declare module "nomnom" {
    export = _nomnom;
}
