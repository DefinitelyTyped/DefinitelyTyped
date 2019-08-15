// Type definitions for gulp-changed
// Project: https://github.com/sindresorhus/gulp-changed
// Definitions by: Thomas Corbière <https://github.com/tomc974>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
/// <reference types="vinyl" />

import { Transform } from "stream";
import File = require("vinyl");

interface IComparator {
    /**
     * @param stream Should be used to queue sourceFile if it passes some comparison
     * @param callback Should be called when done
     * @param sourceFile File to operate on
     * @param destPath Destination for sourceFile as an absolute path
     */
    (stream: Transform, callback: Function, sourceFile: File, destPath: string): void;
}

interface IDestination {
    (file: string | Buffer): string;
}

interface IOptions {
    /**
     * The working directory the folder is relative to.
     * @default process.cwd()
     */
    cwd?: string;

    /**
     * Extension of the destination files.
     */
    extension?: string;

    /**
     * Function that determines whether the source file is different from the destination file.
     * @default changed.compareLastModifiedTime
     */
    hasChanged?: IComparator;
}

interface IGulpChanged {
    (destination: string | IDestination, options?: IOptions): NodeJS.ReadWriteStream;

    compareLastModifiedTime: IComparator;
    compareSha1Digest: IComparator;
}

declare const changed: IGulpChanged;
export = changed;
