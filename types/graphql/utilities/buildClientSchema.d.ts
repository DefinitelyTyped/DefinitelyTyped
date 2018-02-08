import { IntrospectionQuery } from './introspectionQuery';
import { GraphQLSchema } from '../type/schema';

/**
 * Build a GraphQLSchema for use by client tools.
 *
 * Given the result of a client running the introspection query, creates and
 * returns a GraphQLSchema instance which can be then used with all graphql-js
 * tools, but cannot be used to execute a query, as introspection does not
 * represent the "resolver", "parse" or "serialize" functions or any other
 * server-internal mechanisms.
 */
export function buildClientSchema(
  introspection: IntrospectionQuery,
): GraphQLSchema;
