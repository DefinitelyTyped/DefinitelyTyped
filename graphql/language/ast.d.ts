import { Source } from './source';

/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
export type Location = {

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
};

/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */
export type Token = {

    /**
     * The kind of Token.
     */
    kind: '<SOF>'
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
    value: string | void;

    /**
     * Tokens exist as nodes in a double-linked-list amongst all tokens
     * including ignored tokens. <SOF> is always the first node and <EOF>
     * the last.
     */
    prev?: Token;
    next?: Token;
};

/**
 * The list of all possible AST node types.
 */
export type ASTNode = NameNode
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

export type NameNode = {
    kind: 'Name';
    loc?: Location;
    value: string;
}

// Document

export type DocumentNode = {
    kind: 'Document';
    loc?: Location;
    definitions: Array<DefinitionNode>;
}

export type DefinitionNode = OperationDefinitionNode
    | FragmentDefinitionNode
    | TypeSystemDefinitionNode // experimental non-spec addition.

export type OperationDefinitionNode = {
    kind: 'OperationDefinition';
    loc?: Location;
    operation: OperationTypeNode;
    name?: NameNode;
    variableDefinitions?: Array<VariableDefinitionNode>;
    directives?: Array<DirectiveNode>;
    selectionSet: SelectionSetNode;
}

// Note: subscription is an experimental non-spec addition.
export type OperationTypeNode = 'query' | 'mutation' | 'subscription';

export type VariableDefinitionNode = {
    kind: 'VariableDefinition';
    loc?: Location;
    variable: VariableNode;
    type: TypeNode;
    defaultValue?: ValueNode;
}

export type VariableNode = {
    kind: 'Variable';
    loc?: Location;
    name: NameNode;
}

export type SelectionSetNode = {
    kind: 'SelectionSet';
    loc?: Location;
    selections: Array<SelectionNode>;
}

export type SelectionNode = FieldNode
    | FragmentSpreadNode
    | InlineFragmentNode

export type FieldNode = {
    kind: 'Field';
    loc?: Location;
    alias?: NameNode;
    name: NameNode;
    arguments?: Array<ArgumentNode>;
    directives?: Array<DirectiveNode>;
    selectionSet?: SelectionSetNode;
}

export type ArgumentNode = {
    kind: 'Argument';
    loc?: Location;
    name: NameNode;
    value: ValueNode;
}


// Fragments

export type FragmentSpreadNode = {
    kind: 'FragmentSpread';
    loc?: Location;
    name: NameNode;
    directives?: Array<DirectiveNode>;
}

export type InlineFragmentNode = {
    kind: 'InlineFragment';
    loc?: Location;
    typeCondition?: NamedTypeNode;
    directives?: Array<DirectiveNode>;
    selectionSet: SelectionSetNode;
}

export type FragmentDefinitionNode = {
    kind: 'FragmentDefinition';
    loc?: Location;
    name: NameNode;
    typeCondition: NamedTypeNode;
    directives?: Array<DirectiveNode>;
    selectionSet: SelectionSetNode;
}


// Values

export type ValueNode = VariableNode
    | IntValueNode
    | FloatValueNode
    | StringValueNode
    | BooleanValueNode
    | NullValueNode
    | EnumValueNode
    | ListValueNode
    | ObjectValueNode

export type IntValueNode = {
    kind: 'IntValue';
    loc?: Location;
    value: string;
}

export type FloatValueNode = {
    kind: 'FloatValue';
    loc?: Location;
    value: string;
}

export type StringValueNode = {
    kind: 'StringValue';
    loc?: Location;
    value: string;
}

export type BooleanValueNode = {
    kind: 'BooleanValue';
    loc?: Location;
    value: boolean;
}

export type NullValueNode = {
    kind: 'NullValue';
    loc?: Location;
}

export type EnumValueNode = {
    kind: 'EnumValue';
    loc?: Location;
    value: string;
}

export type ListValueNode = {
    kind: 'ListValue';
    loc?: Location;
    values: Array<ValueNode>;
}

export type ObjectValueNode = {
    kind: 'ObjectValue';
    loc?: Location;
    fields: Array<ObjectFieldNode>;
}

