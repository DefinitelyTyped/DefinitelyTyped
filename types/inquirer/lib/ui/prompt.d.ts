import UI = require("./baseUI");
import inquirer = require("../..");
import { Observable, defer } from "rxjs";

/**
 * Represents the prompt ui.
 */
declare class PromptUI extends UI {
    /**
     * Gets or sets the prompts of the ui.
     */
    prompts: inquirer.prompts.PromptCollection;

    /**
     * Gets or sets the answers provided by the user.
     */
    answers: inquirer.poll.Answers;

    /**
     * Gets or sets the event-flow of the process.
     */
    process: Observable<inquirer.poll.Answers>;

    /**
     * Initializes a new instance of the `PromptUI` class.
     *
     * @param prompts
     * The prompts for the ui.
     *
     * @param options
     * The input- and output-stream of the ui.
     */
    constructor(prompts: inquirer.prompts.PromptCollection, options: inquirer.StreamOptions);

    /**
     * Runs the prompt-UI.
     *
     * @param questions
     * The questions to prompt the user to answer.
     *
     * @returns
     * The answers provided by the user.
     */
    run(questions: Array<inquirer.poll.DistinctQuestion<inquirer.poll.Answers>>): Promise<inquirer.poll.Answers>;

    /**
     * Finishes the process.
     */
    protected onCompletion(): inquirer.poll.Answers;

    /**
     * Processes a question.
     *
     * @param question
     * The question to process.
     *
     * @returns
     * The answer to the question.
     */
    protected processQuestion(question: inquirer.poll.DistinctQuestion<inquirer.poll.Answers>): Observable<inquirer.ui.FetchedAnswer>;

    /**
     * Fetches the answer to a question.
     *
     * @param question
     * The question to fetch the answer for.
     *
     * @returns
     * The answer to the question.
     */
    protected fetchAnswer(question: inquirer.ui.FetchedQuestion<inquirer.poll.Answers>): Observable<inquirer.ui.FetchedAnswer>;

    /**
     * Sets the type of the question if no question-type is specified.
     *
     * @param question
     * The question to set the default type for.
     *
     * @returns
     * The processed question.
     */
    protected setDefaultType(question: inquirer.poll.DistinctQuestion<inquirer.poll.Answers>): Observable<inquirer.poll.DistinctQuestion<inquirer.poll.Answers>>;

    /**
     * Filters the question if it is runnable.
     *
     * @param question
     * The question to filter.
     *
     * @returns
     * Either the event-flow of the question if it is runnable or an empty event-flow.
     */
    protected filterIfRunnable(question: inquirer.poll.DistinctQuestion<inquirer.poll.Answers>): Observable<inquirer.poll.DistinctQuestion<inquirer.poll.Answers>>;
}

export = PromptUI;
