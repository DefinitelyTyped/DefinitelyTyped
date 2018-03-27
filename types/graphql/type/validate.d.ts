import { GraphQLSchema } from "./schema";
import { GraphQLError } from "../error/GraphQLError";

/**
 * Implements the "Type Validation" sub-sections of the specification's
 * "Type System" section.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the Schema is valid.
 */
export function validateSchema(schema: GraphQLSchema): ReadonlyArray<GraphQLError>;

/**
 * Utility function which asserts a schema is valid by throwing an error if
 * it is invalid.
 */
export function assertValidSchema(schema: GraphQLSchema): void;
