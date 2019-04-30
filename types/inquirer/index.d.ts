// Type definitions for Inquirer.js 6.x
// Project: https://github.com/SBoudrias/Inquirer.js
// Definitions by: Qubo <https://github.com/tkQubo>
//                 Parvez <https://github.com/ppathan>
//                 Jouderian <https://github.com/jouderianjr>
//                 Qibang <https://github.com/bang88>
//                 Jason Dreyzehner <https://github.com/bitjson>
//                 Synarque <https://github.com/synarque>
//                 Justin Rockwood <https://github.com/jrockwood>
//                 Keith Kelly <https://github.com/kwkelly>
//                 Junyoung Clare Jang <https://github.com/Ailrun>
//                 Richard Lea <https://github.com/chigix>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.8

import through = require('through');
import { Observable } from 'rxjs';
import * as readline from 'readline';

declare namespace inquirer {
    type Prompts = { [name: string]: prompts.Base };
    type ChoiceType = string | objects.ChoiceOption | objects.Separator;
    type Questions<T = Answers> =
        | Question<T>
        | ReadonlyArray<Question<T>>
        | Observable<Question<T>>;
    type StreamOptions = {
        input?: NodeJS.ReadStream,
        output?: NodeJS.WriteStream,
    };

    interface Inquirer {
        restoreDefaultPrompts(): void;
        /**
         * Expose helper functions on the top level for easiest usage by common users
         * @param name
         * @param prompt
         */
        registerPrompt(name: string, prompt: PromptModule): void;
        /**
         * Create a new self-contained prompt module.
         * @param opt Object specifying input and output streams for the prompt
         */
        createPromptModule(opt?: StreamOptions): PromptModule;
        /**
         * Public CLI helper interface
         * @param questions Questions settings array
         * @return
         */
        prompt: PromptModule;
        prompts: Prompts;
        Separator: objects.SeparatorStatic;
        ui: {
            BottomBar: ui.BottomBar;
            Prompt: ui.PromptUI;
        };
    }

    interface PromptModule {
        <T>(questions: Questions<T>): Promise<T> & { ui: ui.PromptUI };
        /**
         * Register a prompt type
         * @param name Prompt type name
         * @param prompt Prompt constructor
         */
        registerPrompt(name: string, prompt: prompts.Base): PromptModule;
        /**
         * Register the defaults provider prompts
         */
        restoreDefaultPrompts(): void;
    }

    interface Question<T = Answers> {
        /**
         * Type of the prompt.
         * Possible values:
         * <ul>
         *      <li>input</li>
         *      <li>number</li>
         *      <li>confirm</li>
         *      <li>list</li>
         *      <li>rawlist</li>
         *      <li>password</li>
         * </ul>
         * @defaults: 'input'
         */
        type?: string;
        /**
         * The name to use when storing the answer in the anwers hash.
         */
        name?: string;
        /**
         * The question to print. If defined as a function,
         * the first parameter will be the current inquirer session answers.
         */
        message?: string | ((answers: T) => string);
        /**
         * Default value(s) to use if nothing is entered, or a function that returns the default value(s).
         * If defined as a function, the first parameter will be the current inquirer session answers.
         */
        default?: any | ((answers: T) => any) | ((answers: T) => Promise<any>);
        /**
         * Choices array or a function returning a choices array. If defined as a function,
         * the first parameter will be the current inquirer session answers.
         * Array values can be simple strings, or objects containing a name (to display) and a value properties
         * (to save in the answers hash). Values can also be a Separator.
         */
        choices?:
        | ReadonlyArray<ChoiceType>
        | ((answers: T) => ReadonlyArray<ChoiceType>)
        | ((answers: T) => Promise<ReadonlyArray<ChoiceType>>);
        /**
         * Receive the user input and should return true if the value is valid, and an error message (String)
         * otherwise. If false is returned, a default error message is provided.
         */
        validate?(input: any, answers?: T): boolean | string | Promise<boolean | string>;
        /**
         * Receive the user input and return the filtered value to be used inside the program.
         * The value returned will be added to the Answers hash.
         */
        filter?(input: string): any;
        /**
         * Receive the user input and return the transformed value to be displayed to the user. The
         * transformation only impacts what is shown while editing. It does not impact the answers
         * hash.
         */
        transformer?(input: string): string;
        /**
         * Receive the current user answers hash and should return true or false depending on whether or
         * not this question should be asked. The value can also be a simple boolean.
         */
        when?: boolean | ((answers: T) => boolean) | ((answers: T) => Promise<boolean>);
        paginated?: boolean;
        /**
         * Change the number of lines that will be rendered when using list, rawList, expand or checkbox.
         */
        pageSize?: number;
        /**
         * Add a mask when password will entered
         */
        mask?: string;
        /**
         * Change the default prefix message.
         */
        prefix?: string;
        /**
         * Change the default suffix message.
         */
        suffix?: string;
    }

    /**
     * A key/value hash containing the client answers in each prompt.
     */
    interface Answers {
        [key: string]: any;
    }

