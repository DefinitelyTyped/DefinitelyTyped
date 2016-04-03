declare module goog {
    function require(name: 'goog.i18n.CharPickerData'): typeof goog.i18n.CharPickerData;
}

declare module goog.i18n {

    /**
     * Object holding two level character organization and character listing.
     * @constructor
     */
    class CharPickerData {
        constructor();
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SYMBOL: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_ARROWS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_BRAILLE: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_CONTROL_PICTURES: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_CURRENCY: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_EMOTICONS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_GAME_PIECES: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_GENDER_AND_GENEALOGICAL: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_GEOMETRIC_SHAPES: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_KEYBOARD_AND_UI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_LATIN_1_SUPPLEMENT: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_MATH: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_MATH_ALPHANUMERIC: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_MISCELLANEOUS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_MUSICAL: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_STARS_ASTERISKS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SUBSCRIPT: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SUPERSCRIPT: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_TECHNICAL: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_TRANSPORT_AND_MAP: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_WEATHER_AND_ASTROLOGICAL: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_YIJING_TAI_XUAN_JING: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HISTORIC: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_COMPATIBILITY: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_EMOJI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_PEOPLE_AND_EMOTIONS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_ANIMALS_PLANTS_AND_FOOD: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_OBJECTS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SPORTS_CELEBRATIONS_AND_ACTIVITIES: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_TRANSPORT_MAPS_AND_SIGNAGE: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_WEATHER_SCENES_AND_ZODIAC_SIGNS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_ENCLOSED: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_MARKS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SYMBOLS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_PUNCTUATION: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_ASCII_BASED: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_DASH_CONNECTOR: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_OTHER: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_PAIRED: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_NUMBER: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_DECIMAL: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_ENCLOSED_DOTTED: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_FRACTIONS_RELATED: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_FORMAT_WHITESPACE: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_FORMAT: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_VARIATION_SELECTOR: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_WHITESPACE: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_MODIFIER: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_ENCLOSING: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_NONSPACING: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SPACING: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_LATIN: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_COMMON: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_FLIPPED_MIRRORED: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_PHONETICS_IPA: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_PHONETICS_X_IPA: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_OTHER_EUROPEAN_SCRIPTS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_ARMENIAN: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_CYRILLIC: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_GEORGIAN: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_GREEK: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_CYPRIOT: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_GLAGOLITIC: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_GOTHIC: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_LINEAR_B: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_OGHAM: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_OLD_ITALIC: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_RUNIC: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SHAVIAN: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_AMERICAN_SCRIPTS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_CANADIAN_ABORIGINAL: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_CHEROKEE: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_DESERET: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_AFRICAN_SCRIPTS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_EGYPTIAN_HIEROGLYPHS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_ETHIOPIC: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_MEROITIC_CURSIVE: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_MEROITIC_HIEROGLYPHS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_NKO: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_TIFINAGH: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_VAI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_BAMUM: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_COPTIC: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_OSMANYA: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_MIDDLE_EASTERN_SCRIPTS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_ARABIC: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HEBREW: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_IMPERIAL_ARAMAIC: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_INSCRIPTIONAL_PAHLAVI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_INSCRIPTIONAL_PARTHIAN: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_MANDAIC: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_OLD_SOUTH_ARABIAN: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SAMARITAN: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SYRIAC: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_AVESTAN: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_CARIAN: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_CUNEIFORM: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_LYCIAN: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_LYDIAN: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_OLD_PERSIAN: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_PHOENICIAN: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_UGARITIC: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SOUTH_ASIAN_SCRIPTS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_BENGALI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_CHAKMA: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_DEVANAGARI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_GUJARATI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_GURMUKHI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_KANNADA: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_LEPCHA: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_LIMBU: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_MALAYALAM: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_MEETEI_MAYEK: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_OL_CHIKI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_ORIYA: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SAURASHTRA: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SINHALA: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SORA_SOMPENG: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_TAMIL: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_TELUGU: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_THAANA: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_TIBETAN: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_BRAHMI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_KAITHI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_KHAROSHTHI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SHARADA: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SYLOTI_NAGRI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_TAKRI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SOUTHEAST_ASIAN_SCRIPTS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_BALINESE: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_BATAK: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_CHAM: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_JAVANESE: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_KAYAH_LI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_KHMER: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_LAO: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_MYANMAR: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_NEW_TAI_LUE: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_TAI_LE: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_TAI_THAM: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_TAI_VIET: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_THAI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_BUGINESE: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_BUHID: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HANUNOO: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_REJANG: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_SUNDANESE: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_TAGALOG: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_TAGBANWA: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HANGUL: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_OTHER_EAST_ASIAN_SCRIPTS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_BOPOMOFO: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HIRAGANA: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_KATAKANA: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_LISU: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_MIAO: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_MONGOLIAN: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_OLD_TURKIC: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_PHAGS_PA: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_YI: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HAN_1_STROKE_RADICALS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_LESS_COMMON: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HAN_2_STROKE_RADICALS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HAN_3_STROKE_RADICALS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HAN_4_STROKE_RADICALS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HAN_5_STROKE_RADICALS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HAN_6_STROKE_RADICALS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HAN_7_STROKE_RADICALS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HAN_8_STROKE_RADICALS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HAN_9_STROKE_RADICALS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HAN_10_STROKE_RADICALS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HAN_11_17_STROKE_RADICALS: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_HAN_OTHER: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_CJK_STROKES: string;
        
