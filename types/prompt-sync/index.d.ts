// Type definitions for prompt-sync 4.1.4
// Project: https://github.com/0x00A/prompt-sync
// Definitions by: TANAKA Koichi <https://github.com/MugeSo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace PromptSync {
    export interface Prompt {

        (opts: Option): string;
        (ask: string): string;
        (ask: string, opts: Option): string;
        (ask: string, value: string): string;
        /**
         * prompt -- sync function for reading user input from stdin
         *  @param {String} ask opening question/statement to prompt for
         *  @param {String} value initial value for the prompt
         *  @param   {Object} opts {
         *   echo: set to a character to be echoed, default is '*'. Use '' for no echo
         *   value: {String} initial value for the prompt
         *   ask: {String} opening question/statement to prompt for, does not override ask param
         *   autocomplete: {StringArray} function({String})
         * }
         *
         * @returns {string} Returns the string input or (if sigint === false)
         *                   null if user terminates with a ^C
         */
        (ask: string, value: string, opts: Option): string;

        hide(ask: string): string;
    }

    export interface Option {
        ask?: string | undefined;
        echo?: string | undefined;
        autocomplete?: AutoCompleteFunction | undefined;
        value?: string | undefined;
    }

    export interface Config {
        sigint?: boolean | undefined;
        autocomplete?: AutoCompleteFunction | undefined;
        history?: History | undefined;
    }

    export interface History {
        atStart(): boolean;
        atPenultimate(): boolean;
        pastEnd(): boolean;
        atEnd(): boolean;
        prev(): string;
        next(): string;
        reset(): void;
        push(str: string): void;
        save(): void;
    }

    export interface AutoCompleteFunction {
        (input: string): string[];
    }
}

/**
 * create -- sync function for reading user input from stdin
 * @param   {Object} config {
 *   sigint: {Boolean} exit on ^C
 *   autocomplete: {StringArray} function({String})
 *   history: {String} a history control object (see `prompt-sync-history`)
 * }
 * @returns {Function} prompt function
 */
declare function PromptSync(config?: PromptSync.Config): PromptSync.Prompt;

export = PromptSync;
