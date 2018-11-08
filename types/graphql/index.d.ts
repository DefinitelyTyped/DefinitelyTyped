// Type definitions for graphql 14.0
// Project: https://www.npmjs.com/package/graphql
// Definitions by: TonyYang <https://github.com/TonyPythoneer>
//                 Caleb Meredith <https://github.com/calebmer>
//                 Dominic Watson <https://github.com/intellix>
//                 Firede <https://github.com/firede>
//                 Kepennar <https://github.com/kepennar>
//                 Mikhail Novikov <https://github.com/freiksenet>
//                 Ivan Goncharov <https://github.com/IvanGoncharov>
//                 Hagai Cohen <https://github.com/DxCx>
//                 Ricardo Portugal <https://github.com/rportugal>
//                 Tim Griesser <https://github.com/tgriesser>
//                 Dylan Stewart <https://github.com/dyst5422>
//                 Alessio Dionisi <https://github.com/adnsio>
//                 Divyendu Singh <https://github.com/divyenduz>
//                 Brad Zacher <https://github.com/bradzacher>
//                 Curtis Layne <https://github.com/clayne11>
//                 Jonathan Cardoso <https://github.com/JCMais>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

// The primary entry point into fulfilling a GraphQL request.
export { graphql, graphqlSync, GraphQLArgs } from "./graphql";

// Create and operate on GraphQL type definitions and schema.
export {
    GraphQLSchema,
    // Definitions
    GraphQLScalarType,
    GraphQLObjectType,
    GraphQLInterfaceType,
    GraphQLUnionType,
    GraphQLEnumType,
    GraphQLInputObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLDirective,
    // "Enum" of Type Kinds
    TypeKind,
    // Scalars
    specifiedScalarTypes,
    GraphQLInt,
    GraphQLFloat,
    GraphQLString,
    GraphQLBoolean,
    GraphQLID,
    // Built-in Directives defined by the Spec
    specifiedDirectives,
    GraphQLIncludeDirective,
    GraphQLSkipDirective,
    GraphQLDeprecatedDirective,
    // Constant Deprecation Reason
    DEFAULT_DEPRECATION_REASON,
    // Meta-field definitions.
    SchemaMetaFieldDef,
    TypeMetaFieldDef,
    TypeNameMetaFieldDef,
    // GraphQL Types for introspection.
    introspectionTypes,
    __Schema,
    __Directive,
    __DirectiveLocation,
    __Type,
    __Field,
    __InputValue,
    __EnumValue,
    __TypeKind,
    // Predicates
    isSchema,
    isDirective,
    isType,
    isScalarType,
    isObjectType,
    isInterfaceType,
    isUnionType,
    isEnumType,
    isInputObjectType,
    isListType,
    isNonNullType,
    isInputType,
    isOutputType,
    isLeafType,
    isCompositeType,
    isAbstractType,
    isWrappingType,
    isNullableType,
    isNamedType,
    isRequiredArgument,
    isRequiredInputField,
    isSpecifiedScalarType,
    isIntrospectionType,
    isSpecifiedDirective,
    // Assertions
    assertType,
    assertScalarType,
    assertObjectType,
    assertInterfaceType,
    assertUnionType,
    assertEnumType,
    assertInputObjectType,
    assertListType,
    assertNonNullType,
    assertInputType,
    assertOutputType,
    assertLeafType,
    assertCompositeType,
    assertAbstractType,
    assertWrappingType,
    assertNullableType,
    assertNamedType,
    // Un-modifiers
    getNullableType,
    getNamedType,
    // Validate GraphQL schema.
    validateSchema,
    assertValidSchema,
    // type
    GraphQLType,
    GraphQLInputType,
    GraphQLOutputType,
    GraphQLLeafType,
    GraphQLCompositeType,
    GraphQLAbstractType,
    GraphQLWrappingType,
    GraphQLNullableType,
    GraphQLNamedType,
    Thunk,
    GraphQLSchemaConfig,
    GraphQLArgument,
    GraphQLArgumentConfig,
    GraphQLEnumTypeConfig,
    GraphQLEnumValue,
    GraphQLEnumValueConfig,
    GraphQLEnumValueConfigMap,
    GraphQLField,
    GraphQLFieldConfig,
    GraphQLFieldConfigArgumentMap,
    GraphQLFieldConfigMap,
    GraphQLFieldMap,
    GraphQLFieldResolver,
    GraphQLInputField,
    GraphQLInputFieldConfig,
    GraphQLInputFieldConfigMap,
    GraphQLInputFieldMap,
    GraphQLInputObjectTypeConfig,
    GraphQLInterfaceTypeConfig,
    GraphQLIsTypeOfFn,
    GraphQLObjectTypeConfig,
    GraphQLResolveInfo,
    ResponsePath,
    GraphQLScalarTypeConfig,
    GraphQLTypeResolver,
    GraphQLUnionTypeConfig,
    GraphQLDirectiveConfig,
    GraphQLScalarSerializer,
    GraphQLScalarValueParser,
    GraphQLScalarLiteralParser,
} from "./type";

