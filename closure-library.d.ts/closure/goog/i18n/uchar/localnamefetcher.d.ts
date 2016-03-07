declare module goog {
    function require(name: 'goog.i18n.uChar.LocalNameFetcher'): typeof goog.i18n.uChar.LocalNameFetcher;
}

declare module goog.i18n.uChar {

    /**
     * Builds the NameFetcherLocal object. This is a simple object which retrieves
     * character names from a local bundled database. This database only covers
     * invisible characters. See the goog.i18n.uChar class for more details.
     *
     * @constructor
     * @implements {goog.i18n.uChar.NameFetcher}
     * @final
     */
    class LocalNameFetcher {
        constructor();
    }
}
