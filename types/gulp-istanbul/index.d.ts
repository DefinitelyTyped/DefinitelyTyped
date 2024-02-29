/// <reference types="node"/>

declare function GulpIstanbul(opts?: GulpIstanbul.Options): NodeJS.ReadWriteStream;

declare namespace GulpIstanbul {
    export function hookRequire(): NodeJS.ReadWriteStream;
    export function summarizeCoverage(opts?: { coverageVariable?: string | undefined }): Coverage;
    export function writeReports(opts?: ReportOptions): NodeJS.ReadWriteStream;
    export function enforceThresholds(opts?: ThresholdOptions): NodeJS.ReadWriteStream;

    interface Options {
        coverageVariable?: string | undefined;
        includeUntested?: boolean | undefined;
        embedSource?: boolean | undefined;
        preserveComments?: boolean | undefined;
        noCompact?: boolean | undefined;
        noAutoWrap?: boolean | undefined;
        codeGenerationOptions?: Object | undefined;
        debug?: boolean | undefined;
        walkDebug?: boolean | undefined;
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
        dir?: string | undefined;
        reporters?: string[] | undefined;
        reportOpts?: { dir?: string | undefined } | undefined;
        coverageVariable?: string | undefined;
    }

    interface ThresholdOptions {
        coverageVariable?: string | undefined;
        thresholds?:
            | { global?: CoverageOptions | number | undefined; each?: CoverageOptions | number | undefined }
            | undefined;
    }

    interface CoverageOptions {
        lines?: number | undefined;
        statements?: number | undefined;
        functions?: number | undefined;
        branches?: number | undefined;
    }
}

export = GulpIstanbul;
