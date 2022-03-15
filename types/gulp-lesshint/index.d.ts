// Type definitions for gulp-lesshint 6.1
// Project: https://github.com/lesshint/gulp-lesshint
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform } from 'stream';

declare namespace gulpLesshint {
    interface Options {
        configPath?: string;
        maxWarnings?: number;
    }

    interface LessHintFile {
        lesshint: {
            success: boolean;
            resultCount: number;
            results: {
                column: number;
                file: string;
                fullPath: string;
                line: number;
                linter: string;
                message: string;
                severity: string;
            };
        };
        [key: string]: any;
    }

    interface Plugin {
        (options?: Options): {
            on(event: 'data', listener: (file: LessHintFile) => void): Transform;
        } & Transform;
        reporter(reporter?: string): Transform;
        failOnError(): Transform;
        failOnWarning(): Transform;
    }
}

declare const lesshintPlugin: gulpLesshint.Plugin;

export = lesshintPlugin;