// Parse and operate on GraphQL language source files.
export {
    Source,
    getLocation,
    // Parse
    parse,
    parseValue,
    parseType,
    // Print
    print,
    // Visit
    visit,
    visitInParallel,
    visitWithTypeInfo,
    getVisitFn,
    Kind,
    TokenKind,
    DirectiveLocation,
    BREAK,
    // Predicates
    isDefinitionNode,
    isExecutableDefinitionNode,
    isSelectionNode,
    isValueNode,
    isTypeNode,
    isTypeSystemDefinitionNode,
    isTypeDefinitionNode,
    isTypeSystemExtensionNode,
    isTypeExtensionNode,
    // type
    Lexer,
    ParseOptions,
    SourceLocation,
    // Visitor utilities
    ASTVisitor,
    Visitor,
    VisitFn,
    VisitorKeyMap,
    // AST nodes
    Location,
    Token,
    ASTNode,
    ASTKindToNode,
    NameNode,
    DocumentNode,
    DefinitionNode,
    ExecutableDefinitionNode,
    OperationDefinitionNode,
    OperationTypeNode,
    VariableDefinitionNode,
    VariableNode,
    SelectionSetNode,
    SelectionNode,
    FieldNode,
    ArgumentNode,
    FragmentSpreadNode,
    InlineFragmentNode,
    FragmentDefinitionNode,
    ValueNode,
    IntValueNode,
    FloatValueNode,
    StringValueNode,
    BooleanValueNode,
    NullValueNode,
    EnumValueNode,
    ListValueNode,
    ObjectValueNode,
    ObjectFieldNode,
    DirectiveNode,
    TypeNode,
    NamedTypeNode,
    ListTypeNode,
    NonNullTypeNode,
    TypeSystemDefinitionNode,
    SchemaDefinitionNode,
    OperationTypeDefinitionNode,
    TypeDefinitionNode,
    ScalarTypeDefinitionNode,
    ObjectTypeDefinitionNode,
    FieldDefinitionNode,
    InputValueDefinitionNode,
    InterfaceTypeDefinitionNode,
    UnionTypeDefinitionNode,
    EnumTypeDefinitionNode,
    EnumValueDefinitionNode,
    InputObjectTypeDefinitionNode,
    DirectiveDefinitionNode,
    TypeSystemExtensionNode,
    SchemaExtensionNode,
    TypeExtensionNode,
    ScalarTypeExtensionNode,
    ObjectTypeExtensionNode,
    InterfaceTypeExtensionNode,
    UnionTypeExtensionNode,
    EnumTypeExtensionNode,
    InputObjectTypeExtensionNode,
    KindEnum,
    TokenKindEnum,
    DirectiveLocationEnum,
} from "./language";

// Execute GraphQL queries.
export {
    execute,
    defaultFieldResolver,
    responsePathAsArray,
    getDirectiveValues,
    // type
    ExecutionArgs,
    ExecutionResult,
} from "./execution";

export { subscribe, createSourceEventStream } from "./subscription";

