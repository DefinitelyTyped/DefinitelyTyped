// Type definitions for newman 3.10
// Project: https://github.com/postmanlabs/newman
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
//                 Graham McGregor <https://github.com/Graham42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import { EventEmitter } from "events";
import {
    Collection,
    CollectionDefinition,
    VariableScope,
    VariableScopeDefinition
} from "postman-collection";

export interface NewmanRunOptions {
    /** A JSON / Collection / String representing the collection. */
    collection: Collection | CollectionDefinition | string;
    /** An environment JSON / file path for the current collection run. */
    environment?: VariableScope | VariableScopeDefinition | string;
    /** A globals JSON / file path for the current collection run. */
    globals?: VariableScope | VariableScopeDefinition | string;
    /**
     * Specify the number of iterations to run on the collection. This is
     * usually accompanied by providing a data file reference as
     * iterationData
     */
    iterationCount?: number;
    /**
     * Path to the JSON or CSV file or URL to be used as data source when
     * running multiple iterations on a collection.
     */
    iterationData?: any;
    /**
     * The name or ID of the folder (ItemGroup) in the collection which would
     * be run instead of the entire collection.
     */
    folder?: string;
    /**
     * Specify the time (in milliseconds) to wait for the entire collection run
     * to complete execution.
     *
     * Default value: Infinity
     */
    timeout?: number;
    /**
     * Specify the time (in milliseconds) to wait for requests to return a
     * response.
     *
     * Default value: Infinity
     */
    timeoutRequest?: number;
    /**
     * Specify the time (in milliseconds) to wait for scripts to return a
     * response.
     *
     * Default value: Infinity
     */
    timeoutScript?: number;
    /**
     * Specify the time (in milliseconds) to wait for between subsequent
     * requests.
     *
     * Default value: 0
     */
    delayRequest?: number;
    /**
     * This specifies whether newman would automatically follow 3xx responses
     * from servers.
     *
     * Default value: false
     */
    ignoreRedirects?: boolean;
    /**
     * Disables SSL verification checks and allows self-signed SSL certificates.
     *
     * Default value: false
     */
    insecure?: boolean;
    /**
     * Specify whether or not to stop a collection run on encountering the
     * first test script error.
     *
     * "folder" allows you to skip the entire collection run in case an invalid
     * folder was specified using the `folder` option or an error was
     * encountered in general.
     *
     * "failure" would gracefully stop a collection run after completing the
     * current test script.
     *
     * Default value: false
     */
    bail?: boolean | ["folder"] | ["failure"];
    /**
     * If present, allows overriding the default exit code from the current
     * collection run, useful for bypassing collection result failures.
     *
     * Default value: false
     */
    suppressExitCode?: boolean;
    /** Available reporters: cli, json, html and junit. */
    reporters?: string | string[];
    /**
     * Specify options for the reporter(s) declared in options.reporters.
     */
    reporter?: any;
    /**
     * Forces colored CLI output (for use in CI / non TTY environments).
     */
    color?: boolean;
    /**
     * Newman attempts to automatically turn off color output to terminals when
     * it detects the lack of color support. With this property, one can
     * forcibly turn off the usage of color in terminal output for reporters
     * and other parts of Newman that output to console.
     */
    noColor?: boolean;
    /**
     * The path to the public client certificate file.
     */
    sslClientCert?: string;
    /**
     * The path to the private client key file.
     */
    sslClientKey?: string;
    /**
     * The secret client key passphrase.
     */
    sslClientPassphrase?: string;
}

export interface NewmanRunSummary {
    error?: any;
    collection: any;
    environment: any;
    globals: any;
    run: NewmanRun;
}
export interface NewmanRun {
    stats: {
        iterations: NewmanRunStat;
        items: NewmanRunStat;
        scripts: NewmanRunStat;
        prerequests: NewmanRunStat;
        requests: NewmanRunStat;
        tests: NewmanRunStat;
        assertions: NewmanRunStat;
        testScripts: NewmanRunStat;
        prerequestScripts: NewmanRunStat;
    };
    failures: NewmanRunFailure[];
    executions: NewmanRunExecution[];
}
export interface NewmanRunStat {
    total?: number;
    failed?: number;
    pending?: number;
}
export interface NewmanRunExecution {
    item: NewmanRunExecutionItem;
    assertions: NewmanRunExecutionAssertion[];
}
export interface NewmanRunExecutionItem {
    name: string;
}
export interface NewmanRunExecutionAssertion {
    assertion: string;
    error: NewmanRunExecutionAssertionError;
}
export interface NewmanRunExecutionAssertionError {
    message: string;
}
export interface NewmanRunFailure {
    error: NewmanRunExecutionAssertionError;
    /** The event where the failure occurred */
    at: string;
}
export function run(
    options: NewmanRunOptions,
    callback?: (err: Error | null, summary: NewmanRunSummary) => void
): EventEmitter;
