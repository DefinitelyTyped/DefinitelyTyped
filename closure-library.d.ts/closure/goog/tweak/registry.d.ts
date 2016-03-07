declare module goog {
    function require(name: 'goog.tweak.Registry'): typeof goog.tweak.Registry;
}

declare module goog.tweak {

    /**
     * Singleton that manages all tweaks. This should be instantiated only from
     * goog.tweak.getRegistry().
     * @param {string} queryParams Value of window.location.search.
     * @param {!Object<string|number|boolean>} compilerOverrides Default value
     *     overrides set by the compiler.
     * @constructor
     * @final
     */
    class Registry {
        constructor(queryParams: string, compilerOverrides: {[index: string]: string|number|boolean});
        
        /**
         * Simple parser for query params. Makes all keys lower-case.
         * @param {string} queryParams The part of the url between the ? and the #.
         * @return {!Object<string>} map of key->value.
         */
        static parseQueryParams(queryParams: string): {[index: string]: string};
        
        /**
         * Registers the given tweak setting/action.
         * @param {goog.tweak.BaseEntry} entry The entry.
         */
        register(entry: goog.tweak.BaseEntry): void;
        
        /**
         * Adds a callback to be called whenever a new tweak is added.
         * @param {!Function} func The callback.
         */
        addOnRegisterListener(func: Function): void;
        
        /**
         * @param {string} id The unique string that identifies this entry.
         * @return {boolean} Whether a tweak with the given ID is registered.
         */
        hasEntry(id: string): boolean;
        
        /**
         * Returns the BaseEntry with the given ID. Asserts if it does not exists.
         * @param {string} id The unique string that identifies this entry.
         * @return {!goog.tweak.BaseEntry} The entry.
         */
        getEntry(id: string): goog.tweak.BaseEntry;
        
        /**
         * Returns the boolean setting with the given ID. Asserts if the ID does not
         * refer to a registered entry or if it refers to one of the wrong type.
         * @param {string} id The unique string that identifies this entry.
         * @return {!goog.tweak.BooleanSetting} The entry.
         */
        getBooleanSetting(id: string): goog.tweak.BooleanSetting;
        
        /**
         * Returns the string setting with the given ID. Asserts if the ID does not
         * refer to a registered entry or if it refers to one of the wrong type.
         * @param {string} id The unique string that identifies this entry.
         * @return {!goog.tweak.StringSetting} The entry.
         */
        getStringSetting(id: string): goog.tweak.StringSetting;
        
        /**
         * Returns the numeric setting with the given ID. Asserts if the ID does not
         * refer to a registered entry or if it refers to one of the wrong type.
         * @param {string} id The unique string that identifies this entry.
         * @return {!goog.tweak.NumericSetting} The entry.
         */
        getNumericSetting(id: string): goog.tweak.NumericSetting;
        
        /**
         * Creates and returns an array of all BaseSetting objects with an associted
         * query parameter.
         * @param {boolean} excludeChildEntries Exclude BooleanInGroupSettings.
         * @param {boolean} excludeNonSettings Exclude entries that are not subclasses
         *     of BaseSetting.
         * @return {!Array<!goog.tweak.BaseSetting>} The settings.
         */
        extractEntries(excludeChildEntries: boolean, excludeNonSettings: boolean): Array<goog.tweak.BaseSetting>;
        
        /**
         * Returns the query part of the URL that will apply all set tweaks.
         * @param {string=} opt_existingSearchStr The part of the url between the ? and
         *     the #. Uses window.location.search if not given.
         * @return {string} The query string.
         */
        makeUrlQuery(opt_existingSearchStr?: string): string;
        
        /**
         * Sets a default value to use for the given tweak instead of the one passed
         * to the register* function. This function must be called before the tweak is
         * registered.
         * @param {string} id The unique string that identifies the entry.
         * @param {string|number|boolean} value The replacement value to be used as the
         *     default value for the setting.
         */
        overrideDefaultValue(id: string, value: string|number|boolean): void;
    }
}
