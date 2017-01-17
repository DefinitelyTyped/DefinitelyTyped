import { TypeNode } from 'graphql/language/ast';
import { GraphQLType, GraphQLNullableType } from 'graphql/type/definition';
import { GraphQLSchema } from 'graphql/type/schema';

export function typeFromAST(
    schema: GraphQLSchema,
    typeNode: TypeNode
): GraphQLType
