// Type definitions for graphql 0.9
// Project: https://www.npmjs.com/package/graphql
// Definitions by: TonyYang <https://github.com/TonyPythoneer>, Caleb Meredith <https://github.com/calebmer>, Dominic Watson <https://github.com/intellix>, Firede <https://github.com/firede>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


// The primary entry point into fulfilling a GraphQL request.
export {
    graphql
} from './graphql';

/// <reference types="graphql" />

// Create and operate on GraphQL type definitions and schema.
export * from './type';


// Parse and operate on GraphQL language source files.
export * from './language';


// Execute GraphQL queries.
export {
    execute,
    defaultFieldResolver,
    responsePathAsArray,
    ExecutionResult,
} from './execution';


// Validate GraphQL queries.
export {
    validate,
    ValidationContext,
    specifiedRules,
} from './validation';


// Create and format GraphQL errors.
export {
    GraphQLError,
    formatError,
    GraphQLFormattedError,
    GraphQLErrorLocation,
} from './error';


// Utilities for operating on GraphQL type schema and parsed sources.
export {
    // The GraphQL query recommended for a full schema introspection.
    introspectionQuery,

    // Gets the target Operation from a Document
    getOperationAST,

    // Build a GraphQLSchema from an introspection result.
    buildClientSchema,

    // Build a GraphQLSchema from a parsed GraphQL Schema language AST.
    buildASTSchema,

    // Build a GraphQLSchema from a GraphQL schema language document.
    buildSchema,

    // Extends an existing GraphQLSchema from a parsed GraphQL Schema
    // language AST.
    extendSchema,

    // Print a GraphQLSchema to GraphQL Schema language.
    printSchema,

    // Print a GraphQLType to GraphQL Schema language.
    printType,

    // Create a GraphQLType from a GraphQL language AST.
    typeFromAST,

    // Create a JavaScript value from a GraphQL language AST.
    valueFromAST,

    // Create a GraphQL language AST from a JavaScript value.
    astFromValue,

    // A helper to use within recursive-descent visitors which need to be aware of
    // the GraphQL type system.
    TypeInfo,

    // Determine if JavaScript values adhere to a GraphQL type.
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

    // Compares two GraphQLSchemas and detects breaking changes.
    findBreakingChanges,

    // Report all deprecated usage within a GraphQL document.
    findDeprecatedUsages,

    BreakingChange,

    IntrospectionDirective,
    IntrospectionEnumType,
    IntrospectionEnumValue,
    IntrospectionField,
    IntrospectionInputObjectType,
    IntrospectionInputValue,
    IntrospectionInterfaceType,
    IntrospectionListTypeRef,
    IntrospectionNamedTypeRef,
    IntrospectionNonNullTypeRef,
    IntrospectionObjectType,
    IntrospectionQuery,
    IntrospectionScalarType,
    IntrospectionSchema,
    IntrospectionType,
    IntrospectionTypeRef,
    IntrospectionUnionType,
} from './utilities';
