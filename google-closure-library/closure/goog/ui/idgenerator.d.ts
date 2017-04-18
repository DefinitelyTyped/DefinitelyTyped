declare module goog {
    function require(name: 'goog.ui.IdGenerator'): typeof goog.ui.IdGenerator;
}

declare module goog.ui {

    /**
     * Creates a new id generator.
     * @constructor
     * @final
     */
    class IdGenerator {
        constructor();
        
        /**
         * Gets the next unique ID.
         * @return {string} The next unique identifier.
         */
        getNextUniqueId(): string;
    }
}
