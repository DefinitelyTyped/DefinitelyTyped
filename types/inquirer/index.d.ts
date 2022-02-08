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
import Choice = require('./lib/objects/choice');
import Choices = require('./lib/objects/choices');
import Separator = require('./lib/objects/separator');
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
import './lib/utils/events';
import './lib/utils/paginator';
import './lib/utils/readline';
import './lib/utils/screen-manager';
import './lib/utils/utils';
import BottomBar = require('./lib/ui/bottom-bar');
import PromptUI = require('./lib/ui/prompt');

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
 * Represents a list-based question.
 *
 * @template T
 * The type of the answers.
 *
 * @template TChoiceMap
 * The valid choices for the question.
 */
interface ListQuestionOptionsBase<T, TChoiceMap> extends inquirer.Question<T> {
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
 * Provides components for the module.
 */
declare namespace inquirer {
    /**
     * Represents either a key of `T` or a `string`.
     *
     * @template T
     * The type of the keys to suggest.
     */
    type KeyUnion<T> = LiteralUnion<Extract<keyof T, string>>;

    /**
     * Converts the specified union-type `U` to an intersection-type.
     *
     * @template U
     * The union to convert to an intersection.
     */
    type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

    /**
     * Provides an input and an output-stream.
     */
    interface StreamOptions {
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
    interface PromptModule extends PromptModuleBase {
        /**
         * The prompts of the prompt-module.
         */
        prompts: prompts.PromptCollection;

        /**
         * Prompts the questions to the user.
         */
        <T extends Answers = Answers>(questions: QuestionCollection<T>, initialAnswers?: Partial<T>): Promise<T> & { ui: PromptUI<T> };

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

    interface Inquirer extends PromptModuleBase {
        /**
         * Registers a new prompt-type.
         *
         * @param name
         * The name of the prompt.
         *
         * @param prompt
         * The constructor of the prompt.
         */
        registerPrompt(name: string, prompt: prompts.PromptConstructor): void;

        /**
         * Creates a prompt-module.
         *
         * @param opt
         * The streams for the prompt-module.
         *
         * @returns
         * The new prompt-module.
         */
        createPromptModule(opt?: StreamOptions): PromptModule;

        /**
         * The default prompt-module.
         */
        prompt: PromptModule;

        /**
         * The prompts of the default prompt-module.
         *
         * @deprecated
         */
        prompts: {};

        /**
         * Represents a choice-item separator.
         */
        Separator: typeof Separator;

        /**
         * Provides ui-components.
         */
        ui: {
            /**
             * Represents the bottom-bar UI.
             */
            BottomBar: typeof BottomBar;

            /**
             * Represents the prompt ui.
             */
            Prompt: typeof PromptUI;
        };
    }

    /**
     * A set of answers.
     */
    interface Answers extends Record<string, any> {}

    /**
     * Provides the functionality to validate answers.
     *
     * @template T
     * The type of the answers.
     */
    type Validator<T extends Answers = Answers> = Question<T>['validate'];

    /**
     * Provides the functionality to transform an answer.
     *
     * @template T
     * The type of the answers.
     */
    type Transformer<T extends Answers = Answers> = InputQuestionOptions<T>['transformer'];

    /**
     * Represents a dynamic property for a question.
     *
     * @template T
     * The type of the property.
     *
     * @template TAnswers
     * The type of the answers.
     */
    type DynamicQuestionProperty<T, TAnswers extends Answers = Answers> = T | ((answers: TAnswers) => T);

    /**
     * Represents a dynamic property for a question which can be fetched asynchronously.
     *
     * @template T
     * The type of the property.
     *
     * @template TAnswers
     * The type of the answers.
     */
    type AsyncDynamicQuestionProperty<T, TAnswers extends Answers = Answers> = DynamicQuestionProperty<
        T | Promise<T>,
        TAnswers
    >;

    /**
     * Provides options for a question.
     *
     * @template T
     * The type of the answers.
     */
    interface Question<T extends Answers = Answers> {
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
    interface ChoiceBase {
        /**
         * The type of the choice.
         */
        type?: string | undefined;
    }

