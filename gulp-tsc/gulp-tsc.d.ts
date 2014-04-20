// Type definitions for gulp-tsc
// Project: https://github.com/kotas/gulp-tsc/
// Definitions by: David Driscoll <http://www.blacklite.ca>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Gulp {
    interface ITypeScriptOptions {
        tscPath?: string;
        tscSearch?: string;
        emitError?: boolean;
        module?: string;
        target?: string;
        out?: string;
        outDir?: string;
        mapRoot?: string;
        sourceRoot?: string;
        declaration?: boolean;
        noImplicitAny?: boolean;
        noResolve?: boolean;
        removeComments?: boolean;
        sourcemap?: boolean;
        noLib?: boolean;
        tmpDir?: string;
    }
}

interface IGulpTypeScript {
    (options?: Gulp.ITypeScriptOptions): any;
}

declare var __IGulpTypeScript: IGulpTypeScript;
declare module "gulp-tsc" {
    export = __IGulpTypeScript;
}