export type ObjectFieldNode = {
    kind: 'ObjectField';
    loc?: Location;
    name: NameNode;
    value: ValueNode;
}


// Directives

export type DirectiveNode = {
    kind: 'Directive';
    loc?: Location;
    name: NameNode;
    arguments?: Array<ArgumentNode>;
}


// Type Reference

export type TypeNode = NamedTypeNode
    | ListTypeNode
    | NonNullTypeNode

export type NamedTypeNode = {
    kind: 'NamedType';
    loc?: Location;
    name: NameNode;
};

export type ListTypeNode = {
    kind: 'ListType';
    loc?: Location;
    type: TypeNode;
}

export type NonNullTypeNode = {
    kind: 'NonNullType';
    loc?: Location;
    type: NamedTypeNode | ListTypeNode;
}

// Type System Definition

export type TypeSystemDefinitionNode = SchemaDefinitionNode
    | TypeDefinitionNode
    | TypeExtensionDefinitionNode
    | DirectiveDefinitionNode

export type SchemaDefinitionNode = {
    kind: 'SchemaDefinition';
    loc?: Location;
    directives: Array<DirectiveNode>;
    operationTypes: Array<OperationTypeDefinitionNode>;
}

export type OperationTypeDefinitionNode = {
    kind: 'OperationTypeDefinition';
    loc?: Location;
    operation: OperationTypeNode;
    type: NamedTypeNode;
}

export type TypeDefinitionNode = ScalarTypeDefinitionNode
    | ObjectTypeDefinitionNode
    | InterfaceTypeDefinitionNode
    | UnionTypeDefinitionNode
    | EnumTypeDefinitionNode
    | InputObjectTypeDefinitionNode

export type ScalarTypeDefinitionNode = {
    kind: 'ScalarTypeDefinition';
    loc?: Location;
    name: NameNode;
    directives?: Array<DirectiveNode>;
}

export type ObjectTypeDefinitionNode = {
    kind: 'ObjectTypeDefinition';
    loc?: Location;
    name: NameNode;
    interfaces?: Array<NamedTypeNode>;
    directives?: Array<DirectiveNode>;
    fields: Array<FieldDefinitionNode>;
}

export type FieldDefinitionNode = {
    kind: 'FieldDefinition';
    loc?: Location;
    name: NameNode;
    arguments: Array<InputValueDefinitionNode>;
    type: TypeNode;
    directives?: Array<DirectiveNode>;
}

export type InputValueDefinitionNode = {
    kind: 'InputValueDefinition';
    loc?: Location;
    name: NameNode;
    type: TypeNode;
    defaultValue?: ValueNode;
    directives?: Array<DirectiveNode>;
}

export type InterfaceTypeDefinitionNode = {
    kind: 'InterfaceTypeDefinition';
    loc?: Location;
    name: NameNode;
    directives?: Array<DirectiveNode>;
    fields: Array<FieldDefinitionNode>;
}

export type UnionTypeDefinitionNode = {
    kind: 'UnionTypeDefinition';
    loc?: Location;
    name: NameNode;
    directives?: Array<DirectiveNode>;
    types: Array<NamedTypeNode>;
}

export type EnumTypeDefinitionNode = {
    kind: 'EnumTypeDefinition';
    loc?: Location;
    name: NameNode;
    directives?: Array<DirectiveNode>;
    values: Array<EnumValueDefinitionNode>;
}

export type EnumValueDefinitionNode = {
    kind: 'EnumValueDefinition';
    loc?: Location;
    name: NameNode;
    directives?: Array<DirectiveNode>;
}

export type InputObjectTypeDefinitionNode = {
    kind: 'InputObjectTypeDefinition';
    loc?: Location;
    name: NameNode;
    directives?: Array<DirectiveNode>;
    fields: Array<InputValueDefinitionNode>;
}

export type TypeExtensionDefinitionNode = {
    kind: 'TypeExtensionDefinition';
    loc?: Location;
    definition: ObjectTypeDefinitionNode;
}

export type DirectiveDefinitionNode = {
    kind: 'DirectiveDefinition';
    loc?: Location;
    name: NameNode;
    arguments?: Array<InputValueDefinitionNode>;
    locations: Array<NameNode>;
}
