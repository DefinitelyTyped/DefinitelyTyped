/// <reference types="node" />

declare namespace GulpZip {
    interface GulpZipOptions {
        /**
         * Compress
         * @default true
         */
        compress?: boolean | undefined;

        /**
         * Overrides the modification timestamp for all files added to the archive.
         *
         * Tip: Setting it to the same value across executions enables you to create stable archives
         * that change only when the contents of their entries change, regardless of whether those
         * entries were "touched" or regenerated.
         *
         * @default undefined
         */
        modifiedTime?: Date | undefined;
    }
}

declare function GulpZip(filename: string, options?: GulpZip.GulpZipOptions): NodeJS.ReadStream;

export = GulpZip;
