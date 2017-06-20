// Type definitions for Inquirer.js
// Project: https://github.com/SBoudrias/Inquirer.js
// Definitions by: Qubo <https://github.com/tkQubo>
//                 Parvez <https://github.com/ppathan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="rx" />

import through = require('through');

declare namespace inquirer {
    type Prompts = { [name: string]: PromptModule };
    type ChoiceType = string | objects.ChoiceOption | objects.Separator;
    type Questions = Question | Question[] | Rx.Observable<Question>;

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
         */
        createPromptModule(): PromptModule;
        /**
         * Public CLI helper interface
         * @param questions Questions settings array
         * @param cb Callback being passed the user answers
         * @return
         */
        prompt(questions: Questions, cb: (answers: Answers) => any): ui.Prompt;
        prompt(questions: Questions): Promise<Answers>;
        prompts: Prompts;
        Separator: objects.SeparatorStatic;
        ui: {
            BottomBar: ui.BottomBar;
            Prompt: ui.Prompt;
        }
    }

    interface PromptModule {
        (questions: Questions): Promise<Answers>;
        (questions: Questions, cb: (answers: Answers) => any): ui.Prompt;
        /**
         * Register a prompt type
         * @param name Prompt type name
         * @param prompt Prompt constructor
         */
        registerPrompt(name: string, prompt: PromptModule): ui.Prompt;
        /**
         * Register the defaults provider prompts
         */
        restoreDefaultPrompts(): void;
    }

    interface Question {
        /**
         * Type of the prompt.
         * Possible values:
         * <ul>
         *      <li>input</li>
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
        message?: string | ((answers: Answers) => string);
        /**
         * Default value(s) to use if nothing is entered, or a function that returns the default value(s).
         * If defined as a function, the first parameter will be the current inquirer session answers.
         */
        default?: any | ((answers: Answers) => any);
        /**
         * Choices array or a function returning a choices array. If defined as a function,
         * the first parameter will be the current inquirer session answers.
         * Array values can be simple strings, or objects containing a name (to display) and a value properties
         * (to save in the answers hash). Values can also be a Separator.
         */
        choices?: ChoiceType[] | ((answers: Answers) => ChoiceType[]);
        /**
         * Receive the user input and should return true if the value is valid, and an error message (String)
         * otherwise. If false is returned, a default error message is provided.
         */
        validate?(input: string, answers?: Answers): boolean | string;
        /**
         * Receive the user input and return the filtered value to be used inside the program.
         * The value returned will be added to the Answers hash.
         */
        filter?(input: string): string;
        /**
         * Receive the current user answers hash and should return true or false depending on whether or
         * not this question should be asked. The value can also be a simple boolean.
         */
        when?: boolean | ((answers: Answers) => boolean);
        paginated?: boolean;
        /**
         * Change the number of lines that will be rendered when using list, rawList, expand or checkbox.
         */
        pageSize?: number;
        /**
         * Add a mask when password will entered
         */
        mask?: string;
    }

    /**
     * A key/value hash containing the client answers in each prompt.
     */
    interface Answers {
        [key: string]: any;
    }

    namespace ui {
        /**
         * Base interface class other can inherits from
         */
        interface Prompt extends BaseUI<Prompts> {
            new (promptModule: Prompts): Prompt;
            /**
             * Once all prompt are over
             */
            onCompletion(): void;
            processQuestion(question: Question): any;
            fetchAnswer(question: Question): any;
            setDefaultType(question: Question): any;
            filterIfRunnable(question: Question): any;
        }

        /**
         * Sticky bottom bar user interface
         */
        interface BottomBar extends BaseUI<BottomBarOption> {
            new (opt?: BottomBarOption): BottomBar;
            /**
             * Render the prompt to screen
             * @return self
             */
            render(): BottomBar;
            /**
             * Update the bottom bar content and rerender
             * @param bottomBar Bottom bar content
             * @return self
             */
            updateBottomBar(bottomBar: string): BottomBar;
            /**
             * Rerender the prompt
             * @return self
             */
            writeLog(data: any): BottomBar;
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

        interface BottomBarOption {
            bottomBar?: string;
        }
        /**
         * Base interface class other can inherits from
         */
        interface BaseUI<TOpt> {
            new (opt: TOpt): void;
            /**
             * Handle the ^C exit
             * @return {null}
             */
            onForceClose(): void;
            /**
             * Close the interface and cleanup listeners
             */
            close(): void;
            /**
             * Handle and propagate keypress events
             */
            onKeypress(s: string, key: Key): void;
        }

        interface Key {
            sequence: string;
            name: string;
            meta: boolean;
            shift: boolean;
            ctrl: boolean;
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
            value?: string;
            type?: string;
            extra?: any;
            key?: string;
            checked?: boolean;
            disabled?: string | ((answers: Answers) => any);
        }

        /**
         * Choices collection
         * Collection of multiple `choice` object
         * @constructor
         * @param choices  All `choice` to keep in the collection
         */
        interface Choices {
            new (choices: (string | Separator | ChoiceOption)[], answers?: Answers): Choices;
            choices: Choice[];
            realChoices: Choice[];
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
