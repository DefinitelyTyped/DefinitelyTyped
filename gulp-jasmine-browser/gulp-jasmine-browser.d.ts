// Type definitions for gulp-jasmine-browser v0.1.4
// Project: https://github.com/jasmine/gulp-jasmine-browser
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'gulp-jasmine-browser' {
    interface IJasmineBrowser {
        specRunner(options?: any): NodeJS.ReadWriteStream;
        server(options?: any): NodeJS.ReadWriteStream;
        headless(options?: any): NodeJS.ReadWriteStream;
    }

    var jasmineBrowser: IJasmineBrowser;
    export = jasmineBrowser;
}
