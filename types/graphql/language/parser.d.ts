import { NamedTypeNode, TypeNode, ValueNode, DocumentNode } from "./ast";
import { Source } from "./source";
import { Lexer } from "./lexer";

/**
 * Configuration options to control parser behavior
 */
export interface ParseOptions {
    /**
     * By default, the parser creates AST nodes that know the location
     * in the source that they correspond to. This configuration flag
     * disables that behavior for performance or testing.
     */
    noLocation?: boolean;
}

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
export function parse(
    source: string | Source,
    options?: ParseOptions
): DocumentNode;

/**
 * Given a string containing a GraphQL value, parse the AST for that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 */
export function parseValue(
    source: Source | string,
    options?: ParseOptions
): ValueNode;

export function parseConstValue<TOptions>(lexer: Lexer<TOptions>): ValueNode;

/**
 * Type :
 *   - NamedType
 *   - ListType
 *   - NonNullType
 */
export function parseType<TOptions>(lexer: Lexer<TOptions>): TypeNode;

/**
 * Type :
 *   - NamedType
 *   - ListType
 *   - NonNullType
 */
export function parseTypeReference<TOptions>(lexer: Lexer<TOptions>): TypeNode;

/**
 * NamedType : Name
 */
export function parseNamedType<TOptions>(lexer: Lexer<TOptions>): NamedTypeNode;
