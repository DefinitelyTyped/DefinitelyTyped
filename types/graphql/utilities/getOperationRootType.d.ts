import { GraphQLSchema } from "../type/schema";
import { OperationDefinitionNode, OperationTypeDefinitionNode } from "../language/ast";
import { GraphQLObjectType } from "../type/definition";

/**
 * Extracts the root type of the operation from the schema.
 */
export function getOperationRootType(
    schema: GraphQLSchema,
    operation: OperationDefinitionNode | OperationTypeDefinitionNode
): GraphQLObjectType;
