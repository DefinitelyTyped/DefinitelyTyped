import inquirer = require('../..');

/**
 * Represents a choice for several question-types.
 *
 * @template T
 * The type of the answers.
 */
declare class Choice<T extends inquirer.poll.Answers = inquirer.poll.Answers> implements
    inquirer.poll.ListChoiceOptions<T>,
    inquirer.poll.CheckboxChoiceOptions<T>,
    inquirer.poll.ExpandChoiceOptions<T> {
    /**
     * Gets an option of the choice.
     *
     * @param key
     * The name of the option.
     */
    [key: string]: any;

    /**
     * @inheritdoc
     */
    type?: "choice";

    /**
     * @inheritdoc
     */
    name: string;

    /**
     * @inheritdoc
     */
    short: string;

    /**
     * @inheritdoc
     */
    value: any;

    /**
     * @inheritdoc
     */
    checked?: boolean;

    /**
     * @inheritdoc
     */
    disabled: boolean;

    /**
     * @inheritdoc
     */
    key?: string;

    /**
     * @inheritdoc
     */
    extra?: any;

    /**
     * Initializes a new instance of the `Choice` class.
     *
     * @param value
     * The value of the choice.
     *
     * @param answers
     * An object which contains the answers to the questions.
     */
    constructor(value: any, answers: T);
}

export = Choice;
