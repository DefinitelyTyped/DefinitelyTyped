declare module goog {
    function require(name: 'goog.debug.Console'): typeof goog.debug.Console;
}

declare module goog.debug {

    /**
     * Create and install a log handler that logs to window.console if available
     * @constructor
     */
    class Console {
        constructor();
        
        /**
         * Global console logger instance
         * @type {goog.debug.Console}
         */
        static instance: goog.debug.Console;
        
        /**
         * Returns the text formatter used by this console
         * @return {!goog.debug.TextFormatter} The text formatter.
         */
        getFormatter(): goog.debug.TextFormatter;
        
        /**
         * Sets whether we are currently capturing logger output.
         * @param {boolean} capturing Whether to capture logger output.
         */
        setCapturing(capturing: boolean): void;
        
        /**
         * Adds a log record.
         * @param {goog.debug.LogRecord} logRecord The log entry.
         */
        addLogRecord(logRecord: goog.debug.LogRecord): void;
        
        /**
         * Adds a logger name to be filtered.
         * @param {string} loggerName the logger name to add.
         */
        addFilter(loggerName: string): void;
        
        /**
         * Removes a logger name to be filtered.
         * @param {string} loggerName the logger name to remove.
         */
        removeFilter(loggerName: string): void;
        
        /**
         * Sets the console to which to log.
         * @param {!Object} console The console to which to log.
         */
        static setConsole(console: Object): void;
        
        /**
         * Install the console and start capturing if "Debug=true" is in the page URL
         */
        static autoInstall(): void;
        
        /**
         * Show an alert with all of the captured debug information.
         * Information is only captured if console is not available
         */
        static show(): void;
    }
}
