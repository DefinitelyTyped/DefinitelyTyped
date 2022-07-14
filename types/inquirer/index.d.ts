// Type definitions for inquirer 8.2
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
//                 Manuel Thalmann <https://github.com/manuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.2
import { Interface as ReadlineInterface } from 'readline';
import { Observable } from 'rxjs';
import { ThroughStream } from 'through';
import Choice = require('./lib/objects/choice');
import Choices = require('./lib/objects/choices');
import './lib/objects/separator';
import './lib/prompts/base';
import './lib/prompts/checkbox';
import './lib/prompts/confirm';
import './lib/prompts/editor';
import './lib/prompts/expand';
import './lib/prompts/input';
import './lib/prompts/list';
import './lib/prompts/number';
import './lib/prompts/password';
import './lib/prompts/rawlist';
import UI = require('./lib/ui/baseUI');
import './lib/ui/bottom-bar';
import './lib/ui/prompt';
import './lib/utils/events';
import './lib/utils/paginator';
import './lib/utils/readline';
import './lib/utils/screen-manager';

/**
 * Represents a union which preserves autocompletion.
 *
 * @template T
 * The keys which are available for autocompletion.
 *
 * @template F
 * The fallback-type.
 */
type LiteralUnion<T extends F, F = string> = T | (F & {});

/**
 * Provides prompts for answering questions.
 */
interface PromptModuleBase {
    /**
     * Registers a new prompt-type.
     *
     * @param name
     * The name of the prompt.
     *
     * @param prompt
     * The constructor of the prompt.
     */
    registerPrompt(name: string, prompt: inquirer.prompts.PromptConstructor): void;

    /**
     * Registers the default prompts.
     */
    restoreDefaultPrompts(): void;
}

/**
 * Represents a function for registering a prompt.
 */
type RegisterFunction = PromptModuleBase['registerPrompt'];

/**
 * Represents a function for restoring a prompt.
 */
type RestoreFunction = PromptModuleBase['restoreDefaultPrompts'];

/**
 * Represents a list-based question.
 *
 * @template T
 * The type of the answers.
 *
 * @template TChoiceMap
 * The valid choices for the question.
 */
interface ListQuestionOptionsBase<T extends inquirer.Answers, TChoiceMap extends inquirer.Answers> extends inquirer.Question<T> {
    /**
     * The choices of the prompt.
     */
    choices?: inquirer.AsyncDynamicQuestionProperty<ReadonlyArray<inquirer.DistinctChoice<TChoiceMap>>, T> | undefined;

    /**
     * The number of elements to show on each page.
     */
    pageSize?: number | undefined;
}

/**
 * Provides the functionality to prompt questions.
 */
declare namespace inquirer {
    /**
     * Represents either a key of `T` or a `string`.
     *
     * @template T
     * The type of the keys to suggest.
     */
    export type KeyUnion<T> = LiteralUnion<Extract<keyof T, string>>;

    /**
     * Converts the specified union-type `U` to an intersection-type.
     *
     * @template U
     * The union to convert to an intersection.
     */
    export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

    /**
     * Provides an input and an output-stream.
     */
    export interface StreamOptions {
        /**
         * A stream to read the input from.
         */
        input?: NodeJS.ReadStream | undefined;

        /**
         * A stream to write the output to.
         */
        output?: NodeJS.WriteStream | undefined;
    }

    /**
     * Provides the functionality to prompt questions to the user.
     */
    export interface PromptModule extends PromptModuleBase {
        /**
         * The prompts of the prompt-module.
         */
        prompts: prompts.PromptCollection;

        /**
         * Prompts the questions to the user.
         */
        <T extends Answers = Answers>(questions: QuestionCollection<T>, initialAnswers?: Partial<T>): Promise<T> & { ui: ui.Prompt<T> };

        /**
         * Registers a new prompt-type.
         *
         * @param name
         * The name of the prompt.
         *
         * @param prompt
         * The constructor of the prompt.
         */
        registerPrompt(name: string, prompt: prompts.PromptConstructor): this;
    }

