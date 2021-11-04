import { FuzzyRule } from "./FuzzyRule";
import { FuzzyVariable } from "./FuzzyVariable";

export type DefuzType = number;

export interface DefuzTypes {
    readonly MAXAV: 0;
    readonly CENTROID: 1;
}

/**
 * Class for representing a fuzzy module. Instances of this class are used by
 * game entities for fuzzy inference. A fuzzy module is a collection of fuzzy variables
 * and the rules that operate on them.
 */
export class FuzzyModule {
    static readonly DEFUZ_TYPE: DefuzTypes;

    /**
     * An array of the fuzzy rules.
     */
    readonly rules: FuzzyRule[];

    /**
     * A map of FLVs.
     */
    readonly flvs: Map<string, FuzzyVariable>;

    /**
     * Constructs a new fuzzy module.
     */
    constructor();

    /**
     * Adds the given FLV under the given name to this fuzzy module.
     *
     * @param name - The name of the FLV.
     * @param flv - The FLV to add.
     */
    addFLV(name: string, flv: FuzzyVariable): this;

    /**
     * Remove the FLV under the given name from this fuzzy module.
     *
     * @param name - The name of the FLV to remove.
     */
    removeFLV(name: string): this;

    /**
     * Adds the given fuzzy rule to this fuzzy module.
     *
     * @param rule - The fuzzy rule to add.
     */
    addRule(rule: FuzzyRule): this;

    /**
     * Removes the given fuzzy rule from this fuzzy module.
     *
     * @param rule - The fuzzy rule to remove.
     */
    removeRule(rule: FuzzyRule): this;

    /**
     * Calls the fuzzify method of the defined FLV with the given value.
     *
     * @param name - The name of the FLV
     * @param value - The crips value to fuzzify.
     */
    fuzzify(name: string, value: number): this;

    /**
     * Given a fuzzy variable and a defuzzification method this returns a crisp value.
     *
     * @param name - The name of the FLV
     * @param [type=FuzzyModule.DEFUZ_TYPE.MAXAV] - The type of defuzzification (defaults to {@link FuzzyModule.DEFUZ_TYPE.MAXAV}).
     * @return The defuzzified, crips value.
     */
    defuzzify(name: string, type?: DefuzType): number;

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
