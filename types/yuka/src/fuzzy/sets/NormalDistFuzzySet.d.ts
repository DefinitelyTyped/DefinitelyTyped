import { FuzzySet } from "../FuzzySet";

/**
 * Class for representing a fuzzy set that has a normal distribution shape.
 * It can be defined by the mean and standard deviation.
 */
export class NormalDistFuzzySet extends FuzzySet {
    /**
     * Represents the peak value of this fuzzy set.
     * @default 0
     */
    midpoint: number;

    /**
     * Represents the standard deviation of this fuzzy set.
     * @default 0
     */
    standardDeviation: number;

    /**
     * Constructs a new triangular fuzzy set with the given values.
     *
     * @param [left=0] - Represents the left border of this fuzzy set.
     * @param [midpoint=0] - Mean or expectation of the normal distribution.
     * @param [right=0] - Represents the right border of this fuzzy set.
     * @param [standardDeviation=0] - Standard deviation of the normal distribution.
     */
    constructor(left?: number, midpoint?: number, right?: number, standardDeviation?: number);

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
