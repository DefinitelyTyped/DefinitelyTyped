// Type definitions for optimist
// Project: https://github.com/substack/node-optimist
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>, Christopher Brown <https://github.com/chbrown>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



declare namespace optimist {
    interface Opt {
        alias?: string | string[];
        default?: any;
        demand?: string | number | string[];
        describe?: string;
        type?: string;
    }

    interface Parser {
        /** Implicitly use process.argv array to construct the argv object */
        argv: any;
        /** Pass in the process.argv yourself */
        (args: string[]): any;
        /** Use .parse() to do the same thing as treating optimist as a function */
        parse(args: string[]): any;

        // The types below follow the order and documentation of https://github.com/substack/node-optimist

        /** Set key names as equivalent such that updates to a key will propagate to aliases and vice-versa. */
        alias(key: string, alias: string | string[]): Parser;
        /** Take an object that maps keys to aliases. */
        alias(aliases: { [index: string]: string | string[] }): Parser;

        /** Set argv[key] to value if no option was specified on process.argv */
        default(key: string, value: any): Parser;
        /** Take an object that maps keys to default values */
        default(defaults: { [index: string]: any }): Parser;

        /** Show the usage information and exit if key wasn't specified in process.argv */
        demand(key: string): Parser;
        /** Demand at least as many non-option arguments, which show up in argv._ */
        demand(key: number): Parser;
        /** Demand each element in key */
        demand(key: string[]): Parser;

        /** Describe a key for the generated usage information */
        describe(key: string, desc: string): Parser;
        /** Take an object that maps keys to descriptions */
        describe(descriptions: { [index: string]: string }): Parser;

        /** Instead of chaining together, e.g. optimist.alias().demand().default()...,
        you can specify keys in opt for each of the chainable methods. */
        options(key: string, opt: Opt): Parser;
        /** Take an object that maps keys to opt parameters */
        options(options: { [index: string]: Opt }): Parser;

        /** Set a usage message to show which commands to use. Inside message,
        the string $0 will get interpolated to the current script name or node
        command for the present script similar to how $0 works in bash or perl. */
        usage(message: string): Parser;

        /** Check that certain conditions are met in the provided arguments. If fn
        throws or returns false, show the thrown error, usage information, and exit.
        */
        check(fn: (argv: any) => any): Parser;

        /** Interpret key as a boolean. If a non-flag option follows key in process.argv,
        that string won't get set as the value of key. If key never shows up as a
        flag in process.arguments, argv[key] will be false. */
        boolean(key: string): Parser;
        /** Interpret all the elements as booleans. */
        boolean(key: string[]): Parser;

        /** Tell the parser logic not to interpret key as a number or boolean. This can be useful if you need to preserve leading zeros in an input. */
        string(key: string): Parser;
        /** Interpret all the elements as strings */
        string(key: string[]): Parser;

        /** Format usage output to wrap at columns many columns. */
        wrap(columns: number): Parser;

        /** Return the generated usage string. */
        help(): string;
        /** Print the usage data using fn for printing (defaults to console.error). */
        showHelp(fn?: (message: string) => void): void;
    }
}

declare var optimist: optimist.Parser;
export = optimist;
