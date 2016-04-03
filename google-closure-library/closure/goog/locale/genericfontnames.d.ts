declare module goog {
    function require(name: 'goog.locale.genericFontNames'): typeof goog.locale.genericFontNames;
}

declare module goog.locale.genericFontNames {

    /**
     * Gets the list of fonts and their generic names for the given locale.
     * @param {string} locale The locale for which font lists and font family names
     *     to be produced. The expected locale id is as described in
     *     http://wiki/Main/IIISynonyms in all lowercase for easy matching.
     *     Smallest possible id is expected.
     *     Examples: 'zh', 'zh-tw', 'iw' instead of 'zh-CN', 'zh-Hant-TW', 'he'.
     * @return {Array<Object>} List of objects with generic name as 'caption' and
     *     corresponding font name lists as 'value' property.
     */
    function getList(locale: string): Array<Object>;
}
