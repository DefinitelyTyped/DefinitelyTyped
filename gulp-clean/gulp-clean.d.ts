// Type definitions for gulp-clean
// Project: https://github.com/peter-vilja/gulp-clean
// Definitions by: David Driscoll <http://www.blacklite.ca>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IGulpClean {
    (options?: { force: boolean; }): any;
}

declare var __IGulpClean: IGulpClean;
declare module "gulp-clean" {
    export = __IGulpClean;
}