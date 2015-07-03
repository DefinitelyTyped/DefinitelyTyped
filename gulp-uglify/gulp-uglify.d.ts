// Type definitions for gulp-uglify v1.2.0
// Project: https://github.com/terinjokes/gulp-uglify
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'gulp-uglify' {
    function uglify(opts?: any): NodeJS.ReadWriteStream;

    export = uglify;
}
