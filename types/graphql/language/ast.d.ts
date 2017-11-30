import { Source } from './source';

/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
export interface Location {
    /**
     * The character offset at which this Node begins.
     */
    start: number;

    /**
     * The character offset at which this Node ends.
     */
    end: number;

    /**
     * The Token at which this Node begins.
     */
    startToken: Token;

    /**
     * The Token at which this Node ends.
     */
    endToken: Token;

    /**
     * The Source document the AST represents.
     */
    source: Source;
}

/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */
export interface Token {
    /**
     * The kind of Token.
     */
    kind:
        | '<SOF>'
        | '<EOF>'
        | '!'
        | '$'
        | '('
        | ')'
        | '...'
        | ':'
        | '='
        | '@'
        | '['
        | ']'
        | '{'
        | '|'
        | '}'
        | 'Name'
        | 'Int'
        | 'Float'
        | 'String'
        | 'Comment';

    /**
     * The character offset at which this Node begins.
     */
    start: number;

    /**
     * The character offset at which this Node ends.
     */
    end: number;

    /**
     * The 1-indexed line number on which this Token appears.
     */
    line: number;

    /**
     * The 1-indexed column number at which this Token begins.
     */
    column: number;

    /**
     * For non-punctuation tokens, represents the interpreted value of the token.
     */
    value: string | undefined;

    /**
     * Tokens exist as nodes in a double-linked-list amongst all tokens
     * including ignored tokens. <SOF> is always the first node and <EOF>
     * the last.
     */
    prev?: Token;
    next?: Token;
}

/**
 * The list of all possible AST node types.
 */
export type ASTNode =
    | NameNode
    | DocumentNode
    | OperationDefinitionNode
    | VariableDefinitionNode
    | VariableNode
    | SelectionSetNode
    | FieldNode
    | ArgumentNode
    | FragmentSpreadNode
    | InlineFragmentNode
    | FragmentDefinitionNode
    | IntValueNode
    | FloatValueNode
    | StringValueNode
    | BooleanValueNode
    | NullValueNode
    | EnumValueNode
    | ListValueNode
    | ObjectValueNode
    | ObjectFieldNode
    | DirectiveNode
    | NamedTypeNode
    | ListTypeNode
    | NonNullTypeNode
    | SchemaDefinitionNode
    | OperationTypeDefinitionNode
    | ScalarTypeDefinitionNode
    | ObjectTypeDefinitionNode
    | FieldDefinitionNode
    | InputValueDefinitionNode
    | InterfaceTypeDefinitionNode
    | UnionTypeDefinitionNode
    | EnumTypeDefinitionNode
    | EnumValueDefinitionNode
    | InputObjectTypeDefinitionNode
    | TypeExtensionDefinitionNode
    | DirectiveDefinitionNode;

// Name

export interface NameNode {
    kind: 'Name';
    loc?: Location;
    value: string;
}

// Document

export interface DocumentNode {
    kind: 'Document';
    loc?: Location;
    definitions: DefinitionNode[];
}

export type DefinitionNode =
    | OperationDefinitionNode
    | FragmentDefinitionNode
    | TypeSystemDefinitionNode; // experimental non-spec addition.

export interface OperationDefinitionNode {
    kind: 'OperationDefinition';
    loc?: Location;
    operation: OperationTypeNode;
    name?: NameNode;
    variableDefinitions?: VariableDefinitionNode[];
    directives?: DirectiveNode[];
    selectionSet: SelectionSetNode;
}

// Note: subscription is an experimental non-spec addition.
export type OperationTypeNode = 'query' | 'mutation' | 'subscription';

export interface VariableDefinitionNode {
    kind: 'VariableDefinition';
    loc?: Location;
    variable: VariableNode;
    type: TypeNode;
    defaultValue?: ValueNode;
}

export interface VariableNode {
    kind: 'Variable';
    loc?: Location;
    name: NameNode;
}

export interface SelectionSetNode {
    kind: 'SelectionSet';
    loc?: Location;
    selections: SelectionNode[];
}

export type SelectionNode =
    | FieldNode
    | FragmentSpreadNode
    | InlineFragmentNode;

export interface FieldNode {
    kind: 'Field';
    loc?: Location;
    alias?: NameNode;
    name: NameNode;
    arguments?: ArgumentNode[];
    directives?: DirectiveNode[];
    selectionSet?: SelectionSetNode;
}

export interface ArgumentNode {
    kind: 'Argument';
    loc?: Location;
    name: NameNode;
    value: ValueNode;
}

// Fragments

export interface FragmentSpreadNode {
    kind: 'FragmentSpread';
    loc?: Location;
    name: NameNode;
    directives?: DirectiveNode[];
}

export interface InlineFragmentNode {
    kind: 'InlineFragment';
    loc?: Location;
    typeCondition?: NamedTypeNode;
    directives?: DirectiveNode[];
    selectionSet: SelectionSetNode;
}

export interface FragmentDefinitionNode {
    kind: 'FragmentDefinition';
    loc?: Location;
    name: NameNode;
    typeCondition: NamedTypeNode;
    directives?: DirectiveNode[];
    selectionSet: SelectionSetNode;
}

// Values

