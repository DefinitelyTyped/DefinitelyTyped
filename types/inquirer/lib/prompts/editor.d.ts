import Prompt = require("./base");
import { Subject, Subscription } from "rxjs";
import inquirer = require("../..");

/**
 * Represents a prompt which provides a text-editor.
 */
export class EditorPrompt extends Prompt<inquirer.poll.EditorQuestion<inquirer.poll.Answers>> {
    /**
     * Resolves the value of the prompt.
     */
    protected done: (value: any) => void;

    /**
     * Gets or sets an object for subscribing to the editor-result.
     */
    protected editorResult: Subject<string>;

    /**
     * Gets or sets a subscription to the `line`-event.
     */
    protected lineSubscription: Subscription;

    /**
     * Gets or sets the initial text.
     */
    protected currentText: string;

    /**
     * @inheritdoc
     * @returns
     * The editor-prompt.
     */
    protected _run(callback: (value: any) => void): this;

    /**
     * Renders the prompt.
     *
     * @param error
     * The error to render.
     */
    protected render(error: string): void;

    /**
     * Launches the default text-editor of the system.
     */
    protected startExternalEditor(): void;

    /**
     * Closes the external editor.
     *
     * @param error
     * Either the error which occurred while executing the external editor or `null`.
     *
     * @param result
     * The result of the editor.
     */
    protected endExternalEditor(error: Error, result: string): void;

    /**
     * Handles the `success`-event of the prompt.
     *
     * @param state
     * An object which contains state-data.
     */
    protected onEnd(state: inquirer.prompts.SuccessfulPromptStateData): void;

    /**
     * Handles the `error`-event of the prompt.
     *
     * @param state
     * An object which contains state-data.
     */
    protected onError(state: inquirer.prompts.FailedPromptStateData): void;
}