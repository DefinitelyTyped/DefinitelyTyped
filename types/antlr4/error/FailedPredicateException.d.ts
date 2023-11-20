import Parser from "../Parser";
import RecognitionException from "./RecognitionException";

/**
 * A semantic predicate failed during validation. Validation of predicates
 * occurs when normally parsing the alternative just like matching a token.
 * Disambiguating predicate evaluation occurs when we test a predicate during
 * prediction.
 */
export default class FailedPredicateException extends RecognitionException {
    readonly ruleIndex: number;
    readonly predicateIndex: number;
    readonly predicate: string;

    constructor(recognizer: Parser, predicate: string, message: string);
}
