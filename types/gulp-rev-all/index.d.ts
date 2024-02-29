/// <reference types="node" />

interface GulpRevAll {
    revision(options?: gulpRevAll.Options): NodeJS.ReadWriteStream;
    manifestFile(): NodeJS.ReadWriteStream;
    versionFile(): NodeJS.ReadWriteStream;
}

declare namespace gulpRevAll {
    interface Options {
        /**
         * Set the filename of the file created by revAll.versionFile()
         *
         * @default 'rev-version.json'
         */
        fileNameVersion?: string | undefined;

        /**
         * Set the filename of the file created by revAll.manifestFile()
         *
         * @default 'rev-version.json'
         */
        fileNameManifest?: string | undefined;

        /**
         * Add only specific file types to the manifest file
         *
         * @default ['.css', '.js']
         */
        includeFilesInManifest?: string[] | undefined;

        /**
         * Don't rename, search or update refrences in files matching these rules
         *
         * @default [ /^\/favicon.ico$/ ]
         */
        dontGlobal?: Array<RegExp | string> | undefined;

        /**
         * Don't rename files matching these rules
         *
         * @default []
         */
        dontRenameFile?: Array<RegExp | string> | undefined;

        /**
         * Don't update references matching these rules
         *
         * @default []
         */
        dontUpdateReference?: Array<RegExp | string> | undefined;

        /**
         * Don't search for references in files matching these rules
         *
         * @default []
         */
        dontSearchFile?: Array<RegExp | string> | undefined;

        /**
         * Change the length of the hash appended to the end of each revisioned
         * file (use transformFilename for more complicated scenarios).
         *
         * @default 8
         */
        hashLength?: number | undefined;

        /**
         * Prefixes absolute references with a string (use transformPath for
         * more complicated scenarios). Useful for adding a full url path to
         * files.
         *
         * @default none
         */
        prefix?: string | undefined;

        /**
         * Specify a function to transform the reference path. Useful in
         * instances where the local file structure does not reflect what the
         * remote file structure will be.
         *
         * @param rev revisioned reference path
         * @param source original reference path
         * @param path path to the file
         *
         * @default none
         */
        transformPath?(rev: string, source: string, path: string): string;

        /**
         * If the default naming convention does not suite your needs, you can
         * specify a custom filename transform.
         *
         * @param file file to be revisioned
         * @param hash calculated hash of the file
         */
        transformFilename?(file: any, hash: string): string;

        /**
         * If you set this options to true, verbose logging will be emitted to console.
         *
         * @default false
         */
        debug?: boolean | undefined;
    }
}

declare const gulpRevAll: GulpRevAll;

export = gulpRevAll;
