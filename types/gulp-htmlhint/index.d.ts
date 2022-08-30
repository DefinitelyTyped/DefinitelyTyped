// Type definitions for gulp-htmlhint 4.0
// Project: https://github.com/bezoerb/gulp-htmlhint
// Definitions by: Martin Badin <https://github.com/martin-badin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Transform } from 'stream';
import { Rule } from 'htmlhint/types';

declare namespace gulpHtmlhint {
    interface Options {
        htmlhintrc?: string | undefined;
    }

    interface FailOnErrorOptions {
        /**
         * @default false
         */
        suppress: boolean;
    }

    type ReporterFunction = () => void;

    type Reported = 'fail' | 'failOn' | 'failAfter';

    interface Plugin {
        (options?: Options | string, customRules?: Rule[]): Transform;
        (customRules: Rule[]): Transform;
        addRule(rule: Rule): void;
        failAfterError(options?: Record<string, unknown>): Transform;
        failOnError(options?: FailOnErrorOptions): Transform;
        failReporter(options?: Record<string, unknown>): Transform; // Backward compatibility
        reporter(customReporter?: Reported | ReporterFunction | string, options?: Record<string, unknown>): Transform;
    }
}

declare const htmlhintPlugin: gulpHtmlhint.Plugin;

export = htmlhintPlugin;
