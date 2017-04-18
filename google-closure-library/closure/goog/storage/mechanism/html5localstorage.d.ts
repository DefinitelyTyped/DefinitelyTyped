declare module goog {
    function require(name: 'goog.storage.mechanism.HTML5LocalStorage'): typeof goog.storage.mechanism.HTML5LocalStorage;
}

declare module goog.storage.mechanism {

    /**
     * Provides a storage mechanism that uses HTML5 local storage.
     *
     * @constructor
     * @extends {goog.storage.mechanism.HTML5WebStorage}
     */
    class HTML5LocalStorage extends goog.storage.mechanism.HTML5WebStorage {
        constructor();
    }
}
