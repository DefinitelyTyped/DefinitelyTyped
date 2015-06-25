// Type definitions for gulp-if
// Project: https://github.com/robrich/gulp-if
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module gulpIf {
    export interface GulpIf {
        (condition: boolean,
         stream: NodeJS.ReadWriteStream,
         elseStream?: NodeJS.ReadWriteStream): NodeJS.ReadWriteStream    
    }
}

declare module "gulp-if" {
    var gulp_if: gulpIf.GulpIf;
    export = gulp_if;
}