// Type definitions for gulp-concat
// Project: http://github.com/wearefractal/gulp-concat
// Definitions by: David Driscoll <http://www.blacklite.ca>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IGulpConcat {
    (filename: string, linefeed?: string): any;
}

declare var __IGulpConcat: IGulpConcat;
declare module "gulp-concat" {
    export = __IGulpConcat;
}