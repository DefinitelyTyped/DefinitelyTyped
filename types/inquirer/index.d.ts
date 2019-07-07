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
import Separator = require("./lib/objects/separator");
import ScreenManager = require("./lib/utils/screen-manager");
import Prompt = require("./lib/prompts/base");
import Paginator = require("./lib/utils/paginator");
import Choice = require("./lib/objects/choice");
import Choices = require("./lib/objects/choices");

/**
 * Represents a union which preserves autocompletion.
 */
type LiteralUnion<T extends I, I = string> = T | (I & {});

/**
 * Provides prompts for answering questions.
 */
interface PromptModuleBase {
    /**
     * Register a prompt type
     * @param name Prompt type name
     * @param prompt Prompt constructor
     */
    registerPrompt(name: string, prompt: inquirer.prompts.PromptConstructor): PromptModuleBase;
    /**
     * Register the defaults provider prompts
     */
    restoreDefaultPrompts(): void;
}

/**
 * Represents a list-based question.
 */
interface ListQuestionOptionsBase<T, TChoiceMap> extends inquirer.poll.Question<T> {
    /**
     * Choices array or a function returning a choices array. If defined as a function,
     * the first parameter will be the current inquirer session answers. Array values can
     * be simple `numbers`, `strings`, or `objects` containing a `name` (to display in list),
     * a `value` (to save in the answers hash) and a `short` (to display after selection)
     * properties. The choices array can also contain
     * [a Separator](https://github.com/SBoudrias/Inquirer.js#separator).
     */
    choices?: inquirer.poll.AsyncDynamicQuestionProparty<T, ReadonlyArray<inquirer.poll.DistinctChoice<TChoiceMap>>>;
    /**
     * Change the number of lines that will be rendered when using `list`, `rawList`,
     * `expand` or `checkbox`.
     */
    pageSize?: number;
}

declare namespace inquirer {
    /**
     * Represents either a key of `T` or a `string`.
     */
    export type KeyUnion<T> = LiteralUnion<Extract<keyof T, string>>;

    /**
     * Converts the specified union-type `U` to an intersection-type.
     */
    export type UnionToIntersection<U> = (U extends any ? (k: U)=>void : never) extends ((k: infer I)=>void) ? I : never;

    export interface StreamOptions {
        input?: NodeJS.ReadStream,
        output?: NodeJS.WriteStream,
    }

    export interface PromptModule extends PromptModuleBase {
        /**
         * The prompts of the prompt-module.
         */
        prompts: prompts.PromptCollection;

        <T>(questions: poll.QuestionCollection<T>): Promise<T> & { ui: ui.PromptUI };
        /**
         * Register a prompt type
         * @param name Prompt type name
         * @param prompt Prompt constructor
         */
        registerPrompt(name: string, prompt: prompts.PromptConstructor): this;
    }

    export interface Inquirer extends PromptModuleBase {
        /**
         * Register a prompt type
         * @param name Prompt type name
         * @param prompt Prompt constructor
         */
        registerPrompt(name: string, prompt: prompts.PromptConstructor): PromptModule;
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
        prompts: {};
        Separator: typeof Separator;
        ui: {
            BottomBar: ui.BottomBar;
            Prompt: ui.PromptUI;
        };
    }

    export namespace poll {
        export interface Answers extends Record<string, any> {}

        /**
         * Represents a dynamic property for a question.
         */
        export type DynamicQuestionProperty<T, TAnswers extends Answers = Answers> = T | ((answers: TAnswers) => T);

        /**
         * Represents a dynamic property for a question which can be fetched asynchronously.
         */
        export type AsyncDynamicQuestionProparty<T, TAnswers extends Answers = Answers> = DynamicQuestionProperty<TAnswers, T | Promise<T>>;

