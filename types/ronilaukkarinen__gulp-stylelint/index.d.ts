/// <reference types="node" />

import * as stylelint from "stylelint";

interface GulpStylelint {
    (options?: gulpStylelint.Options): NodeJS.ReadWriteStream;
    formatters: Record<string, stylelint.Formatter>;
}

declare namespace gulpStylelint {
    interface Reporter {
        console?: true;
        formatter: string | stylelint.Formatter;
        save?: string;
    }

    interface Options extends Omit<stylelint.LinterOptions, "files" | "formatter"> {
        /**
         * When set to true, the process will end with non-zero error code if any error-level warnings were raised.
         *
         * @default true
         */
        failAfterError?: boolean;

        /**
         * Base directory for lint results written to filesystem.
         */
        reportOutputDir?: string;

        /**
         * List of reporter configuration objects.
         *
         * @default []
         */
        reporters?: Reporter[];

        /**
         * When set to true, the error handler will print an error stack trace.
         *
         * @default true
         */
        debug?: true;
    }
}

declare const gulpStylelint: GulpStylelint;

export = gulpStylelint;
