// Type definitions for minimist 1.2.0
// Project: https://github.com/substack/minimist
// Definitions by: Bart van der Schoor <https://github.com/Bartvds>, Necroskillz <https://github.com/Necroskillz>, kamranayub <https://github.com/kamranayub>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Return an argument object populated with the array arguments from args
 * 
 * @param args An optional argument array (typically `process.argv.slice(2)`)
 * @param opts An optional options object to customize the parsing
 */
declare function minimist(args?: string[], opts?: minimist.Opts): minimist.ParsedArgs;

/**
 * Return an argument object populated with the array arguments from args. Strongly-typed
 * to be the intersect of type T with minimist.ParsedArgs.
 *
 * @type T The type that will be intersected with minimist.ParsedArgs to represent the argument object
 * @param args An optional argument array (typically `process.argv.slice(2)`)
 * @param opts An optional options object to customize the parsing
 */
declare function minimist<T>(args?: string[], opts?: minimist.Opts): T & minimist.ParsedArgs;

/**
 * Return an argument object populated with the array arguments from args. Strongly-typed
 * to be the the type T which should extend minimist.ParsedArgs
 *
 * @type T The type that extends minimist.ParsedArgs and represents the argument object
 * @param args An optional argument array (typically `process.argv.slice(2)`)
 * @param opts An optional options object to customize the parsing
 */
declare function minimist<T extends minimist.ParsedArgs>(args?: string[], opts?: minimist.Opts): T;

declare namespace minimist {
    export interface Opts {
        /**
         * A string or array of strings argument names to always treat as strings         
         */ 
        string?: string | string[];

        /**
         * A string or array of strings to always treat as booleans
         */
        boolean?: boolean | string | string[];

        /**
         * An object mapping string names to strings or arrays of string argument names to use
         */
        alias?: { [key: string]: string | string[] };

        /**
         * An object mapping string argument names to default values
         */
        default?: { [key: string]: any };

        /**
         * When true, populate argv._ with everything after the first non-option
         */
        stopEarly?: boolean;

        /**
         * A function which is invoked with a command line parameter not defined in the opts 
         * configuration object. If the function returns false, the unknown option is not added to argv         
         */
        unknown?: (arg: string) => boolean;

        /**
         * When true, populate argv._ with everything before the -- and argv['--'] with everything after the --         
         */
        '--'?: boolean;
    }

    export interface ParsedArgs {
        [arg: string]: any;

        /**
         * If opts['--'] is true, populated with everything after the --
         */
        '--'?: string[];

        /**
         * An array of non-option arguments
         */
        _: string[];       
    }
}

export = minimist;
