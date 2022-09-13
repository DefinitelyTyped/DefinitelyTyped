import { FuzzySet } from "./FuzzySet";

/**
 * Class for representing a fuzzy linguistic variable (FLV). A FLV is the
 * composition of one or more fuzzy sets to represent a concept or domain
 * qualitatively. For example fuzzs sets "Dumb", "Average", and "Clever"
 * are members of the fuzzy linguistic variable "IQ".
 */
export class FuzzyVariable {
    /**
     * An array of the fuzzy sets that comprise this FLV.
     */
    readonly fuzzySets: FuzzySet[];

    /**
     * The minimum value range of this FLV.
     * This value is automatically updated when adding/removing fuzzy sets.
     * @default Infinity
     */
    readonly minRange: number;

    /**
     * The maximum value range of this FLV.
     * This value is automatically updated when adding/removing fuzzy sets.
     * @default -Infinity
     */
    readonly maxRange: number;

    /**
     * Constructs a new fuzzy linguistic variable.
     */
    constructor();

    /**
     * Adds the given fuzzy set to this FLV.
     *
     * @param fuzzySet - The fuzzy set to add.
     */
    add(fuzzySet: FuzzySet): this;

    /**
     * Removes the given fuzzy set from this FLV.
     *
     * @param fuzzySet - The fuzzy set to remove.
     */
    remove(fuzzySet: FuzzySet): this;

    /**
     * Fuzzifies a value by calculating its degree of membership in each of this variable's fuzzy sets.
     *
     * @param value - The crips value to fuzzify.
     */
    fuzzify(value: number): this;

    /**
     * Defuzzifies the FLV using the "Average of Maxima" (MaxAv) method.
     *
     * @return The defuzzified, crips value.
     */
    defuzzifyMaxAv(): number;

    /**
     * Defuzzifies the FLV using the "Centroid" method.
     *
     * @param [samples=10] - The amount of samples used for defuzzification.
     * @return The defuzzified, crips value.
     */
    defuzzifyCentroid(samples?: number): number;

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
