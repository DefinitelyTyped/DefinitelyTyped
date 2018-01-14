import { GraphQLError } from '../error';
import {
    DocumentNode,
    OperationDefinitionNode,
    VariableNode,
    SelectionSetNode,
    FragmentSpreadNode,
    FragmentDefinitionNode,
} from '../language/ast';
import { GraphQLSchema } from '../type/schema';
import {
    GraphQLInputType,
    GraphQLOutputType,
    GraphQLCompositeType,
    GraphQLField,
    GraphQLArgument
} from '../type/definition';
import { GraphQLDirective } from '../type/directives';
import { TypeInfo } from '../utilities/TypeInfo';
import { specifiedRules } from './specifiedRules';

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
    rules?: any[]
): GraphQLError[];

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
    rules: any[]
): GraphQLError[];

export type NodeWithSelectionSet = OperationDefinitionNode | FragmentDefinitionNode;
export interface VariableUsage {
    node: VariableNode;
    type: GraphQLInputType;
}

/**
 * An instance of this class is passed as the "this" context to all validators,
 * allowing access to commonly useful contextual information from within a
 * validation rule.
 */
export class ValidationContext {
    constructor(schema: GraphQLSchema, ast: DocumentNode, typeInfo: TypeInfo);
    reportError(error: GraphQLError): void;

    getErrors(): GraphQLError[];

    getSchema(): GraphQLSchema;

    getDocument(): DocumentNode;

    getFragment(name: string): FragmentDefinitionNode;

    getFragmentSpreads(node: SelectionSetNode): FragmentSpreadNode[];

    getRecursivelyReferencedFragments(
        operation: OperationDefinitionNode
    ): FragmentDefinitionNode[];

    getVariableUsages(node: NodeWithSelectionSet): VariableUsage[];

    getRecursiveVariableUsages(
        operation: OperationDefinitionNode
    ): VariableUsage[];

    getType(): GraphQLOutputType;

    getParentType(): GraphQLCompositeType;

    getInputType(): GraphQLInputType;

    getFieldDef(): GraphQLField<any, any>;

    getDirective(): GraphQLDirective;

    getArgument(): GraphQLArgument;
}
