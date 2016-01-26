// Type definitions for vinyl-source-stream
// Project: https://github.com/hughsk/vinyl-source-stream
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "vinyl-source-stream" {
    function vinylSourceStream(filename: string): NodeJS.ReadWriteStream;
    export = vinylSourceStream;
}