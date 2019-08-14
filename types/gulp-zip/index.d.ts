// Type definitions for gulp-zip 4.0
// Project: https://github.com/sindresorhus/gulp-zip
// Definitions by: Louis Orleans <https://github.com/dudeofawesome>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace GulpZip {
    interface GulpZipOptions {
        /**
         * Compress
         * @default true
         */
        compress?: boolean;
    }
}

declare function GulpZip(filename: string, options?: GulpZip.GulpZipOptions): NodeJS.ReadStream;

export = GulpZip;
