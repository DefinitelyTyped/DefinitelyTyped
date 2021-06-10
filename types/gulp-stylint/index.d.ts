// Type definitions for gulp-stylint 4.0
// Project: https://github.com/danielhusar/gulp-stylint
// Definitions by: Takesi Tokugawa <https://github.com/TokugawaTakesi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface GulpStylint {
    (options?: GulpStylint.Options): NodeJS.ReadWriteStream;
    reporter(options?: GulpStylint): NodeJS.ReadWriteStream;
    reporter(identifier: "fail", options?: { failOnWarning: true }): NodeJS.ReadWriteStream;
}

declare namespace GulpStylint {
    interface Options {
        config?: string;
        rules?: { [ruleName: string]: any; };
        reporter?: any;
    }

    interface ReporterOptions {
        logger?(): void;
    }

    interface FailReporterOptions {
        failOnWarning: true;
    }
}

declare var gulpStylint: GulpStylint;
export = gulpStylint;
