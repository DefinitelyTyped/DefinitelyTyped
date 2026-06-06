import { AST, Scope, SourceCode } from "eslint";
import * as utils from "eslint-utils";
import * as ESTree from "estree";

declare const commentOrToken: ESTree.Comment | AST.Token;
declare const identifier: ESTree.Identifier;
declare const functionLike: ESTree.ArrowFunctionExpression | ESTree.FunctionDeclaration | ESTree.FunctionExpression;
declare const propertyLike:
    | ESTree.MemberExpression
    | ESTree.MethodDefinition
    | ESTree.Property
    | ESTree.PropertyDefinition;
declare const node: ESTree.Node;
declare const scope: Scope.Scope;
declare const sourceCode: SourceCode;

// $ExpectType Variable | null
utils.findVariable(scope, "name");

// $ExpectType Variable | null
utils.findVariable(scope, identifier);

// $ExpectType SourceLocation
utils.getFunctionHeadLocation(functionLike, sourceCode);

// $ExpectType string
utils.getFunctionNameWithKind(node, undefined);

// $ExpectType string
utils.getFunctionNameWithKind(node, sourceCode);

// $ExpectType string
utils.getFunctionNameWithKind(node);

// $ExpectType Scope
utils.getInnermostScope(scope, node);

// $ExpectType string | null
utils.getPropertyName(propertyLike);

// $ExpectType string | null
utils.getPropertyName(propertyLike, undefined);

// $ExpectType string | null
utils.getPropertyName(propertyLike, scope);

const staticValue = utils.getStaticValue(node);

if (staticValue) {
    if ("optional" in staticValue) {
        // $ExpectType true | undefined
        staticValue.optional;

        // $ExpectType undefined
        staticValue.value;
    } else {
        // $ExpectType unknown
        staticValue.value;
    }
}

// ExpectType is different in TS 4.1 vs. 4.3
const values: Array<utils.StaticValue | null> = [
    utils.getStaticValue(node, undefined),
    utils.getStaticValue(node, scope),
];

// $ExpectType string | null
utils.getStringIfConstant(node);

// $ExpectType string | null
utils.getStringIfConstant(node, undefined);

// $ExpectType string | null
utils.getStringIfConstant(node, scope);

// $ExpectType boolean
utils.hasSideEffect(node, sourceCode);

// $ExpectType boolean
utils.hasSideEffect(node, sourceCode, {});

// $ExpectType boolean
utils.hasSideEffect(node, sourceCode, {
    considerGetters: true,
    considerImplicitTypeConversion: true,
});

// $ExpectType boolean
utils.isParenthesized(1, node, sourceCode);

// $ExpectType boolean
utils.isParenthesized(node, sourceCode);

// $ExpectType boolean
utils.isArrowToken(commentOrToken);

// $ExpectType boolean
utils.isCommaToken(commentOrToken);

// $ExpectType boolean
utils.isSemicolonToken(commentOrToken);

// $ExpectType boolean
utils.isColonToken(commentOrToken);

// $ExpectType boolean
utils.isOpeningParenToken(commentOrToken);

// $ExpectType boolean
utils.isClosingParenToken(commentOrToken);

// $ExpectType boolean
utils.isClosingBracketToken(commentOrToken);

// $ExpectType boolean
utils.isOpeningBraceToken(commentOrToken);

// $ExpectType boolean
utils.isClosingBraceToken(commentOrToken);

// $ExpectType boolean
utils.isCommentToken(commentOrToken);

// $ExpectType boolean
utils.isNotArrowToken(commentOrToken);

// $ExpectType boolean
utils.isNotCommaToken(commentOrToken);

// $ExpectType boolean
utils.isNotSemicolonToken(commentOrToken);

// $ExpectType boolean
utils.isNotColonToken(commentOrToken);

// $ExpectType boolean
utils.isNotOpeningParenToken(commentOrToken);

// $ExpectType boolean
utils.isNotClosingParenToken(commentOrToken);

// $ExpectType boolean
utils.isNotOpeningBracketToken(commentOrToken);

// $ExpectType boolean
utils.isNotClosingBracketToken(commentOrToken);

// $ExpectType boolean
utils.isNotOpeningBraceToken(commentOrToken);

// $ExpectType boolean
utils.isNotClosingBraceToken(commentOrToken);

// $ExpectType boolean
utils.isNotCommentToken(commentOrToken);
