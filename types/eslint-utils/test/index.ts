import { AST, Scope, SourceCode } from 'eslint';
import * as utils from 'eslint-utils';
import { Node } from 'estree';

declare const node: Node;
declare const scope: Scope.Scope;
declare const sourceCode: SourceCode;
declare const token: AST.Token;

// $ExpectType Variable | null
utils.findVariable(scope, 'name');

// $ExpectType Variable | null
utils.findVariable(scope, node);

// $ExpectType SourceLocation
utils.getFunctionHeadLocation(node, sourceCode);

// $ExpectType string
utils.getFunctionNameWithKind(node, undefined);

// $ExpectType string
utils.getFunctionNameWithKind(node, sourceCode);

// $ExpectType string
utils.getFunctionNameWithKind(node);

// $ExpectType Scope
utils.getInnermostScope(scope, node);

// $ExpectType string | null
utils.getPropertyName(node);

// $ExpectType string | null
utils.getPropertyName(node, undefined);

// $ExpectType string | null
utils.getPropertyName(node, scope);

const staticValue = utils.getStaticValue(node);

if (staticValue) {
    if ('optional' in staticValue) {
        // $ExpectType true | undefined
        staticValue.optional;

        // $ExpectType undefined
        staticValue.value;
    } else {
        // $ExpectType any
        staticValue.value;
    }
}

// ExpectType is different in TS 4.1 vs. 4.3
const values: Array<utils.StaticValue | null> = [
    utils.getStaticValue(node, null),
    utils.getStaticValue(node, undefined),
    utils.getStaticValue(node, scope),
];

// $ExpectType string | null
utils.getStringIfConstant(node);

// $ExpectType string | null
utils.getStringIfConstant(node, null);

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
    visitorKeys: {
        [utils.ReferenceTracker.CALL]: [],
        [utils.ReferenceTracker.CONSTRUCT]: ['abc'],
        [utils.ReferenceTracker.ESM]: undefined,
        [utils.ReferenceTracker.READ]: ['abc', 'def'],
    },
});

// $ExpectType boolean
utils.isParenthesized(1, node, sourceCode);

// $ExpectType boolean
utils.isParenthesized(node, sourceCode);

// $ExpectType boolean
utils.isArrowToken(token);

// $ExpectType boolean
utils.isCommaToken(token);

// $ExpectType boolean
utils.isSemicolonToken(token);

// $ExpectType boolean
utils.isColonToken(token);

// $ExpectType boolean
utils.isOpeningParenToken(token);

// $ExpectType boolean
utils.isClosingParenToken(token);

// $ExpectType boolean
utils.isClosingBracketToken(token);

// $ExpectType boolean
utils.isOpeningBraceToken(token);

// $ExpectType boolean
utils.isClosingBraceToken(token);

// $ExpectType boolean
utils.isCommentToken(token);

// $ExpectType boolean
utils.isNotArrowToken(token);

// $ExpectType boolean
utils.isNotCommaToken(token);

// $ExpectType boolean
utils.isNotSemicolonToken(token);

// $ExpectType boolean
utils.isNotColonToken(token);

// $ExpectType boolean
utils.isNotOpeningParenToken(token);

// $ExpectType boolean
utils.isNotClosingParenToken(token);

// $ExpectType boolean
utils.isNotOpeningBracketToken(token);

// $ExpectType boolean
utils.isNotClosingBracketToken(token);

// $ExpectType boolean
utils.isNotOpeningBraceToken(token);

// $ExpectType boolean
utils.isNotClosingBraceToken(token);

// $ExpectType boolean
utils.isNotCommentToken(token);