        export interface Question<T extends Answers = Answers> {
            type?: string;
            /**
             * The name to use when storing the answer in the answers hash.
             * If the name contains periods, it will define a path in the answers hash.
             */
            name?: KeyUnion<T>;
            /**
             * The question to print. If defined as a function, the first parameter will be
             * the current inquirer session answers.
             * Defaults to the value of `name` (followed by a colon).
             */
            message?: AsyncDynamicQuestionProparty<string, T>;
            /**
             * Default value(s) to use if nothing is entered, or a function that returns
             * the default value(s). If defined as a function, the first parameter will be
             * the current inquirer session answers.
             */
            default?: AsyncDynamicQuestionProparty<any, T>;
            /**
             * Change the default _prefix_ message.
             */
            prefix?: string;
            /**
             * Change the default _suffix_ message.
             */
            suffix?: string;
            /**
             * Receive the user input and return the filtered value to be used inside the program.
             * The value returned will be added to the _Answers_ hash.
             */
            filter?(input: string): any | Promise<any>;
            /**
             * Receive the current user answers hash and should return `true` or `false` depending
             * on whether or not this question should be asked. The value can also be a simple boolean.
             */
            when?: AsyncDynamicQuestionProparty<boolean, T>;
            /**
             * Receive the user input and answers hash. Should return `true` if the value is valid,
             * and an error message (`String`) otherwise. If `false` is returned, a default error
             * message is provided.
             */
            validate?(input: string, answers?: T): boolean | string | Promise<boolean | string>;
        }

        /**
         * Represents a choice-item.
         */
        export interface ChoiceBase {
            /**
             * The type of the choice.
             */
            type?: string;
        }

        export interface ChoiceOptions<T extends Answers = Answers> extends ChoiceBase {
            type?: "choice";
            name?: string;
            value?: any;
            short?: string;
            extra?: any;
        }

        /**
         * Provides options for a choice of the `ListPrompt`.
         */
        export interface ListChoiceOptions<T extends Answers = Answers> extends ChoiceOptions<T> {
            /**
             * A value indicating whether the choice is disabled.
             */
            disabled?: DynamicQuestionProperty<boolean | string, T>;
        }

        /**
         * Provides options for a choice of the `CheckboxPrompt`.
         */
        export interface CheckboxChoiceOptions<T extends Answers = Answers> extends ListChoiceOptions<T> {
            /**
             * A value indicating whether the choice should be initially checked.
             */
            checked?: boolean;
        }

        /**
         * Provides options for a choice of the `ExpandPrompt`.
         */
        export interface ExpandChoiceOptions<T extends Answers = Answers> extends ChoiceOptions<T> {
            /**
             * The key to press for selecting the choice.
             */
            key?: string;
        }

        /**
         * Represents a separator.
         */
        export interface SeparatorOptions {
            /**
             * Gets the type of the choice.
             */
            type: 'separator';

            /**
             * Gets or sets the text of the separator.
             */
            line?: string;
        }

        /**
         * Provides all valid choice-types for any kind of question.
         */
        export interface BaseChoiceMap<T extends Answers = Answers> {
            Choice: Choice<T>;
            ChoiceOptions: ChoiceOptions<T>;
            SeparatorOptions: SeparatorOptions;
            Separator: Separator;
        }
        
        /**
         * Provides all valid choice-types for the `ListQuestion`.
         */
        export interface ListChoiceMap<T extends Answers = Answers> extends BaseChoiceMap<T> {
            ListChoiceOptions: ListChoiceOptions<T>;
        }

        /**
         * Provides all valid choice-types for the `CheckboxQuestion`.
         */
        export interface CheckboxChoiceMap<T extends Answers = Answers> extends BaseChoiceMap<T> {
            CheckboxChoiceOptions: CheckboxChoiceOptions<T>;
        }

        /**
         * Provides all valid choice-types for the `ExpandQuestion`.
         */
        export interface ExpandChoiceMap<T extends Answers = Answers> extends BaseChoiceMap<T> {
            ExpandChoiceOptions: ExpandChoiceOptions<T>;
        }

        /**
         * Provides all valid choice-types.
         */
        export interface AllChoiceMap<T extends Answers = Answers> {
            BaseChoiceMap: BaseChoiceMap<T>[keyof BaseChoiceMap<T>];
            ListChoiceMap: ListChoiceMap<T>[keyof ListChoiceMap<T>];
            CheckboxChoiceMap: CheckboxChoiceMap<T>[keyof CheckboxChoiceMap<T>];
            ExpandChoiceMap: ExpandChoiceMap<T>[keyof ExpandChoiceMap<T>];
        }

        /**
         * Provides valid choices for the question of the `TChoiceMap`.
         */
        export type DistinctChoice<TChoiceMap> =
            string |
            TChoiceMap[keyof TChoiceMap];

        export interface InputQuestionOptions<T extends Answers = Answers> extends Question<T> {
            /**
             * Receive the user input, answers hash and option flags, and return a transformed value
             * to display to the user. The transformation only impacts what is shown while editing.
             * It does not modify the answers hash.
             */
            transformer?(input: string, answers: T, flags: any): string | Promise<string>;
        }

