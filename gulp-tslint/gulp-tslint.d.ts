// Type definitions for gulp-tslint
// Project: https://github.com/panuhorsmalahti/gulp-tslint
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>
/// <reference path="../vinyl/vinyl.d.ts"/>

declare module "gulp-tslint" {
    import vinyl = require("vinyl");

    function GulpTsLint(opts?: GulpTsLint.Options): NodeJS.ReadWriteStream;

    module GulpTsLint {
        interface Options {
            configuration?: {};
            rulesDirectory?: string;
            emitError?: boolean;
        }

        interface Position {
            position: number;
            line: number;
            character: number;
        }

        interface Output {
            name: string;
            failure: string;
            startPosition: Position;
            endPosition: Position;
            ruleName: string;
        }

        type Reporter = string|((output: Output[], file: vinyl, options: Options) => any);
        export function report(reporter?: Reporter, options?: Options): NodeJS.ReadWriteStream;
        export function report(options?: Options): NodeJS.ReadWriteStream;

    }

    export = GulpTsLint;
}

