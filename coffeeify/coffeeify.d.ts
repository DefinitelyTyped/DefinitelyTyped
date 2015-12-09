// Type definitions for coffeeify
// Project: https://github.com/jnordberg/coffeeify
// Definitions by: Qubo <https://github.com/tkQubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../through/through.d.ts" />

declare module "coffeeify" {
    import through = require('through');

    namespace coffeeify {
        interface Coffeeify {
            isCoffee(file: string): boolean;
            isLiterate(file: string): boolean;
            sourceMap: boolean;
            compile(file: string, data: string, callback: Callback): void;
            (file: string): through.ThroughStream;
        }

        interface Callback {
            (error: ParseError, compiled: string): void;
        }

        interface ParseError extends SyntaxError {
            new(error: any, src: string, file: string): ParseError;
            message: string;
            line: number;
            column: number;
            annotated: string;
        }
    }

    var coffeeify: coffeeify.Coffeeify;

    export = coffeeify;
}

