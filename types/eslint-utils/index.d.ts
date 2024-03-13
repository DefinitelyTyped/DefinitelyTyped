import { AST, Scope, SourceCode } from "eslint";
import * as ESTree from "estree";

type CommentOrToken = ESTree.Comment | AST.Token;

/**
 * Find the variable of a given name.
 * @param initialScope The scope to start finding.
 * @param nameOrNode The variable name to find. If this is a Node object then it should be an Identifier node.
 * @returns The found variable or null.
 */
export function findVariable(initialScope: Scope.Scope, nameOrNode: string | ESTree.Identifier): Scope.Variable | null;

/**
 * Get the location of the given function node for reporting.
 * @param node The function node to get.
 * @param sourceCode The source code object to get tokens.
 * @returns The location of the function node for reporting.
 */
export function getFunctionHeadLocation(
    node: ESTree.ArrowFunctionExpression | ESTree.FunctionDeclaration | ESTree.FunctionExpression,
    sourceCode: SourceCode,
): ESTree.SourceLocation;

/**
 * Get the name and kind of the given function node.
 * @param node The function node to get.
 * @param sourceCode The source code object to get the code of computed property keys.
 * @returns The name and kind of the function node.
 */
export function getFunctionNameWithKind(node: ESTree.Node, sourceCode?: SourceCode): string;

/**
 * Get the innermost scope which contains a given location.
 * @param initialScope The initial scope to search.
 * @param node The location to search.
 * @returns The innermost scope.
 */
export function getInnermostScope(initialScope: Scope.Scope, node: ESTree.Node): Scope.Scope;

/**
 * Get the property name from a MemberExpression node or a Property node.
 * @param node The node to get.
 * @param initialScope The scope to start finding variable.
 * @returns The property name of the node.
 * @remarks
 * If the node is a computed property node and a scope was given, this checks the computed property name by the `getStringIfConstant` function with the scope, and returns the value of it.
 */
export function getPropertyName(
    node: ESTree.MemberExpression | ESTree.MethodDefinition | ESTree.Property | ESTree.PropertyDefinition,
    initialScope?: Scope.Scope,
): string | null;

export type StaticValue = StaticValueProvided | StaticValueOptional;

export interface StaticValueProvided {
    value: unknown;
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
export function getStaticValue(node: ESTree.Node, initialScope?: Scope.Scope): StaticValue | null;

/**
 * Get the value of a given node if it's a literal or a template literal.
 * @param node The node to get.
 * @param initialScope The scope to start finding variable.
 * @returns The value of the node, or `null`.
 * @remarks
 * If the node is an Identifier node and scope was given, this checks the variable of the identifier,
 * and returns the value of it if the variable is a constant.
 */
export function getStringIfConstant(node: ESTree.Node, initialScope?: Scope.Scope): string | null;

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
}

/**
 * Check whether a given node has any side effect or not.
 * @param node The node to get.
 * @param sourceCode The source code object.
 * @param options The option object.
 * @returns `true` if the node has a certain side effect.
 */
export function hasSideEffect(node: ESTree.Node, sourceCode: SourceCode, options?: HasSideEffectOptions): boolean;

/**
 * Check whether a given node is parenthesized or not.
 * @param times The number of parantheses.
 * @param node The AST node to check.
 * @param sourceCode The source code object to get tokens.
 * @returns `true` if the node is parenthesized the given times.
 */
export function isParenthesized(times: number, node: ESTree.Node, sourceCode: SourceCode): boolean;
/**
 * Check whether a given node is parenthesized or not.
 * @param node The AST node to check.
 * @param sourceCode The source code object to get tokens.
 * @returns `true` if the node is parenthesized.
 */
export function isParenthesized(node: ESTree.Node, sourceCode: SourceCode): boolean;

export interface PunctuatorToken<Value extends string> extends AST.Token {
    type: "Punctuator";
    value: Value;
}

export interface ArrowToken extends PunctuatorToken<"=>"> {}

export interface CommaToken extends PunctuatorToken<","> {}

export interface SemicolonToken extends PunctuatorToken<";"> {}

export interface ColonToken extends PunctuatorToken<":"> {}

export interface OpeningParenToken extends PunctuatorToken<"("> {}

export interface ClosingParenToken extends PunctuatorToken<")"> {}

export interface OpeningBracketToken extends PunctuatorToken<"["> {}

export interface ClosingBracketToken extends PunctuatorToken<"]"> {}

export interface OpeningBraceToken extends PunctuatorToken<"{"> {}

export interface ClosingBraceToken extends PunctuatorToken<"}"> {}

/**
 * Checks if the given token is an arrow token or not.
 * @param node The comment or token to check.
 * @returns `true` if the token is an arrow token.
 */
export function isArrowToken(node: CommentOrToken): node is ArrowToken;

