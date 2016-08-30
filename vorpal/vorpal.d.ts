// Type definitions for vorpal 1.11.4
// Project: https://github.com/dthree/vorpal
// Definitions by: Jim Buck <http://github.com/jimmyboh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../inquirer/inquirer.d.ts" />

declare type CallbackFunction<T> = (err: string | Error, data: T) => void;

declare interface VorpalInstance {
    
    ui: UiInstance;

    constructor();

    /**
     * Parses the process's `process.argv` arguments and executes the matching command.
     * 
     * @param {IArguments} argv
     * @param {*} options When `use: 'minimist'` is passed in as an option, `.parse` will instead expose the `minimist` module's main method and return the results, executing no commands.
     */
    parse(argv: string[], options?: {use?: 'minimist'}): void;    
    
    /**
     * Sets the prompt delimiter for the given Vorpal instance.
     * 
     * @param {string} str
     * @returns {this}
     */
    delimiter(str: string): this;

    /**
     * Attaches the TTY's CLI prompt to that given instance of Vorpal.
     *
     * As a note, multiple instances of Vorpal can run in the same Node instance. However, only one can be 'attached' to your TTY. The last instance given the show() command will be attached, and the previously shown instances will detach.
     */
    show(): void;
    
    /**
     * Returns a given command by its name. This is used instead of `vorpal.command()` as `.command` will overwrite a given command. If command is not found, `undefined` is returned. 
     * 
     * @param {string} name
     * @returns {Command}
     */
    find(name: string): Command;

    exec<T>(command: string, cb: CallbackFunction<T>): PromiseLike<T>;

    execSync<T>(command: string, options: {fatal: boolean}): T;

    log(message: string, ...messages: string[]);
    
    history(id: string);
    
    localStorage(id: string);

    help(strBuilder: (cmd: string) => string);

    pipe(pipeFn: (stdout: string) => string);

    use(extension: string | Function);

    
    /**
     * Adds a new command to your command line API.
     * 
     * @param {string} command
     * @param {string} [description]
     * @returns {Command}
     */
    command(command: string, description?: string): Command;

    catch(command: string, description?: string): Command;

    mode(command: string, description?: string): Mode;
}

declare interface UiInstance {

    redraw: RedrawMethod;

    delimiter(text?: string);

    input(text?: string);
    
    imprint();

    submit(text: string);
    
    cancel();
}

declare interface RedrawMethod
{
    (text: string, ...texts: string[]);

    clear();
    done();
}

declare interface Command {
    
}

declare interface Mode {
    description(desc: string): this;

    delimiter(str: string): this;

    init(initFn: (args: any, callback: CallbackFunction<void>) => void): this;

    action<T>(actionFn: (command: string, callback: CallbackFunction<void | T>) => void | T): this;
}

declare module "vorpal" {
    export = VorpalInstance;
}
