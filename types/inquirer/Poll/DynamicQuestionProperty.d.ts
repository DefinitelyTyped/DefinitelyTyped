declare namespace Internal {
    namespace Poll {
        /**
         * Represents a dynamic property for a question.
         */
        type DynamicQuestionProperty<TAnswers, T> = T | ((answers: TAnswers) => T | Promise<T>);
    }
}