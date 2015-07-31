// Type definitions for Esprima v2.1.0
// Project: http://esprima.org
// Definitions by: teppeis <https://github.com/teppeis>, RReverser <https://github.com/RReverser>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../estree/estree.d.ts" />

declare module esprima {
    var version: string
    function parse(code: string, options?: Options): ESTree.Program
    function tokenize(code: string, options?: Options): Array<Token>

    interface Token {
        type: string
        value: string
    }

    interface Comment extends ESTree.Node {
        value: string
    }

    interface Options {
        loc?: boolean
        range?: boolean
        raw?: boolean
        tokens?: boolean
        comment?: boolean
        attachComment?: boolean
        tolerant?: boolean
        source?: boolean
    }
}

declare module "esprima" {
    export = esprima
}
