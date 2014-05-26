// Type definitions for gulp-newer
// Project: https://github.com/tschaub/gulp-newer
// Definitions by: David Driscoll <http://www.blacklite.ca>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IGulpNewer {
    (dest?: string): any;
}

declare var __IGulpNewer: IGulpNewer;
declare module "gulp-newer" {
    export = __IGulpNewer;
}