        /**
         * @desc Name for a symbol or character category. Used in a pull-down list
         *   shown to a  document editing user trying to insert a special character.
         *   Newlines are not allowed; translation should be a noun and as consise as
         *   possible. More details:
         *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
         * @type {string}
         */
        static MSG_CP_IDEOGRAPHIC_DESCRIPTION: string;
        
        /**
         * Top catagory names of character organization.
         * @type {Array<string>}
         */
        categories: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_SYMBOL: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_SYMBOL: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_EMOJI: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_EMOJI: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_PUNCTUATION: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_PUNCTUATION: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_NUMBER: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_NUMBER: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_FORMAT_WHITESPACE: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_FORMAT_WHITESPACE: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_MODIFIER: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_MODIFIER: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_LATIN: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_LATIN: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_OTHER_EUROPEAN_SCRIPTS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_OTHER_EUROPEAN_SCRIPTS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_AMERICAN_SCRIPTS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_AMERICAN_SCRIPTS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_AFRICAN_SCRIPTS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_AFRICAN_SCRIPTS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_MIDDLE_EASTERN_SCRIPTS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_MIDDLE_EASTERN_SCRIPTS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_SOUTH_ASIAN_SCRIPTS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_SOUTH_ASIAN_SCRIPTS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_SOUTHEAST_ASIAN_SCRIPTS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_SOUTHEAST_ASIAN_SCRIPTS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_HANGUL: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_HANGUL: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_OTHER_EAST_ASIAN_SCRIPTS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_OTHER_EAST_ASIAN_SCRIPTS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_HAN_1_STROKE_RADICALS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_HAN_1_STROKE_RADICALS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_HAN_2_STROKE_RADICALS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_HAN_2_STROKE_RADICALS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_HAN_3_STROKE_RADICALS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_HAN_3_STROKE_RADICALS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_HAN_4_STROKE_RADICALS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_HAN_4_STROKE_RADICALS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_HAN_5_STROKE_RADICALS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_HAN_5_STROKE_RADICALS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_HAN_6_STROKE_RADICALS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_HAN_6_STROKE_RADICALS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_HAN_7_STROKE_RADICALS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_HAN_7_STROKE_RADICALS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_HAN_8_STROKE_RADICALS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_HAN_8_STROKE_RADICALS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_HAN_9_STROKE_RADICALS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_HAN_9_STROKE_RADICALS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_HAN_10_STROKE_RADICALS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_HAN_10_STROKE_RADICALS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_HAN_11_17_STROKE_RADICALS: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_HAN_11_17_STROKE_RADICALS: Array<string>;
        
        /**
         * Names of subcategories. Each message this array is the
         * name for the corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}.
         * @type {Array<string>}
         */
        static SUBCATEGORY_NAMES_OF_HAN_OTHER: Array<string>;
        
        /**
         * List of characters in base88 encoding scheme. Each base88 encoded
         * charater string represents corresponding subcategory specified in
         * {@code goog.i18n.CharPickerData.subcategories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<string>}
         */
        static CHARLIST_OF_HAN_OTHER: Array<string>;
        
        /**
         * Subcategory names. Each subarray in this array is a list of subcategory
         * names for the corresponding category specified in
         * {@code goog.i18n.CharPickerData.categories}.
         * @type {Array<Array<string>>}
         */
        subcategories: Array<Array<string>>;
        
        /**
         * Character lists in base88 encoding scheme. Each subarray is a list of
         * base88 encoded charater strings representing corresponding subcategory
         * specified in {@code goog.i18n.CharPickerData.categories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array<Array<string>>}
         */
        charList: Array<Array<string>>;
    }
}