// Validate GraphQL queries.
export {
    validate,
    ValidationContext,
    // All validation rules in the GraphQL Specification.
    specifiedRules,
    // Individual validation rules.
    FieldsOnCorrectTypeRule,
    FragmentsOnCompositeTypesRule,
    KnownArgumentNamesRule,
    KnownDirectivesRule,
    KnownFragmentNamesRule,
    KnownTypeNamesRule,
    LoneAnonymousOperationRule,
    NoFragmentCyclesRule,
    NoUndefinedVariablesRule,
    NoUnusedFragmentsRule,
    NoUnusedVariablesRule,
    OverlappingFieldsCanBeMergedRule,
    PossibleFragmentSpreadsRule,
    ProvidedRequiredArgumentsRule,
    ScalarLeafsRule,
    SingleFieldSubscriptionsRule,
    UniqueArgumentNamesRule,
    UniqueDirectivesPerLocationRule,
    UniqueFragmentNamesRule,
    UniqueInputFieldNamesRule,
    UniqueOperationNamesRule,
    UniqueVariableNamesRule,
    ValuesOfCorrectTypeRule,
    VariablesAreInputTypesRule,
    VariablesInAllowedPositionRule,
} from "./validation";

// Create and format GraphQL errors.
export { GraphQLError, formatError, printError, GraphQLFormattedError } from "./error";

// Utilities for operating on GraphQL type schema and parsed sources.
export {
    // Produce the GraphQL query recommended for a full schema introspection.
    // Accepts optional IntrospectionOptions.
    getIntrospectionQuery,
    // @deprecated: use getIntrospectionQuery - will be removed in v15
    introspectionQuery,
    // Gets the target Operation from a Document
    getOperationAST,
    // Gets the Type for the target Operation AST.
    getOperationRootType,
    // Convert a GraphQLSchema to an IntrospectionQuery
    introspectionFromSchema,
    // Build a GraphQLSchema from an introspection result.
    buildClientSchema,
    // Build a GraphQLSchema from a parsed GraphQL Schema language AST.
    buildASTSchema,
    // Build a GraphQLSchema from a GraphQL schema language document.
    buildSchema,
    // @deprecated: Get the description from a schema AST node and supports legacy
    // syntax for specifying descriptions - will be removed in v16
    getDescription,
    // Extends an existing GraphQLSchema from a parsed GraphQL Schema
    // language AST.
    extendSchema,
    // Sort a GraphQLSchema.
    lexicographicSortSchema,
    // Print a GraphQLSchema to GraphQL Schema language.
    printSchema,
    // Prints the built-in introspection schema in the Schema Language
    // format.
    printIntrospectionSchema,
    // Print a GraphQLType to GraphQL Schema language.
    printType,
    // Create a GraphQLType from a GraphQL language AST.
    typeFromAST,
    // Create a JavaScript value from a GraphQL language AST with a Type.
    valueFromAST,
    // Create a JavaScript value from a GraphQL language AST without a Type.
    valueFromASTUntyped,
    // Create a GraphQL language AST from a JavaScript value.
    astFromValue,
    // A helper to use within recursive-descent visitors which need to be aware of
    // the GraphQL type system.
    TypeInfo,
    // Coerces a JavaScript value to a GraphQL type, or produces errors.
    coerceValue,
    // @deprecated use coerceValue - will be removed in v15
    isValidJSValue,
    // @deprecated use validation - will be removed in v15
    isValidLiteralValue,
    // Concatenates multiple AST together.
    concatAST,
    // Separates an AST into an AST per Operation.
    separateOperations,
    // Comparators for types
    isEqualType,
    isTypeSubTypeOf,
    doTypesOverlap,
    // Asserts a string is a valid GraphQL name.
    assertValidName,
    // Determine if a string is a valid GraphQL name.
    isValidNameError,
    // Compares two GraphQLSchemas and detects breaking changes.
    findBreakingChanges,
    findDangerousChanges,
    BreakingChangeType,
    DangerousChangeType,
    // Report all deprecated usage within a GraphQL document.
    findDeprecatedUsages,
    // type
    BuildSchemaOptions,
    BreakingChange,
    DangerousChange,
    IntrospectionOptions,
    IntrospectionDirective,
    IntrospectionEnumType,
    IntrospectionEnumValue,
    IntrospectionField,
    IntrospectionInputObjectType,
    IntrospectionInputType,
    IntrospectionInputTypeRef,
    IntrospectionInputValue,
    IntrospectionInterfaceType,
    IntrospectionListTypeRef,
    IntrospectionNamedTypeRef,
    IntrospectionNonNullTypeRef,
    IntrospectionObjectType,
    IntrospectionOutputType,
    IntrospectionOutputTypeRef,
    IntrospectionQuery,
    IntrospectionScalarType,
    IntrospectionSchema,
    IntrospectionType,
    IntrospectionTypeRef,
    IntrospectionUnionType,
} from "./utilities";
