declare module goog {
    function require(name: 'goog.json.HybridJsonProcessor'): typeof goog.json.HybridJsonProcessor;
}

declare module goog.json {

    /**
     * Processor form of goog.json.hybrid, which attempts to parse/serialize
     * JSON using native JSON methods, falling back to goog.json if not
     * available.
     * @constructor
     * @implements {goog.json.Processor}
     * @final
     */
    class HybridJsonProcessor {
        constructor();
    }
}
