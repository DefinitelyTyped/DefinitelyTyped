// Type definitions for gulp-jade
// Project: https://github.com/phated/gulp-jade
// Definitions by: Louis Grignon <https://github.com/lgrignon/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-jade" {
    function GulpJade(options?: GulpJadeOptions): NodeJS.ReadWriteStream;

    interface GulpJadeOptions {
        client?: boolean;

        locals?: Object;

        jade?: any;

        pretty?: boolean;
    }

    namespace GulpJade { 
    }
    export = GulpJade;
}
