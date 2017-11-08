// Type definitions for gulp-tslint 8.1
// Project: https://github.com/panuhorsmalahti/gulp-tslint
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>
/// <reference types="vinyl" />

import vinyl = require("vinyl");

declare namespace gulpTsLint {
    interface GulpTsLint {
        (options?: Options): NodeJS.ReadWriteStream;
        report(reporter?: Reporter, options?: ReportOptions): NodeJS.ReadWriteStream;
        report(options?: ReportOptions): NodeJS.ReadWriteStream;
    }

    interface Options {
        configuration?: {};
        fix?: boolean;
        formatter?: string;
        formattersDirectory?: string;
        rulesDirectory?: string;
        tslint?: GulpTsLint;
        program?: any;
    }

    interface ReportOptions {
        emitError?: boolean,
        reportLimit?: number,
        summarizeFailureOutput?: boolean
        allowWarnings?: boolean;
    }

    interface Position {
        position: number;
        line: number;
        character: number;
    }

    interface Output {
        name: string;
        failure: string;
        startPosition: Position;
        endPosition: Position;
        ruleName: string;
    }

    type Reporter = string | ((output: Output[], file: vinyl, options: ReportOptions) => any);
}

declare var gulpTsLint: gulpTsLint.GulpTsLint;
export = gulpTsLint;
