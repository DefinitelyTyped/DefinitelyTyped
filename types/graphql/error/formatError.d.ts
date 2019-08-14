import { GraphQLError } from "./GraphQLError";
import { SourceLocation } from "../language/location";

/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
export function formatError(error: GraphQLError): GraphQLFormattedError;

/**
 * @see https://github.com/graphql/graphql-spec/blob/master/spec/Section%207%20--%20Response.md#errors
 */
export interface GraphQLFormattedError<
    TExtensions extends Record<string, any> = Record<string, any>
> {
    /**
	 * A short, human-readable summary of the problem that **SHOULD NOT** change
	 * from occurrence to occurrence of the problem, except for purposes of
	 * localization.
	 */
	readonly message: string
    /**
	 * If an error can be associated to a particular point in the requested
	 * GraphQL document, it should contain a list of locations.
	 */
	readonly locations?: ReadonlyArray<SourceLocation>
    /**
	 * If an error can be associated to a particular field in the GraphQL result,
	 * it _must_ contain an entry with the key `path` that details the path of
	 * the response field which experienced the error. This allows clients to
	 * identify whether a null result is intentional or caused by a runtime error.
	 */
	readonly path?: ReadonlyArray<string | number>
    /**
	 * Reserved for implementors to extend the protocol however they see fit,
	 * and hence there are no additional restrictions on its contents.
	 */
    readonly extensions?: TExtensions
}
