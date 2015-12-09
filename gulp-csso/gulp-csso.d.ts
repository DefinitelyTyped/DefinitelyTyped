// Type definitions for gulp-csso v1.0.0
// Project: https://github.com/ben-eb/gulp-csso
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'gulp-csso' {
    function csso(structureMinimization?: boolean): NodeJS.ReadWriteStream;

    export = csso;
}
