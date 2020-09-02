import { Change } from "diff";
import { QuestionCollection, PromptModule } from "inquirer";
import { Logger } from "./util/log";

declare namespace TerminalAdapter {
    /**
     * Provides options for creating an adapter.
     */
    interface AdapterOptions {
        /**
         * A console-object for logging messages.
         */
        console?: Console;
    }

    /**
     * Represents a set of questions.
     */
    type Questions<T> = QuestionCollection<T>;
}

/**
 * `TerminalAdapter` is the default implementation of `Adapter`, an abstraction
 * layer that defines the I/O interactions.
 *
 * It provides a CLI interaction
 */
declare class TerminalAdapter {
    /**
     * An inquirer prompt module.
     */
    promptModule: PromptModule;

    /**
     * A console-object for logging messages.
     */
    console: Console;

    /**
     * A component for logging messages.
     */
    log: Logger;

    /**
     * Initializes a new instance of the `TerminalAdapter` class.
     *
     * @param options The options for creating the adapter.
     */
    constructor(options: TerminalAdapter.AdapterOptions);

    /**
     * Prompts the user for one or more questions.
     *
     * @param questions The questions to prompt.
     */
    prompt<T>(questions: TerminalAdapter.Questions<T>): Promise<T>;

    /**
     * Prompts the user for one or more questions.
     *
     * @param questions The questions to prompt.
     * @param cb The callback for handling the result.
     */
    prompt<TAnswers, TResult>(
        questions: TerminalAdapter.Questions<TAnswers>,
        cb: (res: TAnswers) => TResult
    ): Promise<TResult>;

    /**
     * Shows a color-based diff of two strings.
     *
     * @param actual The actual text.
     * @param expected The expected text.
     * @param changes The changes returned by `diff`.
     * @returns The formatted message.
     */
    diff(actual: string, expected: string, changes: Change[]): string;
}

export = TerminalAdapter;