        export interface InputQuestion<T extends Answers = Answers> extends InputQuestionOptions<T> {
            type?: 'input';
        }

        export interface NumberQuestionOptions<T extends Answers = Answers> extends InputQuestionOptions<T> { }

        export interface NumberQuestion<T extends Answers = Answers> extends NumberQuestionOptions<T> {
            type: 'number';
        }

        export interface PasswordQuestionOptions<T extends Answers = Answers> extends InputQuestionOptions<T> {
            /**
             * Hides the user input.
             */
            mask?: string;
        }

        export interface PasswordQuestion<T extends Answers = Answers> extends PasswordQuestionOptions<T> {
            type: 'password';
        }

        export interface ListQuestionOptions<T extends Answers = Answers> extends ListQuestionOptionsBase<T, ListChoiceMap<T>> { }

        export interface ListQuestion<T extends Answers = Answers> extends ListQuestionOptions<T> {
            type: 'list';
        }

        export interface RawListQuestionOptions<T extends Answers = Answers> extends ListQuestionOptions<T> { }

        export interface RawListQuestion<T extends Answers = Answers> extends ListQuestionOptionsBase<T, ListChoiceMap<T>> {
            type: 'rawlist';
        }

        export interface ExpandQuestionOptions<T extends Answers = Answers> extends ListQuestionOptionsBase<T, ExpandChoiceMap<T>> { }

        export interface ExpandQuestion<T extends Answers = Answers> extends ExpandQuestionOptions<T> {
            type: 'expand';
        }

        export interface CheckboxQuestionOptions<T extends Answers = Answers> extends ListQuestionOptionsBase<T, CheckboxChoiceMap<T>> { }

        export interface CheckboxQuestion<T extends Answers = Answers> extends CheckboxQuestionOptions<T> {
            type: 'checkbox';
        }

        export interface ConfirmQuestionOptions<T extends Answers = Answers> extends Question<T> { }

        export interface ConfirmQuestion<T extends Answers = Answers> extends ConfirmQuestionOptions<T> {
            type: 'confirm';
        }

        export interface EditorQuestionOptions<T extends Answers = Answers> extends Question<T> { }

        export interface EditorQuestion<T extends Answers = Answers> extends EditorQuestionOptions<T> {
            type: 'editor';
        }

        /**
         * Provides the available question-types.
         */
        export interface QuestionMap<T extends Answers = Answers> {
            input: InputQuestion<T>;
            number: NumberQuestion<T>;
            password: PasswordQuestion<T>;
            list: ListQuestion<T>;
            rawList: RawListQuestion<T>;
            expand: ExpandQuestion<T>;
            checkbox: CheckboxQuestion<T>;
            confirm: ConfirmQuestion<T>;
            editor: EditorQuestion<T>;
        }

        export type DistinctQuestion<T extends Answers = Answers> = QuestionMap<T>[keyof QuestionMap<T>];

        export type QuestionCollection<T extends Answers = Answers> =
            | DistinctQuestion<T>
            | ReadonlyArray<poll.DistinctQuestion<T>>
            | Observable<poll.DistinctQuestion<T>>;
    }

    export namespace prompts {

        /**
         * Provides a base for question- and prompt-options.
         */
        export type PromptOptions<T extends poll.Question<poll.Answers> = poll.Question<poll.Answers>> = T & {
            /**
             * The choices of the prompt.
             */
            choices: Choices;
        }

        /**
         * Represents the state of a prompt.
         */
        export type PromptState = LiteralUnion<"pending" | "idle" | "loading" | "answered" | "done">;

        /**
         * Represents a prompt.
         */
        export interface PromptBase {
            /**
             * Gets or sets a string which represents the state of the prompt.
             */
            status: PromptState;

            /**
             * Runs the prompt.
             *
             * @returns
             * The result of the prompt.
             */
            run(): Promise<any>;
        }

        /**
         * Provides the functionality to initialize new prompts.
         */
        export interface PromptConstructor {
            /**
             * Initializes a new instance of a prompt.
             */
            new (question: any, readLine: ReadlineInterface, answers: poll.Answers): PromptBase;
        }

        /**
         * Provides a set of prompt-constructors.
         */
        export interface PromptCollection {
            [name: string]: PromptConstructor;
        }

        /**
         * Provides data about the state of a prompt.
         */
        export interface PromptStateData {
            /**
             * Either a string which describes the error of the prompt or a boolean indicating whether the prompt-value is valid.
             */
            isValid: string | boolean;
        }