export type ValueNode =
    | VariableNode
    | IntValueNode
    | FloatValueNode
    | StringValueNode
    | BooleanValueNode
    | NullValueNode
    | EnumValueNode
    | ListValueNode
    | ObjectValueNode;

export interface IntValueNode {
    kind: 'IntValue';
    loc?: Location;
    value: string;
}

export interface FloatValueNode {
    kind: 'FloatValue';
    loc?: Location;
    value: string;
}

export interface StringValueNode {
    kind: 'StringValue';
    loc?: Location;
    value: string;
}

export interface BooleanValueNode {
    kind: 'BooleanValue';
    loc?: Location;
    value: boolean;
}

export interface NullValueNode {
    kind: 'NullValue';
    loc?: Location;
}

export interface EnumValueNode {
    kind: 'EnumValue';
    loc?: Location;
    value: string;
}

export interface ListValueNode {
    kind: 'ListValue';
    loc?: Location;
    values: ValueNode[];
}

export interface ObjectValueNode {
    kind: 'ObjectValue';
    loc?: Location;
    fields: ObjectFieldNode[];
}

export interface ObjectFieldNode {
    kind: 'ObjectField';
    loc?: Location;
    name: NameNode;
    value: ValueNode;
}

// Directives

export interface DirectiveNode {
    kind: 'Directive';
    loc?: Location;
    name: NameNode;
    arguments?: ArgumentNode[];
}

// Type Reference

export type TypeNode =
    | NamedTypeNode
    | ListTypeNode
    | NonNullTypeNode;

export interface NamedTypeNode {
    kind: 'NamedType';
    loc?: Location;
    name: NameNode;
}

export interface ListTypeNode {
    kind: 'ListType';
    loc?: Location;
    type: TypeNode;
}

export interface NonNullTypeNode {
    kind: 'NonNullType';
    loc?: Location;
    type: NamedTypeNode | ListTypeNode;
}

// Type System Definition

export type TypeSystemDefinitionNode =
    | SchemaDefinitionNode
    | TypeDefinitionNode
    | TypeExtensionDefinitionNode
    | DirectiveDefinitionNode;

export interface SchemaDefinitionNode {
    kind: 'SchemaDefinition';
    loc?: Location;
    directives: DirectiveNode[];
    operationTypes: OperationTypeDefinitionNode[];
}

export interface OperationTypeDefinitionNode {
    kind: 'OperationTypeDefinition';
    loc?: Location;
    operation: OperationTypeNode;
    type: NamedTypeNode;
}

export type TypeDefinitionNode =
    | ScalarTypeDefinitionNode
    | ObjectTypeDefinitionNode
    | InterfaceTypeDefinitionNode
    | UnionTypeDefinitionNode
    | EnumTypeDefinitionNode
    | InputObjectTypeDefinitionNode;

export interface ScalarTypeDefinitionNode {
    kind: 'ScalarTypeDefinition';
    loc?: Location;
    name: NameNode;
    directives?: DirectiveNode[];
}

export interface ObjectTypeDefinitionNode {
    kind: 'ObjectTypeDefinition';
    loc?: Location;
    name: NameNode;
    interfaces?: NamedTypeNode[];
    directives?: DirectiveNode[];
    fields: FieldDefinitionNode[];
}

export interface FieldDefinitionNode {
    kind: 'FieldDefinition';
    loc?: Location;
    name: NameNode;
    arguments: InputValueDefinitionNode[];
    type: TypeNode;
    directives?: DirectiveNode[];
}

export interface InputValueDefinitionNode {
    kind: 'InputValueDefinition';
    loc?: Location;
    name: NameNode;
    type: TypeNode;
    defaultValue?: ValueNode;
    directives?: DirectiveNode[];
}

export interface InterfaceTypeDefinitionNode {
    kind: 'InterfaceTypeDefinition';
    loc?: Location;
    name: NameNode;
    directives?: DirectiveNode[];
    fields: FieldDefinitionNode[];
}

export interface UnionTypeDefinitionNode {
    kind: 'UnionTypeDefinition';
    loc?: Location;
    name: NameNode;
    directives?: DirectiveNode[];
    types: NamedTypeNode[];
}

export interface EnumTypeDefinitionNode {
    kind: 'EnumTypeDefinition';
    loc?: Location;
    name: NameNode;
    directives?: DirectiveNode[];
    values: EnumValueDefinitionNode[];
}

export interface EnumValueDefinitionNode {
    kind: 'EnumValueDefinition';
    loc?: Location;
    name: NameNode;
    directives?: DirectiveNode[];
}

export interface InputObjectTypeDefinitionNode {
    kind: 'InputObjectTypeDefinition';
    loc?: Location;
    name: NameNode;
    directives?: DirectiveNode[];
    fields: InputValueDefinitionNode[];
}

export interface TypeExtensionDefinitionNode {
    kind: 'TypeExtensionDefinition';
    loc?: Location;
    definition: ObjectTypeDefinitionNode;
}

export interface DirectiveDefinitionNode {
    kind: 'DirectiveDefinition';
    loc?: Location;
    name: NameNode;
    arguments?: InputValueDefinitionNode[];
    locations: NameNode[];
}
