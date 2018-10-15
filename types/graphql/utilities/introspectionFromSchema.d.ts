import { GraphQLSchema } from "../type/schema";
import { IntrospectionQuery, IntrospectionOptions } from "./introspectionQuery";

/**
 * Build an IntrospectionQuery from a GraphQLSchema
 *
 * IntrospectionQuery is useful for utilities that care about type and field
 * relationships, but do not need to traverse through those relationships.
 *
 * This is the inverse of buildClientSchema. The primary use case is outside
 * of the server context, for instance when doing schema comparisons.
 */
export function introspectionFromSchema(schema: GraphQLSchema, options: IntrospectionOptions): IntrospectionQuery;
