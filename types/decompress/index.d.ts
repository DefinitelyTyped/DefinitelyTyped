// Type definitions for decompress 4.2
// Project: https://github.com/kevva/decompress#readme
// Definitions by: York Yao <https://github.com/plantain-00>
//                 Jesse Bethke <https://github.com/jbethke>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export = decompress;

declare function decompress(input: string | Buffer, output?: string | decompress.DecompressOptions, opts?: decompress.DecompressOptions): Promise<decompress.File[]>;

declare namespace decompress {
    interface File {
        data: Buffer;
        mode: number;
        mtime: string;
        path: string;
        type: string;
    }

    interface DecompressOptions {
        /**
         * Filter out files before extracting
         */
        filter?(file: File): boolean;
        /**
         * Map files before extracting
         */
        map?(file: File): File;
        /**
         * Array of plugins to use.
         * Default: [decompressTar(), decompressTarbz2(), decompressTargz(), decompressUnzip()]
         */
        plugins?: any[] | undefined;
        /**
         * Remove leading directory components from extracted files.
         * Default: 0
         */
        strip?: number | undefined;
    }
}
