// Type definitions for gulp-mocha
// Project: https://github.com/sindresorhus/gulp-mocha
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../mocha/mocha.d.ts"/>
/// <reference path="../node/node.d.ts"/>

declare module "gulp-mocha" {
    function mocha(setupOptions?: MochaSetupOptions): NodeJS.ReadWriteStream;
    export = mocha;
}