    /**
     * A set of answers.
     */
    export interface Answers extends Record<string, any> {}

    /**
     * Provides the functionality to validate answers.
     *
     * @template T
     * The type of the answers.
     */
    export type Validator<T extends Answers = Answers> = Question<T>['validate'];

    /**
     * Provides the functionality to transform an answer.
     *
     * @template T
     * The type of the answers.
     */
    export type Transformer<T extends Answers = Answers> = InputQuestionOptions<T>['transformer'];

    /**
     * Represents a dynamic property for a question.
     *
     * @template T
     * The type of the property.
     *
     * @template TAnswers
     * The type of the answers.
     */
    export type DynamicQuestionProperty<T, TAnswers extends Answers = Answers> = T | ((answers: TAnswers) => T);

    /**
     * Represents a dynamic property for a question which can be fetched asynchronously.
     *
     * @template T
     * The type of the property.
     *
     * @template TAnswers
     * The type of the answers.
     */
    export type AsyncDynamicQuestionProperty<T, TAnswers extends Answers = Answers> = DynamicQuestionProperty<
        T | Promise<T>,
        TAnswers
    >;

    /**
     * Provides options for a question.
     *
     * @template T
     * The type of the answers.
     */
    export interface Question<T extends Answers = Answers> {
        /**
         * The type of the question.
         */
        type?: string | undefined;

        /**
         * The key to save the answer to the answers-hash.
         */
        name?: KeyUnion<T> | undefined;

        /**
         * The message to show to the user.
         */
        message?: AsyncDynamicQuestionProperty<string, T> | undefined;

        /**
         * The default value of the question.
         */
        default?: AsyncDynamicQuestionProperty<any, T> | undefined;

        /**
         * The prefix of the `message`.
         */
        prefix?: string | undefined;

        /**
         * The suffix of the `message`.
         */
        suffix?: string | undefined;

        /**
         * Post-processes the answer.
         *
         * @param input
         * The answer provided by the user.
         *
         * @param answers
         * The answers provided by the user.
         */
        filter?(input: any, answers: T): any;

        /**
         * A value indicating whether the question should be prompted.
         */
        when?: AsyncDynamicQuestionProperty<boolean, T> | undefined;

        /**
         * Validates the integrity of the answer.
         *
         * @param input
         * The answer provided by the user.
         *
         * @param answers
         * The answers provided by the user.
         *
         * @returns
         * Either a value indicating whether the answer is valid or a `string` which describes the error.
         */
        validate?(input: any, answers?: T): boolean | string | Promise<boolean | string>;

        /**
         * Force to prompt the question if the answer already exists.
         */
        askAnswered?: boolean;
    }

    /**
     * Represents the possible answers of each question in the prompt
     */
    type QuestionAnswer<T extends Answers = Answers> = {
        [K in keyof T]: {
            name: K;
            answer: T[K]
        }
    }[keyof T];

    /**
     * Represents a choice-item.
     */
    export interface ChoiceBase {
        /**
         * The type of the choice.
         */
        type?: string | undefined;
    }