    /**
     * Provides options for a choice.
     */
    interface ChoiceOptions extends ChoiceBase {
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
     * Provides options for a choice of the `ListPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    interface ListChoiceOptions<T extends Answers = Answers> extends ChoiceOptions {
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
    interface CheckboxChoiceOptions<T extends Answers = Answers> extends ListChoiceOptions<T> {
        /**
         * A value indicating whether the choice should be initially checked.
         */
        checked?: boolean | undefined;
    }

    /**
     * Provides options for a choice of the `ExpandPrompt`.
     */
    interface ExpandChoiceOptions extends ChoiceOptions {
        /**
         * The key to press for selecting the choice.
         */
        key?: string | undefined;
    }

    /**
     * Represents a separator.
     */
    interface SeparatorOptions extends ChoiceBase {
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
     * Provides all valid choice-types for any kind of question.
     *
     * @template T
     * The type of the answers.
     */
    interface BaseChoiceMap<T extends Answers = Answers> {
        Choice: Choice<T>;
        ChoiceOptions: ChoiceOptions;
        SeparatorOptions: SeparatorOptions;
        Separator: Separator;
    }

    /**
     * Provides all valid choice-types for the `ListQuestion`.
     *
     * @template T
     * The type of the answers.
     */
    interface ListChoiceMap<T extends Answers = Answers> extends BaseChoiceMap<T> {
        ListChoiceOptions: ListChoiceOptions<T>;
    }

    /**
     * Provides all valid choice-types for the `CheckboxQuestion`.
     *
     * @template T
     * The type of the answers.
     */
    interface CheckboxChoiceMap<T extends Answers = Answers> extends BaseChoiceMap<T> {
        CheckboxChoiceOptions: CheckboxChoiceOptions<T>;
    }

    /**
     * Provides all valid choice-types for the `ExpandQuestion`.
     *
     * @template T
     * The type of the answers.
     */
    interface ExpandChoiceMap<T extends Answers = Answers> extends BaseChoiceMap<T> {
        ExpandChoiceOptions: ExpandChoiceOptions;
    }

    /**
     * Provides all valid choice-types.
     *
     * @template T
     * The type of the answers.
     */
    interface AllChoiceMap<T extends Answers = Answers> {
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
    type DistinctChoice<TAnswers extends Answers = Answers, TChoiceMap = AllChoiceMap<TAnswers>> =
        | string
        | TChoiceMap[keyof TChoiceMap];

    /**
     * Represents a set of choices.
     *
     * @template T
     * The type of the answers.
     */
    type ChoiceCollection<T extends Answers = Answers> = Array<DistinctChoice<AllChoiceMap<T>>>;

    /**
     * Provides options for a question for the `InputPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    interface InputQuestionOptions<T extends Answers = Answers> extends Question<T> {
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
    interface InputQuestion<T extends Answers = Answers> extends InputQuestionOptions<T> {
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
    interface NumberQuestionOptions<T extends Answers = Answers> extends InputQuestionOptions<T> {}

    /**
     * Provides options for a question for the `NumberPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    interface NumberQuestion<T extends Answers = Answers> extends NumberQuestionOptions<T> {
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
    interface PasswordQuestionOptions<T extends Answers = Answers> extends InputQuestionOptions<T> {
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
    interface PasswordQuestion<T extends Answers = Answers> extends PasswordQuestionOptions<T> {
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
    interface LoopableListQuestionOptionsBase<T, TChoiceMap> extends ListQuestionOptionsBase<T, TChoiceMap> {
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
    interface ListQuestionOptions<T extends Answers = Answers>
        extends LoopableListQuestionOptionsBase<T, ListChoiceMap<T>> {}

    /**
     * Provides options for a question for the `ListPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    interface ListQuestion<T extends Answers = Answers> extends ListQuestionOptions<T> {
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
    interface RawListQuestionOptions<T extends Answers = Answers> extends ListQuestionOptions<T> {}

    /**
     * Provides options for a question for the `RawListPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    interface RawListQuestion<T extends Answers = Answers> extends RawListQuestionOptions<T> {
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
    interface ExpandQuestionOptions<T extends Answers = Answers>
        extends ListQuestionOptionsBase<T, ExpandChoiceMap<T>> {}

    /**
     * Provides options for a question for the `ExpandPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    interface ExpandQuestion<T extends Answers = Answers> extends ExpandQuestionOptions<T> {
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
    interface CheckboxQuestionOptions<T extends Answers = Answers>
        extends LoopableListQuestionOptionsBase<T, CheckboxChoiceMap<T>> {}

    /**
     * Provides options for a question for the `CheckboxPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    interface CheckboxQuestion<T extends Answers = Answers> extends CheckboxQuestionOptions<T> {
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
    interface ConfirmQuestionOptions<T extends Answers = Answers> extends Question<T> {}

    /**
     * Provides options for a question for the `ConfirmPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    interface ConfirmQuestion<T extends Answers = Answers> extends ConfirmQuestionOptions<T> {
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
    interface EditorQuestionOptions<T extends Answers = Answers> extends Question<T> {}

    /**
     * Provides options for a question for the `EditorPrompt`.
     *
     * @template T
     * The type of the answers.
     */
    interface EditorQuestion<T extends Answers = Answers> extends EditorQuestionOptions<T> {
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
    interface QuestionMap<T extends Answers = Answers> {
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
    type DistinctQuestion<T extends Answers = Answers> = QuestionMap<T>[keyof QuestionMap<T>];

    /**
     * Indicates the type of a question
     */
    type QuestionTypeName = DistinctQuestion['type'];

    /**
     * Represents a collection of questions.
     *
     * @template T
     * The type of the answers.
     */
    type QuestionCollection<T extends Answers = Answers> =
        | DistinctQuestion<T>
        | ReadonlyArray<DistinctQuestion<T>>
        | Observable<DistinctQuestion<T>>;

    /**
     * Provides components for the prompts.
     */
    namespace prompts {
        /**
         * Provides a base for and prompt-options.
         *
         * @template T
         * The type of the answers.
         */
        type PromptOptions<T extends Question = Question> = T & {
            /**
             * The choices of the prompt.
             */
            choices: Choices;
        };

        /**
         * Represents the state of a prompt.
         */
        type PromptState = LiteralUnion<'pending' | 'idle' | 'loading' | 'answered' | 'done'>;

        /**
         * Represents a prompt.
         */
        interface PromptBase {
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
        interface PromptConstructor {
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
        type PromptCollection = Record<string, PromptConstructor>;

        /**
         * Provides data about the state of a prompt.
         */
        interface PromptStateData {
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
        interface SuccessfulPromptStateData<T = any> extends PromptStateData {
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
        interface FailedPromptStateData extends PromptStateData {
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
        interface PromptEventPipes<T = any> {
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
    namespace ui {
        /**
         * Provides options for the bottom-bar UI.
         */
        interface BottomBarOptions extends StreamOptions {
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
        type FetchedQuestion<T extends Answers = Answers> = DistinctQuestion<T> & {
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
        interface FetchedAnswer {
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
}

/**
 * Provides the functionality to prompt questions.
 */
declare var inquirer: inquirer.Inquirer;
export = inquirer;
