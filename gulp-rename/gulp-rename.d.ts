// Type definitions for gulp-rename
// Project: https://github.com/hparra/gulp-rename
// Definitions by: David Driscoll <http://www.blacklite.ca>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface IGulpRename {
    (rename: (dir: string, base: string, ext: string) => string): any;
    (hash: {
        prefix?: string;
        suffix?: string;
        ext?: string;
    }: any;
}

declare var __IGulpRename: IGulpRename;
declare module "gulp-rename" {
    export = __IGulpRename;
}