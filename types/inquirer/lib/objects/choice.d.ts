import inquirer = require('../..');

/**
 * Represents a choice for several question-types.
 */
declare class Choice<T extends inquirer.poll.Answers = inquirer.poll.Answers> implements inquirer.poll.ListChoiceOptions<T>, inquirer.poll.CheckboxChoiceOptions<T>, inquirer.poll.ExpandChoiceOptions<T> {
    /**
     * Gets an option of the choice.
     */
    [key: string]: any;

    /**
     * @inheritdoc
     */
    public type?: "choice";

    /**
     * @inheritdoc
     */
    public name: string;

    /**
     * @inheritdoc
     */
    public short: string;

    /**
     * @inheritdoc
     */
    public value: any;

    /**
     * @inheritdoc
     */
    public checked?: boolean;

    /**
     * @inheritdoc
     */
    public disabled: boolean;

    /**
     * @inheritdoc
     */
    public key?: string;

    /**
     * @inheritdoc
     */
    public extra?: any;

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

export = Choice;
