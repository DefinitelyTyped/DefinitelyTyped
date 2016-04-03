// Type definitions for gulp-useref v3.0.0
// Project: https://github.com/jonkemp/gulp-useref
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'gulp-useref' {
    interface Options {
        searchPath?: string | string[];
        base?: string;
        noAssets?: boolean;
        noconcat?: boolean;
        additionalStreams?: Array<NodeJS.ReadWriteStream>;
        transformPath?: (filePath: string) => void;
    }

    interface Useref {
        (options?: Options, ...transformStreams: NodeJS.ReadWriteStream[]): NodeJS.ReadWriteStream;
    }

    var useref: Useref;
    export = useref;
}
