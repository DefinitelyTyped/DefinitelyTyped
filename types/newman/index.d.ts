// Type definitions for newman 5.3
// Project: https://github.com/postmanlabs/newman
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as http from 'http';
import { EventEmitter } from "events";
import {
    Collection,
    CollectionDefinition,
    VariableScope,
    VariableScopeDefinition
} from "postman-collection";
import { CookieJar } from 'tough-cookie';

export interface NewmanRunOptions {
    /** A JSON / Collection / String representing the collection. */
    collection: Collection | CollectionDefinition | string;
    /** An environment JSON / file path for the current collection run. */
    environment?: VariableScope | VariableScopeDefinition | string | undefined;
    /** An override to environment variables.  See: https://github.com/postmanlabs/newman/blob/develop/lib/run/options.js */
    envVar?: { key: string, value: string } | Array<{ key: string, value: string }> | undefined;
    /** A globals JSON / file path for the current collection run. */
    globals?: VariableScope | VariableScopeDefinition | string | undefined;
    /** An override to global variables.  See: https://github.com/postmanlabs/newman/blob/develop/lib/run/options.js */
    globalVar?: { key: string, value: string } | Array<{ key: string, value: string }> | undefined;
    /** The relative path to export the globals file from the current run to  */
    exportGlobals?: string | undefined;
    /** The relative path to export the environment file from the current run to */
    exportEnvironment?: string | undefined;
    /** The relative path to export the collection from the current run to */
    exportCollection?: string | undefined;
    /**
     * Specify the number of iterations to run on the collection. This is
     * usually accompanied by providing a data file reference as
     * iterationData
     */
    iterationCount?: number | undefined;
    /**
     * Path to the JSON or CSV file or URL to be used as data source when
     * running multiple iterations on a collection.
     */
    iterationData?: any;
    /**
     * The name or ID of the folder (ItemGroup) in the collection which would
     * be run instead of the entire collection.
     */
    folder?: string | string[] | undefined;
    /**
     * The path of the directory to be used as working directory.
     */
    workingDir?: string | undefined;
    /**
     * Allow reading files outside of working directory.
     */
    insecureFileRead?: boolean | undefined;
    /**
     * Specify the time (in milliseconds) to wait for the entire collection run
     * to complete execution.
     *
     * Default value: Infinity
     */
    timeout?: number | undefined;
    /**
     * Specify the time (in milliseconds) to wait for requests to return a
     * response.
     *
     * Default value: Infinity
     */
    timeoutRequest?: number | undefined;
    /**
     * Specify the time (in milliseconds) to wait for scripts to return a
     * response.
     *
     * Default value: Infinity
     */
    timeoutScript?: number | undefined;
    /**
     * Specify the time (in milliseconds) to wait for between subsequent
     * requests.
     *
     * Default value: 0
     */
    delayRequest?: number | undefined;
    /**
     * This specifies whether newman would automatically follow 3xx responses
     * from servers.
     *
     * Default value: false
     */
    ignoreRedirects?: boolean | undefined;
    /**
     * Disables SSL verification checks and allows self-signed SSL certificates.
     *
     * Default value: false
     */
    insecure?: boolean | undefined;
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
    bail?: boolean | ["folder"] | ["failure"] | undefined;
    /**
     * If present, allows overriding the default exit code from the current
     * collection run, useful for bypassing collection result failures.
     *
     * Default value: false
     */
    suppressExitCode?: boolean | undefined;
    /** Available reporters: cli, json, html and junit. */
    reporters?: string | string[] | undefined;
    /**
     * Specify options for the reporter(s) declared in options.reporters.
     */
    reporter?: any;
    /**
     * Enable or Disable colored CLI output.
     *
     * Default value: auto
     */
    color?: "on" | "off" | "auto" | undefined;
    /**
     * The path to the public client certificate file.
     */
    sslClientCert?: string | undefined;
    /**
     * The path to the private client key file.
     */
    sslClientKey?: string | undefined;
    /**
     * The secret client key passphrase.
     */
    sslClientPassphrase?: string | undefined;
    /**
     * The path to the client certificate configuration list file. This option
     * takes precedence over sslClientCert, sslClientKey and
     * sslClientPassphrase. When there is no match in this configuration list,
     * sslClientCert is used as fallback.
     */
    sslClientCertList?: string | string[] | undefined;
    /**
     * The path to the file, that holds one or more trusted CA certificates in
     * PEM format.
     */
    sslExtraCaCerts?: string | undefined;
    /**
     * Custom HTTP(S) agents which will be used for making the requests. This allows for use of various proxies (e.g. socks)
     */
    requestAgents?: {
        http?: http.Agent | undefined;
        https?: http.Agent | undefined;
    } | undefined;
    /**
     * A tough-cookie cookieJar / file path for the current collection run.
     */
    cookieJar?: string | CookieJar;
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
    total?: number | undefined;
    failed?: number | undefined;
    pending?: number | undefined;
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
    name: string;
    index: number;
    test: string;
    message: string;
    stack: string;
}
export interface NewmanRunFailure {
    error: NewmanRunExecutionAssertionError;
    /** The event where the failure occurred */
    at: string;
    source: NewmanRunExecutionItem | undefined;
    parent: any;
    cursor: { ref: string } | {};
}
export function run(
    options: NewmanRunOptions,
    callback?: (err: Error | null, summary: NewmanRunSummary) => void
): EventEmitter;
export function run(
    callback: (err: Error | null, summary: NewmanRunSummary) => void
): EventEmitter;

/** The event fired when a console function is called within the scripts. */
export interface ConsoleEvent {
    cursor: Cursor;
    level: string;
    messages: unknown[];
}

/**
 * The cursor holds the details of the current state of the run.
 *
 * See: https://github.com/postmanlabs/newman/wiki/The-Cursor-Object
 */
export interface Cursor {
    /** Indicates if this cursor position is at the beginning of the run. */
    bof: boolean;

    /** Indicates if this cursor position is going to change to the next cycle. */
    cr: boolean;

    /** Total number of iterations that will be repeated on the length. */
    cycles: number;

    /** The run is empty and there is nothing to execute. */
    empty: boolean;

    /** Indicates if this cursor position is at the end of the run. */
    eof: boolean;

    /** A unique identifier added during the Item execution. */
    httpRequestId?: string;

    /** The current cycle in the total iteration count. */
    iteration: number;

    /** Total number of items in the collection run. */
    length: number;

    /** Current index of the item being processed from within the total number of items. */
    position: number;

    /** A common item identifier in an execution cycle. */
    ref: string;

    /** A unique identifier added during the Script execution. */
    scriptId?: string;
}
