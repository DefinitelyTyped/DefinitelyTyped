import inquirer = require("..");

/**
 * Represents a choice for several question-types.
 */
export class Choice<T extends inquirer.poll.Answers = inquirer.poll.Answers> {
    /**
     * The name of the choice.
     */
    public name: string;

    /**
     * The short name of the choice.
     */
    public short: string;

    /**
     * The value of the choice.
     */
    public value: any;

    /**
     * A value indicating whether the choice is disabled.
     */
    public disabled: boolean;

    /**
     * Initializes a new instance of the `Choice` class.
     *
     * @param value
     * The value of the choice.
     *
     * @param answers
     * An object which contains the answers to the questions.
     */
    public constructor(value: any, answers: T);
}