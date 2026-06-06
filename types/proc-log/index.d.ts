interface Logger {
    /**
     * Calls process.emit('log', 'error', ...args). The highest log level. For printing extremely serious errors that indicate something went wrong.
     */
    error(...args: any[]): void;
    /**
     * Calls process.emit('log', 'warn', ...args). A fairly high log level. Things that the user needs to be aware of, but which won't necessarily cause improper functioning of the system.
     */
    warn(...args: any[]): void;
    /**
     * Calls process.emit('log', 'notice', ...args). Notices which are important, but not necessarily dangerous or a cause for excess concern.
     */
    notice(...args: any[]): void;
    /**
     * Calls process.emit('log', 'info', ...args). Informative messages that may benefit the user, but aren't particularly important.
     */
    info(...args: any[]): void;
    /**
     * Calls process.emit('log', 'verbose', ...args). Noisy output that is more detail that most users will care about.
     */
    verbose(...args: any[]): void;
    /**
     * Calls process.emit('log', 'silly', ...args). Extremely noisy excessive logging messages that are typically only useful for debugging.
     */
    silly(...args: any[]): void;
    /**
     * Calls process.emit('log', 'http', ...args). Information about HTTP requests made and/or completed.
     */
    http(...args: any[]): void;
    /**
     * Calls process.emit('log', 'pause'). Used to tell the consumer to stop printing messages.
     */
    pause(): void;
    /**
     * Calls process.emit('log', 'resume'). Used to tell the consumer that it is ok to print messages again.
     */
    resume(): void;
    /**
     * An array of strings of all log method names.
     */
    LEVELS: ["error", "warn", "notice", "info", "verbose", "silly", "http"];
}

declare const logger: Logger;

export = logger;
