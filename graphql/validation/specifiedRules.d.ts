import { ValidationContext } from 'graphql/validation/validate'; // It needs to check.

/**
 * This set includes all validation rules defined by the GraphQL spec.
 */
export const specifiedRules: Array<(context: ValidationContext) => any>;
