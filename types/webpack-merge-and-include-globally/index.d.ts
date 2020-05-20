// Type definitions for webpack-merge-and-include-globally 2.1
// Project: https://github.com/markshapiro/webpack-merge-and-include-globally#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin, compilation } from 'webpack';

declare namespace MergeIntoFile {
    /**
     * Alternative way to specify files as array of src & dest,
     * for flexibility to transform and create multiple destination files for same source when you need to generate additional map file for example.
     * {@link https://github.com/markshapiro/webpack-merge-and-include-globally#files-as-array}
     */
    type SourceDestinationMaps = Array<{
        src: string[];
        dest:
            | string
            | ((
                  code: string,
              ) => {
                  [key: string]: string;
              });
    }>;

    /**
     * Object that maps file names to array of all files (can also be defined by wildcard path) that will be merged together and saved under each file name.
     * {@link https://github.com/markshapiro/webpack-merge-and-include-globally#files-as-object}
     */
    interface FilesMap {
        [key: string]: string[];
    }

    interface Options {
        /**
         * array of entry points (strings) for which this plugin should run only
         * {@link https://github.com/markshapiro/webpack-merge-and-include-globally#hash}
         */
        chunks?: string[];
        /**
         * encoding of node.js reading
         * @default 'utf-8'
         */
        encoding?: string;
        files?: FilesMap | SourceDestinationMaps;
        /**
         * set true to append version hash before file extension.
         * {@link https://github.com/markshapiro/webpack-merge-and-include-globally#hash}
         * @default false
         */
        hash?: boolean;
        /**
         * Object that maps resulting file names to transform methods that will be applied on merged content before saving. Use to minify / uglify the result.
         * {@linkhttps://github.com/markshapiro/webpack-merge-and-include-globally#transform}
         */
        transform?: {
            [key: string]: (code: string) => string;
        };
    }
}

/**
 * Webpack plugin to merge your source files together into single file, to be included in index.html,
 * and achieving same effect as you would by including them all separately through <script> or <link>.
 */
declare class MergeIntoFile extends Plugin {
    constructor(options: MergeIntoFile.Options, onComplete?: (files: { [key: string]: string }) => void);
    static getHashOfRelatedFile(assets: any, fileName: string): string | null;
}

export = MergeIntoFile;
