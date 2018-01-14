import { GraphQLInputType } from '../type/definition';

/**
 * Given a JavaScript value and a GraphQL type, determine if the value will be
 * accepted for that type. This is primarily useful for validating the
 * runtime values of query variables.
 */
export function isValidJSValue(
    value: any,
    type: GraphQLInputType
): string[];
