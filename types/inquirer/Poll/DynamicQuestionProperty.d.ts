/**
 * Represents a dynamic property for a question.
 */
export type DynamicQuestionProperty<TAnswers, T> = T | ((answers: TAnswers) => T | Promise<T>);