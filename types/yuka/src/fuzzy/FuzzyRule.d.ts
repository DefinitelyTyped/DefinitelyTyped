import { FuzzySet } from "./FuzzySet";
import { FuzzyTerm } from "./FuzzyTerm";

/**
 * Class for representing a fuzzy rule. Fuzzy rules are comprised of an antecedent and
 * a consequent in the form: IF antecedent THEN consequent.
 *
 * Compared to ordinary if/else statements with discrete values, the consequent term
 * of a fuzzy rule can fire to a matter of degree.
 */
export class FuzzyRule {
    /**
     * Represents the condition of the rule.
     * @default null
     */
    antecedent: FuzzyTerm | null;

    /**
     * Describes the consequence if the condition is satisfied.
     * @default null
     */
    consequence: FuzzyTerm | null;

    /**
     * Constructs a new fuzzy rule with the given values.
     *
     * @param [antecedent] - Represents the condition of the rule.
     * @param [consequence] - Describes the consequence if the condition is satisfied.
     */
    constructor(antecedent?: FuzzyTerm | null, consequence?: FuzzyTerm | null);

    /**
     * Initializes the consequent term of this fuzzy rule.
     */
    initConsequence(): this;

    /**
     * Evaluates the rule and updates the degree of membership of the consequent term with
     * the degree of membership of the antecedent term.
     */
    evaluate(): this;

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
     * @param fuzzySets - Maps fuzzy sets to UUIDs.
     */
    fromJSON(json: { [s: string]: any }, fuzzySets: Map<string, FuzzySet>): this;
}
