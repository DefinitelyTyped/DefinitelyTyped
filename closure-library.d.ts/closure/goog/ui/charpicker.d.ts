declare module goog {
    function require(name: 'goog.ui.CharPicker'): typeof goog.ui.CharPicker;
}

declare module goog.ui {

    /**
     * Character Picker Class. This widget can be used to pick any Unicode
     * character by traversing a category-subcategory structure or by inputing its
     * hex value.
     *
     * See charpicker.html demo for example usage.
     * @param {goog.i18n.CharPickerData} charPickerData Category names and charlist.
     * @param {!goog.i18n.uChar.NameFetcher} charNameFetcher Object which fetches
     *     the names of the characters that are shown in the widget. These names
     *     may be stored locally or come from an external source.
     * @param {Array<string>=} opt_recents List of characters to be displayed in
     *     resently selected characters area.
     * @param {number=} opt_initCategory Sequence number of initial category.
     * @param {number=} opt_initSubcategory Sequence number of initial subcategory.
     * @param {number=} opt_rowCount Number of rows in the grid.
     * @param {number=} opt_columnCount Number of columns in the grid.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     * @final
     */
    class CharPicker extends goog.ui.Component {
        constructor(charPickerData: goog.i18n.CharPickerData, charNameFetcher: goog.i18n.uChar.NameFetcher, opt_recents?: Array<string>, opt_initCategory?: number, opt_initSubcategory?: number, opt_rowCount?: number, opt_columnCount?: number, opt_domHelper?: goog.dom.DomHelper);
        
        /** @type {number} */
        itempos: number;
        
        /** @type {!Array<string>} */
        items: Array<string>;
        
        /**
         * Category index used to index the data tables.
         * @type {number}
         */
        category: number;
        
        /**
         * Gets the last selected character.
         * @return {?string} The last selected character.
         */
        getSelectedChar(): string;
        
        /**
         * Gets the list of characters user selected recently.
         * @return {Array<string>} The recent character list.
         */
        getRecentChars(): Array<string>;
        
        /**
         * Gets the user inputed unicode character.
         * @return {string} Unicode character inputed by user.
         */
        getInputChar(): string;
    }
}
