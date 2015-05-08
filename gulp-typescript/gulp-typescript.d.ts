// Type definitions for gulp-typescript
// Project: https://github.com/ivogabe/gulp-typescript
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-typescript" {
    function GulpTypescript(params: GulpTypescript.Params, filters?: GulpTypescript.FilterSettings): GulpTypescript.CompilationStream;

    module GulpTypescript {
        export function createProject(params: Params): Params;
        export function filter(filters: FilterSettings): CompilationStream;
        interface Params {
            declarationFiles?: boolean;
            module?: string;
            noEmitOnError?: boolean;
            noExternalResolve?: boolean;
            noImplicitAny?: boolean;
            noLib?: boolean;
            removeComments?: boolean;
            sourceRoot?: string;
            sortOutput?: boolean;
            target?: string;
        }

        interface FilterSettings {
            referencedFrom?: string[];
        }

        interface CompilationStream extends NodeJS.ReadWriteStream {
            dts: NodeJS.ReadWriteStream;
            js: NodeJS.ReadWriteStream;
        }
    }

    export = GulpTypescript;
}