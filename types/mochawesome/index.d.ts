// Type definitions for mochawesome 6.2
// Project: https://github.com/adamgruber/mochawesome#readme
// Definitions by: Chris Gilardi <https://github.com/Christop406>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace Mochawesome {
    interface ReporterOptions {
        quiet: boolean;
        code: boolean;
        'no-code': boolean;
        html: boolean;
        json: boolean;
        consoleReporter: string;
        reportFilename: string;
    }

    interface Options {
        inlineDiffs?: boolean;
        reporterOptions?: Partial<ReporterOptions>;
    }

    interface Config {
        quiet: boolean;
        reportFilename: string;
        saveHtml: boolean;
        saveJson: boolean;
        consoleReporter: string;
        useInlineDiffs: boolean;
        code: boolean;
    }

    interface Stats {
        testsRegistered: number;
        passPercent: number;
        pendingPercent: number;
        other: number;
        hasOther: boolean;
        skipped: number;
        hasSkipped: boolean;
    }

    /**
     * Test run statistics
     */
    type OutputStats = Mocha.Stats & Stats;

    /**
     * Metadata about the versions and configuration of
     * the current `mocha`, `mochawesome` and `marge`
     * (`mochawesome-report-generator`) packages.
     */
    interface OutputMeta {
        mocha: {
            version: string;
        };
        mochawesome: {
            options: Config;
            version: string;
        };
        marge: {
            options: ReporterOptions;
            version: string;
        };
    }

    interface TestError {
        message: string;
        estack?: string;
        diff: string | string[];
    }

    /**
     * Plain JS object representation of `Mocha.Test`,
     * stripped of methods and circular references.
     */
    interface PlainTest {
        title: string;
        fullTitle: string;
        timedOut: boolean;
        pass: boolean;
        fail: boolean;
        pending: boolean;
        uuid: string;
        isHook: boolean;
        skipped: boolean;
        err: TestError | {};

        context?: string;
        speed?: 'slow' | 'medium' | 'fast';
        state?: 'failed' | 'passed';
        duration?: number;
        code?: string;
        parentUUID?: string;
    }

    /**
     * Plain JS object representation of `Mocha.Suite`,
     * stripped of methods and circular references.
     */
    interface PlainSuite {
        uuid: string;
        title: string;
        fullFile: string;
        file: string;
        beforeHooks: PlainTest[];
        afterHooks: PlainTest[];
        tests: PlainTest[];
        suites: PlainSuite[];
        passes: string[];
        failures: string[];
        pending: string[];
        skipped: string[];
        duration: number;
        root: boolean;
        rootEmpty: boolean;
        _timeout: number;
    }

    type OutputResults = PlainSuite[];

    interface Output {
        stats: OutputStats;
        results: OutputResults;
        meta: OutputMeta;
    }

    type ExitFunction = (code: number) => void;

    type Done = (failures: number, exit: ExitFunction) => Promise<void>;
}

/**
 * This class is used to create a new Mochawesome reporter
 * instance to be used with `mochawesome-report-generator` to
 * generate visual reports based off of Mocha test data.
 */
declare class Mochawesome {
    /**
     * Initialize a new reporter.
     *
     * @api public
     */
    constructor(runner: Mocha.Runner, options?: Mochawesome.Options);

    /**
     * The parsed configuration options for this
     * Mochawesome instance.
     */
    config: Mochawesome.Config;

    /**
     * Information related to the results of the test
     * suite ran by the supplied `Mocha.Runner` instance.
     * Will be populated after the suite is run.
     */
    output?: Mochawesome.Output;

    done: Mochawesome.Done;
}

export = Mochawesome;