    /**
     * Corresponding to the answer object creation in:
     * https://github.com/SBoudrias/Inquirer.js/blob/ff075f587ef78504f0eae4ee5ca0656432429026/packages/inquirer/lib/ui/prompt.js#L88
     */
    interface Answer {
        name: string,
        answer: any,
    }

    namespace prompts {
        /**
         * Base prompt implementation
         * Should be extended by prompt types.
         *
         * @interface Base
         */
        interface Base {
            new <T>(question: Question<T>, rl: readline.Interface, answers: Answers): Base;
            /**
             * Start the Inquiry session and manage output value filtering
             *
             * @returns {Promise<any>}
             * @memberof Base
             */
            run(): Promise<any>;
            /**
             * Called when the UI closes. Override to do any specific cleanup necessary
             */
            close(): void;
            /**
             * Generate the prompt question string
             */
            getQuestion(): string;
        }
    }

    namespace ui {

        /**
         * Base interface class other can inherits from
         */
        interface BaseUI {
            rl: readline.Interface;
            new(opt: StreamOptions): BaseUI;
            /**
             * Handle the ^C exit
             * @return {null}
             */
            onForceClose(): void;
            /**
             * Close the interface and cleanup listeners
             */
            close(): void;
        }
        /**
         * Base interface class other can inherits from
         */
        interface PromptUI extends BaseUI {
            process: Observable<Answer>;
            new(prompts: Prompts, opt: StreamOptions): PromptUI;
            run<T>(questions: Questions<T>): Promise<Answers>;
            /**
             * Once all prompt are over
             */
            onCompletion(): void;
            processQuestion<T>(question: Question<T>): Observable<Question<T>>;
            fetchAnswer<T>(question: Question<T>): Observable<Question<T>>;
            setDefaultType<T>(question: Question<T>): Observable<Question<T>>;
            filterIfRunnable<T>(question: Question<T>): Observable<Question<T>>;
        }

        /**
         * Sticky bottom bar user interface
         */
        interface BottomBar extends BaseUI {
            new(opt?: StreamOptions & { bottomBar?: string }): BottomBar;
            /**
             * Render the prompt to screen
             * @return self
             */
            render(): BottomBar;
            clean(): BottomBar;
            /**
             * Update the bottom bar content and rerender
             * @param bottomBar Bottom bar content
             * @return self
             */
            updateBottomBar(bottomBar: string): BottomBar;
            /**
             * Write out log data
             * @param {String} data - The log data to be output
             * @return self
             */
            writeLog(data: string): BottomBar;
            /**
             * Make sure line end on a line feed
             * @param str Input string
             * @return The input string with a final line feed
             */
            enforceLF(str: string): string;
            /**
             * Helper for writing message in Prompt
             * @param message The message to be output
             */
            write(message: string): void;
            log: through.ThroughStream;
        }

    }

    namespace objects {
        /**
         * Choice object
         * Normalize input as choice object
         * @constructor
         * @param {String|Object} val  Choice value. If an object is passed, it should contains
         *                             at least one of `value` or `name` property
         */
        interface Choice {
            new (str: string): Choice;
            new (separator: Separator): Choice;
            new (option: ChoiceOption): Choice;
        }

        interface ChoiceOption {
            name?: string;
            value?: any;
            type?: string;
            short?: string;
            extra?: any;
            key?: string;
            checked?: boolean;
            disabled?: string | (<T = Answers>(answers: T) => any);
        }

        /**
         * Choices collection
         * Collection of multiple `choice` object
         * @constructor
         * @param choices  All `choice` to keep in the collection
         */
        interface Choices {
            new <T = Answers>(
                choices: ReadonlyArray<string | Separator | ChoiceOption>,
                answers?: T
            ): Choices;
            choices: ReadonlyArray<Choice>;
            realChoices: ReadonlyArray<Choice>;
            length: number;
            realLength: number;
            /**
             * Get a valid choice from the collection
             * @param selector The selected choice index
             * @return Return the matched choice or undefined
             */
            getChoice(selector: number): Choice;
            /**
             * Get a raw element from the collection
             * @param selector The selected index value
             * @return Return the matched choice or undefined
             */
            get(selector: number): Choice;
            /**
             * Match the valid choices against a where clause
             * @param whereClause Lodash `where` clause
             * @return Matching choices or empty array
             */
            where<U extends {}>(whereClause: U): Choice[];
            /**
             * Pluck a particular key from the choices
             * @param propertyName Property name to select
             * @return Selected properties
             */
            pluck(propertyName: string): any[];
            forEach<T>(application: (choice: Choice) => T): T[];
        }

        interface SeparatorStatic {
            /**
             * @param line Separation line content (facultative)
             */
            new (line?: string): Separator;
            /**
             * Helper function returning false if object is a separator
             * @param obj object to test against
             * @return `false` if object is a separator
             */
            exclude(obj: any): boolean;
        }

        /**
         * Separator object
         * Used to space/separate choices group
         * @constructor
         * @param {String} line   Separation line content (facultative)
         */
        interface Separator {
            type: string;
            line: string;
            /**
             * Stringify separator
             * @return {String} the separator display string
             */
            toString(): string;
        }
    }
}

declare var inquirer: inquirer.Inquirer;

export = inquirer;
