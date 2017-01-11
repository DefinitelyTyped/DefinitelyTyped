import { GraphQLError } from 'graphql/error';
import {
    DocumentNode,
    OperationDefinitionNode,
    VariableNode,
    SelectionSetNode,
    FragmentSpreadNode,
    FragmentDefinitionNode,
} from 'graphql/language/ast';
import { GraphQLSchema } from 'graphql/type/schema';
import {
    GraphQLInputType,
    GraphQLOutputType,
    GraphQLCompositeType,
    GraphQLField,
    GraphQLArgument
} from 'graphql/type/definition';
import { GraphQLDirective } from 'graphql/type/directives';
import { TypeInfo } from 'graphql/utilities/TypeInfo';
import { specifiedRules } from 'graphql/validation/specifiedRules';


//type ValidationRule = (context: ValidationContext) => any;

/**
 * Implements the "Validation" section of the spec.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the document is valid.
 *
 * A list of specific validation rules may be provided. If not provided, the
 * default list of rules defined by the GraphQL specification will be used.
 *
 * Each validation rules is a function which returns a visitor
 * (see the language/visitor API). Visitor methods are expected to return
 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
 */
export function validate(
    schema: GraphQLSchema,
    ast: DocumentNode,
    rules?: Array<any>
): Array<GraphQLError>;

/**
 * This uses a specialized visitor which runs multiple visitors in parallel,
 * while maintaining the visitor skip and break API.
 *
 * @internal
 */
export function visitUsingRules(
    schema: GraphQLSchema,
    typeInfo: TypeInfo,
    documentAST: DocumentNode,
    rules: Array<any>
): Array<GraphQLError>;

export type NodeWithSelectionSet = OperationDefinitionNode | FragmentDefinitionNode;
export interface VariableUsage {
    node: VariableNode,
    type: GraphQLInputType
}

/**
 * An instance of this class is passed as the "this" context to all validators,
 * allowing access to commonly useful contextual information from within a
 * validation rule.
 */
export class ValidationContext {
    constructor(schema: GraphQLSchema, ast: DocumentNode, typeInfo: TypeInfo);
    reportError(error: GraphQLError): void;

    getErrors(): Array<GraphQLError>;

    getSchema(): GraphQLSchema;

    getDocument(): DocumentNode;

    getFragment(name: string): FragmentDefinitionNode;

    getFragmentSpreads(node: SelectionSetNode): Array<FragmentSpreadNode>;

    getRecursivelyReferencedFragments(
        operation: OperationDefinitionNode
    ): Array<FragmentDefinitionNode>;

    getVariableUsages(node: NodeWithSelectionSet): Array<VariableUsage>;

    getRecursiveVariableUsages(
        operation: OperationDefinitionNode
    ): Array<VariableUsage>;

    getType(): GraphQLOutputType;

    getParentType(): GraphQLCompositeType;

    getInputType(): GraphQLInputType;

    getFieldDef(): GraphQLField<any, any>;

    getDirective(): GraphQLDirective;

    getArgument(): GraphQLArgument;
}