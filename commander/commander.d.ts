// Type definitions for commanderjs 1.1.1
// Project: https://github.com/visionmedia/commander.js
// Definitions by: Marcelo Dezem <http://github.com/mdezem>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "commander" {
    export interface Command {
        /**
        * The command name.
        */
        name: string;

        //
        //
        // NOTE: the methods below are COPIED to the module
        // as functions exports. If changes need to be made here,
        // remember to re-paste the definitions in the module.
        // Read below to know why such ugly thing is required.
        //  
        //

        /**
        * Register callback fn for the command.
        */
        action(fn: (...args: any[]) => any): Command;

        /**
        * Define option with flags, description and optional coercion function and default value.
        * The flags string should contain both the short and long flags 
        * separated by comma, a pipe or space. The following are all valid
        * all will output this way when --help is used.
        *
        * "-p, --pepper"
        * "-p|--pepper"
        * "-p --pepper"
        *
        * @param flags the option flags.
        * @param description the option description. The description is printed when "--help" is used.
        * @param coerceFn (optional) specifies a callback function to coerce the option arg.
        * @param defaultValue (optional) specifies a default value.
        */
        option(flags: string, description: string, coerceFn?: (value: string) => any, defaultValue?: any): Command;


        /**
        * Sets the command version
        */
        version(version: string): Command;

        /**
        * Parse the arguments array and invokes the commands passing the parsed options.
        * @param argv the arguments array.
        */
        parse(argv: string[]): Command;

        /**
        * Gets or sets the command description. 
        * @param description the new description for the command. When ommited this returns the current description, otherwise returns the current Command.
        */
        description(description: string): Command;
        description(): string;

        /**
        * Gets or sets the usage help string.
        */
        usage(usage: string): Command;
        usage(): string;

        /*
        * Prompt the user for a value, calling the callback function.
        *
        * Supports single-line and multi-line prompts.
        * To issue a single-line prompt simply add a whitespace
        * to the end of label, something like "name: ", whereas
        * for a multi-line prompt omit this "description:".
        * @param label the label string to be printed in console.
        * @param callback a callback function to handle the inputed string.
        */
        prompt(label: string, callback: (value: string) => any): void;

        promptForNumber(label: string, callback: (value: number) => any): void;
        promptForDate(label: string, callback: (value: Date) => any): void;
        promptSingleLine(label: string, callback: (value: string) => any): void;
        promptMultiLine(label: string, callback: (value: string) => any): void;

        /**
        * Prompt for password with a label, a optional mask char and callback function.
        * The mask string defaults to '', aka no output is written while typing, you may want to use "*" etc.
        */
        password(label: string, mask: string, callback: (value: string) => any): void;
        password(label: string, callback: (value: string) => any): void;

        /**
        * Prompts the user for a confirmation.
        */
        confirm(label: string, callback: (flag: bool) => any): void;

        /**
        * Prompt for password with str, mask char and callback fn(val).
        * The mask string defaults to '', aka no output is written while typing, you may want to use "*" etc.
        */
        choose(options: string[], callback: (idx: number) => any): void;
        choose(options: any[], callback: (idx: number) => any): void;

        /**
        * Add command with the specified name. Returns a new instance of Command.
        *
        * The .action() callback is invoked when the
        * command name is specified via ARGV,
        * and the remaining arguments are applied to the
        * function for access.
    
        * When the name is "*" an un-matched command
        * will be passed as the first arg, followed by
        * the rest of ARGV remaining.
        *
        * @param name the name of the command. Pass "*" to trap un-matched commands.
        */
        command(name: string): Command;
    }

    //
    //
    // since TypeScript (and ECMA6) does not supports module.exports,
    // there is no way to set the default Command instance as the module itself.
    // It's ugly but the only way is to copy all the methods from Command 
    // and paste it in the module as functions exports.
    //
    //

    /**
    * Register callback fn for the command.
    */
    export function action(fn: (...args: any[]) => any): Command;

    /**
    * Define option with flags, description and optional coercion function and default value.
    * The flags string should contain both the short and long flags 
    * separated by comma, a pipe or space. The following are all valid
    * all will output this way when --help is used.
    *
    * "-p, --pepper"
    * "-p|--pepper"
    * "-p --pepper"
    *
    * @param flags the option flags.
    * @param description the option description. The description is printed when "--help" is used.
    * @param coerceFn (optional) specifies a callback function to coerce the option arg.
    * @param defaultValue (optional) specifies a default value.
    */
    export function option(flags: string, description: string, coerceFn?: (value: string) => any, defaultValue?: any): Command;


    /**
    * Sets the command version
    */
    export function version(version: string): Command;

    /**
    * Parse the arguments array and invokes the commands passing the parsed options.
    * @param argv the arguments array.
    */
    export function parse(argv: string[]): Command;

    /**
    * Gets or sets the command description. 
    * @param description the new description for the command. When ommited this returns the current description, otherwise returns the current Command.
    */
    export function description(description: string): Command;
    export function description(): string;

    /**
    * Gets or sets the usage help string.
    */
    export function usage(usage: string): Command;
    export function usage(): string;

    /*
    * Prompt the user for a value, calling the callback function.
    *
    * Supports single-line and multi-line prompts.
    * To issue a single-line prompt simply add a whitespace
    * to the end of label, something like "name: ", whereas
    * for a multi-line prompt omit this "description:".
    * @param label the label string to be printed in console.
    * @param callback a callback function to handle the inputed string.
    */
    export function prompt(label: string, callback: (value: string) => any): void;

    export function promptForNumber(label: string, callback: (value: number) => any): void;
    export function promptForDate(label: string, callback: (value: Date) => any): void;
    export function promptSingleLine(label: string, callback: (value: string) => any): void;
    export function promptMultiLine(label: string, callback: (value: string) => any): void;
    /**
    * Prompt for password with a label, a optional mask char and callback function.
    * The mask string defaults to '', aka no output is written while typing, you may want to use "*" etc.
    */
    export function password(label: string, mask: string, callback: (value: string) => any): void;
    export function password(label: string, callback: (value: string) => any): void;

    /**
    * Prompts the user for a confirmation.
    */
    export function confirm(label: string, callback: (flag: bool) => any): void;

    /**
    * Prompt for password with str, mask char and callback fn(val).
    * The mask string defaults to '', aka no output is written while typing, you may want to use "*" etc.
    */
    export function choose(options: string[], callback: (idx: number) => any): void;
    export function choose(options: any[], callback: (idx: number) => any): void;

    /**
    * Add command with the specified name. Returns a new instance of Command.
    *
    * The .action() callback is invoked when the
    * command name is specified via ARGV,
    * and the remaining arguments are applied to the
    * function for access.

    * When the name is "*" an un-matched command
    * will be passed as the first arg, followed by
    * the rest of ARGV remaining.
    *
    * @param name the name of the command. Pass "*" to trap un-matched commands.
    */
    export function command(name: string): Command;
}