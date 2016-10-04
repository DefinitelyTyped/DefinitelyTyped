// Type definitions for graphql v0.7.0
// Project: https://www.npmjs.com/package/graphql
// Definitions by: TonyYang <https://github.com/TonyPythoneer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*************************************
 *                                   * 
 *               MODULES             * 
 *                                   *
 *************************************/
///////////////////////////
// graphql               //
///////////////////////////
declare module "graphql" {
    // The primary entry point into fulfilling a GraphQL request.
    export {
        graphql
    } from 'graphql/graphql';


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

        // "Enum" of Directive Locations
        DirectiveLocation,

        // Scalars
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
        __Schema,
        __Directive,
        __DirectiveLocation,
        __Type,
        __Field,
        __InputValue,
        __EnumValue,
        __TypeKind,

        // Predicates
        isType,
        isInputType,
        isOutputType,
        isLeafType,
        isCompositeType,
        isAbstractType,

        // Un-modifiers
        getNullableType,
        getNamedType,
    } from 'graphql/type';


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
        Kind,
        TokenKind,
        BREAK,
    } from 'graphql/language';


    // Execute GraphQL queries.
    export {
        execute,
    } from 'graphql/execution';


    // Validate GraphQL queries.
    export {
        validate,
        specifiedRules,
    } from 'graphql/validation';


    // Create and format GraphQL errors.
    export {
        GraphQLError,
        formatError,
    } from 'graphql/error';


    // Utilities for operating on GraphQL type schema and parsed sources.
    /*
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
    } from 'graphql/utilities';
    */
}

declare module "graphql/graphql" {
    import { GraphQLError } from 'graphql/error/GraphQLError';
    import { GraphQLSchema } from 'graphql/type/schema';

    /**
     * This is the primary entry point function for fulfilling GraphQL operations
     * by parsing, validating, and executing a GraphQL document along side a
     * GraphQL schema.
     *
     * More sophisticated GraphQL servers, such as those which persist queries,
     * may wish to separate the validation and execution phases to a static time
     * tooling step, and a server runtime step.
     *
     * schema:
     *    The GraphQL type system to use when validating and executing a query.
     * requestString:
     *    A GraphQL language formatted string representing the requested operation.
     * rootValue:
     *    The value provided as the first argument to resolver functions on the top
     *    level type (e.g. the query object type).
     * variableValues:
     *    A mapping of variable name to runtime value to use for all variables
     *    defined in the requestString.
     * operationName:
     *    The name of the operation to use if requestString contains multiple
     *    possible operations. Can be omitted if requestString contains only
     *    one operation.
     */
    function graphql(
        schema: GraphQLSchema,
        requestString: string,
        rootValue?: any,
        contextValue?: any,
        variableValues?: {
            [key: string]: any
        },
        operationName?: string
    ): Promise<GraphQLResult>;

    /**
     * The result of a GraphQL parse, validation and execution.
     *
     * `data` is the result of a successful execution of the query.
     * `errors` is included when any errors occurred as a non-empty array.
     */
    type GraphQLResult = {
        data?: Object;
        errors?: Array<GraphQLError>;
    }
}

///////////////////////////
// graphql/type          //
//   - ast               //
//   - kinds             //
//   - lexer             //
//   - location          //
//   - parser            //
//   - printer           //
//   - source            //
//   - visitor           //
///////////////////////////

declare module "graphql/language" {
    export * from "graphql/language/index";
}

declare module "graphql/language/index" {
    export { getLocation } from 'graphql/language/location';
    import * as Kind from 'graphql/language/kinds';
    export { Kind };
    export { createLexer, TokenKind } from 'graphql/language/lexer';
    export { parse, parseValue, parseType } from 'graphql/language/parser';
    export { print } from 'graphql/language/printer';
    export { Source } from 'graphql/language/source';
    export { visit, visitInParallel, visitWithTypeInfo, BREAK } from 'graphql/language/visitor';
}

declare module "graphql/language/ast" {
    import { Source } from 'graphql/language/source';

