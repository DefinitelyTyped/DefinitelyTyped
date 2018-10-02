import { GraphQLError } from "./GraphQLError";
import { SourceLocation } from "../language/location";

/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
export function formatError(error: GraphQLError): GraphQLFormattedError;

export interface GraphQLFormattedError {
    readonly message: string;
    readonly locations: ReadonlyArray<SourceLocation> | undefined;
    readonly path: ReadonlyArray<string | number> | undefined;
    readonly extensions?: { [key: string]: any };
}
