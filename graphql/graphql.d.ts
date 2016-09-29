// Type definitions for graphql v0.7.0
// Project: https://www.npmjs.com/package/graphql
// Definitions by: TonyYang <https://github.com/TonyPythoneer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*************************************
 *                                   * 
 *               MODULES             * 
 *                                   *
 *************************************/
declare module "t" {
    import * as obj from "graphql/language/visitor";
}

///////////////////////////
// graphql               //
///////////////////////////
declare module "graphql" {
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
    export { parse, parseValue } from 'graphql/language/parser';
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
        directives?: Array<Directive> | null;
        types: Array<NamedType>;
    }

    type EnumTypeDefinition = {
        kind: 'EnumTypeDefinition';
        loc?: Location;
        name: Name;
        directives?: Array<Directive> | null;
        values: Array<EnumValueDefinition>;
    }

    type EnumValueDefinition = {
        kind: 'EnumValueDefinition';
        loc?: Location;
        name: Name;
        directives?: Array<Directive> | null;
    }

    type InputObjectTypeDefinition = {
        kind: 'InputObjectTypeDefinition';
        loc?: Location;
        name: Name;
        directives?: Array<Directive> | null;
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
        arguments?: Array<InputValueDefinition> | null;
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

///////////////////////////
// graphql/validation    //
///////////////////////////

///////////////////////////
// graphql/execution     //
///////////////////////////

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
