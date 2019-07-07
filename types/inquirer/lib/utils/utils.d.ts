import inquirer = require("../..");
import { Observable } from "rxjs";

/**
 * Represents a property-name of any question-type.
 */
type QuestionProperty = inquirer.KeyUnion<inquirer.UnionToIntersection<inquirer.poll.DistinctQuestion>>;

/**
 * Unpacks a question-property.
 */
type UnpackQuestionProperty<T> = T extends inquirer.poll.AsyncDynamicQuestionProparty<inquirer.poll.Answers, infer U> ? (U extends Promise<infer U2> ? U2 : U) : T;

/**
 * Fetches a property of the specified `question`.
 *
 * @param question
 * The question to fetch the property from.
 *
 * @param prop
 * The name of the property to fetch.
 *
 * @param answers
 * The answers provided by the user.
 *
 * @returns
 * The processed question.
 */
export function fetchAsyncQuestionPropertyQuestionProperty(
    question: inquirer.poll.DistinctQuestion,
    prop: QuestionProperty,
    answers: inquirer.poll.Answers): Observable<inquirer.poll.DistinctQuestion>; 