import { ValueNode } from '../language/ast';
import { GraphQLInputType } from '../type/definition';

/**
 * Utility for validators which determines if a value literal AST is valid given
 * an input type.
 *
 * Note that this only validates literal values, variables are assumed to
 * provide values of the correct type.
 */
export function isValidLiteralValue(
    type: GraphQLInputType,
    valueNode: ValueNode
): string[];
