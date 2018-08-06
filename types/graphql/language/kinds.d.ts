/**
 * The set of allowed kind values for AST nodes.
 */
export const Kind: _Kind;

// @internal
type _Kind = {
    // Name
    NAME: "Name";

    // Document
    DOCUMENT: "Document";
    OPERATION_DEFINITION: "OperationDefinition";
    VARIABLE_DEFINITION: "VariableDefinition";
    VARIABLE: "Variable";
    SELECTION_SET: "SelectionSet";
    FIELD: "Field";
    ARGUMENT: "Argument";

    // Fragments
    FRAGMENT_SPREAD: "FragmentSpread";
    INLINE_FRAGMENT: "InlineFragment";
    FRAGMENT_DEFINITION: "FragmentDefinition";

    // Values
    INT: "IntValue";
    FLOAT: "FloatValue";
    STRING: "StringValue";
    BOOLEAN: "BooleanValue";
    NULL: "NullValue";
    ENUM: "EnumValue";
    LIST: "ListValue";
    OBJECT: "ObjectValue";
    OBJECT_FIELD: "ObjectField";

    // Directives
    DIRECTIVE: "Directive";

    // Types
    NAMED_TYPE: "NamedType";
    LIST_TYPE: "ListType";
    NON_NULL_TYPE: "NonNullType";

    // Type System Definitions
    SCHEMA_DEFINITION: "SchemaDefinition";
    OPERATION_TYPE_DEFINITION: "OperationTypeDefinition";

    // Type Definitions
    SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition";
    OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition";
    FIELD_DEFINITION: "FieldDefinition";
    INPUT_VALUE_DEFINITION: "InputValueDefinition";
    INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition";
    UNION_TYPE_DEFINITION: "UnionTypeDefinition";
    ENUM_TYPE_DEFINITION: "EnumTypeDefinition";
    ENUM_VALUE_DEFINITION: "EnumValueDefinition";
    INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition";

    // Type Extensions
    SCALAR_TYPE_EXTENSION: "ScalarTypeExtension";
    OBJECT_TYPE_EXTENSION: "ObjectTypeExtension";
    INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension";
    UNION_TYPE_EXTENSION: "UnionTypeExtension";
    ENUM_TYPE_EXTENSION: "EnumTypeExtension";
    INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension";

    // Directive Definitions
    DIRECTIVE_DEFINITION: "DirectiveDefinition";
};

/**
 * The enum type representing the possible kind values of AST nodes.
 */
export type KindEnum = _Kind[keyof _Kind];
