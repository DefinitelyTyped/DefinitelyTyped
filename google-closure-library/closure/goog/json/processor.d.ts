declare module goog.json {

    /**
     * An interface for JSON parsing and serialization.
     * @interface
     * @extends {goog.string.Parser}
     * @extends {goog.string.Stringifier}
     */
    interface Processor extends goog.string$.Parser, goog.string$.Stringifier {
    }
}
