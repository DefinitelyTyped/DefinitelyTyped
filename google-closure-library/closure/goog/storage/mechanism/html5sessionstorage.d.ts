declare module goog {
    function require(name: 'goog.storage.mechanism.HTML5SessionStorage'): typeof goog.storage.mechanism.HTML5SessionStorage;
}

declare module goog.storage.mechanism {

    /**
     * Provides a storage mechanism that uses HTML5 session storage.
     *
     * @constructor
     * @extends {goog.storage.mechanism.HTML5WebStorage}
     */
    class HTML5SessionStorage extends goog.storage.mechanism.HTML5WebStorage {
        constructor();
    }
}
