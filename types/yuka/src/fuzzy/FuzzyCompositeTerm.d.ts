import { FuzzyTerm } from "./FuzzyTerm";

/**
 * Base class for representing more complex fuzzy terms based on the
 * composite design pattern.
 */
export class FuzzyCompositeTerm extends FuzzyTerm {
    /**
     * List of fuzzy terms.
     */
    terms: FuzzyTerm[];

    /**
     * Constructs a new fuzzy composite term with the given values.
     *
     * @param [terms=[]] - An arbitrary amount of fuzzy terms.
     */
    constructor(terms?: FuzzyTerm[]);
}
