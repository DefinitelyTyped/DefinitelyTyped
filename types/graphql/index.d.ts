// Type definitions for graphql 0.13
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
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

// The primary entry point into fulfilling a GraphQL request.
export {
    graphql,
    graphqlSync,
    GraphQLArgs,
} from './graphql';

// Create and operate on GraphQL type definitions and schema.
export * from './type';

// Parse and operate on GraphQL language source files.
export * from './language';

// Execute GraphQL queries.
export {
    execute,
    defaultFieldResolver,
    responsePathAsArray,
    getDirectiveValues,
    ExecutionArgs,
    ExecutionResult,
} from './execution';

export * from './subscription';

// Validate GraphQL queries.
export {
    validate,
    ValidationContext,

    // All validation rules in the GraphQL Specification.
    specifiedRules,

    // Individual validation rules.
    ArgumentsOfCorrectTypeRule,
    DefaultValuesOfCorrectTypeRule,
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
    ProvidedNonNullArgumentsRule,
    ScalarLeafsRule,
    SingleFieldSubscriptionsRule,
    UniqueArgumentNamesRule,
    UniqueDirectivesPerLocationRule,
    UniqueFragmentNamesRule,
    UniqueInputFieldNamesRule,
    UniqueOperationNamesRule,
    UniqueVariableNamesRule,
    VariablesAreInputTypesRule,
    VariablesInAllowedPositionRule,
} from './validation';

// Create and format GraphQL errors.
export {
    GraphQLError,
    formatError,
    printError,
    GraphQLFormattedError,
} from './error';

// Utilities for operating on GraphQL type schema and parsed sources.
export {
    // Produce the GraphQL query recommended for a full schema introspection.
    // Accepts optional IntrospectionOptions.
    getIntrospectionQuery,

    // Deprecated: use getIntrospectionQuery
    introspectionQuery,

    // Gets the target Operation from a Document
    getOperationAST,

    // Convert a GraphQLSchema to an IntrospectionQuery
    introspectionFromSchema,

    // Build a GraphQLSchema from an introspection result.
    buildClientSchema,

    // Build a GraphQLSchema from a parsed GraphQL Schema language AST.
    buildASTSchema,

    // Build a GraphQLSchema from a GraphQL schema language document.
    buildSchema,

    // Get the description from a schema AST node.
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

    // @deprecated use coerceValue
    isValidJSValue,

    // Determine if AST values adhere to a GraphQL type.
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
} from './utilities';
