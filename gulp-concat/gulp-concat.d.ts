// Type definitions for gulp-concat
// Project: http://github.com/wearefractal/gulp-concat
// Definitions by: Keita Kagurazaka <https://github.com/k-kagurazaka>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module "gulp-concat" {

    interface IOptions {
        newLine: string;
    }

    interface IFsStats {
        dev?: number;
        ino?: number;
        mode?: number;
        nlink?: number;
        uid?: number;
        gid?: number;
        rdev?: number;
        size?: number;
        blksize?: number;
        blocks?: number;
        atime?: Date;
        mtime?: Date;
        ctime?: Date;
    }

    interface IVinylOptions {
        cwd?: string;
        base?: string;
        path?: string;
        stat?: IFsStats;
        contents?: NodeJS.ReadableStream | Buffer;
    }

    function concat(filename: string, options?: IOptions): NodeJS.ReadWriteStream;
    function concat(options: IVinylOptions): NodeJS.ReadWriteStream;

    export = concat;
}
