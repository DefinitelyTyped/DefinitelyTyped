import { GraphQLError } from './GraphQLError';

/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
export function formatError(error: GraphQLError): GraphQLFormattedError;

export interface GraphQLFormattedError {
  message: string;
  locations?: GraphQLErrorLocation[];
  path?: Array<string | number>;
}

export interface GraphQLErrorLocation {
  line: number;
  column: number;
}
