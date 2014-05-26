// Type definitions for gulp-footer
// Project: https://github.com/godaddy/gulp-footer
// Definitions by: David Driscoll <http://www.blacklite.ca>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IGulpFooter {
    (template?: string, data?: any): any;
    fromFile(filePath: string, data?: any): any;
}

declare var __IGulpFooter: IGulpFooter;

declare module "gulp-footer" {
    export = __IGulpFooter;
}