    /**
     * Provides options for a choice of the `ListPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface ListChoiceOptions<T extends Answers = Answers> extends ChoiceOptions {
        /**
         * A value indicating whether the choice is disabled.
         */
        disabled?: DynamicQuestionProperty<boolean | string, T> | undefined;
    }

    /**
     * Provides options for a choice of the `CheckboxPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface CheckboxChoiceOptions<T extends Answers = Answers> extends ListChoiceOptions<T> {
        /**
         * A value indicating whether the choice should be initially checked.
         */
        checked?: boolean | undefined;
    }

    /**
     * Provides options for a choice of the `ExpandPrompt`.
     */
    export interface ExpandChoiceOptions extends ChoiceOptions {
        /**
         * The key to press for selecting the choice.
         */
        key?: string | undefined;
    }

    /**
     * Represents a separator.
     */
    export interface SeparatorOptions extends ChoiceBase {
        /**
         * Gets the type of the choice.
         */
        type: 'separator';

        /**
         * Gets or sets the text of the separator.
         */
        line?: string | undefined;
    }

    /**
     * Provides options for a choice.
     */
    export interface ChoiceOptions extends ChoiceBase {
        /**
         * @inheritdoc
         */
        type?: 'choice' | undefined;

        /**
         * The name of the choice to show to the user.
         */
        name?: string | undefined;

        /**
         * The value of the choice.
         */
        value?: any;

        /**
         * The short form of the name of the choice.
         */
        short?: string | undefined;

        /**
         * The extra properties of the choice.
         */
        extra?: any;
    }

    /**
     * Provides all valid choice-types for any kind of question.
     *
     * @template T
     * The type of the answers.
     */
    export interface BaseChoiceMap<T extends Answers = Answers> {
        Choice: Choice<T>;
        ChoiceOptions: ChoiceOptions;
        Separator: Separator;
        SeparatorOptions: SeparatorOptions;
    }

    /**
     * Provides all valid choice-types for the `ListQuestion`.
     *
     * @template T
     * The type of the answers.
     */
    export interface ListChoiceMap<T extends Answers = Answers> extends BaseChoiceMap<T> {
        ListChoiceOptions: ListChoiceOptions<T>;
    }

    /**
     * Provides all valid choice-types for the `CheckboxQuestion`.
     *
     * @template T
     * The type of the answers.
     */
    export interface CheckboxChoiceMap<T extends Answers = Answers> extends BaseChoiceMap<T> {
        CheckboxChoiceOptions: CheckboxChoiceOptions<T>;
    }

    /**
     * Provides all valid choice-types for the `ExpandQuestion`.
     *
     * @template T
     * The type of the answers.
     */
    export interface ExpandChoiceMap<T extends Answers = Answers> extends BaseChoiceMap<T> {
        ExpandChoiceOptions: ExpandChoiceOptions;
    }

    /**
     * Provides all valid choice-types.
     *
     * @template T
     * The type of the answers.
     */
    export interface AllChoiceMap<T extends Answers = Answers> {
        BaseChoiceMap: BaseChoiceMap<T>[keyof BaseChoiceMap<T>];
        ListChoiceMap: ListChoiceMap<T>[keyof ListChoiceMap<T>];
        CheckboxChoiceMap: CheckboxChoiceMap<T>[keyof CheckboxChoiceMap<T>];
        ExpandChoiceMap: ExpandChoiceMap<T>[keyof ExpandChoiceMap<T>];
    }

    /**
     * Provides valid choices for the question of the `TChoiceMap`.
     *
     * @template TAnswers
     * The type of the answers.
     *
     * @template TChoiceMap
     * The choice-types to provide.
     */
    export type DistinctChoice<TAnswers extends Answers = Answers, TChoiceMap = AllChoiceMap<TAnswers>> =
        | string
        | TChoiceMap[keyof TChoiceMap];

    /**
     * Represents a set of choices.
     *
     * @template T
     * The type of the answers.
     */
    export type ChoiceCollection<T extends Answers = Answers> = Array<DistinctChoice<AllChoiceMap<T>>>;

    /**
     * Provides options for a question for the `InputPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface InputQuestionOptions<T extends Answers = Answers> extends Question<T> {
        /**
         * Transforms the value to display to the user.
         *
         * @param input
         * The input provided by the user.
         *
         * @param answers
         * The answers provided by the users.
         *
         * @param flags
         * Additional information about the value.
         *
         * @returns
         * The value to display to the user.
         */
        transformer?(input: any, answers: T, flags: { isFinal?: boolean | undefined }): string | Promise<string>;
    }

    /**
     * Provides options for a question for the `InputPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface InputQuestion<T extends Answers = Answers> extends InputQuestionOptions<T> {
        /**
         * @inheritdoc
         */
        type?: 'input' | undefined;
    }

    /**
     * Provides options for a question for the `NumberPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface NumberQuestionOptions<T extends Answers = Answers> extends InputQuestionOptions<T> {}

    /**
     * Provides options for a question for the `NumberPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface NumberQuestion<T extends Answers = Answers> extends NumberQuestionOptions<T> {
        /**
         * @inheritdoc
         */
        type: 'number';
    }

    /**
     * Provides options for a question for the `PasswordPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface PasswordQuestionOptions<T extends Answers = Answers> extends InputQuestionOptions<T> {
        /**
         * The character to replace the user-input.
         */
        mask?: string | undefined;
    }

    /**
     * Provides options for a question for the `PasswordPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface PasswordQuestion<T extends Answers = Answers> extends PasswordQuestionOptions<T> {
        /**
         * @inheritdoc
         */
        type: 'password';
    }

    /**
     * Represents a list-based question that can loop.
     *
     * @template T
     * The type of the answers.
     *
     * @template TChoiceMap
     * The valid choices for the question.
     */
    interface LoopableListQuestionOptionsBase<T extends Answers, TChoiceMap extends Answers> extends ListQuestionOptionsBase<T, TChoiceMap> {
        /**
         * A value indicating whether choices in a list should be looped.
         */
        loop?: boolean | undefined;
    }

    /**
     * Provides options for a question for the `ListPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface ListQuestionOptions<T extends Answers = Answers>
        extends LoopableListQuestionOptionsBase<T, ListChoiceMap<T>> {}

    /**
     * Provides options for a question for the `ListPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface ListQuestion<T extends Answers = Answers> extends ListQuestionOptions<T> {
        /**
         * @inheritdoc
         */
        type: 'list';
    }

    /**
     * Provides options for a question for the `RawListPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface RawListQuestionOptions<T extends Answers = Answers> extends ListQuestionOptions<T> {}

    /**
     * Provides options for a question for the `RawListPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface RawListQuestion<T extends Answers = Answers> extends RawListQuestionOptions<T> {
        /**
         * @inheritdoc
         */
        type: 'rawlist';
    }

    /**
     * Provides options for a question for the `ExpandPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface ExpandQuestionOptions<T extends Answers = Answers>
        extends ListQuestionOptionsBase<T, ExpandChoiceMap<T>> {}

    /**
     * Provides options for a question for the `ExpandPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface ExpandQuestion<T extends Answers = Answers> extends ExpandQuestionOptions<T> {
        /**
         * @inheritdoc
         */
        type: 'expand';
    }

    /**
     * Provides options for a question for the `CheckboxPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface CheckboxQuestionOptions<T extends Answers = Answers>
        extends LoopableListQuestionOptionsBase<T, CheckboxChoiceMap<T>> {}

    /**
     * Provides options for a question for the `CheckboxPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface CheckboxQuestion<T extends Answers = Answers> extends CheckboxQuestionOptions<T> {
        /**
         * @inheritdoc
         */
        type: 'checkbox';
    }

    /**
     * Provides options for a question for the `ConfirmPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface ConfirmQuestionOptions<T extends Answers = Answers> extends Question<T> {}

    /**
     * Provides options for a question for the `ConfirmPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface ConfirmQuestion<T extends Answers = Answers> extends ConfirmQuestionOptions<T> {
        /**
         * @inheritdoc
         */
        type: 'confirm';
    }

    /**
     * Provides options for a question for the `EditorPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface EditorQuestionOptions<T extends Answers = Answers> extends Question<T> {}

    /**
     * Provides options for a question for the `EditorPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    export interface EditorQuestion<T extends Answers = Answers> extends EditorQuestionOptions<T> {
        /**
         * @inheritdoc
         */
        type: 'editor';
    }

    /**
     * Provides the available question-types.
     *
     * @template T
     * The type of the answers.
     */
    export interface QuestionMap<T extends Answers = Answers> {
        /**
         * The `InputQuestion` type.
         */
        input: InputQuestion<T>;

        /**
         * The `NumberQuestion` type.
         */
        number: NumberQuestion<T>;

        /**
         * The `PasswordQuestion` type.
         */
        password: PasswordQuestion<T>;

        /**
         * The `ListQuestion` type.
         */
        list: ListQuestion<T>;

        /**
         * The `RawListQuestion` type.
         */
        rawList: RawListQuestion<T>;

        /**
         * The `ExpandQuestion` type.
         */
        expand: ExpandQuestion<T>;

        /**
         * The `CheckboxQuestion` type.
         */
        checkbox: CheckboxQuestion<T>;

        /**
         * The `ConfirmQuestion` type.
         */
        confirm: ConfirmQuestion<T>;

        /**
         * The `EditorQuestion` type.
         */
        editor: EditorQuestion<T>;
    }

    /**
     * Represents one of the available questions.
     *
     * @template T
     * The type of the answers.
     */
    export type DistinctQuestion<T extends Answers = Answers> = QuestionMap<T>[keyof QuestionMap<T>];

    /**
     * Indicates the type of a question
     */
    export type QuestionTypeName = DistinctQuestion['type'];

    /**
     * Represents a collection of questions.
     *
     * @template T
     * The type of the answers.
     */
    export type QuestionCollection<T extends Answers = Answers> =
        | DistinctQuestion<T>
        | ReadonlyArray<DistinctQuestion<T>>
        | Observable<DistinctQuestion<T>>;

    /**
     * Provides components for the prompts.
     */
    export namespace prompts {
        /**
         * Provides a base for and prompt-options.
         *
         * @template T
         * The type of the answers.
         */
        export type PromptOptions<T extends Question = Question> = T & {
            /**
             * The choices of the prompt.
             */
            choices: Choices;
        };

        /**
         * Represents the state of a prompt.
         */
        export type PromptState = LiteralUnion<'pending' | 'idle' | 'loading' | 'answered' | 'done'>;

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
             *
             * @param question
             * The question to prompt.
             *
             * @param readLine
             * An object for reading from the command-line.
             *
             * @param answers
             * The answers provided by the user.
             */
            new (question: any, readLine: ReadlineInterface, answers: Answers): PromptBase;
        }

        /**
         * Provides a set of prompt-constructors.
         */
        export type PromptCollection = Record<string, PromptConstructor>;

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
         *
         * @param T
         * The type of the answer.
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
         *
         * @param T
         * The type of the answer.
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

    /**
     * Provides components for the ui.
     */
    export namespace ui {
        /**
         * Represents the bottom-bar UI.
         */
        export class BottomBar extends UI {
            /**
             * Gets or sets a stream to write logs to.
             */
            log: ThroughStream;
        
            /**
             * Initializes a new instance of the `BottomBar` class.
             *
             * @param options
             * Provides options for the bottom-bar ui.
             */
            constructor(options?: inquirer.ui.BottomBarOptions);
        
            /**
             * Renders the specified `text` to the bottom bar.
             *
             * @param text
             * The text to print to the bottom bar.
             */
            updateBottomBar(text: string): this;
        
            /**
             * Renders the bottom bar.
             */
            protected render(): this;
        
            /**
             * Clean the bottom bar.
             */
            protected clean(): this;
        
            /**
             * Writes a message to the bottom bar.
             *
             * @param message
             * The message to write.
             */
            protected write(message: string): void;
        
            /**
             * Writes the specified `data` to the log-zone.
             *
             * @param data
             * The data to write to the log-zone.
             */
            protected writeLog(data: any): this;
        
            /**
             * Fixes the new-line characters of the specified `text`.
             *
             * @param text
             * The text to process.
             */
            protected enforceLF(text: string): string;
        }

        /**
         * Represents the prompt ui.
         */
        export class Prompt<T extends inquirer.Answers = inquirer.Answers> extends UI {
            /**
             * Gets or sets the prompts of the ui.
             */
            prompts: inquirer.prompts.PromptCollection;
        
            /**
             * Gets or sets the answers provided by the user.
             */
            answers: T;
        
            /**
             * Gets or sets the event-flow of the process.
             */
            process: Observable<inquirer.QuestionAnswer<T>>;
        
            /**
             * Initializes a new instance of the `PromptUI` class.
             *
             * @param prompts
             * The prompts for the ui.
             *
             * @param options
             * The input- and output-stream of the ui.
             */
            constructor(prompts: inquirer.prompts.PromptCollection, options?: inquirer.StreamOptions);
        
            /**
             * Runs the prompt-UI.
             *
             * @param questions
             * The questions to prompt the user to answer.
             *
             * @returns
             * The answers provided by the user.
             */
            run(questions: Array<inquirer.DistinctQuestion<T>>): Promise<T>;
        
            /**
             * Finishes the process.
             */
            protected onCompletion(): T;
        
            /**
             * Processes a question.
             *
             * @param question
             * The question to process.
             *
             * @returns
             * The answer to the question.
             */
            protected processQuestion(
                question: inquirer.DistinctQuestion<T>,
            ): Observable<inquirer.ui.FetchedAnswer>;
        
            /**
             * Fetches the answer to a question.
             *
             * @param question
             * The question to fetch the answer for.
             *
             * @returns
             * The answer to the question.
             */
            protected fetchAnswer(
                question: inquirer.ui.FetchedQuestion<T>,
            ): Observable<inquirer.ui.FetchedAnswer>;
        
            /**
             * Sets the type of the question if no question-type is specified.
             *
             * @param question
             * The question to set the default type for.
             *
             * @returns
             * The processed question.
             */
            protected setDefaultType(
                question: inquirer.DistinctQuestion<T>,
            ): Observable<inquirer.DistinctQuestion<T>>;
        
            /**
             * Filters the question if it is runnable.
             *
             * @param question
             * The question to filter.
             *
             * @returns
             * Either the event-flow of the question if it is runnable or an empty event-flow.
             */
            protected filterIfRunnable(
                question: inquirer.DistinctQuestion<T>,
            ): Observable<inquirer.DistinctQuestion<T>>;
        }

        /**
         * Provides options for the bottom-bar UI.
         */
        export interface BottomBarOptions extends StreamOptions {
            /**
             * The initial text to display.
             */
            bottomBar?: string | undefined;
        }

        /**
         * Represents a fetched answer.
         *
         * @template T
         * The type of the answers.
         */
        export type FetchedQuestion<T extends Answers = Answers> = DistinctQuestion<T> & {
            /**
             * The type of the question.
             */
            type: string;

            /**
             * The message to show to the user.
             */
            message: string;

            /**
             * The default value of the question.
             */
            default: any;

            /**
             * The choices of the question.
             */
            choices: ChoiceCollection<T>;
        };

        /**
         * Represents a fetched answer.
         */
        export interface FetchedAnswer {
            /**
             * The name of the answer.
             */
            name: string;

            /**
             * The value of the answer.
             */
            answer: any;
        }
    }

    /**
     * Represents a choice-item separator.
     */
    export class Separator implements SeparatorOptions {
        /**
         * @inheritdoc
         */
        readonly type: 'separator';
    
        /**
         * @inheritdoc
         */
        line: string;
    
        /**
         * Initializes a new instance of the `Separator` class.
         *
         * @param line
         * The text of the separator.
         */
        constructor(line?: string);
    
        /**
         * Checks whether the specified `item` is not a separator.
         *
         * @param item
         * The item to check.
         *
         * @returns
         * A value indicating whether the item is not a separator.
         */
        static exclude(item: any): boolean;
    }

    /**
     * Registers a new prompt-type.
     *
     * @param name
     * The name of the prompt.
     *
     * @param prompt
     * The constructor of the prompt.
     */
    export let registerPrompt: RegisterFunction;

    /**
     * Registers the default prompts.
     */
    export let restoreDefaultPrompts: RestoreFunction;

    /**
     * Creates a prompt-module.
     *
     * @param opt
     * The streams for the prompt-module.
     *
     * @returns
     * The new prompt-module.
     */
    export function createPromptModule(opt?: StreamOptions): PromptModule;

    /**
     * The default prompt-module.
     */
    export let prompt: PromptModule;

    /**
     * The prompts of the default prompt-module.
     *
     * @deprecated
     */
    export let prompts: {};
}

export = inquirer;
