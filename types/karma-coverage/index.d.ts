import "karma";
import { Store } from "istanbul";

declare module "karma" {
    interface ConfigOptions {
        /**
         * {@link https://github.com/karma-runner/karma-coverage/blob/v1.1.2/docs/configuration.md }
         */
        coverageReporter?: KarmaCoverageReporter & { reporters?: KarmaCoverageReporter[] | undefined } | undefined;
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
        dir?: string | undefined;
        subdir?: string | ((browser: string) => string) | undefined;
        file?: string | undefined;
    }

    interface CheckTresholds {
        global?: Tresholds | undefined;
        each?: Tresholds | undefined;
    }

    interface Tresholds {
        statements?: number | undefined;
        branches?: number | undefined;
        functions?: number | undefined;
        lines?: number | undefined;
        excludes?: string[] | undefined;
        overrides?: Record<string, Tresholds> | undefined;
    }

    interface Watermarks {
        statements?: [number, number] | undefined;
        functions?: [number, number] | undefined;
        branches?: [number, number] | undefined;
        lines?: [number, number] | undefined;
    }

    interface KarmaCoverageReporter {
        /** Specify a reporter type */
        type?: ReporterType | undefined;

        /** This will be used to output coverage reports. When you set a relative path, the directory is resolved against the basePath. */
        dir?: string | undefined;

        /** This will be used in complement of the coverageReporter.dir option to generate the full output directory path */
        subdir?: string | ((browser: string) => string) | undefined;

        /** If you use one of these reporters, `cobertura`, `lcovonly`, `teamcity`, `text` or `text-summary`, you may set the file option to specify the output file */
        file?: string | undefined;

        /** This will be used to configure minimum threshold enforcement for coverage results */
        check?: CheckTresholds | undefined;

        /** This will be used to set the coverage threshold colors */
        watermarks?: Watermarks | undefined;
        /**
         * You can opt to include all sources files, as indicated by the coverage preprocessor,
         * in your code coverage data, even if there are no tests covering them
         */
        includeAllSources?: boolean | undefined;

        /** You can opt to specify a source store allowing for external coverage collectors access to the instrumented code. */
        sourceStore?: Store | undefined;

        /** You can use multiple reporters, by providing array of options */
        reporters?: Reporter[] | undefined;
        /**
         * Karma-coverage can infers the instrumenter regarding of the file extension.
         * It is possible to override this behavior and point out an instrumenter
         * for the files matching a specific pattern.
         */
        instrumenter?: {
            [key: string]: string;
        } | undefined;

        instrumenters?: Record<string, any> | undefined;

        instrumenterOptions?: Record<string, Record<string, unknown>> | undefined;

        /**
         * If set to true, then CoffeeScript files instrumented with Ibrik will use
         * the .js extension for the transpiled source (without this option,
         * the JavaScript files will keep the original .coffee extension)
         */
        useJSExtensionForCoffeeScript?: boolean | undefined;

        [moreSettings: string]: unknown;
    }
}
