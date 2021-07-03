// Type definitions for karma-coverage 2.0
// Project: https://github.com/karma-runner/karma-coverage
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
//                 Yaroslav Admin <https://github.com/devoto13>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import "karma";
import { Store } from "istanbul";

declare module "karma" {
    interface ConfigOptions {
        /**
         * {@link https://github.com/karma-runner/karma-coverage/blob/v1.1.2/docs/configuration.md }
         */
        coverageReporter?: KarmaCoverageReporter & { reporters?: KarmaCoverageReporter[] };
    }

    /** Reporter type */
    type ReporterType =
        | "html"
        | "lcov"
        | "lcovonly"
        | "text"
        | "text-summary"
        | "cobertura"
        | "teamcity"
        | "json"
        | "json-summary"
        | "in-memory"
        | "none";

    interface Reporter {
        type: ReporterType;
        dir?: string;
        subdir?: string | ((browser: string) => string);
        file?: string;
    }

    interface CheckTresholds {
        global?: Tresholds;
        each?: Tresholds;
    }

    interface Tresholds {
        statements?: number;
        branches?: number;
        functions?: number;
        lines?: number;
        excludes?: string[];
        overrides?: Record<string, Tresholds>;
    }

    interface Watermarks {
        statements?: [number, number];
        functions?: [number, number];
        branches?: [number, number];
        lines?: [number, number];
    }

    interface KarmaCoverageReporter {
        /** Specify a reporter type */
        type?: ReporterType;

        /** This will be used to output coverage reports. When you set a relative path, the directory is resolved against the basePath. */
        dir?: string;

        /** This will be used in complement of the coverageReporter.dir option to generate the full output directory path */
        subdir?: string | ((browser: string) => string);

        /** If you use one of these reporters, `cobertura`, `lcovonly`, `teamcity`, `text` or `text-summary`, you may set the file option to specify the output file */
        file?: string;

        /** This will be used to configure minimum threshold enforcement for coverage results */
        check?: CheckTresholds;

        /** This will be used to set the coverage threshold colors */
        watermarks?: Watermarks;
        /**
         * You can opt to include all sources files, as indicated by the coverage preprocessor,
         * in your code coverage data, even if there are no tests covering them
         */
        includeAllSources?: boolean;

        /** You can opt to specify a source store allowing for external coverage collectors access to the instrumented code. */
        sourceStore?: Store;

        /** You can use multiple reporters, by providing array of options */
        reporters?: Reporter[];
        /**
         * Karma-coverage can infers the instrumenter regarding of the file extension.
         * It is possible to override this behavior and point out an instrumenter
         * for the files matching a specific pattern.
         */
        instrumenter?: {
            [key: string]: string;
        };

        instrumenters?: Record<string, any>;

        instrumenterOptions?: Record<string, Record<string, unknown>>;

        /**
         * If set to true, then CoffeeScript files instrumented with Ibrik will use
         * the .js extension for the transpiled source (without this option,
         * the JavaScript files will keep the original .coffee extension)
         */
        useJSExtensionForCoffeeScript?: boolean;

        [moreSettings: string]: unknown;
    }
}
