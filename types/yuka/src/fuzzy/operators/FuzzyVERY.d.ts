import { FuzzyCompositeTerm } from "../FuzzyCompositeTerm";
import { FuzzyTerm } from "../FuzzyTerm";

/**
 * Hedges are special unary operators that can be employed to modify the meaning of a fuzzy set.
 * The FAIRLY fuzzy hedge widens the membership function.
 */
export class FuzzyVERY extends FuzzyCompositeTerm {
    /**
     * Constructs a new fuzzy VERY hedge with the given values.
     *
     * @param [fuzzyTerm=null] - The fuzzy term this hedge is working on.
     */
    constructor(fuzzyTerm?: FuzzyTerm);
}
