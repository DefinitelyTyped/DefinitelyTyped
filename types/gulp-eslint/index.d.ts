// Type definitions for gulp-eslint 6.0
// Project: https://github.com/adametry/gulp-eslint
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform, Writable } from 'stream';
import { CLIEngine } from 'eslint';

declare namespace gulpEslint {
    interface Results extends Array<CLIEngine.LintResult> {
        errorCount: number;
        warningCount: number;
    }

    type Output = (() => Writable) | Writable;

    type Formatter = CLIEngine.Formatter | string;

    interface Plugin {
        (options?: CLIEngine.Options | string): Transform;

        result(action: (result: CLIEngine.LintResult, callback: () => void) => void): Transform;
        results(action: (results: Results, callback: () => void) => void): Transform;

        failAfterError(): Transform;
        failOnError(): Transform;

        format(formatter?: Formatter, output?: Output): Transform;
        formatEach(formatter?: Formatter, output?: Output): Transform;
    }
}

declare const gulpEslint: gulpEslint.Plugin;

export = gulpEslint;
