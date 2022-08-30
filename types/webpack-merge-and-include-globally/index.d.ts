// Type definitions for webpack-merge-and-include-globally 2.1
// Project: https://github.com/markshapiro/webpack-merge-and-include-globally#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Plugin, Compiler } from 'webpack';

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

    interface TransformFileNameFunction {
        (fileNameBase: string, extension: string, hash: string): string;
    }

    interface Options {
        /**
         * array of entry points (strings) for which this plugin should run only
         * {@link https://github.com/markshapiro/webpack-merge-and-include-globally#chunks}
         * @default undefined
         */
        chunks?: string[] | undefined;
        /**
         * encoding of node.js reading
         * {@link https://github.com/markshapiro/webpack-merge-and-include-globally#encoding}
         * @default 'utf-8'
         */
        encoding?: string | undefined;
        files?: FilesMap | SourceDestinationMaps | undefined;
        /**
         * set true to append version hash before file extension.
         * {@link https://github.com/markshapiro/webpack-merge-and-include-globally#hash}
         * @default false
         */
        hash?: boolean | undefined;
        /**
         * Object that maps resulting file names to transform methods that will be applied on merged content before saving. Use to minify / uglify the result.
         * {@link https://github.com/markshapiro/webpack-merge-and-include-globally#transform}
         */
        transform?:
            | {
                  [key: string]: (code: string) => string;
              }
            | undefined;
        /**
         * A function for change output file name with hash
         * {@link https://github.com/markshapiro/webpack-merge-and-include-globally#transformfilename}
         */
        transformFileName?: TransformFileNameFunction | undefined;
        /**
         * string used between files when joining them together
         * {@link https://github.com/markshapiro/webpack-merge-and-include-globally#separator}
         * @default '\n'
         */
        separator?: string | undefined;
    }
}

/**
 * Webpack plugin to merge your source files together into single file, to be included in index.html,
 * and achieving same effect as you would by including them all separately through <script> or <link>.
 */
declare class MergeIntoFile extends Plugin {
    static getHashOfRelatedFile(assets: any, fileName: string): string | null;
    constructor(options: MergeIntoFile.Options, onComplete?: (files: { [key: string]: string }) => void);
    /** Hook into the Webpack compiler */
    apply(compiler: Compiler): void;
}

export = MergeIntoFile;
