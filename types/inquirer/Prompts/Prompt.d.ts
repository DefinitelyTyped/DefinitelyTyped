import inquirer = require("..");
import { Interface as ReadLineInterface } from "readline";
import { IPrompt } from "./IPrompt";
import { ScreenManager } from "../System/ScreenManager";
import { Observable } from "rxjs";

/**
 * Represents a prompt.
 */
export declare class Prompt<TAnswers = inquirer.poll.Answers, TOptions = inquirer.poll.Question<TAnswers>> {
    /**
     * Gets or sets an object which contains the answers.
     */
    public answers: TAnswers;

    /**
     * Gets or sets the options of the prompt.
     */
    public opt: TOptions;

    /**
     * Gets or sets an object for performing read from and write to the console.
     */
    public rl: ReadLineInterface;

    /**
     * Gets or sets an object for managing the console-screen.
     */
    public screen: ScreenManager;

    /**
     * Gets or sets a string which represents the state of the prompt.
     */
    public status: inquirer.prompts.PromptState;

    /**
     * Initializes a new instance of the `Prompt<T>` class.
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
    constructor(question: TOptions, readLine: ReadLineInterface, answers: TAnswers);

    /**
     * Runs the prompt.
     *
     * @returns
     * The result of the prompt.
     */
    public run(): Promise<any>;

    /**
     * Runs the prompt.
     *
     * @param callback
     * The callback for resolving the result.
     */
    protected _run(callback: (value: any) => any): void;

    /**
     * Throws an error for a missing param.
     *
     * @param name
     * The name of the missing param.
     */
    protected throwParamError(name: string): void;

    /**
     * Releases all unmanaged resources.
     */
    protected close(): void;

    /**
     * Handles the submit-event.
     *
     * @param submit
     * The submit-event flow.
     */
    protected handleSubmitEvents(submit: Observable<any>): inquirer.prompts.SubmitEventResult;

    /**
     * Generates the question-string.
     *
     * @returns
     * The question-string.
     */
    protected getQuestion(): string;
}