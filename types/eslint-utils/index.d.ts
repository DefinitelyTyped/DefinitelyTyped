// Type definitions for eslint-utils 3.0
// Project: https://github.com/mysticatea/eslint-utils#readme
// Definitions by: Josh Goldberg <https://github.com/JoshuaKGoldberg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { AST, Scope, SourceCode } from 'eslint';
import { VisitorKeys } from 'eslint-visitor-keys';
import { Node, SourceLocation } from 'estree';

/**
 * Find the variable of a given name.
 * @param initialScope The scope to start finding.
 * @param nameOrNode The variable name to find. If this is a Node object then it should be an Identifier node.
 * @returns The found variable or null.
 */
export function findVariable(initialScope: Scope.Scope, nameOrNode: string | Node): Scope.Variable | null;

/**
 * Get the location of the given function node for reporting.
 * @param node The function node to get.
 * @param sourceCode The source code object to get tokens.
 * @returns The location of the function node for reporting.
 */
export function getFunctionHeadLocation(node: Node, sourceCode: SourceCode): SourceLocation;

/**
 * Get the name and kind of the given function node.
 * @param node The function node to get.
 * @param sourceCode The source code object to get the code of computed property keys.
 * @returns The name and kind of the function node.
 */
export function getFunctionNameWithKind(node: Node, sourceCode?: SourceCode): string;

/**
 * Get the innermost scope which contains a given location.
 * @param initialScope The initial scope to search.
 * @param node The location to search.
 * @returns The innermost scope.
 */
export function getInnermostScope(initialScope: Scope.Scope, node: Node): Scope.Scope;

/**
 * Get the property name from a MemberExpression node or a Property node.
 * @param node The node to get.
 * @param initialScope The scope to start finding variable.
 * @returns The property name of the node.
 * @remarks
 * If the node is a computed property node and a scope was given, this checks the computed property name by the `getStringIfConstant` function with the scope, and returns the value of it.
 */
export function getPropertyName(node: Node, initialScope?: Scope.Scope): string | null;

export type StaticValue = StaticValueProvided | StaticValueOptional;

export interface StaticValueProvided {
    value: any;
}

export interface StaticValueOptional {
    optional?: true;
    value: undefined;
}

/**
 * Get the value of a given node if it's a static value.
 * @param node The node to get.
 * @param [initialScope] The scope to start finding variable. Optional. If this scope was given, this tries to resolve identifier references which are in the given node as much as possible.
 * @returns The static value of the node, or `null`.
 */
export function getStaticValue(node: Node, initialScope?: Scope.Scope | null): StaticValue | null;

/**
 * Get the value of a given node if it's a literal or a template literal.
 * @param node The node to get.
 * @param initialScope The scope to start finding variable.
 * @returns The value of the node, or `null`.
 * @remarks
 * If the node is an Identifier node and scope was given, this checks the variable of the identifier,
 * and returns the value of it if the variable is a constant.
 */
export function getStringIfConstant(node: Node, initialScope?: Scope.Scope | null): string | null;

/**
 * Options for `hasSideEffect`, optionally.
 */
export interface HasSideEffectOptions {
    /**
     * If `true` then it considers member accesses as the node which has side effects.
     */
    considerGetters?: boolean;

    /**
     * If `true` then it considers implicit type conversion as the node which has side effects.
     */
    considerImplicitTypeConversion?: boolean;

    /**
     * The keys to traverse nodes. Use `context.getSourceCode().visitorKeys`
     */
    visitorKeys?: VisitorKeys;
}

/**
 * Check whether a given node has any side effect or not.
 * @param node The node to get.
 * @param sourceCode The source code object.
 * @param options The option object.
 * @returns `true` if the node has a certain side effect.
 */
export function hasSideEffect(node: Node, sourceCode: SourceCode, options?: HasSideEffectOptions): boolean;

/**
 * Check whether a given node is parenthesized or not.
 * @param times The number of parantheses.
 * @param node The AST node to check.
 * @param sourceCode The source code object to get tokens.
 * @returns `true` if the node is parenthesized the given times.
 */
export function isParenthesized(times: number, node: Node, sourceCode: SourceCode): boolean;
/**
 * Check whether a given node is parenthesized or not.
 * @param node The AST node to check.
 * @param sourceCode The source code object to get tokens.
 * @returns `true` if the node is parenthesized.
 */
export function isParenthesized(node: Node, sourceCode: SourceCode): boolean;

/**
 * Checks if the given token is an arrow token or not.
 * @param token The token to check.
 * @returns `true` if the token is an arrow token.
 */
export function isArrowToken(token: AST.Token): boolean;

/**
 * Checks if the given token is a comma token or not.
 * @param token The token to check.
 * @returns `true` if the token is a comma token.
 */
export function isCommaToken(token: AST.Token): boolean;

/**
 * Checks if the given token is a semicolon token or not.
 * @param token The token to check.
 * @returns `true` if the token is a semicolon token.
 */
export function isSemicolonToken(token: AST.Token): boolean;

/**
 * Checks if the given token is a colon token or not.
 * @param token The token to check.
 * @returns `true` if the token is a colon token.
 */
export function isColonToken(token: AST.Token): boolean;

/**
 * Checks if the given token is an opening parenthesis token or not.
 * @param token The token to check.
 * @returns `true` if the token is an opening parenthesis token.
 */
export function isOpeningParenToken(token: AST.Token): boolean;

/**
 * Checks if the given token is a closing parenthesis token or not.
 * @param token The token to check.
 * @returns `true` if the token is a closing parenthesis token.
 */
export function isClosingParenToken(token: AST.Token): boolean;

/**
 * Checks if the given token is an opening square bracket token or not.
 * @param token The token to check.
 * @returns `true` if the token is an opening square bracket token.
 */
export function isOpeningBracketToken(token: AST.Token): boolean;

/**
 * Checks if the given token is a closing square bracket token or not.
 * @param token The token to check.
 * @returns `true` if the token is a closing square bracket token.
 */
export function isClosingBracketToken(token: AST.Token): boolean;

/**
 * Checks if the given token is an opening brace token or not.
 * @param token The token to check.
 * @returns `true` if the token is an opening brace token.
 */
export function isOpeningBraceToken(token: AST.Token): boolean;

/**
 * Checks if the given token is a closing brace token or not.
 * @param token The token to check.
 * @returns `true` if the token is a closing brace token.
 */
export function isClosingBraceToken(token: AST.Token): boolean;

/**
 * Checks if the given token is a comment token or not.
 * @param token The token to check.
 * @returns `true` if the token is a comment token.
 */
export function isCommentToken(token: AST.Token): boolean;

export const isNotArrowToken: typeof isArrowToken;
export const isNotCommaToken: typeof isCommaToken;
export const isNotSemicolonToken: typeof isSemicolonToken;
export const isNotColonToken: typeof isColonToken;
export const isNotOpeningParenToken: typeof isOpeningParenToken;
export const isNotClosingParenToken: typeof isClosingParenToken;
export const isNotOpeningBracketToken: typeof isOpeningBracketToken;
export const isNotClosingBracketToken: typeof isClosingBracketToken;
export const isNotOpeningBraceToken: typeof isOpeningBraceToken;
export const isNotClosingBraceToken: typeof isClosingBraceToken;
export const isNotCommentToken: typeof isCommentToken;

export * from './patternMatcher';
export * from './referenceTracker';
