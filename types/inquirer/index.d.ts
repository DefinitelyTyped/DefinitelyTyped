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
//                 Richard Lea <https://github.com/chigix>
//                 Jed Mao <https://github.com/jedmao>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import { ThroughStream } from 'through';
import { Observable } from 'rxjs';
import { Interface as ReadlineInterface } from 'readline';

declare namespace inquirer {
    type Prompts = { [name: string]: prompts.Base };
    type ChoiceType<A> = string | objects.ChoiceOption<A> | objects.Separator;
    type Questions<A extends Answers = Answers> =
        | Question<A>
        | Question<A>[]
        | ReadonlyArray<Question<A>>
        | Observable<Question<A>>;
    type Answers = Record<string, any>
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
        <A>(questions: Questions<A>): Promise<A> & { ui: ui.PromptUI };
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

    interface QuestionCommon<A> {
        /**
         * The name to use when storing the answer in the answers hash.
         * If the name contains periods, it will define a path in the answers hash.
         */
        name?: string;
        /**
         * The question to print. If defined as a function, the first parameter will be
         * the current inquirer session answers.
         * Defaults to the value of `name` (followed by a colon).
         */
        message?: string | ((answers: A) => string);
        /**
         * Default value(s) to use if nothing is entered, or a function that returns
         * the default value(s). If defined as a function, the first parameter will be
         * the current inquirer session answers.
         */
        default?: string | number | boolean | any[] | ((answers: A) => any) | ((answers: A) => Promise<any>);
        /**
         * Change the default _prefix_ message.
         */
        prefix?: string;
        /**
         * Change the default _suffix_ message.
         */
        suffix?: string;
        /**
         * Receive the current user answers hash and should return `true` or `false` depending
         * on whether or not this question should be asked. The value can also be a simple boolean.
         */
        when?: boolean | ((answers: A) => boolean | Promise<boolean>);
    }

    interface QuestionOptions<A> {
        /**
         * Choices array or a function returning a choices array. If defined as a function,
         * the first parameter will be the current inquirer session answers. Array values can
         * be simple `numbers`, `strings`, or `objects` containing a `name` (to display in list),
         * a `value` (to save in the answers hash) and a `short` (to display after selection)
         * properties. The choices array can also contain
         * [a Separator](https://github.com/SBoudrias/Inquirer.js#separator).
         */
        choices?:
        | ReadonlyArray<ChoiceType<A>>
        | ((answers: A) => ReadonlyArray<ChoiceType<A>>)
        | ((answers: A) => Promise<ReadonlyArray<ChoiceType<A>>>);
        /**
         * Receive the user input and return the filtered value to be used inside the program.
         * The value returned will be added to the _Answers_ hash.
         */
        filter?(input: string): any;
        /**
         * Receive the user input, answers hash and option flags, and return a transformed value
         * to display to the user. The transformation only impacts what is shown while editing.
         * It does not modify the answers hash.
         */
        transformer?(input: string, answers: A, flags: any): string;
        /**
         * Change the number of lines that will be rendered when using `list`, `rawList`,
         * `expand` or `checkbox`.
         */
        pageSize?: number;
    }

    type Question<A extends Answers = Answers> = (
        ListQuestion<A> |
        RawListQuestion<A> |
        ExpandQuestion<A> |
        CheckboxQuestion<A> |
        ConfirmQuestion<A> |
        InputQuestion<A> |
        NumberQuestion<A> |
        PasswordQuestion<A> |
        EditorQuestion<A>
    )

    interface ListQuestion<A> extends QuestionCommon<A>,
        Pick<QuestionOptions<A>, 'choices' | 'filter' | 'pageSize'> {
        type: 'list'
    }

    interface RawListQuestion<A> extends QuestionCommon<A>,
        Pick<QuestionOptions<A>, 'choices' | 'filter' | 'pageSize'> {
        type: 'rawlist'
    }

    interface ExpandQuestion<A> extends QuestionCommon<A>,
        Pick<QuestionOptions<A>, 'choices' | 'pageSize'> {
        type: 'expand'
    }

    interface CheckboxQuestion<A> extends QuestionCommon<A>,
        Pick<QuestionOptions<A>, 'choices' | 'filter' | 'pageSize'> {
        type: 'checkbox'
        /**
         * Receive the user input and answers hash. Should return `true` if the value is valid,
         * and an error message (`String`) otherwise. If `false` is returned, a default error
         * message is provided.
         */
        validate?(input: string, answers?: A): boolean | string | Promise<boolean | string>;
    }

