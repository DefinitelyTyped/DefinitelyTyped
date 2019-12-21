import { GraphQLSchema } from 'graphql';
export function transformASTSchema(
  schema: GraphQLSchema,
  transforms: string[],
): GraphQLSchema;