        /**
         * Provides data about the successful state of a prompt.
         */
        export interface SuccessfulPromptStateData<T = any> extends PromptStateData {
            /**
             * @inheritdoc
             */
            isValid: true;

            /**
             * The value of the prompt.
             */
            value: T;
        }

        /**
         * Provides data about the failed state of a prompt.
         */
        export interface FailedPromptStateData extends PromptStateData {
            /**
             * @inheritdoc
             */
            isValid: false | string;
        }

        /**
         * Provides pipes for handling events of a prompt.
         */
        export interface PromptEventPipes<T = any> {
            /**
             * A pypeline for succesful inputs.
             */
            success: Observable<SuccessfulPromptStateData<T>>;

            /**
             * An object representing an error.
             */
            error: Observable<FailedPromptStateData>;
        }
    }

    export namespace ui {
        export type FetchedQuestion<T extends poll.Answers = poll.Answers> = poll.DistinctQuestion<T> & {
            /**
             * @inheritdoc
             */
            type: string;

            /**
             * @inheritdoc
             */
            message: string;

            /**
             * @inheritdoc
             */
            default: any;

            /**
             * The choices of the question.
             */
            choices: poll.DistinctChoice<poll.AllChoiceMap<T>>;
        }

        /**
         * Corresponding to the answer object creation in:
         * https://github.com/SBoudrias/Inquirer.js/blob/ff075f587ef78504f0eae4ee5ca0656432429026/packages/inquirer/lib/ui/prompt.js#L88
         */
        export interface FetchedAnswer {
            name: string;
            answer: any;
        }

        /**
         * Base interface class other can inherits from
         */
        export interface BaseUI {
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
        export interface PromptUI extends BaseUI {
            process: Observable<FetchedAnswer>;
            new(prompts: prompts.PromptCollection, opt: StreamOptions): PromptUI;
            run<T>(questions: poll.QuestionCollection<T>): Promise<T>;
            /**
             * Once all prompt are over
             */
            onCompletion(): void;
            processQuestion<T>(question: poll.DistinctQuestion<T>): Observable<poll.DistinctQuestion<T>>;
            fetchAnswer<T>(question: poll.DistinctQuestion<T>): Observable<poll.DistinctQuestion<T>>;
            setDefaultType<T>(question: poll.DistinctQuestion<T>): Observable<poll.DistinctQuestion<T>>;
            filterIfRunnable<T>(question: poll.DistinctQuestion<T>): Observable<poll.DistinctQuestion<T>>;
        }

        /**
         * Sticky bottom bar user interface
         */
        export interface BottomBar extends BaseUI {
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

    export namespace objects {
        /**
         * Choice object
         * Normalize input as choice object
         * @constructor
         * @param {String|Object} val  Choice value. If an object is passed, it should contains
         *                             at least one of `value` or `name` property
         */
        export interface Choice<T> {
            new(str: string): Choice<T>;
            new(separator: Separator): Choice<T>;

            new(option: poll.ChoiceOptions<T>): Choice<T>;
        }

        /**
         * Choices collection
         * Collection of multiple `choice` object
         * @constructor
         * @param choices  All `choice` to keep in the collection
         */
        export interface Choices<T> {
            new(
                choices: ReadonlyArray<string | Separator | poll.ChoiceOptions<T>>,

                answers?: T
            ): Choices<T>;
            choices: ReadonlyArray<Choice<T>>;
            realChoices: ReadonlyArray<Choice<T>>;
            length: number;
            realLength: number;
            /**
             * Get a valid choice from the collection
             * @param selector The selected choice index
             * @return Return the matched choice or undefined
             */
            getChoice(selector: number): Choice<T>;
            /**
             * Get a raw element from the collection
             * @param selector The selected index value
             * @return Return the matched choice or undefined
             */
            get(selector: number): Choice<T>;
            /**
             * Match the valid choices against a where clause
             * @param whereClause Lodash `where` clause
             * @return Matching choices or empty array
             */
            where<U extends {}>(whereClause: U): Choice<T>[];
            /**
             * Pluck a particular key from the choices
             * @param propertyName Property name to select
             * @return Selected properties
             */
            pluck(propertyName: string): any[];
            forEach<T>(application: (choice: Choice<T>) => T): T[];
        }
    }
}

declare var inquirer: inquirer.Inquirer;
export = inquirer;
