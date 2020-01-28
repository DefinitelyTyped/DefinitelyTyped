import { GraphQLUnionType, GraphQLType, GraphQLInterfaceType } from 'graphql';

/**
 * Determine if a type is abstract (not concrete).
 *
 * Note: This is used in place of the `graphql` version of the function in order
 * to not break `instanceof` checks with Jest. This version also unwraps
 * non-null/list wrapper types.
 */
export function isAbstractType(type: GraphQLType): type is GraphQLInterfaceType | GraphQLUnionType;
