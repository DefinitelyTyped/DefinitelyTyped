/**
 * Created by Ivo Meißner on 28.07.17.
 */
import { ValidationContext, FragmentDefinitionNode, OperationDefinitionNode, FieldNode, InlineFragmentNode, GraphQLUnionType, GraphQLObjectType, GraphQLInterfaceType, GraphQLError } from 'graphql';
export interface QueryComplexityOptions {
    maximumComplexity: number;
    variables?: object;
    onComplete?: (complexity: number) => void;
    createError?: (max: number, actual: number) => GraphQLError;
}
export default class QueryComplexity {
    context: ValidationContext;
    complexity: number;
    options: QueryComplexityOptions;
    fragments: {
        [name: string]: FragmentDefinitionNode;
    };
    OperationDefinition: object;
    constructor(context: ValidationContext, options: QueryComplexityOptions);
    onOperationDefinitionEnter(operation: OperationDefinitionNode): void;
    onOperationDefinitionLeave(): GraphQLError | undefined;
    nodeComplexity(node: FieldNode | FragmentDefinitionNode | InlineFragmentNode |
         OperationDefinitionNode, typeDef: GraphQLObjectType | GraphQLInterfaceType | GraphQLUnionType, complexity?: number): number;
    createError(): GraphQLError;
    getDefaultComplexity(args: object, childScore: number): number;
}
