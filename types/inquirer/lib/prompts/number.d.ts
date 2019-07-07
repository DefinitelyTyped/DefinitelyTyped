import InputPrompt = require("./input");
import inquirer = require("../..");
import { Interface as ReadlineInterface } from "readline";

/**
 * The question for the `NumberPrompt<T>`.
 */
type Question = inquirer.poll.NumberQuestionOptions<inquirer.poll.Answers>;

/**
 * Provides a prompt which allows the user to type a number as answer.
 */
declare class NumberPrompt<TQuestion extends Question = Question> extends InputPrompt<TQuestion> {
    /**
     * Initializes a new instance of the `NumberPrompt<T>` class.
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
    public constructor(question: TQuestion, readLine: ReadlineInterface, answers: inquirer.poll.Answers);
}

export = NumberPrompt;