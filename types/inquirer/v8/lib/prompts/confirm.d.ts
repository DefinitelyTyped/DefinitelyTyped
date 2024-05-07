import { Interface as ReadlineInterface } from "readline";
import { Answers, ConfirmQuestionOptions } from "../..";
import Prompt = require("./base");

/**
 * The question-options for the {@link ConfirmPrompt `ConfirmPrompt<TQuestion>`}.
 */
type Question = ConfirmQuestionOptions;

/**
 * Represents a prompt which provides a message to confirm.
 *
 * @template TQuestion
 * The options for the question.
 */
declare class ConfirmPrompt<TQuestion extends Question = Question> extends Prompt<TQuestion> {
    /**
     * Initializes a new instance of the {@link ConfirmPrompt `ConfirmPrompt<TQuestion>`} class.
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
     * @param answer
     * The answer provided by the user.
     */
    protected render(answer?: boolean): this;

    /**
     * Handles the `success`-event of the prompt.
     *
     * @param input
     * The input provided by the user.
     */
    protected onEnd(input: string): void;

    /**
     * Handles the `Keypress`-event of the prompt.
     */
    protected onKeypress(): void;
}

export = ConfirmPrompt;
