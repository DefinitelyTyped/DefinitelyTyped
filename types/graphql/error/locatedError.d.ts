import { GraphQLError } from "./GraphQLError";
import { ASTNode } from "../language/ast";

/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */
export function locatedError(
    originalError: Error,
    nodes: ReadonlyArray<ASTNode>,
    path: ReadonlyArray<string | number>
): GraphQLError;
