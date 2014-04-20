// Type definitions for gulp-plumber
// Project: https://github.com/floatdrop/gulp-plumber
// Definitions by: David Driscoll <http://www.blacklite.ca>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Gulp {
    interface IPlumberOptions {
        inherit?: boolean;
        errorHandler?: boolean;
    }
}

interface IGulpPlumber {
    (options?: Gulp.IPlumberOptions): any;
}

declare var __IGulpPlumber: IGulpPlumber;
declare module "gulp-plumber" {
    export = __IGulpPlumber;
}