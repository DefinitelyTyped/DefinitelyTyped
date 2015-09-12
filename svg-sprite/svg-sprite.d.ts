// Type definitions for svg-sprite
// Project: https://github.com/jkphl/svg-sprite
// Definitions by: Qubo <https://github.com/tkqubo>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../vinyl/vinyl.d.ts" />

declare module "svg-sprite" {
    import File = require('vinyl');

    namespace sprite {
        interface SVGSpriterConstructor {
            new(config: any): SVGSpriter;
        }

        interface SVGSpriter {
            add(file: string|File, name: string, svg: string): SVGSpriter;
            compile(config: any, callback: CompileCallback): SVGSpriter;
            compile(callback: CompileCallback): void;
            getShapes(dest: string, callback: GetShapesCallback): void;
        }

        interface CompileCallback {
            (error: any, result: any, data: any): any;
        }

        interface GetShapesCallback {
            (error: any, result: File[]): any;
        }
    }

    var sprite: sprite.SVGSpriterConstructor;

    export = sprite;
}

