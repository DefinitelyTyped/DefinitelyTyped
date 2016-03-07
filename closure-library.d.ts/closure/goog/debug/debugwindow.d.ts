declare module goog {
    function require(name: 'goog.debug.DebugWindow'): typeof goog.debug.DebugWindow;
}

declare module goog.debug {

    /**
     * Provides a debug DebugWindow that is bound to the goog.debug.Logger.
     * It handles log messages and writes them to the DebugWindow. This doesn't
     * provide a lot of functionality that the old Gmail logging infrastructure
     * provided like saving debug logs for exporting to the server. Now that we
     * have an event-based logging infrastructure, we can encapsulate that
     * functionality in a separate class.
     *
     * @constructor
     * @param {string=} opt_identifier Identifier for this logging class.
     * @param {string=} opt_prefix Prefix prepended to messages.
     */
    class DebugWindow {
        constructor(opt_identifier?: string, opt_prefix?: string);
        
        /**
         * Max number of messages to be saved
         * @type {number}
         */
        static MAX_SAVED: number;
        
        /**
         * How long to keep the cookies for in milliseconds
         * @type {number}
         */
        static COOKIE_TIME: number;
        
        /**
         * HTML string printed when the debug window opens
         * @type {string}
         * @protected
         */
        welcomeMessage: string;
        
        /**
         * Reference to debug window
         * @type {Window}
         * @protected
         */
        win: Window;
        
        /**
         * Timestamp for the last time the log was written to.
         * @protected {number}
         */
        lastCall: any;
        
        /**
         * Sets the welcome message shown when the window is first opened or reset.
         *
         * @param {string} msg An HTML string.
         */
        setWelcomeMessage(msg: string): void;
        
        /**
         * Initializes the debug window.
         */
        init(): void;
        
        /**
         * Whether the DebugWindow is enabled. When the DebugWindow is enabled, it
         * tries to keep its window open and logs all messages to the window.  When the
         * DebugWindow is disabled, it stops logging messages to its window.
         *
         * @return {boolean} Whether the DebugWindow is enabled.
         */
        isEnabled(): boolean;
        
        /**
         * Sets whether the DebugWindow is enabled. When the DebugWindow is enabled, it
         * tries to keep its window open and log all messages to the window. When the
         * DebugWindow is disabled, it stops logging messages to its window. The
         * DebugWindow also saves this state to a cookie so that it's persisted across
         * application refreshes.
         * @param {boolean} enable Whether the DebugWindow is enabled.
         */
        setEnabled(enable: boolean): void;
        
        /**
         * Sets whether the debug window should be force enabled when a severe log is
         * encountered.
         * @param {boolean} enableOnSevere Whether to enable on severe logs..
         */
        setForceEnableOnSevere(enableOnSevere: boolean): void;
        
        /**
         * Whether we are currently capturing logger output.
         * @return {boolean} whether we are currently capturing logger output.
         */
        isCapturing(): boolean;
        
        /**
         * Sets whether we are currently capturing logger output.
         * @param {boolean} capturing Whether to capture logger output.
         */
        setCapturing(capturing: boolean): void;
        
        /**
         * Gets the formatter for outputting to the debug window. The default formatter
         * is an instance of goog.debug.HtmlFormatter
         * @return {goog.debug.Formatter} The formatter in use.
         */
        getFormatter(): goog.debug.Formatter;
        
        /**
         * Sets the formatter for outputting to the debug window.
         * @param {goog.debug.Formatter} formatter The formatter to use.
         */
        setFormatter(formatter: goog.debug.Formatter): void;
        
        /**
         * Adds a separator to the debug window.
         */
        addSeparator(): void;
        
        /**
         * @return {boolean} Whether there is an active window.
         */
        hasActiveWindow(): boolean;
        
        /**
         * Clears the contents of the debug window
         * @protected
         */
        clear(): void;
        
        /**
         * Adds a log record.
         * @param {goog.debug.LogRecord} logRecord the LogRecord.
         */
        addLogRecord(logRecord: goog.debug.LogRecord): void;
        
        /**
         * Write to the log and maybe scroll into view.
         * @protected
         */
        writeBufferToLog(): void;
        
        /**
         * Writes all saved messages to the DebugWindow.
         * @protected
         */
        writeSavedMessages(): void;
        
        /**
         * @return {!goog.html.SafeStyleSheet} The stylesheet, for inclusion in the
         *     initial HTML.
         */
        getStyleRules(): goog.html.SafeStyleSheet;
        
        /**
         * Writes the initial HTML of the debug window.
         * @protected
         */
        writeInitialDocument(): void;
        
        /**
         * @param {string} identifier Identifier for logging class.
         * @return {boolean} Whether the DebugWindow is enabled.
         */
        static isEnabled(identifier: string): boolean;
        
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
         * Modify the size of the circular buffer. Allows the log to retain more
         * information while the window is closed.
         * @param {number} size New size of the circular buffer.
         */
        resetBufferWithNewSize(size: number): void;
    }
}
