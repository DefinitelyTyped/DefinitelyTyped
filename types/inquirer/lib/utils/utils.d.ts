import { Answers, DistinctQuestion, KeyUnion, UnionToIntersection } from "../..";
import { Observable } from "rxjs";

/**
 * Represents a property-name of any question-type.
 */
type QuestionProperty = KeyUnion<UnionToIntersection<DistinctQuestion>>;

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
    question: DistinctQuestion,
    prop: QuestionProperty,
    answers: Answers): Observable<DistinctQuestion>;

export { };
