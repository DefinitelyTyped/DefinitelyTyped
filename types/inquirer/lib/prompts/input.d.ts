import Prompt = require("./base");
import inquirer = require("../..");

/**
 * Represents a prompt which allows the user to type an answer.
 */
declare class InputPrompt extends Prompt<inquirer.poll.InputQuestion<inquirer.poll.Answers>> {
    /**
     * Resolves the value of the prompt.
     */
    protected done: (value: any) => void;

    /**
     * The answer to this prompt.
     */
    protected answer: any;

    /**
     * Renders the prompt.
     *
     * @param error
     * The error to render.
     */
    protected render(error?: string): void;

    /**
     * Filters the specified `input`.
     *
     * @param input
     * The input to filter.
     *
     * @returns
     * The filtered input.
     */
    protected filterInput(input: string): string;

    /**
     * Handles the `success`-event of the prompt.
     *
     * @param eventArgs
     * An object which contains eventr-data.
     */
    protected onEnd(eventArgs: inquirer.prompts.SuccessfulPromptStateData): void;

    /**
     * Handles the `error`-event of the prompt.
     *
     * @param eventArgs
     * An object which contains event-data.
     */
    protected onError(eventArgs: inquirer.prompts.FailedPromptStateData): void;

    /**
     * Handles the `keypress`-event of the prompt.
     */
    protected onKeyPress(): void;
}

export = InputPrompt;