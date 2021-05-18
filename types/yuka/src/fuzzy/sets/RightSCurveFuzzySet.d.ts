import { FuzzySet } from "../FuzzySet";

/**
 * Class for representing a fuzzy set that has a s-shape membership function with
 * values from lowest to highest.
 */
export class RightSCurveFuzzySet extends FuzzySet {
    /**
     * Represents the peak value of this fuzzy set.
     * @default 0
     */
    midpoint: number;

    /**
     * Constructs a new S-curve fuzzy set with the given values.
     *
     * @param [left=0] - Represents the left border of this fuzzy set.
     * @param [midpoint=0] - Represents the peak value of this fuzzy set.
     * @param [right=0] - Represents the right border of this fuzzy set.
     */
    constructor(left?: number, midpoint?: number, right?: number);

    /**
     * Computes the degree of membership for the given value.
     *
     * @param value - The value used to calculate the degree of membership.
     * @return The degree of membership.
     */
    computeDegreeOfMembership(value: number): number;

    /**
     * Transforms this instance into a JSON object.
     *
     * @return The JSON object.
     */
    toJSON(): { [s: string]: any };

    /**
     * Restores this instance from the given JSON object.
     *
     * @param json - The JSON object.
     */
    fromJSON(json: { [s: string]: any }): this;
}
