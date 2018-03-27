import ValidationContext from "./ValidationContext";

/**
 * This set includes all validation rules defined by the GraphQL spec.
 *
 * The order of the rules in this list has been adjusted to lead to the
 * most clear output when encountering multiple validation errors.
 */
export const specifiedRules: Array<(context: ValidationContext) => any>;
