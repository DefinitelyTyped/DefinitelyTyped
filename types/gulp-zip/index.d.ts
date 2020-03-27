// Type definitions for gulp-zip 4.0
// Project: https://github.com/sindresorhus/gulp-zip
// Definitions by: Louis Orleans <https://github.com/dudeofawesome>
//                 Robert Bullen <https://github.com/robertbullen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace GulpZip {
    interface GulpZipOptions {
        /**
         * Compress
         * @default true
         */
        compress?: boolean;

        /**
         * Overrides the modification timestamp for all files added to the archive.
         *
         * Tip: Setting it to the same value across executions enables you to create stable archives
         * that change only when the contents of their entries change, regardless of whether those
         * entries were "touched" or regenerated.
         *
         * @default undefined
         */
        modifiedTime?: Date;
    }
}

declare function GulpZip(filename: string, options?: GulpZip.GulpZipOptions): NodeJS.ReadStream;

export = GulpZip;
