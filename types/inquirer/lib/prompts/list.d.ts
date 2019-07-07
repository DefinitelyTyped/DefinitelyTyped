import Prompt = require("./base");
import inquirer = require("../..");
import Paginator = require("../utils/paginator");

/**
 * Represents a prompt which provides a list to choose an answer from.
 */
declare class ListPrompt extends Prompt<inquirer.poll.ListQuestion<inquirer.poll.Answers>> {
    /**
     * Resolves the value of the prompt.
     */
    protected done: (value: any) => void;

    /**
     * Gets or sets a value indicating whether the prompt has been rendered the first time.
     */
    protected firstRender: boolean;

    /**
     * The index of the selected choice.
     */
    protected selected: number;

    /**
     * Gets or sets an object for paginating the content.
     */
    protected paginator: Paginator;

    /**
     * Renders the prompt.
     */
    protected render(): void;

    /**
     * Gets the current value of the prompt.
     */
    protected getCurrentValue(): any;

    /**
     * Handles the `upKey`-event.
     */
    protected onUpKey(): void;

    /**
     * Handles the `downKey`-event.
     */
    protected onDownKey(): void;

        /**
     * Handles the `numberKey`-event.
     *
     * @param input
     * The number that has been pressed.
     */
    protected onNumberKey(input: number): void;

    /**
     * Handles the `success`-event of the prompt.
     *
     * @param value
     * The value of the prompt.
     */
    protected onSubmit(value: any): void;
}

export = ListPrompt;
