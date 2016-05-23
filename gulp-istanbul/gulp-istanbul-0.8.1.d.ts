// Type definitions for gulp-istanbul v0.8.1
// Project: https://github.com/SBoudrias/gulp-istanbul
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>


declare function GulpIstanbul(opts?: GulpIstanbul.Options): NodeJS.ReadWriteStream;

declare namespace GulpIstanbul {
    export function hookRequire(): NodeJS.ReadWriteStream;
    export function summarizeCoverage(opts?: { coverageVariable?: string }): Coverage;
    export function writeReports(opts?: ReportOptions): NodeJS.ReadWriteStream;

    interface Options {
        coverageVariable?: string;
        includeUntested?: boolean;
        embedSource?: boolean;
        preserveComments?: boolean;
        noCompact?: boolean;
        noAutoWrap?: boolean;
        codeGenerationOptions?: Object;
        debug?: boolean;
        walkDebug?: boolean;
    }

    interface Coverage {
        lines: CoverageStats;
        statements: CoverageStats;
        functions: CoverageStats;
        branches: CoverageStats;
    }

    interface CoverageStats {
        total: number;
        covered: number;
        skipped: number;
        pct: number;
    }

    interface ReportOptions {
        dir?: string;
        reporters?: string[];
        reportOpts?: { dir?: string };
        coverageVariable?: string;
    }
}

export = GulpIstanbul;
