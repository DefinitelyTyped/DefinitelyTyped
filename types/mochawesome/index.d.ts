// Type definitions for mochawesome 6.2
// Project: https://github.com/adamgruber/mochawesome#readme
// Definitions by: Chris Gilardi <https://github.com/Christop406>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ReporterOptions {
    quiet: boolean;
    code: boolean;
    'no-code': boolean;
    html: boolean;
    json: boolean;
    consoleReporter: string;
}

interface ConfigOptions {
    inlineDiffs?: boolean;
    reporterOptions?: Partial<ReporterOptions>;
}

/**
 * Initialize a new reporter.
 *
 * @api public
 */
declare function Mochawesome(runner: Mocha.Runner, options?: ConfigOptions): void;

export = Mochawesome;
