// Type definitions for npm-which 3.0
// Project: https://github.com/timoxley/npm-which
// Definitions by: Manuel Thalmann <https://github.com/manuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import "node";

/**
 * Provides options for the `npmwhich`-module.
 */
interface NpmWhichOptions {
    /**
     * The environment to use for resolving the binary.
     */
    env?: NodeJS.ProcessEnv;

    /**
     * The directory to find the binary for.
     */
    cwd?: string;
}

/**
 * Provides options for the `npmwhich`-module.
 */
interface StaticWhichOptions {
    /**
     * The environment to use for resolving the binary.
     */
    env?: NodeJS.ProcessEnv;

    /**
     * The directory to find the binary for.
     */
    cwd: string;
}

/**
 * Represents a callback for handling the result of `NpmWhich`.
 */
interface NpmWhichCallback {
    /**
     * Handles the result of `NpmWhich`.
     *
     * @param error
     * The error-message.
     *
     * @param result
     * The result.
     */
    (error: string, result: string): void;
}

/**
 * Represents a basic interface for `npm-which`.
 */
interface WhichBase<TOptions> {
    /**
     * Creates a searcher for the specified command.
     *
     * @param cmd
     * The command to look for.
     *
     * @param options
     * The default options.
     *
     * @return
     * A searcher for the specified command.
     */
    (cmd: string, options?: TOptions): InnerWhich;

    /**
     * Searches for the specified command.
     *
     * @param cmd
     * The command to look for.
     *
     * @param callback
     * A callback for handling the result.
     */
    (cmd: string, callback: NpmWhichCallback): void;

    /**
     * Searches for the specified command.
     *
     * @param cmd
     * The command to look for.
     *
     * @param options
     * The options for searching the command.
     *
     * @param callback
     * A callback for handling the result.
     */
    (cmd: string, options: TOptions, callback: NpmWhichCallback): void;
}

/**
 * Represents the static instance of `npm-which`.
 */
interface StaticWhich extends WhichBase<StaticWhichOptions> {
    /**
     * Initializes an `NpmWhich`-instance for the specified working-directory.
     *
     * @param cwd
     * The working-directory to browse.
     */
    (cwd?: string): NpmWhich;

    /**
     * Searches for the specified command.
     *
     * @param cmd
     * The command to look for.
     *
     * @param options
     * The options for searching the command.
     */
    sync(cmd: string, options: StaticWhichOptions): string;
}

/**
 * Provides the functionality to search for a command.
 */
interface NpmWhich extends WhichBase<NpmWhichOptions> {
    /**
     * Searches for the specified command.
     *
     * @param cmd
     * The command to look for.
     *
     * @param options
     * The options for searching the command.
     */
    sync(cmd: string, options?: StaticWhichOptions): string;
}

interface InnerWhich {
    /**
     * Creates a searcher for the specified command.
     *
     * @param options
     * The options for searching the command.
     */
    (options?: NpmWhichOptions): InnerWhich;

    /**
     * Searches for the command.
     *
     * @param callback
     * A callback for handling the result.
     */
    (callback: NpmWhichCallback): void;

    /**
     * Searches for the command.
     *
     * @param options
     * The options for searching the command.
     *
     * @param callback
     * A callback for handling the result.
     */
    (options: NpmWhichOptions, callback: NpmWhichCallback): void;

    /**
     * Searches for the command.
     *
     * @param options
     * The options for searching the command.
     */
    sync(options?: NpmWhichOptions): string;
}

declare let npmWhich: StaticWhich;
export = npmWhich;
