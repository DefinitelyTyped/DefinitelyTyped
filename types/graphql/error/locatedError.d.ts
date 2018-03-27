import { GraphQLError } from "./GraphQLError";

/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */
export function locatedError<T>(originalError: Error, nodes: T[], path: Array<string | number>): GraphQLError;