    interface ConfirmQuestion<A> extends QuestionCommon<A>, QuestionOptions<A> {
        type: 'confirm'
    }

    interface InputQuestion<A> extends QuestionCommon<A>,
        Pick<QuestionOptions<A>, 'filter' | 'transformer'> {
        type?: 'input'
        /**
         * Receive the user input and answers hash. Should return `true` if the value is valid,
         * and an error message (`String`) otherwise. If `false` is returned, a default error
         * message is provided.
         */
        validate?(input: string, answers?: A): boolean | string | Promise<boolean | string>;
    }

    interface NumberQuestion<A> extends QuestionCommon<A>,
        Pick<QuestionOptions<A>, 'filter' | 'transformer'> {
        type: 'number'
        /**
         * Receive the user input and answers hash. Should return `true` if the value is valid,
         * and an error message (`String`) otherwise. If `false` is returned, a default error
         * message is provided.
         */
        validate?(input: number, answers?: A): boolean | string | Promise<boolean | string>;
    }

    interface PasswordQuestion<A> extends QuestionCommon<A>,
        Pick<QuestionOptions<A>, 'filter' | 'transformer'> {
        type: 'password'
        /**
         * Hides the user input.
         */
        mask?: string;
        /**
         * Receive the user input and answers hash. Should return `true` if the value is valid,
         * and an error message (`String`) otherwise. If `false` is returned, a default error
         * message is provided.
         */
        validate?(input: string, answers?: A): boolean | string | Promise<boolean | string>;
    }

    interface EditorQuestion<A> extends QuestionCommon<A>,
        Pick<QuestionOptions<A>, 'filter'> {
        type: 'editor'
        /**
         * Receive the user input and answers hash. Should return `true` if the value is valid,
         * and an error message (`String`) otherwise. If `false` is returned, a default error
         * message is provided.
         */
        validate?(input: string, answers?: A): boolean | string | Promise<boolean | string>;
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
            new <A>(question: Question<A>, rl: ReadlineInterface, answers: A): Base;
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
            rl: ReadlineInterface;
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
            run<A>(questions: Questions<A>): Promise<A>;
            /**
             * Once all prompt are over
             */
            onCompletion(): void;
            processQuestion<A>(question: Question<A>): Observable<Question<A>>;
            fetchAnswer<A>(question: Question<A>): Observable<Question<A>>;
            setDefaultType<A>(question: Question<A>): Observable<Question<A>>;
            filterIfRunnable<A>(question: Question<A>): Observable<Question<A>>;
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
            log: ThroughStream;
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
        interface Choice<A> {
            new (str: string): Choice<A>;
            new (separator: Separator): Choice<A>;
            new (option: ChoiceOption<A>): Choice<A>;
        }

        interface ChoiceOption<A> {
            name?: string;
            value?: any;
            type?: string;
            short?: string;
            extra?: any;
            key?: string;
            checked?: boolean;
            disabled?: string | (<A>(answers: A) => any);
        }

        /**
         * Choices collection
         * Collection of multiple `choice` object
         * @constructor
         * @param choices  All `choice` to keep in the collection
         */
        interface Choices<A> {
            new (
                choices: ReadonlyArray<string | Separator | ChoiceOption<A>>,
                answers?: A
            ): Choices<A>;
            choices: ReadonlyArray<Choice<A>>;
            realChoices: ReadonlyArray<Choice<A>>;
            length: number;
            realLength: number;
            /**
             * Get a valid choice from the collection
             * @param selector The selected choice index
             * @return Return the matched choice or undefined
             */
            getChoice(selector: number): Choice<A>;
            /**
             * Get a raw element from the collection
             * @param selector The selected index value
             * @return Return the matched choice or undefined
             */
            get(selector: number): Choice<A>;
            /**
             * Match the valid choices against a where clause
             * @param whereClause Lodash `where` clause
             * @return Matching choices or empty array
             */
            where<U extends {}>(whereClause: U): Choice<A>[];
            /**
             * Pluck a particular key from the choices
             * @param propertyName Property name to select
             * @return Selected properties
             */
            pluck(propertyName: string): any[];
            forEach<T>(application: (choice: Choice<A>) => T): T[];
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
