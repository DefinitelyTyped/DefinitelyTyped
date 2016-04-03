declare module goog {
    function require(name: 'goog.date.duration'): typeof goog.date.duration;
}

declare module goog.date.duration {

    /**
     * Accepts a duration in milliseconds and outputs an absolute duration time in
     * form of "1 day", "2 hours", "20 minutes", "2 days 1 hour 15 minutes" etc.
     * @param {number} durationMs Duration in milliseconds.
     * @return {string} The formatted duration.
     */
    function format(durationMs: number): string;
}
