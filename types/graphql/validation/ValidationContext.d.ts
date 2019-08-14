import Maybe from "../tsutils/Maybe";
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
import { ASTVisitor } from "../language/visitor";

type NodeWithSelectionSet = OperationDefinitionNode | FragmentDefinitionNode;
type VariableUsage = {
    readonly node: VariableNode;
    readonly type: Maybe<GraphQLInputType>;
    readonly defaultValue: Maybe<any>;
};

/**
 * An instance of this class is passed as the "this" context to all validators,
 * allowing access to commonly useful contextual information from within a
 * validation rule.
 */
export class ASTValidationContext {
    constructor(ast: DocumentNode);

    reportError(error: GraphQLError): undefined;

    getErrors(): ReadonlyArray<GraphQLError>;

    getDocument(): DocumentNode;
}

export class SDLValidationContext extends ASTValidationContext {
    constructor(ast: DocumentNode, schema?: Maybe<GraphQLSchema>);

    getSchema(): Maybe<GraphQLSchema>;
}

export type SDLValidationRule = (context: SDLValidationContext) => ASTVisitor;

export class ValidationContext extends ASTValidationContext {
    constructor(schema: GraphQLSchema, ast: DocumentNode, typeInfo: TypeInfo);

    getSchema(): GraphQLSchema;

    getFragment(name: string): Maybe<FragmentDefinitionNode>;

    getFragmentSpreads(node: SelectionSetNode): ReadonlyArray<FragmentSpreadNode>;

    getRecursivelyReferencedFragments(operation: OperationDefinitionNode): ReadonlyArray<FragmentDefinitionNode>;

    getVariableUsages(node: NodeWithSelectionSet): ReadonlyArray<VariableUsage>;

    getRecursiveVariableUsages(operation: OperationDefinitionNode): ReadonlyArray<VariableUsage>;

    getType(): Maybe<GraphQLOutputType>;

    getParentType(): Maybe<GraphQLCompositeType>;

    getInputType(): Maybe<GraphQLInputType>;

    getParentInputType(): Maybe<GraphQLInputType>;

    getFieldDef(): Maybe<GraphQLField<any, any>>;

    getDirective(): Maybe<GraphQLDirective>;

    getArgument(): Maybe<GraphQLArgument>;
}

export type ValidationRule = (context: ValidationContext) => ASTVisitor;
