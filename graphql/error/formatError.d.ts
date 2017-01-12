import { GraphQLError } from './GraphQLError';

/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
export function formatError(error: GraphQLError): GraphQLFormattedError;

export type GraphQLFormattedError = {
    message: string,
    locations: Array<GraphQLErrorLocation>,
    path: Array<string | number>
};

export type GraphQLErrorLocation = {
    line: number,
    column: number
};