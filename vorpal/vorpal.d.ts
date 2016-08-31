// Type definitions for vorpal 1.11.4
// Project: https://github.com/dthree/vorpal
// Definitions by: Jim Buck <http://github.com/jimmyboh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../inquirer/inquirer.d.ts" />
/// <reference path="../minimist/minimist.d.ts" />

import {} from 'inquirer';
import {ParsedArgs} from 'minimist';

export type CallbackFunction<T> = (err?: string | Error, data?: T) => void;

interface TypesDefinition
{
    string?: string[];
    number?: string[];
    // TODO: Check other types.
}

interface VorpalFactory {
    new (): VorpalInstance;

    (): VorpalInstance;
}

interface VorpalInstance {

    ui: UiInstance;

    /**
     * Parses the process's `process.argv` arguments and executes the matching command.
     * 
     * @param {(string|string[])} argv
     * @param {{use?: 'minimist'}} [options] When `use: 'minimist'` is passed in as an option, `.parse` will instead expose the `minimist` module's main method and return the results, executing no commands.
     */
    parse(argv: string | string[], options?: { use?: 'minimist' }): ParsedArgs;

    /**
     * Sets the prompt delimiter for the given Vorpal instance.
     * 
     * @param {string} str
     * @returns {this}
     */
    delimiter(str: string): this;

    /**
     * Attaches the TTY's CLI prompt to that given instance of Vorpal.
     * As a note, multiple instances of Vorpal can run in the same Node instance. However, only one can be 'attached' to your TTY. The last instance given the show() command will be attached, and the previously shown instances will detach.
     *
     * @returns {this}
     */
    show(): this;

    /**
     * Returns a given command by its name. This is used instead of `vorpal.command()` as `.command` will overwrite a given command. If command is not found, `undefined` is returned. 
     * 
     * @param {string} name
     * @returns {Command}
     */
    find(name: string): Command;

    exec<T>(command: string, cb: CallbackFunction<T>): PromiseLike<T>;

    execSync<T>(command: string, options: { fatal: boolean }): T;

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

export interface UiInstance {

    redraw: RedrawMethod;

    delimiter(text?: string);

    input(text?: string);

    imprint();

    submit(text: string);

    cancel();
}

export function RedrawMethod(text: string): void;
export function RedrawMethod(...texts: string[]): void;

export interface RedrawMethod {
    clear(): void;
    done(): void;
}

export interface Command {
    description(description: string): this;
    alias(name: string): this;
    alias(...names: string[]): this;
    parse(parseFn: CommandParseFn): this;
    option(flag: string, description: string, autocomplete: string[]): this; // TODO: Check autocomplete types.
    types(types: TypesDefinition): this;
    hidden(): this; // TODO: Check return type.
    remove(); // TODO: Check return type.
    help(helpFn: (args) => void); // TODO: Check args type.
    validate(validateFn: CommandValidateFn);
    autocomplete(choices: string[]): this;
    autocomplete(choices: {}): this; // TODO: Revisit this.
    autocomplete<T>(choicesFn: CommandAutocompleteFn<T>): this; // TODO: Revisit this.
    action<T>(actionFn: CommandActionFn<T>): this;
}

export interface Mode {
    description(desc: string): this;

    delimiter(str: string): this;

    init(initFn: (args: any, callback: CallbackFunction<void>) => void): this;

    action<T>(actionFn: (command: string, callback: CallbackFunction<void | T>) => void | T): this;
}

type CommandParseFn = (command: string, args) => string;  // TODO: Check args type.
type CommandValidateFn = (args) => boolean | string;  // TODO: Check args type.
type CommandAutocompleteFn<T> = (text: string, iteration: number, cb?: CallbackFunction<T>) => void | PromiseLike<T>;
type CommandActionFn<T> = (args, cb?: CallbackFunction<T>) => void | PromiseLike<T>

export var Vorpal: VorpalFactory;