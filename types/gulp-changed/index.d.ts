// Type definitions for gulp-changed 4.0
// Project: https://github.com/sindresorhus/gulp-changed
// Definitions by: Thomas Corbière <https://github.com/tomc974>
//                 Jordy van Dortmont <https://github.com/jordyvandortmont>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import { Transform } from 'stream';
import File = require('vinyl');

interface Comparator {
    /**
     * @param stream Should be used to queue sourceFile if it passes some comparison
     * @param sourceFile File to operate on
     * @param destPath Destination for sourceFile as an absolute path
     */
    (stream: Transform, sourceFile: File, destPath: string): void;
}

interface Destination {
    (file: string | Buffer): string;
}

interface Options {
    /**
     * The working directory the folder is relative to.
     * @default process.cwd()
     */
    cwd?: string | undefined;

    /**
     * Extension of the destination files.
     */
    extension?: string | undefined;

    /**
     * Function that determines whether the source file is different from the destination file.
     * @default changed.compareLastModifiedTime
     */
    hasChanged?: Comparator | undefined;

    /**
     * Function to transform the path to the destination file. Should return the absolute path to the (renamed) destination file.
     */
    transformPath?: ((destPath: string) => string) | undefined;
}

interface GulpChanged {
    (destination: string | Destination, options?: Options): NodeJS.ReadWriteStream;

    compareLastModifiedTime: Comparator;
    compareContents: Comparator;
}

declare const changed: GulpChanged;
export = changed;
