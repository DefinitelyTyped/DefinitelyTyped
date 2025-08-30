/// <reference types="node" />
import { EventEmitter } from "events";

// Emit the responses to these when they get sent down to us
export type UnilateralTags = "unilateralTags" | "log";

/** Options for configuring the Watchman client */
export interface ClientOptions {
    /**
     * Absolute path to the watchman binary.
     * If not provided, the Client locates the binary using the PATH specified
     * by the node child_process's default env.
     */
    watchmanBinaryPath?: string;
}

/** Watchman capability check configuration */
export interface Capabilities {
    optional: string[];
    required: string[];
}

/** Response from the watch-project command */
export interface WatchProjectResponse {
    /** The watched root directory */
    watch: string;
    /** Warning message if any */
    warning?: string;
    /** Relative path from the watch root to the requested directory */
    relative_path?: string;
}

/** Response from the subscribe command */
export interface SubscribeResponse {
    /** Name of the subscription that was established */
    subscribe: string;
}

/** File change notification from a subscription */
export interface SubscriptionResponse {
    /** Root directory being watched */
    root: string;
    /** Subscription name that generated this notification */
    subscription: string;
    /** Array of files that changed */
    files: FileChange[];
}

/** Information about a changed file */
export interface FileChange {
    /** Name of the file that changed */
    name: string;
    /** Size of the file in bytes */
    size?: number;
    /** Modification time in milliseconds since epoch */
    mtime_ms?: number | { toNumber(): number };
    /** Whether the file exists */
    exists?: boolean;
    /** Type of the file */
    type?: FileType;
}

/**
 * Depth operators for dirname expressions
 * @example ["dirname", "foo/bar", ["depth", "eq", 0]]
 */
export type DepthOperator = "eq" | "ge" | "gt" | "le" | "lt" | "ne";

/**
 * File type identifiers
 * - b: block special file
 * - c: character special file
 * - d: directory
 * - f: regular file
 * - p: named pipe (fifo)
 * - l: symbolic link
 * - s: socket
 * - D: Solaris Door
 * - ?: unknown file type
 */
export type FileType = "b" | "c" | "d" | "f" | "p" | "l" | "s" | "D" | "?";

/**
 * Name scope for match and name expressions
 * - basename: Match against the file's basename (default)
 * - wholename: Match against the file's full path
 */
export type NameScope = "basename" | "wholename";

/**
 * Time fields for since expressions
 */
export type TimeField = "mtime" | "ctime";

/**
 * Size comparison operators
 */
export type SizeOperator = "eq" | "ge" | "gt" | "le" | "lt" | "ne";

/**
 * Log Levels:
 *  - debug - receive all log events
 *  - error - receive only important log events
 *  - off - receive no log events
 */
export type LogLevel = "debug" | "error" | "off";

/**
 * Expression term definitions
 * @see https://facebook.github.io/watchman/docs/expr/allof.html
 */
export type Expression =
    | readonly ["allof", ...Expression[]]
    | readonly ["anyof", ...Expression[]]
    | readonly ["not", Expression]
    | readonly ["true"]
    | readonly ["false"]
    | readonly ["empty"]
    | readonly ["exists"]
    | readonly ["since", string | number, TimeField?]
    | readonly ["size", SizeOperator, number]
    | readonly ["suffix", string | string[]]
    | readonly ["type", FileType]
    | readonly ["dirname", string]
    | readonly ["dirname", string, readonly ["depth", DepthOperator, number]]
    | readonly ["match", string, NameScope?]
    | readonly ["name", string | string[], NameScope?]
    | readonly ["iname", string | string[], NameScope?];

/** Subscription configuration */
export interface SubscriptionConfig {
    /** Expression to filter files */
    expression: Expression;
    /** Fields to include in the response */
    fields?: Array<keyof FileChange>;
    /** Relative root for the subscription */
    relative_root?: string;
}

/** Callback type for command responses */
export type CommandCallback<T = any> = (error: Error | null, resp: T) => void;

export class Client extends EventEmitter {
    constructor(options?: ClientOptions);

    /**
     * Send the next command in the queue
     */
    sendNextCommand(): void;

    /**
     * Cancel all pending commands
     * @param why Reason for cancellation
     */
    cancelCommands(why: string): void;

    /**
     * Connect to the watchman service
     */
    connect(): void;

    /**
     * Watch a directory
     * @param dir Directory to watch
     * @param callback Response callback
     */
    command(args: ["watch-project", string], callback: CommandCallback<WatchProjectResponse>): void;

    /**
     * Subscribe to file changes
     * @param watch Watch root from watch-project response
     * @param name Subscription name
     * @param config Subscription configuration
     * @param callback Response callback
     */
    command(
        args: ["subscribe", string, string, SubscriptionConfig],
        callback: CommandCallback<SubscribeResponse>,
    ): void;

    /**
     * Cancel a subscription
     * @param watch Watch root from watch-project response
     * @param name Subscription name to cancel
     * @param callback Response callback
     */
    command(args: ["unsubscribe", string, string], callback: CommandCallback): void;

    /**
     * log-level
     * @param level Log level
     *
     * client.command(['log-level', 'debug']);
     * client.on('log', function(info) {
     *   console.log(info);
     * });
     */
    command(args: ["log-level", LogLevel], callback: CommandCallback): void;

    /**
     * Request watching a directory for changes
     * @deprecated Since version 3.1. Use watch-project instead
     * @param dir Absolute path to directory to watch
     * @param callback Response callback
     *
     * @example
     * client.command(['watch', '/home/user/www']);
     */
    command(args: ["watch", string], callback: CommandCallback): void;

