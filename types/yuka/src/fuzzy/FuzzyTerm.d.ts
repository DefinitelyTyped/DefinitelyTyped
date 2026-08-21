/**
 * Base class for representing a term in a {@link FuzzyRule}.
 */
export class FuzzyTerm {
    /**
     * Clears the degree of membership value.
     */
    clearDegreeOfMembership(): this;

    /**
     * Returns the degree of membership.
     *
     * @return Degree of membership.
     */
    getDegreeOfMembership(): number;

    /**
     * Updates the degree of membership by the given value. This method is used when
     * the term is part of a fuzzy rule's consequent.
     *
     * @param value - The value used to update the degree of membership.
     */
    updateDegreeOfMembership(value: number): this;

    /**
     * Transforms this instance into a JSON object.
     *
     * @return The JSON object.
     */
    toJSON(): { [s: string]: any };
}
