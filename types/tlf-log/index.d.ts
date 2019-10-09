// Type definitions for tlf-log 1.3
// Project: https://github.com/thislooksfun/tlf-log
// Definitions by: thislooksfun <https://github.com/thislooksfun>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace tlfLog {
    interface NewLevel {
        afterLog?: () => void;
    }
    interface NewLevelBefore extends NewLevel {
        before: string;
    }
    interface NewLevelAfter extends NewLevel {
        after: string;
    }

    /**
     * Logs the given messages, then calls `process.exit(1)`.
     *
     * @param messages The items to log.
     */
    function fatal(...messages: any[]): never;

    /**
     * Logs the given messages with no trailing newline, then calls `process.exit(1)`.
     *
     * @param messages The items to log.
     */
    function fatal_(...messages: any[]): never;

    /**
     * Logs the given messages at the "error" level.
     *
     * @param messages The items to log.
     */
    function error(...messages: any[]): void;

    /**
     * Logs the given messages at the "error" level with no trailing newline.
     *
     * @param messages The items to log.
     */
    function error_(...messages: any[]): void;

    /**
     * Logs the given messages at the "warn" level.
     *
     * @param messages The items to log.
     */
    function warn(...messages: any[]): void;

    /**
     * Logs the given messages at the "warn" level with no trailing newline.
     *
     * @param messages The items to log.
     */
    function warn_(...messages: any[]): void;

    /**
     * Logs the given messages at the "info" level.
     *
     * @param messages The items to log.
     */
    function info(...messages: any[]): void;

    /**
     * Logs the given messages at the "info" level with no trailing newline.
     *
     * @param messages The items to log.
     */
    function info_(...messages: any[]): void;

    /**
     * Logs the given messages at the "trace" level.
     *
     * @param messages The items to log.
     */
    function trace(...messages: any[]): void;

    /**
     * Logs the given messages at the "trace" level with no trailing newline.
     *
     * @param messages The items to log.
     */
    function trace_(...messages: any[]): void;

    /**
     * Logs the given messages at the "debug" level.
     *
     * @param messages The items to log.
     */
    function debug(...messages: any[]): void;

    /**
     * Logs the given messages at the "debug" level with no trailing newline.
     *
     * @param messages The items to log.
     */
    function debug_(...messages: any[]): void;

    /**
     * Sets the minimum level a message has to be to be logged.
     *
     * If `level` is set to 'silent' it will silence all log levels aside from
     * `fatal`
     *
     * @param level The name of the level to be the new minimum.
     */
    function _setLevel(level: string): void;

    /**
     * Adds a new log level.
     *
     * Note: You can't add a new level before 'debug' or after 'fatal'.
     *
     * @param name The name of the new level.
     * @param opts The options to use to create the new level.
     */
    function _addLevel(name: string, opts: NewLevelBefore | NewLevelAfter): void;

    /**
     * Indents the following messages by 2 spaces.
     *
     * If you want to indent by a different amount see {@link _prefix}.
     */
    function _indent(): void;

    /**
     * Deindents the following messages by 2 spaces.
     *
     * If the indent level is already 0 then this is a no-op.
     */
    function _deindent(): void;

    /**
     * Adds a prefix to the next messages.
     *
     * @param str The string to prefix the following messages with.
     */
    function _prefix(str: string): void;

    /**
     * Removes the most recent prefix.
     */
    function _deprefix(): void;
}

export = tlfLog;
