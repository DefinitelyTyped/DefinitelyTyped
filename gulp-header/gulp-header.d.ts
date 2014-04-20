// Type definitions for gulp-header
// Project: https://github.com/godaddy/gulp-header
// Definitions by: David Driscoll <http://www.blacklite.ca>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IGulpHeader {
    (template?: string, data?: any): any;
    fromFile(filePath: string, data?: any): any;
}

declare var __IGulpHeader: IGulpHeader;
declare module "gulp-header" {
    export = __IGulpHeader;
}