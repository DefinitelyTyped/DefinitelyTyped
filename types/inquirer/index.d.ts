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
import { PromptModuleBase } from "./PromptModuleBase";
import { Prompts } from "./Prompts";
import { Separator } from "./Poll/Separator";
import { ChoiceBase } from './Poll/ChoiceBase';
import { KeyUnion } from "./System/KeyUnion";
import { DynamicQuestionProperty } from "./Poll/DynamicQuestionProperty";
import { InputQuestion as InputQuestionBase } from "./Poll/InputQuestion";
import { ListQuestion as ListQuestionBase } from "./Poll/ListQuestion";
import { ScreenManager } from "./System/ScreenManager";
import { Prompt } from "./Prompts/Prompt";
import { CheckboxPrompt } from "./Prompts/CheckboxPrompt";
import { ConfirmPrompt } from "./Prompts/ConfirmPrompt";
import { EditorPrompt } from "./Prompts/EditorPrompt";
import { LiteralUnion } from './System/LiteralUnion';
import { Paginator } from "./System/Paginator";
import { Choice } from "./System/Choice";

declare namespace inquirer {
    export interface StreamOptions {
        input?: NodeJS.ReadStream,
        output?: NodeJS.WriteStream,
    }

    export interface PromptModule extends PromptModuleBase {
        <A>(questions: poll.QuestionCollection<A>): Promise<A> & { ui: ui.PromptUI };
        /**
         * Register a prompt type
         * @param name Prompt type name
         * @param prompt Prompt constructor
         */
        registerPrompt(name: string, prompt: Prompt): this;
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
        prompts: Prompts;
        Separator: typeof Separator;
        ui: {
            BottomBar: ui.BottomBar;
            Prompt: ui.PromptUI;
        };
    }

    export namespace poll {
        export interface Answers extends Record<string, any> {}
        export interface Question<A extends Answers = Answers> {
            type?: string;
            /**
             * The name to use when storing the answer in the answers hash.
             * If the name contains periods, it will define a path in the answers hash.
             */
            name?: KeyUnion<A>;
            /**
             * The question to print. If defined as a function, the first parameter will be
             * the current inquirer session answers.
             * Defaults to the value of `name` (followed by a colon).
             */
            message?: DynamicQuestionProperty<A, string>;
            /**
             * Default value(s) to use if nothing is entered, or a function that returns
             * the default value(s). If defined as a function, the first parameter will be
             * the current inquirer session answers.
             */
            default?: DynamicQuestionProperty<A, any>;
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
            when?: DynamicQuestionProperty<A, boolean>;
            /**
             * Receive the user input and answers hash. Should return `true` if the value is valid,
             * and an error message (`String`) otherwise. If `false` is returned, a default error
             * message is provided.
             */
            validate?(input: string, answers?: A): boolean | string | Promise<boolean | string>;
        }

        export interface InputQuestion<A> extends InputQuestionBase<A> {
            type?: 'input';
        }

        export interface NumberQuestion<A> extends InputQuestionBase<A> {
            type: 'number';
        }

        export interface PasswordQuestion<A> extends InputQuestionBase<A> {
            type: 'password'
            /**
             * Hides the user input.
             */
            mask?: string;
        }

        export interface ListQuestion<A> extends ListQuestionBase<A> {
            type: 'list'
        }

        export interface RawListQuestion<A> extends ListQuestionBase<A> {
            type: 'rawlist'
        }

        export interface ExpandQuestion<A> extends ListQuestionBase<A> {
            type: 'expand'
        }

        export interface CheckboxQuestion<A> extends ListQuestionBase<A> {
            type: 'checkbox';
        }

        export interface ConfirmQuestion<A> extends poll.Question<A> {
            type: 'confirm'
        }

        export interface EditorQuestion<A> extends poll.Question<A> {
            type: 'editor';
        }

        export interface ChoiceOptions<A extends Answers = Answers> extends ChoiceBase {
            name?: string;
            value?: any;
            short?: string;
            extra?: any;
            key?: string;
            checked?: boolean;
            disabled?: DynamicQuestionProperty<A, boolean | string>;
        }

        export type DistinctChoice<A extends Answers = Answers> = string | ChoiceOptions<A> | Separator;

        export type DistinctQuestion<A extends Answers = Answers> =
            ListQuestion<A> |
            RawListQuestion<A> |
            ExpandQuestion<A> |
            CheckboxQuestion<A> |
            ConfirmQuestion<A> |
            InputQuestion<A> |
            NumberQuestion<A> |
            PasswordQuestion<A> |
            EditorQuestion<A>;

        export type QuestionCollection<A extends Answers = Answers> =
            | DistinctQuestion<A>
            | ReadonlyArray<poll.DistinctQuestion<A>>
            | Observable<poll.DistinctQuestion<A>>;
    }

    export namespace prompts {
        /**
         * Provides the functionality to initialize new prompts.
         */
        export interface PromptConstructor {
            /**
             * Initializes a new instance of a prompt.
             */
            new (question: poll.Question<poll.Answers>, readLine: ReadlineInterface, answers: poll.Answers): PromptBase;
        }

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
         * Represents the state of a prompt.
         */
        export type PromptState = LiteralUnion<"pending" | "idle" | "loading" | "answered" | "done">;

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
        /**
         * Corresponding to the answer object creation in:
         * https://github.com/SBoudrias/Inquirer.js/blob/ff075f587ef78504f0eae4ee5ca0656432429026/packages/inquirer/lib/ui/prompt.js#L88
         */
        export interface Answer {
            name: string,
            answer: any,
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
            process: Observable<Answer>;
            new(prompts: Prompts, opt: StreamOptions): PromptUI;
            run<A>(questions: poll.QuestionCollection<A>): Promise<A>;
            /**
             * Once all prompt are over
             */
            onCompletion(): void;
            processQuestion<A>(question: poll.DistinctQuestion<A>): Observable<poll.DistinctQuestion<A>>;
            fetchAnswer<A>(question: poll.DistinctQuestion<A>): Observable<poll.DistinctQuestion<A>>;
            setDefaultType<A>(question: poll.DistinctQuestion<A>): Observable<poll.DistinctQuestion<A>>;
            filterIfRunnable<A>(question: poll.DistinctQuestion<A>): Observable<poll.DistinctQuestion<A>>;
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
        export interface Choice<A> {
            new(str: string): Choice<A>;
            new(separator: Separator): Choice<A>;

            new(option: poll.ChoiceOptions<A>): Choice<A>;
        }

        /**
         * Choices collection
         * Collection of multiple `choice` object
         * @constructor
         * @param choices  All `choice` to keep in the collection
         */
        export interface Choices<A> {
            new(
                choices: ReadonlyArray<string | Separator | poll.ChoiceOptions<A>>,

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
    }
}

declare module "inquirer/lib/objects/choice" {
    export = Choice;
}

declare module "inquirer/lib/prompts/base" {
    export = Prompt;
}

declare module "inquirer/lib/prompts/checkbox" {
    export = CheckboxPrompt;
}

declare module "inquirer/lib/prompts/confirm" {
    export = ConfirmPrompt;
}

declare module "inquirer/lib/prompts/editor" {
    export = EditorPrompt;
}

declare module "inquirer/lib/utils/paginator" {
    export = Paginator;
}

declare module "inquirer/lib/utils/screen-manager" {
    export = ScreenManager;
}

declare var inquirer: inquirer.Inquirer;
export = inquirer;
