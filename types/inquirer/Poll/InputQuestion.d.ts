import inquirer = require("..");

/**
 * Represents an input-based question.
 */
export interface InputQuestion<T> extends inquirer.poll.Question<T> {
    /**
     * Receive the user input, answers hash and option flags, and return a transformed value
     * to display to the user. The transformation only impacts what is shown while editing.
     * It does not modify the answers hash.
     */
    transformer?(input: string, answers: T, flags: any): string | Promise<string>;
}