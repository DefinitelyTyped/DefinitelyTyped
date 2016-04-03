declare module goog {
    function require(name: 'goog.debug.LogBuffer'): typeof goog.debug.LogBuffer;
}

declare module goog.debug {

    /**
     * Creates the log buffer.
     * @constructor
     * @final
     */
    class LogBuffer {
        constructor();
        
        /**
         * A static method that always returns the same instance of LogBuffer.
         * @return {!goog.debug.LogBuffer} The LogBuffer singleton instance.
         */
        static getInstance(): goog.debug.LogBuffer;
        
        /**
         * Adds a log record to the buffer, possibly overwriting the oldest record.
         * @param {goog.debug.Logger.Level} level One of the level identifiers.
         * @param {string} msg The string message.
         * @param {string} loggerName The name of the source logger.
         * @return {!goog.debug.LogRecord} The log record.
         */
        addRecord(level: goog.debug.Logger.Level, msg: string, loggerName: string): goog.debug.LogRecord;
        
        /**
         * @return {boolean} Whether the log buffer is enabled.
         */
        static isBufferingEnabled(): boolean;
        
        /**
         * Removes all buffered log records.
         */
        clear(): void;
        
        /**
         * Calls the given function for each buffered log record, starting with the
         * oldest one.
         * @param {function(!goog.debug.LogRecord)} func The function to call.
         */
        forEachRecord(func: (arg0: goog.debug.LogRecord) => any): void;
    }
}
