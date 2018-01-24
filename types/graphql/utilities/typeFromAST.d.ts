import { TypeNode } from '../language/ast';
import { GraphQLType, GraphQLNullableType } from '../type/definition';
import { GraphQLSchema } from '../type/schema';

export function typeFromAST(
  schema: GraphQLSchema,
  typeNode: TypeNode,
): GraphQLType;
