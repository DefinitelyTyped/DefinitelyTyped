// Type definitions for graphql v0.7.0
// Project: https://www.npmjs.com/package/graphql
// Definitions by: TonyYang <https://github.com/TonyPythoneer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/********************
 *                  *
 * graphql/language *
 *                  *
 * Including:       *
 *   ast            *
 *   kinds          *
 *   lexer          *
 *   location       *
 *   parser         *
 *   printer        *
 *   source         *
 *   visitor        *
 ********************/

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
    export type Node = Name
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

    export type Name = {
        kind: 'Name';
        loc?: Location;
        value: string;
    }

    // Document

    export type Document = {
        kind: 'Document';
        loc?: Location;
        definitions: Array<Definition>;
    }

    export type Definition = OperationDefinition
        | FragmentDefinition
        | TypeSystemDefinition // experimental non-spec addition.

    export type OperationDefinition = {
        kind: 'OperationDefinition';
        loc?: Location;
        operation: OperationType;
        name?: Name;
        variableDefinitions?: Array<VariableDefinition>;
        directives?: Array<Directive>;
        selectionSet: SelectionSet;
    }

    // Note: subscription is an experimental non-spec addition.
    export type OperationType = 'query' | 'mutation' | 'subscription';

    export type VariableDefinition = {
        kind: 'VariableDefinition';
        loc?: Location;
        variable: Variable;
        type: Type;
        defaultValue?: Value;
    }

    export type Variable = {
        kind: 'Variable';
        loc?: Location;
        name: Name;
    }

    export type SelectionSet = {
        kind: 'SelectionSet';
        loc?: Location;
        selections: Array<Selection>;
    }

    export type Selection = Field
        | FragmentSpread
        | InlineFragment

    export type Field = {
        kind: 'Field';
        loc?: Location;
        alias?: Name;
        name: Name;
        arguments?: Array<Argument>;
        directives?: Array<Directive>;
        selectionSet?: SelectionSet;
    }

    export type Argument = {
        kind: 'Argument';
        loc?: Location;
        name: Name;
        value: Value;
    }


    // Fragments

    export type FragmentSpread = {
        kind: 'FragmentSpread';
        loc?: Location;
        name: Name;
        directives?: Array<Directive>;
    }

    export type InlineFragment = {
        kind: 'InlineFragment';
        loc?: Location;
        typeCondition?: NamedType;
        directives?: Array<Directive>;
        selectionSet: SelectionSet;
    }

    export type FragmentDefinition = {
        kind: 'FragmentDefinition';
        loc?: Location;
        name: Name;
        typeCondition: NamedType;
        directives?: Array<Directive>;
        selectionSet: SelectionSet;
    }


    // Values

    export type Value = Variable
        | IntValue
        | FloatValue
        | StringValue
        | BooleanValue
        | EnumValue
        | ListValue
        | ObjectValue

    export type IntValue = {
        kind: 'IntValue';
        loc?: Location;
        value: string;
    }

    export type FloatValue = {
        kind: 'FloatValue';
        loc?: Location;
        value: string;
    }

    export type StringValue = {
        kind: 'StringValue';
        loc?: Location;
        value: string;
    }

    export type BooleanValue = {
        kind: 'BooleanValue';
        loc?: Location;
        value: boolean;
    }

    export type EnumValue = {
        kind: 'EnumValue';
        loc?: Location;
        value: string;
    }

    export type ListValue = {
        kind: 'ListValue';
        loc?: Location;
        values: Array<Value>;
    }

    export type ObjectValue = {
        kind: 'ObjectValue';
        loc?: Location;
        fields: Array<ObjectField>;
    }

    export type ObjectField = {
        kind: 'ObjectField';
        loc?: Location;
        name: Name;
        value: Value;
    }


    // Directives

    export type Directive = {
        kind: 'Directive';
        loc?: Location;
        name: Name;
        arguments?: Array<Argument>;
    }


    // Type Reference

    export type Type = NamedType
        | ListType
        | NonNullType

    export type NamedType = {
        kind: 'NamedType';
        loc?: Location;
        name: Name;
    };

    export type ListType = {
        kind: 'ListType';
        loc?: Location;
        type: Type;
    }

    export type NonNullType = {
        kind: 'NonNullType';
        loc?: Location;
        type: NamedType | ListType;
    }

    // Type System Definition

    export type TypeSystemDefinition = SchemaDefinition
        | TypeDefinition
        | TypeExtensionDefinition
        | DirectiveDefinition

    export type SchemaDefinition = {
        kind: 'SchemaDefinition';
        loc?: Location;
        directives: Array<Directive>;
        operationTypes: Array<OperationTypeDefinition>;
    }

    export type OperationTypeDefinition = {
        kind: 'OperationTypeDefinition';
        loc?: Location;
        operation: OperationType;
        type: NamedType;
    }

    export type TypeDefinition = ScalarTypeDefinition
        | ObjectTypeDefinition
        | InterfaceTypeDefinition
        | UnionTypeDefinition
        | EnumTypeDefinition
        | InputObjectTypeDefinition

    export type ScalarTypeDefinition = {
        kind: 'ScalarTypeDefinition';
        loc?: Location;
        name: Name;
        directives?: Array<Directive>;
    }

    export type ObjectTypeDefinition = {
        kind: 'ObjectTypeDefinition';
        loc?: Location;
        name: Name;
        interfaces?: Array<NamedType>;
        directives?: Array<Directive>;
        fields: Array<FieldDefinition>;
    }

    export type FieldDefinition = {
        kind: 'FieldDefinition';
        loc?: Location;
        name: Name;
        arguments: Array<InputValueDefinition>;
        type: Type;
        directives?: Array<Directive>;
    }

    export type InputValueDefinition = {
        kind: 'InputValueDefinition';
        loc?: Location;
        name: Name;
        type: Type;
        defaultValue?: Value;
        directives?: Array<Directive>;
    }

    export type InterfaceTypeDefinition = {
        kind: 'InterfaceTypeDefinition';
        loc?: Location;
        name: Name;
        directives?: Array<Directive>;
        fields: Array<FieldDefinition>;
    }

    export type UnionTypeDefinition = {
        kind: 'UnionTypeDefinition';
        loc?: Location;
        name: Name;
        directives?: Array<Directive> | null;
        types: Array<NamedType>;
    }

    export type EnumTypeDefinition = {
        kind: 'EnumTypeDefinition';
        loc?: Location;
        name: Name;
        directives?: Array<Directive> | null;
        values: Array<EnumValueDefinition>;
    }

    export type EnumValueDefinition = {
        kind: 'EnumValueDefinition';
        loc?: Location;
        name: Name;
        directives?: Array<Directive> | null;
    }

    export type InputObjectTypeDefinition = {
        kind: 'InputObjectTypeDefinition';
        loc?: Location;
        name: Name;
        directives?: Array<Directive> | null;
        fields: Array<InputValueDefinition>;
    }

    export type TypeExtensionDefinition = {
        kind: 'TypeExtensionDefinition';
        loc?: Location;
        definition: ObjectTypeDefinition;
    }

    export type DirectiveDefinition = {
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
    export type ParseOptions = {
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
    export function parse(
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
    const QueryDocumentKeys: QueryDocumentKeys;
    interface QueryDocumentKeys {
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
