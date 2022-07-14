import { Interface as ReadLineInterface } from 'readline';
import { Observable } from 'rxjs';
import inquirer, { Answers, Question } from '../..';
import ScreenManager from '../utils/screen-manager';

/**
 * Represents a prompt.
 *
 * @template TQuestion
 * The options for the question.
 */
declare class Prompt<TQuestion extends Question = Question> implements inquirer.prompts.PromptBase {
    /**
     * @inheritdoc
     */
    status: inquirer.prompts.PromptState;

    /**
     * Gets or sets an object which contains the answers.
     */
    protected answers: Answers;

    /**
     * Gets or sets the options of the prompt.
     */
    protected opt: inquirer.prompts.PromptOptions<TQuestion>;

    /**
     * Gets or sets an object for performing read from and write to the console.
     */
    protected rl: ReadLineInterface;

    /**
     * Gets or sets an object for managing the console-screen.
     */
    protected screen: ScreenManager;

    /**
     * Initializes a new instance of the {@link Prompt `Prompt<TQuestion>`} class.
     *
     * @param question
     * The question to prompt the user to answer.
     *
     * @param readLine
     * An object for performing read from and write to the console.
     *
     * @param answers
     * The {@link Answers `Answers`}-object.
     */
    constructor(question: TQuestion, readLine: ReadLineInterface, answers: Answers);

    /**
     * @inheritdoc
     */
    run(): Promise<any>;

    /**
     * Runs the prompt.
     *
     * @param callback
     * The callback for resolving the result.
     */
    protected _run(callback: (callback: any) => void): void;

    /**
     * Throws an error for a missing parameter.
     *
     * @param name
     * The name of the missing parameter.
     */
    protected throwParamError(name: string): void;

    /**
     * Releases all unmanaged resources.
     */
    protected close(): void;

    /**
     * Handles the submit-event.
     *
     * @param observable
     * The observable submit-event flow.
     */
    protected handleSubmitEvents<T>(observable: Observable<T>): inquirer.prompts.PromptEventPipes<T>;

    /**
     * Generates the question-string.
     *
     * @returns
     * The question-string.
     */
    protected getQuestion(): string;
}

export default Prompt;
