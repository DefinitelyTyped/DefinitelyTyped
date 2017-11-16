// Type definitions for command-line-args 4.0.7
// Project: https://github.com/75lb/command-line-args
// Definitions by: CzBuCHi <https://github.com/CzBuCHi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Returns an object containing all options set on the command line. By default it parses the global  [`process.argv`](https://nodejs.org/api/process.html#process_process_argv) array.
 *
 * By default, an exception is thrown if the user sets an unknown option (one without a valid [definition](#exp_module_definition--OptionDefinition)). To enable __partial parsing__, invoke `commandLineArgs` with the `partial` option - all unknown arguments will be returned in the `_unknown` property.
 *
 *
 * @param {module:definition[]} - An array of [OptionDefinition](#exp_module_definition--OptionDefinition) objects
 * @param [options] {object} - Options.
 * @param [options.argv] {string[]} - An array of strings, which if passed will be parsed instead  of `process.argv`.
 * @param [options.partial] {boolean} - If `true`, an array of unknown arguments is returned in the `_unknown` property of the output.
 * @returns {object}
 * @throws `UNKNOWN_OPTION` if `options.partial` is false and the user set an undefined option
 * @throws `NAME_MISSING` if an option definition is missing the required `name` property
 * @throws `INVALID_TYPE` if an option definition has a `type` value that's not a function
 * @throws `INVALID_ALIAS` if an alias is numeric, a hyphen or a length other than 1
 * @throws `DUPLICATE_NAME` if an option definition name was used more than once
 * @throws `DUPLICATE_ALIAS` if an option definition alias was used more than once
 * @throws `DUPLICATE_DEFAULT_OPTION` if more than one option definition has `defaultOption: true`
 * @alias module:command-line-args
 */
declare function commandLineArgs(optionDefinitions: commandLineArgs.OptionDefinition[], options?: commandLineArgs.Options): any;

declare module commandLineArgs {

  export interface OptionDefinition {
    /**
     * The only required definition property is name, the value of each option will be either a Boolean or string.
     */
    name: string,
    /**
     * The type value is a setter function (you receive the output from this),
     * enabling you to be specific about the type and value received.
     */
    type?: (arg: string) => any,
    /**
     * getopt-style short option names. Can be any single character (unicode included) except a digit or hypen.
     */
    alias?: string,
    /**
     * Set this flag if the option takes a list of values. You will receive an array of values, each passed
     * through the type function (if specified).
     */
    multiple?: boolean,
    /**
     * Any unclaimed command-line args will be set on this option. This flag is typically set on
     * the most commonly-used option to make for more concise usage
     * (i.e. $ myapp *.js instead of $ myapp --files *.js).
     */
    defaultOption?: boolean,
    /**
     * An initial value for the option.
     */
    defaultValue?: any,
    /**
     * When your app has a large amount of options it makes sense to organise them in groups.
     * There are two automatic groups: _all (contains all options) and _none (contains options
     * without a group specified in their definition).
     */
    group?: string | string[],
    /**
     * Describes the option.
     */
    description?: string,
    /**
     * A label for the type, e.g. <ms>.
     */
    typeLabel?: string;
  }

  export interface Options {
    /**
     * An array of strings, which if passed will be parsed instead  of `process.argv`.
     */
    argv?: string[];
    /**
     * If `true`, an array of unknown arguments is returned in the `_unknown` property of the output.
     */
    partial?: boolean;
  }
}

export = commandLineArgs;
