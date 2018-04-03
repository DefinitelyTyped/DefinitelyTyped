import { GraphQLError } from "../error";
import {
    DocumentNode,
    OperationDefinitionNode,
    VariableNode,
    SelectionSetNode,
    FragmentSpreadNode,
    FragmentDefinitionNode,
} from "../language/ast";
import { GraphQLSchema } from "../type/schema";
import {
    GraphQLInputType,
    GraphQLOutputType,
    GraphQLCompositeType,
    GraphQLField,
    GraphQLArgument,
} from "../type/definition";
import { GraphQLDirective } from "../type/directives";
import { TypeInfo } from "../utilities/TypeInfo";

type NodeWithSelectionSet = OperationDefinitionNode | FragmentDefinitionNode;
type VariableUsage = { node: VariableNode; type: GraphQLInputType | void };

/**
 * An instance of this class is passed as the "this" context to all validators,
 * allowing access to commonly useful contextual information from within a
 * validation rule.
 */
export default class ValidationContext {
    constructor(schema: GraphQLSchema, ast: DocumentNode, typeInfo: TypeInfo);

    reportError(error: GraphQLError): undefined;

    getErrors(): ReadonlyArray<GraphQLError>;

    getSchema(): GraphQLSchema;

    getDocument(): DocumentNode;

    getFragment(name: string): FragmentDefinitionNode | void;

    getFragmentSpreads(node: SelectionSetNode): ReadonlyArray<FragmentSpreadNode>;

    getRecursivelyReferencedFragments(operation: OperationDefinitionNode): ReadonlyArray<FragmentDefinitionNode>;

    getVariableUsages(node: NodeWithSelectionSet): ReadonlyArray<VariableUsage>;

    getRecursiveVariableUsages(operation: OperationDefinitionNode): ReadonlyArray<VariableUsage>;

    getType(): GraphQLOutputType | void;

    getParentType(): GraphQLCompositeType | void;

    getInputType(): GraphQLInputType | void;

    getParentInputType(): GraphQLInputType | void;

    getFieldDef(): GraphQLField<any, any> | void;

    getDirective(): GraphQLDirective | void;

    getArgument(): GraphQLArgument | void;
}
