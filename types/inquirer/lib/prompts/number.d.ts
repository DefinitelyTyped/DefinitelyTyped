import InputPrompt = require("./input");
import inquirer = require("../..");

/**
 * The question for the `NumberPrompt<T>`.
 */
type Question = inquirer.poll.NumberQuestionOptions<inquirer.poll.Answers>;

/**
 * Provides a prompt which allows the user to type a number as answer.
 */
declare class NumberPrompt<TQuestion extends Question = Question> extends InputPrompt<TQuestion> { }

export = NumberPrompt;