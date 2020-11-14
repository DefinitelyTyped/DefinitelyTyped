import { LoggerLevel } from './cast.framework';

export as namespace debug;

/**
 * The Web Receiver SDK provides another option for developers to easily debug your Web Receiver app by using CastDebugLogger API and a companion
 * Command and Control (CaC) Tool to capture logs.
 *
 * Requires including the CAF Receiver Logger tag.
 */
export class CastDebugLogger {
    static getInstance(): CastDebugLogger;

    /**
     * The loggerLevelByEvents config takes cast.framework.events.EventType and cast.framework.events.category to specify the events to be logged.
     *
     * @example
     * ```ts
     * cast.debug.CastDebugLogger.getInstance().loggerLevelByEvents = {
     *   'cast.framework.events.category.CORE': cast.framework.LoggerLevel.INFO,
     *   'cast.framework.events.EventType.MEDIA_STATUS': cast.framework.LoggerLevel.DEBUG
     * }
     * ```
     */
    loggerLevelByEvents: Record<string, LoggerLevel>;

    /**
     * You can control which messages appear on the debug overlay by setting the log level in loggerLevelByTags for each custom tag. For example,
     * enabling a custom tag with log level cast.framework.LoggerLevel.DEBUG would display all messages added with error, warn, info, and debug
     * log messages. Another example is that enabling a custom tag with WARNING level would only display error and warn log messages.
     *
     * The loggerLevelByTags config is optional. If a custom tag is not configured for its logger level, all log messages will display on the
     * debug overlay.
     */
    loggerLevelByTags?: Record<string, LoggerLevel>;

    /**
     * Clear log messages on the overlay provided by CastDebugLogger.
     */
    clearDebugLogs(): void;

    /**
     * Enable debug logger and show a 'DEBUG MODE' overlay at top left corner.
     *
     * @example
     * ```ts
     * cast.debug.CastDebugLogger.getInstance().loggerLevelByEvents = {
     *   'cast.framework.events.category.CORE': cast.framework.LoggerLevel.INFO,
     *   'cast.framework.events.EventType.MEDIA_STATUS': cast.framework.LoggerLevel.DEBUG
     * }
     * ```
     */
    setEnabled(enabled: boolean): void;

    /**
     * Toggle the debug overlay provided by CastDebugLogger
     */
    showDebugLogs(show: boolean): void;

    /**
     * Log method. Lowest priority
     */
    debug(customTag: string, ...message: any[]): void;

    /**
     * Log method. Highest priority
     */
    error(customTag: string, ...message: any[]): void;

    /**
     * Log method. Third highest priority
     */
    info(customTag: string, ...message: any[]): void;

    /**
     * Log method. Second highest priority
     */
    warn(customTag: string, ...message: any[]): void;
}