/**
 * Checks if the given token is a comma token or not.
 * @param node The comment or token to check.
 * @returns `true` if the token is a comma token.
 */
export function isCommaToken(node: CommentOrToken): node is CommaToken;

/**
 * Checks if the given token is a semicolon token or not.
 * @param node The comment or token to check.
 * @returns `true` if the token is a semicolon token.
 */
export function isSemicolonToken(node: CommentOrToken): node is SemicolonToken;

/**
 * Checks if the given token is a colon token or not.
 * @param node The comment or token to check.
 * @returns `true` if the token is a colon token.
 */
export function isColonToken(node: CommentOrToken): node is ColonToken;

/**
 * Checks if the given token is an opening parenthesis token or not.
 * @param node The comment or token to check.
 * @returns `true` if the token is an opening parenthesis token.
 */
export function isOpeningParenToken(node: CommentOrToken): node is OpeningParenToken;

/**
 * Checks if the given token is a closing parenthesis token or not.
 * @param node The comment or token to check.
 * @returns `true` if the token is a closing parenthesis token.
 */
export function isClosingParenToken(node: CommentOrToken): node is ClosingParenToken;

/**
 * Checks if the given token is an opening square bracket token or not.
 * @param node The comment or token to check.
 * @returns `true` if the token is an opening square bracket token.
 */
export function isOpeningBracketToken(node: CommentOrToken): node is OpeningBracketToken;

/**
 * Checks if the given token is a closing square bracket token or not.
 * @param node The comment or token to check.
 * @returns `true` if the token is a closing square bracket token.
 */
export function isClosingBracketToken(node: CommentOrToken): node is ClosingBracketToken;

/**
 * Checks if the given token is an opening brace token or not.
 * @param node The comment or token to check.
 * @returns `true` if the token is an opening brace token.
 */
export function isOpeningBraceToken(node: CommentOrToken): node is OpeningBraceToken;

/**
 * Checks if the given token is a closing brace token or not.
 * @param node The comment or token to check.
 * @returns `true` if the token is a closing brace token.
 */
export function isClosingBraceToken(node: CommentOrToken): node is ClosingBraceToken;

/**
 * Checks if the given token is a comment token or not.
 * @param node The comment or token to check.
 * @returns `true` if the token is a comment token.
 */
export function isCommentToken(node: CommentOrToken): node is ESTree.Comment;

/**
 * Checks if the given token is an not arrow token.
 * @param node The comment or token to check.
 * @returns `true` if the token is not an arrow token.
 */
export function isNotArrowToken(node: CommentOrToken): boolean;

/**
 * Checks if the given token is not a comma token.
 * @param node The comment or token to check.
 * @returns `true` if the token not is a comma token.
 */
export function isNotCommaToken(node: CommentOrToken): boolean;

/**
 * Checks if the given token is not a semicolon token.
 * @param node The comment or token to check.
 * @returns `true` if the token not is a semicolon token.
 */
export function isNotSemicolonToken(node: CommentOrToken): boolean;

/**
 * Checks if the given token is not a colon token.
 * @param node The comment or token to check.
 * @returns `true` if the token not is a colon token.
 */
export function isNotColonToken(node: CommentOrToken): boolean;

/**
 * Checks if the given token is not an opening parenthesis token.
 * @param node The comment or token to check.
 * @returns `true` if the token not is an opening parenthesis token.
 */
export function isNotOpeningParenToken(node: CommentOrToken): boolean;

/**
 * Checks if the given token is not a closing parenthesis token.
 * @param node The comment or token to check.
 * @returns `true` if the token not is a closing parenthesis token.
 */
export function isNotClosingParenToken(node: CommentOrToken): boolean;

/**
 * Checks if the given token is not an opening square bracket token.
 * @param node The comment or token to check.
 * @returns `true` if the token not is an opening square bracket token.
 */
export function isNotOpeningBracketToken(node: CommentOrToken): boolean;

/**
 * Checks if the given token is not a closing square bracket token.
 * @param node The comment or token to check.
 * @returns `true` if the token not is a closing square bracket token.
 */
export function isNotClosingBracketToken(node: CommentOrToken): boolean;

/**
 * Checks if the given token is not an opening brace token.
 * @param node The comment or token to check.
 * @returns `true` if the token not is an opening brace token.
 */
export function isNotOpeningBraceToken(node: CommentOrToken): boolean;

/**
 * Checks if the given token is not a closing brace token.
 * @param node The comment or token to check.
 * @returns `true` if the token not is a closing brace token.
 */
export function isNotClosingBraceToken(node: CommentOrToken): boolean;

/**
 * Checks if the given token is not a comment token.
 * @param node The comment or token to check.
 * @returns `true` if the token is not a comment token.
 */
export function isNotCommentToken(node: CommentOrToken): boolean;

export * from "./patternMatcher";
export * from "./referenceTracker";
