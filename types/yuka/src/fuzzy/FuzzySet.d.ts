import { FuzzyTerm } from "./FuzzyTerm";

/**
 * Base class for fuzzy sets. This type of sets are defined by a membership function
 * which can be any arbitrary shape but are typically triangular or trapezoidal. They define
 * a gradual transition from regions completely outside the set to regions completely
 * within the set, thereby enabling a value to have partial membership to a set.
 *
 * This class is derived from {@link FuzzyTerm} so it can be directly used in fuzzy rules.
 * According to the composite design pattern, a fuzzy set can be considered as an atomic fuzzy term.
 */
export class FuzzySet extends FuzzyTerm {
    /**
     * Represents the degree of membership to this fuzzy set.
     * @default 0
     */
    degreeOfMembership: number;

    /**
     * The maximum of the set's membership function. For instance, if
     * the set is triangular then this will be the peak point of the triangular.
     * If the set has a plateau then this value will be the mid point of the
     * plateau. Used to avoid runtime calculations.
     * @default 0
     */
    representativeValue: number;

    /**
     * Represents the left border of this fuzzy set.
     * @default 0
     */
    left: number;

    /**
     * Represents the right border of this fuzzy set.
     * @default 0
     */
    right: number;

    /**
     * Constructs a new fuzzy set with the given values.
     *
     * @param [representativeValue] - The maximum of the set's membership function.
     */
    constructor(representativeValue?: number);

    /**
     * Unique ID, primarily used in context of serialization/deserialization.
     */
    get uuid(): string;

    /**
     * Computes the degree of membership for the given value. Notice that this method
     * does not set {@link FuzzySet#degreeOfMembership} since other classes use it in
     * order to calculate intermediate degree of membership values. This method be
     * implemented by all concrete fuzzy set classes.
     *
     * @param value - The value used to calculate the degree of membership.
     * @return The degree of membership.
     */
    computeDegreeOfMembership(value: number): number;
}