    /**
     * Get watchman configuration for a root
     * Returns the .watchmanconfig for the root, or empty config if none exists
     * @param root Watch root to get config for
     * @param callback Response callback
     */
    command(
        args: ["get-config", string],
        callback: CommandCallback<{
            version: string;
            config: Record<string, unknown>;
        }>,
    ): void;

    /**
     * Get the path to the watchman socket
     * Useful when integrating with watchman using unix socket with JSON/BSER protocol
     * Has side effect of spawning the service if not running
     * @param callback Response callback
     */
    command(
        args: ["get-sockname"],
        callback: CommandCallback<{
            version: string;
            sockname: string;
        }>,
    ): void;

    /**
     * Generate a log line in the watchman log
     * @param level Log level (debug, error)
     * @param message Message to log
     * @param callback Response callback
     *
     * @example
     * client.command(['log', 'debug', 'log this please']);
     */
    command(args: ["log", LogLevel, string], callback: CommandCallback): void;

    /**
     * Shutdown the watchman server
     * Causes the watchman service to exit with a normal status code
     * @param callback Response callback
     */
    command(args: ["shutdown-server"], callback: CommandCallback): void;

    /**
     * Returns the current clock value for a watched root
     * @requires clock-sync-timeout capability for sync_timeout option
     * @param root Watch root to get clock for
     * @param options Optional sync_timeout configuration
     * @param callback Response callback
     *
     * @example
     * client.command(['clock', '/path/to/dir', { sync_timeout: 100 }]);
     */
    command(args: ["clock", string] | ["clock", string, Record<string, unknown>], callback: CommandCallback): void;

    /**
     * Find files under a specified directory
     * @param root Directory to search in
     * @param patterns Optional patterns to filter files
     * @param callback Response callback
     *
     * @example
     * client.command(['find', '/path/to/dir']); // Find all files
     * client.command(['find', '/path/to/dir', ['*.js', '*.ts']]); // Find by patterns
     */
    command(args: ["find", string] | ["find", string, string[]], callback: CommandCallback<FileChange[]>): void;

    /**
     * Mark a watch as being in a particular named state
     * @since 4.4
     * @param root Watch root to set state for
     * @param state State name or configuration
     * @param callback Response callback
     *
     * The state persists until a corresponding state-leave command or
     * until the client session disconnects. Used in conjunction with
     * state-leave for advanced settling in subscriptions.
     *
     * @example
     * // Simple state
     * client.command(['state-enter', '/path/to/root', 'mystate']);
     *
     * // Complex state with metadata and sync_timeout
     * client.command(['state-enter', '/path/to/root', {
     *   name: 'mystate',
     *   metadata: { foo: 'bar' },
     *   sync_timeout: 10000
     * }]);
     */
    command(args: ["state-enter", string, string | Record<string, unknown>], callback: CommandCallback): void;

    /**
     * Remove a particular named state from a watch
     * @since 4.4
     * @param root Watch root to remove state from
     * @param state State name or configuration
     * @param callback Response callback
     *
     * Used in conjunction with state-enter for advanced settling in subscriptions.
     * States are automatically removed when the client session disconnects.
     *
     * @example
     * // Simple state
     * client.command(['state-leave', '/path/to/root', 'mystate']);
     *
     * // Complex state with metadata and sync_timeout
     * client.command(['state-leave', '/path/to/root', {
     *   name: 'mystate',
     *   metadata: { foo: 'bar' },
     *   sync_timeout: 10000
     * }]);
     */
    command(args: ["state-leave", string, string | Record<string, unknown>], callback: CommandCallback): void;

    /**
     * Get version and build information for the watchman service
     * @param callback Response callback
     *
     * @example
     * client.command(['version'], (error, resp) => {
     *   console.log(`Server version: ${resp.version}`);
     *   console.log(`Build info: ${resp.buildinfo}`);
     * });
     */
    command(
        args:
            | ["version"]
            | [
                "version",
                {
                    optional: string[];
                    required: string[];
                },
            ],
        callback: CommandCallback<{
            version: string;
            buildinfo: string;
            capabilities?: Record<string, boolean>;
        }>,
    ): void;

    /**
     * This command returns the full list of supported capabilities offered by the watchman server.
     * The intention is that client applications will use the expanded version command to check compatibility rather than interrogating the full list.
     * @param callback Response callback
     */
    command(
        args: ["list-capabilities"],
        callback: CommandCallback<{
            capabilities: Record<string, boolean>;
        }>,
    ): void;

    /**
     * There are more commands but they are not documented:
     * https://facebook.github.io/watchman/docs/nodejs
     */
    command(
        args: [
            (
                | "flush-subscriptions"
                | "query"
                | "since"
                | "trigger-del"
                | "trigger-list"
                | "trigger"
                | "watch-del-all"
                | "watch-del"
                | "watch-list"
            ),
            ...any[],
        ],
        callback?: CommandCallback,
    ): void;

    /**
     * Check capabilities of the watchman service
     * @param caps Capabilities to check
     * @param done Callback with results
     */
    capabilityCheck(caps: Capabilities, done: CommandCallback): void;

    /**
     * End the connection
     */
    end(): void;

    /** Connect */
    on(event: "connect", listener: () => void): this;
    /** Subscription event handler */
    on(event: "subscription", listener: (resp: SubscriptionResponse) => void): this;
    /** Error event handler */
    on(event: "error", listener: (error: Error) => void): this;
    /** End event handler */
    on(event: "end", listener: () => void): this;
    /**
     * Log event handler
     * @see https://facebook.github.io/watchman/docs/cmd/log-level
     */
    on(event: "log", listener: (info: { version: string; log: string }) => void): this;
}
