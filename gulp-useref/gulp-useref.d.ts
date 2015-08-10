// Type definitions for gulp-useref v1.2.0
// Project: https://github.com/jonkemp/gulp-useref
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module 'gulp-useref' {
    interface IAssetsOptions {
        searchPath?: string | string[];
        noconcat?: boolean;
    }

    interface IAssetsStream extends NodeJS.ReadWriteStream {
        restore(): NodeJS.ReadWriteStream;
    }

    interface IUseref {
        (options?: any): NodeJS.ReadWriteStream;
        assets(options?: IAssetsOptions): IAssetsStream;
    }

    var useref: IUseref;
    export = useref;
}
