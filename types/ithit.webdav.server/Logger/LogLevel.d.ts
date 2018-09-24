/**
 * @copyright Copyright (c) 2017 IT Hit. All rights reserved.
 */
/**
 * Type of information being logged.
 */
export declare enum LogLevel {
    /**
     * All messages will be written to log.
     */
    All = 0,
    /**
     * Messages with LogLevel.Debug level will be written to log.
     */
    Debug = 1,
    /**
     * Messages with LogLevel.Info level will be written to log.
     */
    Info = 2,
    /**
     * Messages with LogLevel.Warn level will be written to log.
     */
    Warn = 3,
    /**
     * Messages with LogLevel.Error level will be written to log.
     */
    Error = 4,
    /**
     * Messages with LogLevel.Fatal level will be written to log.
     */
    Fatal = 5,
    /**
     * No messages will be written to log.
     */
    Off = 6
}
