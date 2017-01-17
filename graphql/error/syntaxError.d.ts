import { Source } from 'graphql/language/source';
import { GraphQLError } from 'graphql/error/GraphQLError';

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */
export function syntaxError(
    source: Source,
    position: number,
    description: string
): GraphQLError;