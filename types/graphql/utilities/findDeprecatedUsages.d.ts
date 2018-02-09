import { GraphQLSchema } from '../type/schema';
import { DocumentNode } from '../language/ast';
import { GraphQLError } from '../error/GraphQLError';

/**
 * A validation rule which reports deprecated usages.
 *
 * Returns a list of GraphQLError instances describing each deprecated use.
 */
export function findDeprecatedUsages(
  schema: GraphQLSchema,
  ast: DocumentNode,
): GraphQLError[];
