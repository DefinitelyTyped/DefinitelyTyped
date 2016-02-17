// Type definitions for Acorn v1.0.1
// Project: https://github.com/marijnh/acorn
// Definitions by: RReverser <https://github.com/RReverser>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../estree/estree.d.ts" />

declare module acorn {
    var version: string;
    function parse(input: string, options?: Options): ESTree.Program;
    function parseExpressionAt(input: string, pos: number, options?: Options): ESTree.Expression;
    function getLineInfo(input: string, offset: number): ESTree.Position;
    var defaultOptions: Options;

    interface TokenType {
        label: string;
        keyword: string;
        beforeExpr: boolean;
        startsExpr: boolean;
        isLoop: boolean;
        isAssign: boolean;
        prefix: boolean;
        postfix: boolean;
        binop: number;
        updateContext: (prevType: TokenType) => any;
    }

    interface AbstractToken {
        start: number;
        end: number;
        loc: ESTree.SourceLocation;
        range: [number, number];
    }

    interface Token extends AbstractToken {
        type: TokenType;
        value: any;
    }

    interface Comment extends AbstractToken {
        type: string;
        value: string;
    }

    interface Options {
        ecmaVersion?: number;
        sourceType?: string;
        onInsertedSemicolon?: (lastTokEnd: number, lastTokEndLoc?: ESTree.Position) => any;
        onTrailingComma?: (lastTokEnd: number, lastTokEndLoc?: ESTree.Position) => any;
        allowReserved?: boolean;
        allowReturnOutsideFunction?: boolean;
        allowImportExportEverywhere?: boolean;
        allowHashBang?: boolean;
        locations?: boolean;
        onToken?: ((token: Token) => any) | Token[];
        onComment?: ((isBlock: boolean, text: string, start: number, end: number, startLoc?: ESTree.Position, endLoc?: ESTree.Position) => any) | Comment[];
        ranges?: boolean;
        program?: ESTree.Program;
        sourceFile?: string;
        directSourceFile?: string;
        preserveParens?: boolean;
        plugins?: { [name: string]: Function; };
    }
}

declare module "acorn" {
    export = acorn
}
