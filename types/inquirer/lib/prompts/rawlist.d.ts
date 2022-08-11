import { Interface as ReadlineInterface } from 'readline';
import inquirer, { Answers, RawListQuestionOptions } from '../..';
import Paginator from '../utils/paginator';
import Prompt from './base';

/**
 * The question for the {@link RawListPrompt `RawListPrompt<TQuestion>`}.
 */
type Question = RawListQuestionOptions;

/**
 * Represents a prompt which provides a list to choose an answer from.
 *
 * @template TQuestion
 * The options for the question.
 */
declare class RawListPrompt<TQuestion extends Question = Question> extends Prompt<TQuestion> {
    /**
     * Resolves the value of the prompt.
     */
    protected done: (value: any) => void;

    /**
     * The index of the selected choice.
     */
    protected selected: number;

    /**
     * Gets or sets the default index.
     */
    protected rawDefault: number;

    /**
     * Gets or sets an object for paginating the content.
     */
    protected paginator: Paginator;

    /**
     * Initializes a new instance of the {@link RawListPrompt `RawListPrompt<TQuestion>`} class.
     *
     * @param question
     * The question to prompt the user to answer.
     *
     * @param readLine
     * An object for performing read from and write to the console.
     *
     * @param answers
     * The answer-object.
     */
    constructor(question: TQuestion, readLine: ReadlineInterface, answers: Answers);

    /**
     * Renders the prompt.
     *
     * @param error
     * The error to render.
     */
    protected render(error?: string): void;

    /**
     * Gets the value of the specified {@link index `index`}.
     *
     * @param index
     * The index to get the value for.
     *
     * @returns
     * The value of the specified {@link index `index`}.
     */
    protected getCurrentValue(index: number): any;

    /**
     * Handles the `Keypress`-event of the prompt.
     */
    protected onKeypress(): void;

    /**
     * Handles the `UpdKey`-event of the prompt.
     */
    protected onUpKey(): void;

    /**
     * Handles the `DownKey`-event of the prompt.
     */
    protected onDownKey(): void;

    /**
     * Handles the `ArrowKey`-event of the prompt.
     *
     * @param type
     * A value indicating whether the up or the down-arrow is being pressed.
     */
    protected onArrowKey(type: 'up' | 'down'): void;

    /**
     * Handles the `success`-event of the prompt.
     *
     * @param eventArgs
     * An object which contains event-data.
     */
    protected onEnd(eventArgs: inquirer.prompts.SuccessfulPromptStateData): void;

    /**
     * Handles the `error`-event of the prompt.
     *
     * @param eventArgs
     * An object which contains event-data.
     */
    protected onError(): void;
}

export default RawListPrompt;
