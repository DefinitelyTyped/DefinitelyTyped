/// <reference types="node" />

import fs from "node:fs";

import { Plugin } from "esbuild";

declare namespace EsbuildCopyStaticFiles {
    interface CopyStaticFilesOptions {
        /**
         * source path to copy.
         *
         * @default './static'
         */
        src?: string | undefined;

        /**
         * destination path to copy to.
         *
         * @default '../public'
         */
        dest?: string | undefined;

        /**
         * dereference symlinks.
         *
         * @default true
         */
        dereference?: fs.CopyOptions["dereference"] | undefined;

        /**
         * when {@link CopyStaticFilesOptions.force|force} is false and the
         * {@link CopyStaticFilesOptions.dest|destination} exists, throw an error.
         *
         * @default false
         */
        errorOnExist?: fs.CopyOptions["errorOnExist"] | undefined;

        /**
         * function to filter copied files / directories. Return true to copy the item, false to
         * ignore it.
         */
        filter?: fs.CopyOptions["filter"] | undefined;

        /**
         * overwrite existing file or directory. The copy operation will ignore errors if you set
         * this to false and the {@link CopyStaticFilesOptions.dest|destination} exists. Use the
         * {@link CopyStaticFilesOptions.errorOnExist|errorOnExist} option to change this behavior.
         *
         * @default true
         */
        force?: fs.CopyOptions["force"] | undefined;

        /**
         * when true timestamps from {@link CopyStaticFilesOptions.src|src} will be preserved.
         *
         * @default true
         */
        preserveTimestamps?: fs.CopyOptions["preserveTimestamps"] | undefined;

        /**
         * copy directories recursively.
         *
         * @default true
         */
        recursive?: fs.CopyOptions["recursive"] | undefined;
    }

    interface CopyStaticFilesPluginInstance {
        name: "copy-static-files";
        setup: Plugin["setup"];
    }
}

declare function EsbuildCopyStaticFiles(
    options?: Partial<EsbuildCopyStaticFiles.CopyStaticFilesOptions>,
): EsbuildCopyStaticFiles.CopyStaticFilesPluginInstance;

export = EsbuildCopyStaticFiles;
