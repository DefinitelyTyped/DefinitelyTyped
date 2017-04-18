declare module goog.i18n.uChar {

    /**
     * NameFetcher interface. Implementations of this interface are used to retrieve
     * Unicode character names.
     *
     * @interface
     */
    interface NameFetcher {
        
        /**
         * Retrieves the names of a given set of characters and stores them in a cache
         * for fast retrieval. Offline implementations can simply provide an empty
         * implementation.
         *
         * @param {string} characters The list of characters in base 88 to fetch. These
         *     lists are stored by category and subcategory in the
         *     goog.i18n.charpickerdata class.
         */
        prefetch(characters: string): void;
        
        /**
         * Retrieves the name of a particular character.
         *
         * @param {string} character The character to retrieve.
         * @param {function(?string)} callback The callback function called when the
         *     name retrieval is complete, contains a single string parameter with the
         *     codepoint name, this parameter will be null if the character name is not
         *     defined.
         */
        getName(character: string, callback: (arg0: string) => any): void;
        
        /**
         * Tests whether the name of a given character is available to be retrieved by
         * the getName() function.
         *
         * @param {string} character The character to test.
         * @return {boolean} True if the fetcher can retrieve or has a name available
         *     for the given character.
         */
        isNameAvailable(character: string): boolean;
    }
}
