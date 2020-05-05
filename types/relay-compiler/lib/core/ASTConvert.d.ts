import { GraphQLSchema } from 'graphql';
export function transformASTSchema(
  schema: GraphQLSchema,
  schemaExtensions: string[],
): GraphQLSchema;
