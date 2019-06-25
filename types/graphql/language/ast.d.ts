import { Source } from "./source";
import { TokenKindEnum } from "./lexer";

/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
export interface Location {
    /**
     * The character offset at which this Node begins.
     */
    readonly start: number;

    /**
     * The character offset at which this Node ends.
     */
    readonly end: number;

    /**
     * The Token at which this Node begins.
     */
    readonly startToken: Token;

    /**
     * The Token at which this Node ends.
     */
    readonly endToken: Token;

    /**
     * The Source document the AST represents.
     */
    readonly source: Source;
}

/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */
export interface Token {
    /**
     * The kind of Token.
     */
    readonly kind: TokenKindEnum;

    /**
     * The character offset at which this Node begins.
     */
    readonly start: number;

    /**
     * The character offset at which this Node ends.
     */
    readonly end: number;

    /**
     * The 1-indexed line number on which this Token appears.
     */
    readonly line: number;

    /**
     * The 1-indexed column number at which this Token begins.
     */
    readonly column: number;

    /**
     * For non-punctuation tokens, represents the interpreted value of the token.
     */
    readonly value: string | undefined;

    /**
     * Tokens exist as nodes in a double-linked-list amongst all tokens
     * including ignored tokens. <SOF> is always the first node and <EOF>
     * the last.
     */
    readonly prev: Token | null;
    readonly next: Token | null;
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
    | DirectiveDefinitionNode
    | SchemaExtensionNode
    | ScalarTypeExtensionNode
    | ObjectTypeExtensionNode
    | InterfaceTypeExtensionNode
    | UnionTypeExtensionNode
    | EnumTypeExtensionNode
    | InputObjectTypeExtensionNode;

/**
 * Utility type listing all nodes indexed by their kind.
 */
export interface ASTKindToNode {
    Name: NameNode;
    Document: DocumentNode;
    OperationDefinition: OperationDefinitionNode;
    VariableDefinition: VariableDefinitionNode;
    Variable: VariableNode;
    SelectionSet: SelectionSetNode;
    Field: FieldNode;
    Argument: ArgumentNode;
    FragmentSpread: FragmentSpreadNode;
    InlineFragment: InlineFragmentNode;
    FragmentDefinition: FragmentDefinitionNode;
    IntValue: IntValueNode;
    FloatValue: FloatValueNode;
    StringValue: StringValueNode;
    BooleanValue: BooleanValueNode;
    NullValue: NullValueNode;
    EnumValue: EnumValueNode;
    ListValue: ListValueNode;
    ObjectValue: ObjectValueNode;
    ObjectField: ObjectFieldNode;
    Directive: DirectiveNode;
    NamedType: NamedTypeNode;
    ListType: ListTypeNode;
    NonNullType: NonNullTypeNode;
    SchemaDefinition: SchemaDefinitionNode;
    OperationTypeDefinition: OperationTypeDefinitionNode;
    ScalarTypeDefinition: ScalarTypeDefinitionNode;
    ObjectTypeDefinition: ObjectTypeDefinitionNode;
    FieldDefinition: FieldDefinitionNode;
    InputValueDefinition: InputValueDefinitionNode;
    InterfaceTypeDefinition: InterfaceTypeDefinitionNode;
    UnionTypeDefinition: UnionTypeDefinitionNode;
    EnumTypeDefinition: EnumTypeDefinitionNode;
    EnumValueDefinition: EnumValueDefinitionNode;
    InputObjectTypeDefinition: InputObjectTypeDefinitionNode;
    DirectiveDefinition: DirectiveDefinitionNode;
    SchemaExtension: SchemaExtensionNode;
    ScalarTypeExtension: ScalarTypeExtensionNode;
    ObjectTypeExtension: ObjectTypeExtensionNode;
    InterfaceTypeExtension: InterfaceTypeExtensionNode;
    UnionTypeExtension: UnionTypeExtensionNode;
    EnumTypeExtension: EnumTypeExtensionNode;
    InputObjectTypeExtension: InputObjectTypeExtensionNode;
}

// Name

export interface NameNode {
    readonly kind: "Name";
    readonly loc?: Location;
    readonly value: string;
}

// Document

export interface DocumentNode {
    readonly kind: "Document";
    readonly loc?: Location;
    readonly definitions: ReadonlyArray<DefinitionNode>;
}

export type DefinitionNode = ExecutableDefinitionNode | TypeSystemDefinitionNode | TypeSystemExtensionNode;

export type ExecutableDefinitionNode = OperationDefinitionNode | FragmentDefinitionNode;

export interface OperationDefinitionNode {
    readonly kind: "OperationDefinition";
    readonly loc?: Location;
    readonly operation: OperationTypeNode;
    readonly name?: NameNode;
    readonly variableDefinitions?: ReadonlyArray<VariableDefinitionNode>;
    readonly directives?: ReadonlyArray<DirectiveNode>;
    readonly selectionSet: SelectionSetNode;
}

export type OperationTypeNode = "query" | "mutation" | "subscription";

export interface VariableDefinitionNode {
    readonly kind: "VariableDefinition";
    readonly loc?: Location;
    readonly variable: VariableNode;
    readonly type: TypeNode;
    readonly defaultValue?: ValueNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
}

export interface VariableNode {
    readonly kind: "Variable";
    readonly loc?: Location;
    readonly name: NameNode;
}

export interface SelectionSetNode {
    kind: "SelectionSet";
    loc?: Location;
    selections: ReadonlyArray<SelectionNode>;
}

export type SelectionNode = FieldNode | FragmentSpreadNode | InlineFragmentNode;

export interface FieldNode {
    readonly kind: "Field";
    readonly loc?: Location;
    readonly alias?: NameNode;
    readonly name: NameNode;
    readonly arguments?: ReadonlyArray<ArgumentNode>;
    readonly directives?: ReadonlyArray<DirectiveNode>;
    readonly selectionSet?: SelectionSetNode;
}

export interface ArgumentNode {
    readonly kind: "Argument";
    readonly loc?: Location;
    readonly name: NameNode;
    readonly value: ValueNode;
}

// Fragments

export interface FragmentSpreadNode {
    readonly kind: "FragmentSpread";
    readonly loc?: Location;
    readonly name: NameNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
}

export interface InlineFragmentNode {
    readonly kind: "InlineFragment";
    readonly loc?: Location;
    readonly typeCondition?: NamedTypeNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
    readonly selectionSet: SelectionSetNode;
}

export interface FragmentDefinitionNode {
    readonly kind: "FragmentDefinition";
    readonly loc?: Location;
    readonly name: NameNode;
    // Note: fragment variable definitions are experimental and may be changed
    // or removed in the future.
    readonly variableDefinitions?: ReadonlyArray<VariableDefinitionNode>;
    readonly typeCondition: NamedTypeNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
    readonly selectionSet: SelectionSetNode;
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
    readonly kind: "IntValue";
    readonly loc?: Location;
    readonly value: string;
}

export interface FloatValueNode {
    readonly kind: "FloatValue";
    readonly loc?: Location;
    readonly value: string;
}

export interface StringValueNode {
    readonly kind: "StringValue";
    readonly loc?: Location;
    readonly value: string;
    readonly block?: boolean;
}

export interface BooleanValueNode {
    readonly kind: "BooleanValue";
    readonly loc?: Location;
    readonly value: boolean;
}

export interface NullValueNode {
    readonly kind: "NullValue";
    readonly loc?: Location;
}

export interface EnumValueNode {
    readonly kind: "EnumValue";
    readonly loc?: Location;
    readonly value: string;
}

export interface ListValueNode {
    readonly kind: "ListValue";
    readonly loc?: Location;
    readonly values: ReadonlyArray<ValueNode>;
}

export interface ObjectValueNode {
    readonly kind: "ObjectValue";
    readonly loc?: Location;
    readonly fields: ReadonlyArray<ObjectFieldNode>;
}

export interface ObjectFieldNode {
    readonly kind: "ObjectField";
    readonly loc?: Location;
    readonly name: NameNode;
    readonly value: ValueNode;
}

// Directives

export interface DirectiveNode {
    readonly kind: "Directive";
    readonly loc?: Location;
    readonly name: NameNode;
    readonly arguments?: ReadonlyArray<ArgumentNode>;
}

// Type Reference

export type TypeNode = NamedTypeNode | ListTypeNode | NonNullTypeNode;

export interface NamedTypeNode {
    readonly kind: "NamedType";
    readonly loc?: Location;
    readonly name: NameNode;
}

export interface ListTypeNode {
    readonly kind: "ListType";
    readonly loc?: Location;
    readonly type: TypeNode;
}

export interface NonNullTypeNode {
    readonly kind: "NonNullType";
    readonly loc?: Location;
    readonly type: NamedTypeNode | ListTypeNode;
}

// Type System Definition

export type TypeSystemDefinitionNode = SchemaDefinitionNode | TypeDefinitionNode | DirectiveDefinitionNode;

export interface SchemaDefinitionNode {
    readonly kind: "SchemaDefinition";
    readonly loc?: Location;
    readonly directives?: ReadonlyArray<DirectiveNode>;
    readonly operationTypes: ReadonlyArray<OperationTypeDefinitionNode>;
}

export interface OperationTypeDefinitionNode {
    readonly kind: "OperationTypeDefinition";
    readonly loc?: Location;
    readonly operation: OperationTypeNode;
    readonly type: NamedTypeNode;
}

// Type Definition

export type TypeDefinitionNode =
    | ScalarTypeDefinitionNode
    | ObjectTypeDefinitionNode
    | InterfaceTypeDefinitionNode
    | UnionTypeDefinitionNode
    | EnumTypeDefinitionNode
    | InputObjectTypeDefinitionNode;

export interface ScalarTypeDefinitionNode {
    readonly kind: "ScalarTypeDefinition";
    readonly loc?: Location;
    readonly description?: StringValueNode;
    readonly name: NameNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
}

export interface ObjectTypeDefinitionNode {
    readonly kind: "ObjectTypeDefinition";
    readonly loc?: Location;
    readonly description?: StringValueNode;
    readonly name: NameNode;
    readonly interfaces?: ReadonlyArray<NamedTypeNode>;
    readonly directives?: ReadonlyArray<DirectiveNode>;
    readonly fields?: ReadonlyArray<FieldDefinitionNode>;
}

export interface FieldDefinitionNode {
    readonly kind: "FieldDefinition";
    readonly loc?: Location;
    readonly description?: StringValueNode;
    readonly name: NameNode;
    readonly arguments?: ReadonlyArray<InputValueDefinitionNode>;
    readonly type: TypeNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
}

export interface InputValueDefinitionNode {
    readonly kind: "InputValueDefinition";
    readonly loc?: Location;
    readonly description?: StringValueNode;
    readonly name: NameNode;
    readonly type: TypeNode;
    readonly defaultValue?: ValueNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
}

export interface InterfaceTypeDefinitionNode {
    readonly kind: "InterfaceTypeDefinition";
    readonly loc?: Location;
    readonly description?: StringValueNode;
    readonly name: NameNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
    readonly fields?: ReadonlyArray<FieldDefinitionNode>;
}

export interface UnionTypeDefinitionNode {
    readonly kind: "UnionTypeDefinition";
    readonly loc?: Location;
    readonly description?: StringValueNode;
    readonly name: NameNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
    readonly types?: ReadonlyArray<NamedTypeNode>;
}

export interface EnumTypeDefinitionNode {
    readonly kind: "EnumTypeDefinition";
    readonly loc?: Location;
    readonly description?: StringValueNode;
    readonly name: NameNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
    readonly values?: ReadonlyArray<EnumValueDefinitionNode>;
}

export interface EnumValueDefinitionNode {
    readonly kind: "EnumValueDefinition";
    readonly loc?: Location;
    readonly description?: StringValueNode;
    readonly name: NameNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
}

export interface InputObjectTypeDefinitionNode {
    readonly kind: "InputObjectTypeDefinition";
    readonly loc?: Location;
    readonly description?: StringValueNode;
    readonly name: NameNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
    readonly fields?: ReadonlyArray<InputValueDefinitionNode>;
}

// Directive Definitions

export interface DirectiveDefinitionNode {
    readonly kind: "DirectiveDefinition";
    readonly loc?: Location;
    readonly description?: StringValueNode;
    readonly name: NameNode;
    readonly arguments?: ReadonlyArray<InputValueDefinitionNode>;
    readonly repeatable: boolean;
    readonly locations: ReadonlyArray<NameNode>;
}

// Type System Extensions

export type TypeSystemExtensionNode = SchemaExtensionNode | TypeExtensionNode;

export type SchemaExtensionNode = {
    readonly kind: "SchemaExtension";
    readonly loc?: Location;
    readonly directives?: ReadonlyArray<DirectiveNode>;
    readonly operationTypes?: ReadonlyArray<OperationTypeDefinitionNode>;
};

// Type Extensions

export type TypeExtensionNode =
    | ScalarTypeExtensionNode
    | ObjectTypeExtensionNode
    | InterfaceTypeExtensionNode
    | UnionTypeExtensionNode
    | EnumTypeExtensionNode
    | InputObjectTypeExtensionNode;

export interface ScalarTypeExtensionNode {
    readonly kind: "ScalarTypeExtension";
    readonly loc?: Location;
    readonly name: NameNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
}

export interface ObjectTypeExtensionNode {
    readonly kind: "ObjectTypeExtension";
    readonly loc?: Location;
    readonly name: NameNode;
    readonly interfaces?: ReadonlyArray<NamedTypeNode>;
    readonly directives?: ReadonlyArray<DirectiveNode>;
    readonly fields?: ReadonlyArray<FieldDefinitionNode>;
}

export interface InterfaceTypeExtensionNode {
    readonly kind: "InterfaceTypeExtension";
    readonly loc?: Location;
    readonly name: NameNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
    readonly fields?: ReadonlyArray<FieldDefinitionNode>;
}

export interface UnionTypeExtensionNode {
    readonly kind: "UnionTypeExtension";
    readonly loc?: Location;
    readonly name: NameNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
    readonly types?: ReadonlyArray<NamedTypeNode>;
}

export interface EnumTypeExtensionNode {
    readonly kind: "EnumTypeExtension";
    readonly loc?: Location;
    readonly name: NameNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
    readonly values?: ReadonlyArray<EnumValueDefinitionNode>;
}

export interface InputObjectTypeExtensionNode {
    readonly kind: "InputObjectTypeExtension";
    readonly loc?: Location;
    readonly name: NameNode;
    readonly directives?: ReadonlyArray<DirectiveNode>;
    readonly fields?: ReadonlyArray<InputValueDefinitionNode>;
}
