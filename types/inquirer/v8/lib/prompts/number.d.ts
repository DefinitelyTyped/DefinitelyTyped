import { Interface as ReadlineInterface } from 'readline';
import { Answers, NumberQuestionOptions } from '../..';
import InputPrompt = require('./input');

/**
 * The question for the {@link NumberPrompt `NumberPrompt<TQuestion>`}.
 */
type Question = NumberQuestionOptions;

/**
 * Provides a prompt which allows the user to type a number as answer.
 *
 * @template TQuestion
 * The options for the question.
 */
declare class NumberPrompt<TQuestion extends Question = Question> extends InputPrompt<TQuestion> {
    /**
     * Initializes a new instance of the {@link NumberPrompt `NumberPrompt<TQuestion>`} class.
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
    constructor(question: TQuestion, readLine: ReadlineInterface, answers: Answers);
}

export = NumberPrompt;
