// Type definitions for gulp-jasmine-browser v0.1.4
// Project: https://github.com/jasmine/gulp-jasmine-browser
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


interface IJasmineBrowser {
    specRunner(options?: any): NodeJS.ReadWriteStream;
    server(options?: any): NodeJS.ReadWriteStream;
    headless(options?: any): NodeJS.ReadWriteStream;
}

declare var jasmineBrowser: IJasmineBrowser;
export = jasmineBrowser;