    /**
     * Contains a range of UTF-8 character offsets and token references that
     * identify the region of the source from which the AST derived.
     */
    type Location = {

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
    type Token = {

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
    type Node = Name
        | Document
        | OperationDefinition
        | VariableDefinition
        | Variable
        | SelectionSet
        | Field
        | Argument
        | FragmentSpread
        | InlineFragment
        | FragmentDefinition
        | IntValue
        | FloatValue
        | StringValue
        | BooleanValue
        | EnumValue
        | ListValue
        | ObjectValue
        | ObjectField
        | Directive
        | NamedType
        | ListType
        | NonNullType
        | SchemaDefinition
        | OperationTypeDefinition
        | ScalarTypeDefinition
        | ObjectTypeDefinition
        | FieldDefinition
        | InputValueDefinition
        | InterfaceTypeDefinition
        | UnionTypeDefinition
        | EnumTypeDefinition
        | EnumValueDefinition
        | InputObjectTypeDefinition
        | TypeExtensionDefinition
        | DirectiveDefinition

    // Name

    type Name = {
        kind: 'Name';
        loc?: Location;
        value: string;
    }

    // Document

    type Document = {
        kind: 'Document';
        loc?: Location;
        definitions: Array<Definition>;
    }

    type Definition = OperationDefinition
        | FragmentDefinition
        | TypeSystemDefinition // experimental non-spec addition.

    type OperationDefinition = {
        kind: 'OperationDefinition';
        loc?: Location;
        operation: OperationType;
        name?: Name;
        variableDefinitions?: Array<VariableDefinition>;
        directives?: Array<Directive>;
        selectionSet: SelectionSet;
    }

    // Note: subscription is an experimental non-spec addition.
    type OperationType = 'query' | 'mutation' | 'subscription';

    type VariableDefinition = {
        kind: 'VariableDefinition';
        loc?: Location;
        variable: Variable;
        type: Type;
        defaultValue?: Value;
    }

    type Variable = {
        kind: 'Variable';
        loc?: Location;
        name: Name;
    }

    type SelectionSet = {
        kind: 'SelectionSet';
        loc?: Location;
        selections: Array<Selection>;
    }

    type Selection = Field
        | FragmentSpread
        | InlineFragment

    type Field = {
        kind: 'Field';
        loc?: Location;
        alias?: Name;
        name: Name;
        arguments?: Array<Argument>;
        directives?: Array<Directive>;
        selectionSet?: SelectionSet;
    }

    type Argument = {
        kind: 'Argument';
        loc?: Location;
        name: Name;
        value: Value;
    }


    // Fragments

    type FragmentSpread = {
        kind: 'FragmentSpread';
        loc?: Location;
        name: Name;
        directives?: Array<Directive>;
    }

    type InlineFragment = {
        kind: 'InlineFragment';
        loc?: Location;
        typeCondition?: NamedType;
        directives?: Array<Directive>;
        selectionSet: SelectionSet;
    }

    type FragmentDefinition = {
        kind: 'FragmentDefinition';
        loc?: Location;
        name: Name;
        typeCondition: NamedType;
        directives?: Array<Directive>;
        selectionSet: SelectionSet;
    }


    // Values

    type Value = Variable
        | IntValue
        | FloatValue
        | StringValue
        | BooleanValue
        | EnumValue
        | ListValue
        | ObjectValue

    type IntValue = {
        kind: 'IntValue';
        loc?: Location;
        value: string;
    }

    type FloatValue = {
        kind: 'FloatValue';
        loc?: Location;
        value: string;
    }

    type StringValue = {
        kind: 'StringValue';
        loc?: Location;
        value: string;
    }

    type BooleanValue = {
        kind: 'BooleanValue';
        loc?: Location;
        value: boolean;
    }

    type EnumValue = {
        kind: 'EnumValue';
        loc?: Location;
        value: string;
    }

    type ListValue = {
        kind: 'ListValue';
        loc?: Location;
        values: Array<Value>;
    }

    type ObjectValue = {
        kind: 'ObjectValue';
        loc?: Location;
        fields: Array<ObjectField>;
    }

    type ObjectField = {
        kind: 'ObjectField';
        loc?: Location;
        name: Name;
        value: Value;
    }


    // Directives

    type Directive = {
        kind: 'Directive';
        loc?: Location;
        name: Name;
        arguments?: Array<Argument>;
    }


    // Type Reference

    type Type = NamedType
        | ListType
        | NonNullType

    type NamedType = {
        kind: 'NamedType';
        loc?: Location;
        name: Name;
    };

    type ListType = {
        kind: 'ListType';
        loc?: Location;
        type: Type;
    }

    type NonNullType = {
        kind: 'NonNullType';
        loc?: Location;
        type: NamedType | ListType;
    }

    // Type System Definition

    type TypeSystemDefinition = SchemaDefinition
        | TypeDefinition
        | TypeExtensionDefinition
        | DirectiveDefinition

    type SchemaDefinition = {
        kind: 'SchemaDefinition';
        loc?: Location;
        directives: Array<Directive>;
        operationTypes: Array<OperationTypeDefinition>;
    }

    type OperationTypeDefinition = {
        kind: 'OperationTypeDefinition';
        loc?: Location;
        operation: OperationType;
        type: NamedType;
    }

    type TypeDefinition = ScalarTypeDefinition
        | ObjectTypeDefinition
        | InterfaceTypeDefinition
        | UnionTypeDefinition
        | EnumTypeDefinition
        | InputObjectTypeDefinition

    type ScalarTypeDefinition = {
        kind: 'ScalarTypeDefinition';
        loc?: Location;
        name: Name;
        directives?: Array<Directive>;
    }

    type ObjectTypeDefinition = {
        kind: 'ObjectTypeDefinition';
        loc?: Location;
        name: Name;
        interfaces?: Array<NamedType>;
        directives?: Array<Directive>;
        fields: Array<FieldDefinition>;
    }

    type FieldDefinition = {
        kind: 'FieldDefinition';
        loc?: Location;
        name: Name;
        arguments: Array<InputValueDefinition>;
        type: Type;
        directives?: Array<Directive>;
    }

    type InputValueDefinition = {
        kind: 'InputValueDefinition';
        loc?: Location;
        name: Name;
        type: Type;
        defaultValue?: Value;
        directives?: Array<Directive>;
    }

    type InterfaceTypeDefinition = {
        kind: 'InterfaceTypeDefinition';
        loc?: Location;
        name: Name;
        directives?: Array<Directive>;
        fields: Array<FieldDefinition>;
    }

    type UnionTypeDefinition = {
        kind: 'UnionTypeDefinition';
        loc?: Location;
        name: Name;
        directives?: Array<Directive>;
        types: Array<NamedType>;
    }

    type EnumTypeDefinition = {
        kind: 'EnumTypeDefinition';
        loc?: Location;
        name: Name;
        directives?: Array<Directive>;
        values: Array<EnumValueDefinition>;
    }

    type EnumValueDefinition = {
        kind: 'EnumValueDefinition';
        loc?: Location;
        name: Name;
        directives?: Array<Directive>;
    }

    type InputObjectTypeDefinition = {
        kind: 'InputObjectTypeDefinition';
        loc?: Location;
        name: Name;
        directives?: Array<Directive>;
        fields: Array<InputValueDefinition>;
    }

    type TypeExtensionDefinition = {
        kind: 'TypeExtensionDefinition';
        loc?: Location;
        definition: ObjectTypeDefinition;
    }

    type DirectiveDefinition = {
        kind: 'DirectiveDefinition';
        loc?: Location;
        name: Name;
        arguments?: Array<InputValueDefinition>;
        locations: Array<Name>;
    }

}

declare module "graphql/language/kinds" {
    // Name

    const NAME: 'Name';

    // Document

    const DOCUMENT: 'Document';
    const OPERATION_DEFINITION: 'OperationDefinition';
    const VARIABLE_DEFINITION: 'VariableDefinition';
    const VARIABLE: 'Variable';
    const SELECTION_SET: 'SelectionSet';
    const FIELD: 'Field';
    const ARGUMENT: 'Argument';

    // Fragments

    const FRAGMENT_SPREAD: 'FragmentSpread';
    const INLINE_FRAGMENT: 'InlineFragment';
    const FRAGMENT_DEFINITION: 'FragmentDefinition';

    // Values

    const INT: 'IntValue';
    const FLOAT: 'FloatValue';
    const STRING: 'StringValue';
    const BOOLEAN: 'BooleanValue';
    const ENUM: 'EnumValue';
    const LIST: 'ListValue';
    const OBJECT: 'ObjectValue';
    const OBJECT_FIELD: 'ObjectField';

    // Directives

    const DIRECTIVE: 'Directive';

    // Types

    const NAMED_TYPE: 'NamedType';
    const LIST_TYPE: 'ListType';
    const NON_NULL_TYPE: 'NonNullType';

    // Type System Definitions

    const SCHEMA_DEFINITION: 'SchemaDefinition';
    const OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition';

    // Type Definitions

    const SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition';
    const OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition';
    const FIELD_DEFINITION: 'FieldDefinition';
    const INPUT_VALUE_DEFINITION: 'InputValueDefinition';
    const INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition';
    const UNION_TYPE_DEFINITION: 'UnionTypeDefinition';
    const ENUM_TYPE_DEFINITION: 'EnumTypeDefinition';
    const ENUM_VALUE_DEFINITION: 'EnumValueDefinition';
    const INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition';

    // Type Extensions

    const TYPE_EXTENSION_DEFINITION: 'TypeExtensionDefinition';

    // Directive Definitions

    const DIRECTIVE_DEFINITION: 'DirectiveDefinition';
}

declare module "graphql/language/lexer" {
    import { Token } from 'graphql/language/ast';
    import { Source } from 'graphql/language/source';
    import { syntaxError } from 'graphql/error';

    /**
     * Given a Source object, this returns a Lexer for that source.
     * A Lexer is a stateful stream generator in that every time
     * it is advanced, it returns the next token in the Source. Assuming the
     * source lexes, the final Token emitted by the lexer will be of kind
     * EOF, after which the lexer will repeatedly return the same EOF token
     * whenever called.
     */
    function createLexer<TOptions>(
        source: Source,
        options: TOptions
    ): Lexer<TOptions>;

    /**
     * The return type of createLexer.
     */
    type Lexer<TOptions> = {
        source: Source;
        options: TOptions;

        /**
         * The previously focused non-ignored token.
         */
        lastToken: Token;

        /**
         * The currently focused non-ignored token.
         */
        token: Token;

        /**
         * The (1-indexed) line containing the current token.
         */
        line: number;

        /**
         * The character offset at which the current line begins.
         */
        lineStart: number;

        /**
         * Advances the token stream to the next non-ignored token.
         */
        advance(): Token;
    };

    /**
     * An exported enum describing the different kinds of tokens that the
     * lexer emits.
     */
    const TokenKind: {
        SOF: '<SOF>'
        EOF: '<EOF>'
        BANG: '!'
        DOLLAR: '$'
        PAREN_L: '('
        PAREN_R: ')'
        SPREAD: '...'
        COLON: ':'
        EQUALS: '='
        AT: '@'
        BRACKET_L: '['
        BRACKET_R: ']'
        BRACE_L: '{'
        PIPE: '|'
        BRACE_R: '}'
        NAME: 'Name'
        INT: 'Int'
        FLOAT: 'Float'
        STRING: 'String'
        COMMENT: 'Comment'
    };

    /**
     * A helper function to describe a token as a string for debugging
     */
    function getTokenDesc(token: Token): string;
}

declare module "graphql/language/location" {
    import { Source } from "graphql/language/source";

    interface SourceLocation {
        line: number;
        column: number;
    }

    function getLocation(source: Source, position: number): SourceLocation;
}

declare module "graphql/language/parser" {
    import { NamedType, Type, Value, Document } from "graphql/language/ast";
    import { Source } from "graphql/language/source";
    import { Lexer } from "graphql/language/lexer";

    /**
     * Configuration options to control parser behavior
     */
    type ParseOptions = {
        /**
         * By default, the parser creates AST nodes that know the location
         * in the source that they correspond to. This configuration flag
         * disables that behavior for performance or testing.
         */
        noLocation?: boolean
    };

    /**
     * Given a GraphQL source, parses it into a Document.
     * Throws GraphQLError if a syntax error is encountered.
     */
    function parse(
        source: string | Source,
        options?: ParseOptions
    ): Document;

    /**
     * Given a string containing a GraphQL value, parse the AST for that value.
     * Throws GraphQLError if a syntax error is encountered.
     *
     * This is useful within tools that operate upon GraphQL Values directly and
     * in isolation of complete GraphQL documents.
     */
    function parseValue(
        source: Source | string,
        options?: ParseOptions
    ): Value;

    function parseConstValue<TOptions>(lexer: Lexer<TOptions>): Value;

    /**
     * Type :
     *   - NamedType
     *   - ListType
     *   - NonNullType
     */
    function parseType<TOptions>(lexer: Lexer<TOptions>): Type;

    /**
     * NamedType : Name
     */
    function parseNamedType<TOptions>(lexer: Lexer<TOptions>): NamedType;
}

declare module "graphql/language/printer" {
    /**
     * Converts an AST into a string, using one set of reasonable
     * formatting rules.
     */
    function print(ast: any): string;
}

declare module "graphql/language/source" {
    class Source {
        body: string;
        name: string;
        constructor(body: string, name?: string);
    }
}

declare module "graphql/language/visitor" {
    const QueryDocumentKeys: {
        Name: any[];
        Document: string[];
        OperationDefinition: string[];
        VariableDefinition: string[];
        Variable: string[];
        SelectionSet: string[];
        Field: string[];
        Argument: string[];

        FragmentSpread: string[];
        InlineFragment: string[];
        FragmentDefinition: string[];

        IntValue: number[];
        FloatValue: number[];
        StringValue: string[];
        BooleanValue: boolean[];
        EnumValue: any[];
        ListValue: string[];
        ObjectValue: string[];
        ObjectField: string[];

        Directive: string[];

        NamedType: string[];
        ListType: string[];
        NonNullType: string[];

        ObjectTypeDefinition: string[];
        FieldDefinition: string[];
        InputValueDefinition: string[];
        InterfaceTypeDefinition: string[];
        UnionTypeDefinition: string[];
        ScalarTypeDefinition: string[];
        EnumTypeDefinition: string[];
        EnumValueDefinition: string[];
        InputObjectTypeDefinition: string[];
        TypeExtensionDefinition: string[];
    }

    const BREAK: any;

    function visit(root: any, visitor: any, keyMap: any): any;

    function visitInParallel(visitors: any): any;

    function visitWithTypeInfo(typeInfo: any, visitor: any): any;
}

///////////////////////////
// graphql/type          //
///////////////////////////
declare module "graphql/type" {
    export * from "graphql/type/index";
}

declare module "graphql/type/index" {
    // GraphQL Schema definition
    export { GraphQLSchema } from 'graphql/type/schema';

    export {
        // Predicates
        isType,
        isInputType,
        isOutputType,
        isLeafType,
        isCompositeType,
        isAbstractType,

        // Un-modifiers
        getNullableType,
        getNamedType,

        // Definitions
        GraphQLScalarType,
        GraphQLObjectType,
        GraphQLInterfaceType,
        GraphQLUnionType,
        GraphQLEnumType,
        GraphQLInputObjectType,
        GraphQLList,
        GraphQLNonNull,
    } from 'graphql/type/definition';

    export {
        // "Enum" of Directive Locations
        DirectiveLocation,

        // Directives Definition
        GraphQLDirective,

        // Built-in Directives defined by the Spec
        specifiedDirectives,
        GraphQLIncludeDirective,
        GraphQLSkipDirective,
        GraphQLDeprecatedDirective,

        // Constant Deprecation Reason
        DEFAULT_DEPRECATION_REASON,
    } from 'graphql/type/directives';

    // Common built-in scalar instances.
    export {
        GraphQLInt,
        GraphQLFloat,
        GraphQLString,
        GraphQLBoolean,
        GraphQLID,
    } from 'graphql/type/scalars';

    export {
        // "Enum" of Type Kinds
        TypeKind,

        // GraphQL Types for introspection.
        __Schema,
        __Directive,
        __DirectiveLocation,
        __Type,
        __Field,
        __InputValue,
        __EnumValue,
        __TypeKind,

        // Meta-field definitions.
        SchemaMetaFieldDef,
        TypeMetaFieldDef,
        TypeNameMetaFieldDef,
    } from 'graphql/type/introspection';

}

declare module "graphql/type/definition" {
    import {
        OperationDefinition,
        Field,
        FragmentDefinition,
        Value,
    } from 'graphql/language/ast';
    import { GraphQLSchema } from 'graphql/type/schema';

    /**
     * These are all of the possible kinds of types.
     */
    type GraphQLType =
        GraphQLScalarType |
        GraphQLObjectType |
        GraphQLInterfaceType |
        GraphQLUnionType |
        GraphQLEnumType |
        GraphQLInputObjectType |
        GraphQLList<any> |
        GraphQLNonNull<any>;

    function isType(type: any): boolean;

    /**
     * These types may be used as input types for arguments and directives.
     */
    type GraphQLInputType =
        GraphQLScalarType |
        GraphQLEnumType |
        GraphQLInputObjectType |
        GraphQLList<any> |
        GraphQLNonNull<
        GraphQLScalarType |
        GraphQLEnumType |
        GraphQLInputObjectType |
        GraphQLList<any>
        >;

    function isInputType(type: GraphQLType): boolean;

    /**
     * These types may be used as output types as the result of fields.
     */
    type GraphQLOutputType =
        GraphQLScalarType |
        GraphQLObjectType |
        GraphQLInterfaceType |
        GraphQLUnionType |
        GraphQLEnumType |
        GraphQLList<any> |
        GraphQLNonNull<
        GraphQLScalarType |
        GraphQLObjectType |
        GraphQLInterfaceType |
        GraphQLUnionType |
        GraphQLEnumType |
        GraphQLList<any>
        >;

    function isOutputType(type: GraphQLType): boolean;

    /**
     * These types may describe types which may be leaf values.
     */
    type GraphQLLeafType =
        GraphQLScalarType |
        GraphQLEnumType;

    function isLeafType(type: GraphQLType): boolean;

    /**
     * These types may describe the parent context of a selection set.
     */
    type GraphQLCompositeType =
        GraphQLObjectType |
        GraphQLInterfaceType |
        GraphQLUnionType;

    function isCompositeType(type: GraphQLType): boolean;

    /**
     * These types may describe the parent context of a selection set.
     */
    type GraphQLAbstractType =
        GraphQLInterfaceType |
        GraphQLUnionType;

    function isAbstractType(type: GraphQLType): boolean;

    /**
     * These types can all accept null as a value.
     */
    type GraphQLNullableType =
        GraphQLScalarType |
        GraphQLObjectType |
        GraphQLInterfaceType |
        GraphQLUnionType |
        GraphQLEnumType |
        GraphQLInputObjectType |
        GraphQLList<any>;

    function getNullableType<T extends GraphQLType>(
        type: T
    ): (T & GraphQLNullableType);

    /**
     * These named types do not include modifiers like List or NonNull.
     */
    type GraphQLNamedType =
        GraphQLScalarType |
        GraphQLObjectType |
        GraphQLInterfaceType |
        GraphQLUnionType |
        GraphQLEnumType |
        GraphQLInputObjectType;

    function getNamedType(type: GraphQLType): GraphQLNamedType

    /**
     * Used while defining GraphQL types to allow for circular references in
     * otherwise immutable type definitions.
     */
    type Thunk<T> = (() => T) | T;

    /**
     * Scalar Type Definition
     *
     * The leaf values of any request and input values to arguments are
     * Scalars (or Enums) and are defined with a name and a series of functions
     * used to parse input from ast or variables and to ensure validity.
     *
     * Example:
     *
     *     const OddType = new GraphQLScalarType({
     *       name: 'Odd',
     *       serialize(value) {
     *         return value % 2 === 1 ? value : null;
     *       }
     *     });
     *
     */
    class GraphQLScalarType {
        name: string;
        description: string;
        constructor(config: GraphQLScalarTypeConfig<any, any>);

        // Serializes an internal value to include in a response.
        serialize(value: any): any;

        // Parses an externally provided value to use as an input.
        parseValue(value: any): any;

        // Parses an externally provided literal value to use as an input.
        parseLiteral(valueAST: Value): any;

        toString(): string;
    }

    interface GraphQLScalarTypeConfig<TInternal, TExternal> {
        name: string;
        description?: string;
        serialize: (value: any) => TInternal;
        parseValue?: (value: any) => TExternal;
        parseLiteral?: (valueAST: Value) => TInternal;
    }

    /**
     * Object Type Definition
     *
     * Almost all of the GraphQL types you define will be object types. Object types
     * have a name, but most importantly describe their fields.
     *
     * Example:
     *
     *     const AddressType = new GraphQLObjectType({
     *       name: 'Address',
     *       fields: {
     *         street: { type: GraphQLString },
     *         number: { type: GraphQLInt },
     *         formatted: {
     *           type: GraphQLString,
     *           resolve(obj) {
     *             return obj.number + ' ' + obj.street
     *           }
     *         }
     *       }
     *     });
     *
     * When two types need to refer to each other, or a type needs to refer to
     * itself in a field, you can use a function expression (aka a closure or a
     * thunk) to supply the fields lazily.
     *
     * Example:
     *
     *     const PersonType = new GraphQLObjectType({
     *       name: 'Person',
     *       fields: () => ({
     *         name: { type: GraphQLString },
     *         bestFriend: { type: PersonType },
     *       })
     *     });
     *
     */
    class GraphQLObjectType {
        name: string;
        description: string;
        isTypeOf: GraphQLIsTypeOfFn;

        constructor(config: GraphQLObjectTypeConfig<any>);
        getFields(): GraphQLFieldDefinitionMap;
        getInterfaces(): Array<GraphQLInterfaceType>;
        toString(): string;
    }

    //

    interface GraphQLObjectTypeConfig<TSource> {
        name: string;
        interfaces?: Thunk<Array<GraphQLInterfaceType>>;
        fields: Thunk<GraphQLFieldConfigMap<TSource>>;
        isTypeOf?: GraphQLIsTypeOfFn;
        description?: string
    }

    type GraphQLTypeResolveFn = (
        value: any,
        context: any,
        info: GraphQLResolveInfo
    ) => GraphQLObjectType;

    type GraphQLIsTypeOfFn = (
        source: any,
        context: any,
        info: GraphQLResolveInfo
    ) => boolean;

    type GraphQLFieldResolveFn<TSource> = (
        source: TSource,
        args: { [argName: string]: any },
        context: any,
        info: GraphQLResolveInfo
    ) => any;

    interface GraphQLResolveInfo {
        fieldName: string;
        fieldASTs: Array<Field>;
        returnType: GraphQLOutputType;
        parentType: GraphQLCompositeType;
        path: Array<string | number>;
        schema: GraphQLSchema;
        fragments: { [fragmentName: string]: FragmentDefinition };
        rootValue: any;
        operation: OperationDefinition;
        variableValues: { [variableName: string]: any };
    }

    interface GraphQLFieldConfig<TSource> {
        type: GraphQLOutputType;
        args?: GraphQLFieldConfigArgumentMap;
        resolve?: GraphQLFieldResolveFn<TSource>;
        deprecationReason?: string;
        description?: string;
    }

    interface GraphQLFieldConfigArgumentMap {
        [argName: string]: GraphQLArgumentConfig;
    }

    interface GraphQLArgumentConfig {
        type: GraphQLInputType;
        defaultValue?: any;
        description?: string;
    }

    interface GraphQLFieldConfigMap<TSource> {
        [fieldName: string]: GraphQLFieldConfig<TSource>;
    }

    interface GraphQLFieldDefinition {
        name: string;
        description: string;
        type: GraphQLOutputType;
        args: Array<GraphQLArgument>;
        resolve: GraphQLFieldResolveFn<any>;
        isDeprecated: boolean;
        deprecationReason: string;
    }

    interface GraphQLArgument {
        name: string;
        type: GraphQLInputType;
        defaultValue?: any;
        description?: string;
    }

    interface GraphQLFieldDefinitionMap {
        [fieldName: string]: GraphQLFieldDefinition;
    }

    /**
     * Interface Type Definition
     *
     * When a field can return one of a heterogeneous set of types, a Interface type
     * is used to describe what types are possible, what fields are in common across
     * all types, as well as a function to determine which type is actually used
     * when the field is resolved.
     *
     * Example:
     *
     *     const EntityType = new GraphQLInterfaceType({
     *       name: 'Entity',
     *       fields: {
     *         name: { type: GraphQLString }
     *       }
     *     });
     *
     */
    class GraphQLInterfaceType {
        name: string;
        description: string;
        resolveType: GraphQLTypeResolveFn;

        constructor(config: GraphQLInterfaceTypeConfig);

        getFields(): GraphQLFieldDefinitionMap;

        toString(): string;
    }

    interface GraphQLInterfaceTypeConfig {
        name: string,
        fields: Thunk<GraphQLFieldConfigMap<any>>,
        /**
         * Optionally provide a custom type resolver function. If one is not provided,
         * the default implementation will call `isTypeOf` on each implementing
         * Object type.
         */
        resolveType?: GraphQLTypeResolveFn,
        description?: string
    }

    /**
     * Union Type Definition
     *
     * When a field can return one of a heterogeneous set of types, a Union type
     * is used to describe what types are possible as well as providing a function
     * to determine which type is actually used when the field is resolved.
     *
     * Example:
     *
     *     const PetType = new GraphQLUnionType({
     *       name: 'Pet',
     *       types: [ DogType, CatType ],
     *       resolveType(value) {
     *         if (value instanceof Dog) {
     *           return DogType;
     *         }
     *         if (value instanceof Cat) {
     *           return CatType;
     *         }
     *       }
     *     });
     *
     */
    class GraphQLUnionType {
        name: string;
        description: string;
        resolveType: GraphQLTypeResolveFn;

        constructor(config: GraphQLUnionTypeConfig);

        getTypes(): Array<GraphQLObjectType>;

        toString(): string;
    }

    interface GraphQLUnionTypeConfig {
        name: string,
        types: Thunk<Array<GraphQLObjectType>>,
        /**
         * Optionally provide a custom type resolver function. If one is not provided,
         * the default implementation will call `isTypeOf` on each implementing
         * Object type.
         */
        resolveType?: GraphQLTypeResolveFn;
        description?: string;
    }

    /**
     * Enum Type Definition
     *
     * Some leaf values of requests and input values are Enums. GraphQL serializes
     * Enum values as strings, however internally Enums can be represented by any
     * kind of type, often integers.
     *
     * Example:
     *
     *     const RGBType = new GraphQLEnumType({
     *       name: 'RGB',
     *       values: {
     *         RED: { value: 0 },
     *         GREEN: { value: 1 },
     *         BLUE: { value: 2 }
     *       }
     *     });
     *
     * Note: If a value is not provided in a definition, the name of the enum value
     * will be used as its internal value.
     */
    class GraphQLEnumType {
        name: string;
        description: string;

        constructor(config: GraphQLEnumTypeConfig);
        getValues(): Array<GraphQLEnumValueDefinition>;
        serialize(value: any): string;
        parseValue(value: any): any;
        parseLiteral(valueAST: Value): any;
        toString(): string;
    }

    interface GraphQLEnumTypeConfig {
        name: string;
        values: GraphQLEnumValueConfigMap;
        description?: string;
    }

    interface GraphQLEnumValueConfigMap {
        [valueName: string]: GraphQLEnumValueConfig;
    }

    interface GraphQLEnumValueConfig {
        value?: any;
        deprecationReason?: string;
        description?: string;
    }

    interface GraphQLEnumValueDefinition {
        name: string;
        description: string;
        deprecationReason: string;
        value: any;
    }

    /**
     * Input Object Type Definition
     *
     * An input object defines a structured collection of fields which may be
     * supplied to a field argument.
     *
     * Using `NonNull` will ensure that a value must be provided by the query
     *
     * Example:
     *
     *     const GeoPoint = new GraphQLInputObjectType({
     *       name: 'GeoPoint',
     *       fields: {
     *         lat: { type: new GraphQLNonNull(GraphQLFloat) },
     *         lon: { type: new GraphQLNonNull(GraphQLFloat) },
     *         alt: { type: GraphQLFloat, defaultValue: 0 },
     *       }
     *     });
     *
     */
    class GraphQLInputObjectType {
        name: string;
        description: string;
        constructor(config: InputObjectConfig);
        getFields(): InputObjectFieldMap;
        toString(): string;
    }

    interface InputObjectConfig {
        name: string;
        fields: Thunk<InputObjectConfigFieldMap>;
        description?: string;
    }

    interface InputObjectFieldConfig {
        type: GraphQLInputType;
        defaultValue?: any;
        description?: string;
    }

    interface InputObjectConfigFieldMap {
        [fieldName: string]: InputObjectFieldConfig;
    }

    interface InputObjectField {
        name: string;
        type: GraphQLInputType;
        defaultValue?: any;
        description?: string;
    }

    interface InputObjectFieldMap {
        [fieldName: string]: InputObjectField;
    }

    /**
     * List Modifier
     *
     * A list is a kind of type marker, a wrapping type which points to another
     * type. Lists are often created within the context of defining the fields of
     * an object type.
     *
     * Example:
     *
     *     const PersonType = new GraphQLObjectType({
     *       name: 'Person',
     *       fields: () => ({
     *         parents: { type: new GraphQLList(Person) },
     *         children: { type: new GraphQLList(Person) },
     *       })
     *     })
     *
     */
    class GraphQLList<T extends GraphQLType> {
        ofType: T;
        constructor(type: T);
        toString(): string;
    }

    /**
     * Non-Null Modifier
     *
     * A non-null is a kind of type marker, a wrapping type which points to another
     * type. Non-null types enforce that their values are never null and can ensure
     * an error is raised if this ever occurs during a request. It is useful for
     * fields which you can make a strong guarantee on non-nullability, for example
     * usually the id field of a database row will never be null.
     *
     * Example:
     *
     *     const RowType = new GraphQLObjectType({
     *       name: 'Row',
     *       fields: () => ({
     *         id: { type: new GraphQLNonNull(GraphQLString) },
     *       })
     *     })
     *
     * Note: the enforcement of non-nullability occurs within the executor.
     */
    class GraphQLNonNull<T extends GraphQLNullableType> {
        ofType: T;

        constructor(type: T);

        toString(): string;
    }
}

declare module "graphql/type/directives" {
    import {
        GraphQLFieldConfigArgumentMap,
        GraphQLArgument
    } from 'graphql/type/definition';

    const DirectiveLocation: {
        // Operations
        QUERY: 'QUERY',
        MUTATION: 'MUTATION',
        SUBSCRIPTION: 'SUBSCRIPTION',
        FIELD: 'FIELD',
        FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
        FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
        INLINE_FRAGMENT: 'INLINE_FRAGMENT',
        // Schema Definitions
        SCHEMA: 'SCHEMA',
        SCALAR: 'SCALAR',
        OBJECT: 'OBJECT',
        FIELD_DEFINITION: 'FIELD_DEFINITION',
        ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
        INTERFACE: 'INTERFACE',
        UNION: 'UNION',
        ENUM: 'ENUM',
        ENUM_VALUE: 'ENUM_VALUE',
        INPUT_OBJECT: 'INPUT_OBJECT',
        INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION',
    };

    type DirectiveLocationEnum = any //$Keys<typeof DirectiveLocation>

    /**
     * Directives are used by the GraphQL runtime as a way of modifying execution
     * behavior. Type system creators will usually not create these directly.
     */
    class GraphQLDirective {
        name: string;
        description: string;
        locations: Array<DirectiveLocationEnum>;
        args: Array<GraphQLArgument>;

        constructor(config: GraphQLDirectiveConfig);
    }

    interface GraphQLDirectiveConfig {
        name: string;
        description?: string;
        locations: Array<DirectiveLocationEnum>;
        args?: GraphQLFieldConfigArgumentMap;
    }

    /**
     * Used to conditionally include fields or fragments.
     */
    const GraphQLIncludeDirective: GraphQLDirective;

    /**
     * Used to conditionally skip (exclude) fields or fragments.
     */
    const GraphQLSkipDirective: GraphQLDirective;

    /**
     * Constant string used for default reason for a deprecation.
     */
    const DEFAULT_DEPRECATION_REASON: 'No longer supported';

    /**
     * Used to declare element of a GraphQL schema as deprecated.
     */
    const GraphQLDeprecatedDirective: GraphQLDirective;

    /**
     * The full list of specified directives.
     */
    export const specifiedDirectives: Array<GraphQLDirective>;
}

declare module "graphql/type/introspection" {
    import {
        GraphQLScalarType,
        GraphQLObjectType,
        GraphQLInterfaceType,
        GraphQLUnionType,
        GraphQLEnumType,
        GraphQLInputObjectType,
        GraphQLList,
        GraphQLNonNull,
    } from 'graphql/type/definition';
    import { GraphQLFieldDefinition } from 'graphql/type/definition';

    const __Schema: GraphQLObjectType;
    const __Directive: GraphQLObjectType;
    const __DirectiveLocation: GraphQLEnumType;
    const __Type: GraphQLObjectType;
    const __Field: GraphQLObjectType;
    const __InputValue: GraphQLObjectType;
    const __EnumValue: GraphQLObjectType;

    const TypeKind: {
        SCALAR: 'SCALAR',
        OBJECT: 'OBJECT',
        INTERFACE: 'INTERFACE',
        UNION: 'UNION',
        ENUM: 'ENUM',
        INPUT_OBJECT: 'INPUT_OBJECT',
        LIST: 'LIST',
        NON_NULL: 'NON_NULL',
    }

    const __TypeKind: GraphQLEnumType;

    /**
     * Note that these are GraphQLFieldDefinition and not GraphQLFieldConfig,
     * so the format for args is different.
     */
    const SchemaMetaFieldDef: GraphQLFieldDefinition;
    const TypeMetaFieldDef: GraphQLFieldDefinition;
    const TypeNameMetaFieldDef: GraphQLFieldDefinition;
}

declare module "graphql/type/scalars" {
    import { GraphQLScalarType } from 'graphql/type/definition';

    const GraphQLInt: GraphQLScalarType;
    const GraphQLFloat: GraphQLScalarType;
    const GraphQLString: GraphQLScalarType;
    const GraphQLBoolean: GraphQLScalarType;
    const GraphQLID: GraphQLScalarType;
}

declare module "graphql/type/schema" {
    import {
        GraphQLObjectType,
    } from 'graphql/type/definition';
    import {
        GraphQLType,
        GraphQLNamedType,
        GraphQLAbstractType
    } from 'graphql/type/definition';
    import {
        GraphQLDirective,
    } from 'graphql/type/directives';

    /**
     * Schema Definition
     *
     * A Schema is created by supplying the root types of each type of operation,
     * query and mutation (optional). A schema definition is then supplied to the
     * validator and executor.
     *
     * Example:
     *
     *     const MyAppSchema = new GraphQLSchema({
     *       query: MyAppQueryRootType,
     *       mutation: MyAppMutationRootType,
     *     })
     *
     * Note: If an array of `directives` are provided to GraphQLSchema, that will be
     * the exact list of directives represented and allowed. If `directives` is not
     * provided then a default set of the specified directives (e.g. @include and
     * @skip) will be used. If you wish to provide *additional* directives to these
     * specified directives, you must explicitly declare them. Example:
     *
     *     const MyAppSchema = new GraphQLSchema({
     *       ...
     *       directives: specifiedDirectives.concat([ myCustomDirective ]),
     *     })
     *
     */
    class GraphQLSchema {
        // private _queryType: GraphQLObjectType;
        // private _mutationType: GraphQLObjectType;
        // private _subscriptionType: GraphQLObjectType;
        // private _directives: Array<GraphQLDirective>;
        // private _typeMap: TypeMap;
        // private _implementations: { [interfaceName: string]: Array<GraphQLObjectType> };
        // private _possibleTypeMap: { [abstractName: string]: { [possibleName: string]: boolean } };

        constructor(config: GraphQLSchemaConfig)

        getQueryType(): GraphQLObjectType;
        getMutationType(): GraphQLObjectType;
        getSubscriptionType(): GraphQLObjectType;
        getTypeMap(): GraphQLNamedType;
        getType(name: string): GraphQLType;
        getPossibleTypes(abstractType: GraphQLAbstractType): Array<GraphQLObjectType>;

        isPossibleType(
            abstractType: GraphQLAbstractType,
            possibleType: GraphQLObjectType
        ): boolean;

        getDirectives(): Array<GraphQLDirective>;
        getDirective(name: string): GraphQLDirective;
    }

    interface GraphQLSchemaConfig {
        query: GraphQLObjectType;
        mutation?: GraphQLObjectType;
        subscription?: GraphQLObjectType;
        types?: Array<GraphQLNamedType>;
        directives?: Array<GraphQLDirective>;
    }
}

///////////////////////////
// graphql/validation    //
///////////////////////////
declare module "graphql/validation" {
    export * from "graphql/validation/index";
}

declare module "graphql/validation/index" {
    export { validate } from 'graphql/validation/validate';
    export { specifiedRules } from 'graphql/validation/specifiedRules';
}

declare module "graphql/validation/specifiedRules" {
    import { ValidationContext } from 'graphql/validation/validate'; // It needs to check.

    /**
     * This set includes all validation rules defined by the GraphQL spec.
     */
    const specifiedRules: Array<(context: ValidationContext) => any>;

}

declare module "graphql/validation/validate" {
    import { GraphQLError } from 'graphql/error';
    import {
        Document,
        OperationDefinition,
        Variable,
        SelectionSet,
        FragmentSpread,
        FragmentDefinition,
    } from 'graphql/language/ast';
    import { GraphQLSchema } from 'graphql/type/schema';
    import {
        GraphQLInputType,
        GraphQLOutputType,
        GraphQLCompositeType,
        GraphQLFieldDefinition,
        GraphQLArgument
    } from 'graphql/type/definition';
    import { GraphQLDirective } from 'graphql/type/directives';
    import { TypeInfo } from 'graphql/utilities/TypeInfo';
    import { specifiedRules } from 'graphql/validation/specifiedRules';

    //type ValidationRule = (context: ValidationContext) => any;

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
    function validate(
        schema: GraphQLSchema,
        ast: Document,
        rules?: Array<any>
    ): Array<GraphQLError>;

    /**
     * This uses a specialized visitor which runs multiple visitors in parallel,
     * while maintaining the visitor skip and break API.
     *
     * @internal
     */
    function visitUsingRules(
        schema: GraphQLSchema,
        typeInfo: TypeInfo,
        documentAST: Document,
        rules: Array<any>
    ): Array<GraphQLError>;

    type HasSelectionSet = OperationDefinition | FragmentDefinition;
    interface VariableUsage {
        node: Variable,
        type: GraphQLInputType
    }

    /**
     * An instance of this class is passed as the "this" context to all validators,
     * allowing access to commonly useful contextual information from within a
     * validation rule.
     */
    export class ValidationContext {
        constructor(schema: GraphQLSchema, ast: Document, typeInfo: TypeInfo);
        reportError(error: GraphQLError): void;

        getErrors(): Array<GraphQLError>;

        getSchema(): GraphQLSchema;

        getDocument(): Document;

        getFragment(name: string): FragmentDefinition;

        getFragmentSpreads(node: SelectionSet): Array<FragmentSpread>;

        getRecursivelyReferencedFragments(
            operation: OperationDefinition
        ): Array<FragmentDefinition>;

        getVariableUsages(node: HasSelectionSet): Array<VariableUsage>;

        getRecursiveVariableUsages(
            operation: OperationDefinition
        ): Array<VariableUsage>;

        getType(): GraphQLOutputType;

        getParentType(): GraphQLCompositeType;

        getInputType(): GraphQLInputType;

        getFieldDef(): GraphQLFieldDefinition;

        getDirective(): GraphQLDirective;

        getArgument(): GraphQLArgument;
    }

}


///////////////////////////
// graphql/execution     //
///////////////////////////
declare module "graphql/execution" {
    export * from "graphql/execution/index";
}

declare module "graphql/execution/index" {
    export { execute } from 'graphql/execution/execute';
}

declare module "graphql/execution/execute" {
    import { GraphQLError, locatedError } from 'graphql/error';
    import { GraphQLSchema } from 'graphql/type/schema';
    import {
        Directive,
        Document,
        OperationDefinition,
        SelectionSet,
        Field,
        InlineFragment,
        FragmentDefinition
    } from 'graphql/language/ast';
    /**
     * Data that must be available at all points during query execution.
     *
     * Namely, schema of the type system that is currently executing,
     * and the fragments defined in the query document
     */
    interface ExecutionContext {
        schema: GraphQLSchema;
        fragments: { [key: string]: FragmentDefinition };
        rootValue: any;
        operation: OperationDefinition;
        variableValues: { [key: string]: any };
        errors: Array<GraphQLError>;
    }

    /**
     * The result of execution. `data` is the result of executing the
     * query, `errors` is null if no errors occurred, and is a
     * non-empty array if an error occurred.
     */
    interface ExecutionResult {
        data: Object;
        errors?: Array<GraphQLError>;
    }

    /**
     * Implements the "Evaluating requests" section of the GraphQL specification.
     *
     * Returns a Promise that will eventually be resolved and never rejected.
     *
     * If the arguments to this function do not result in a legal execution context,
     * a GraphQLError will be thrown immediately explaining the invalid input.
     */
    function execute(
        schema: GraphQLSchema,
        documentAST: Document,
        rootValue?: any,
        contextValue?: any,
        variableValues?: {
            [key: string]: any
        },
        operationName?: string
    ): Promise<ExecutionResult>
}

declare module "graphql/execution/values" {
    import { GraphQLInputType, GraphQLArgument } from 'graphql/type/definition';
    import { GraphQLSchema } from 'graphql/type/schema';
    import { Argument, VariableDefinition } from 'graphql/language/ast';
    /**
     * Prepares an object map of variableValues of the correct type based on the
     * provided variable definitions and arbitrary input. If the input cannot be
     * parsed to match the variable definitions, a GraphQLError will be thrown.
     */
    function getVariableValues(
        schema: GraphQLSchema,
        definitionASTs: Array<VariableDefinition>,
        inputs: { [key: string]: any }
    ): { [key: string]: any }

    /**
     * Prepares an object map of argument values given a list of argument
     * definitions and list of argument AST nodes.
     */
    function getArgumentValues(
        argDefs: Array<GraphQLArgument>,
        argASTs: Array<Argument>,
        variableValues?: { [key: string]: any }
    ): { [key: string]: any };
}

///////////////////////////
// graphql/error         //
///////////////////////////
declare module "graphql/error" {
    export * from 'graphql/error/index';
}

declare module "graphql/error/index" {
    export { GraphQLError } from 'graphql/error/GraphQLError';
    export { syntaxError } from 'graphql/error/syntaxError';
    export { locatedError } from 'graphql/error/locatedError';
    export { formatError } from 'graphql/error/formatError';
}

declare module "graphql/error/formatError" {
    import { GraphQLError } from 'graphql/error/GraphQLError';

    /**
     * Given a GraphQLError, format it according to the rules described by the
     * Response Format, Errors section of the GraphQL Specification.
     */
    function formatError(error: GraphQLError): GraphQLFormattedError;

    type GraphQLFormattedError = {
        message: string,
        locations: Array<GraphQLErrorLocation>
    };

    type GraphQLErrorLocation = {
        line: number,
        column: number
    };
}

declare module "graphql/error/GraphQLError" {
    import { getLocation } from 'graphql/language';
    import { Node } from 'graphql/language/ast';
    import { Source } from 'graphql/language/source';

    /**
     * A GraphQLError describes an Error found during the parse, validate, or
     * execute phases of performing a GraphQL operation. In addition to a message
     * and stack trace, it also includes information about the locations in a
     * GraphQL document and/or execution result that correspond to the Error.
     */
    class GraphQLError extends Error {

        /**
         * A message describing the Error for debugging purposes.
         *
         * Enumerable, and appears in the result of JSON.stringify().
         */
        message: string;

        /**
         * An array of { line, column } locations within the source GraphQL document
         * which correspond to this error.
         *
         * Errors during validation often contain multiple locations, for example to
         * point out two things with the same name. Errors during execution include a
         * single location, the field which produced the error.
         *
         * Enumerable, and appears in the result of JSON.stringify().
         */
        locations: Array<{ line: number, column: number }> | void;

        /**
         * An array describing the JSON-path into the execution response which
         * corresponds to this error. Only included for errors during execution.
         *
         * Enumerable, and appears in the result of JSON.stringify().
         */
        path: Array<string | number> | void;

        /**
         * An array of GraphQL AST Nodes corresponding to this error.
         */
        nodes: Array<Node> | void;

        /**
         * The source GraphQL document corresponding to this error.
         */
        source: Source | void;

        /**
         * An array of character offsets within the source GraphQL document
         * which correspond to this error.
         */
        positions: Array<number> | void;

        /**
         * The original error thrown from a field resolver during execution.
         */
        originalError: Error;
    }
}

declare module "graphql/error/locatedError" {
    import { GraphQLError } from 'graphql/error/GraphQLError';

    /**
     * Given an arbitrary Error, presumably thrown while attempting to execute a
     * GraphQL operation, produce a new GraphQLError aware of the location in the
     * document responsible for the original Error.
     */
    function locatedError<T>(
        originalError: Error,
        nodes: Array<T>,
        path: Array<string | number>
    ): GraphQLError;
}

declare module "graphql/error/syntaxError" {
    import { Source } from 'graphql/language/source';
    import { GraphQLError } from 'graphql/error/GraphQLError';

    /**
     * Produces a GraphQLError representing a syntax error, containing useful
     * descriptive information about the syntax error's position in the source.
     */
    function syntaxError(
        source: Source,
        position: number,
        description: string
    ): GraphQLError;
}

///////////////////////////
// graphql/utilities     //
///////////////////////////
// declare module "graphql/utilities/index" {
//     // The GraphQL query recommended for a full schema introspection.
//     export { introspectionQuery } from 'graphql/utilities/introspectionQuery';

//     // Gets the target Operation from a Document
//     export { getOperationAST } from 'graphql/utilities/getOperationAST';

//     // Build a GraphQLSchema from an introspection result.
//     export { buildClientSchema } from 'graphql/utilities/buildClientSchema';

//     // Build a GraphQLSchema from GraphQL Schema language.
//     export { buildASTSchema, buildSchema } from 'graphql/utilities/buildASTSchema';

//     // Extends an existing GraphQLSchema from a parsed GraphQL Schema language AST.
//     export { extendSchema } from 'graphql/utilities/extendSchema';

//     // Print a GraphQLSchema to GraphQL Schema language.
//     export { printSchema, printIntrospectionSchema } from 'graphql/utilities/schemaPrinter';

//     // Create a GraphQLType from a GraphQL language AST.
//     export { typeFromAST } from 'graphql/utilities/typeFromAST';

//     // Create a JavaScript value from a GraphQL language AST.
//     export { valueFromAST } from 'graphql/utilities/valueFromAST';

//     // Create a GraphQL language AST from a JavaScript value.
//     export { astFromValue } from 'graphql/utilities/astFromValue';

//     // A helper to use within recursive-descent visitors which need to be aware of
//     // the GraphQL type system.
//     export { TypeInfo } from 'graphql/utilities/TypeInfo';

//     // Determine if JavaScript values adhere to a GraphQL type.
//     export { isValidJSValue } from 'graphql/utilities/isValidJSValue';

//     // Determine if AST values adhere to a GraphQL type.
//     export { isValidLiteralValue } from 'graphql/utilities/isValidLiteralValue';

//     // Concatenates multiple AST together.
//     export { concatAST } from 'graphql/utilities/concatAST';

//     // Separates an AST into an AST per Operation.
//     export { separateOperations } from 'graphql/utilities/separateOperations';

//     // Comparators for types
//     export {
//         isEqualType,
//         isTypeSubTypeOf,
//         doTypesOverlap
//     } from 'graphql/utilities/typeComparators';

//     // Asserts that a string is a valid GraphQL name
//     export { assertValidName } from 'graphql/utilities/assertValidName';
// }

// declare module "graphql/utilities/assertValidName" {
//     // Helper to assert that provided names are valid.
//     function assertValidName(name: string): void;
// }

// declare module "graphql/utilities/astFromValue" {
//     import {
//         Value,
//         //IntValue,
//         //FloatValue,
//         //StringValue,
//         //BooleanValue,
//         //EnumValue,
//         //ListValue,
//         //ObjectValue,
//     } from 'graphql/language/ast';
//     import { GraphQLInputType } from 'graphql/type/definition';

//     /**
//      * Produces a GraphQL Value AST given a JavaScript value.
//      *
//      * A GraphQL type must be provided, which will be used to interpret different
//      * JavaScript values.
//      *
//      * | JSON Value    | GraphQL Value        |
//      * | ------------- | -------------------- |
//      * | Object        | Input Object         |
//      * | Array         | List                 |
//      * | Boolean       | Boolean              |
//      * | String        | String / Enum Value  |
//      * | Number        | Int / Float          |
//      * | Mixed         | Enum Value           |
//      *
//      */
//     // TODO: this should set overloads according to above the table
//     export function astFromValue(
//         value: any,
//         type: GraphQLInputType
//     ): Value // Warning: there is a code in bottom: throw new TypeError

// }

// declare module "graphql/utilities/buildASTSchema" {
//     import { Document } from 'graphql/language/ast';
//     import { Source } from 'graphql/language/source';
//     import { GraphQLSchema } from 'graphql/type/schema';

//     /**
//      * This takes the ast of a schema document produced by the parse function in
//      * src/language/parser.js.
//      *
//      * If no schema definition is provided, then it will look for types named Query
//      * and Mutation.
//      *
//      * Given that AST it constructs a GraphQLSchema. The resulting schema
//      * has no resolve methods, so execution will use default resolvers.
//      */
//     function buildASTSchema(ast: Document): GraphQLSchema;

//     /**
//      * Given an ast node, returns its string description based on a contiguous
//      * block full-line of comments preceding it.
//      */
//     function getDescription(node: { loc?: Location }): string;

//     /**
//      * A helper function to build a GraphQLSchema directly from a source
//      * document.
//      */
//     function buildSchema(source: string | Source): GraphQLSchema;
// }

// declare module "graphql/utilities/buildClientSchema" {
//     import { IntrospectionQuery } from 'graphql/utilities/introspectionQuery';
//     import { GraphQLSchema } from 'graphql/type/schema';
//     /**
//      * Build a GraphQLSchema for use by client tools.
//      *
//      * Given the result of a client running the introspection query, creates and
//      * returns a GraphQLSchema instance which can be then used with all graphql-js
//      * tools, but cannot be used to execute a query, as introspection does not
//      * represent the "resolver", "parse" or "serialize" functions or any other
//      * server-internal mechanisms.
//      */
//     export function buildClientSchema(
//         introspection: IntrospectionQuery
//     ): GraphQLSchema;
// }

// declare module "graphql/utilities/concatAST" {

// }

// declare module "graphql/utilities/extendSchema" {

// }

// declare module "graphql/utilities/getOperationAST" {

// }

// declare module "graphql/utilities/introspectionQuery" {

// }

// declare module "graphql/utilities/isValidJSValue" {

// }

// declare module "graphql/utilities/isValidLiteralValue" {

// }

// declare module "graphql/utilities/schemaPrinter" {

// }

// declare module "graphql/utilities/separateOperations" {

// }

// declare module "graphql/utilities/typeComparators" {

// }

// declare module "graphql/utilities/typeFromAST" {

// }

declare module "graphql/utilities/TypeInfo" {
    class TypeInfo { }
}

// declare module "graphql/utilities/valueFromAST" {

// }
