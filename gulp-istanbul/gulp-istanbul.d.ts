// Type definitions for gulp-istanbul v0.9.0
// Project: https://github.com/SBoudrias/gulp-istanbul
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts"/>

declare module "gulp-istanbul" {
    function GulpIstanbul(opts?: GulpIstanbul.Options): NodeJS.ReadWriteStream;

    module GulpIstanbul {
        export function hookRequire(): NodeJS.ReadWriteStream;
        export function summarizeCoverage(opts?: {coverageVariable?: string}): Coverage;
        export function writeReports(opts?: ReportOptions): NodeJS.ReadWriteStream;
        export function enforceThresholds(opts?: ThresholdOptions): NodeJS.ReadWriteStream;

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
            reportOpts?: {dir?: string};
            coverageVariable?: string;
        }

        interface ThresholdOptions {
            coverageVariable?: string;
            thresholds?: { global?: Coverage|number; each?: Coverage|number };
        }

        interface CoverageOptions {
            lines?: number;
            statements?: number;
            functions?: number;
            branches?: number;
        }
    }

    export = GulpIstanbul;
}
