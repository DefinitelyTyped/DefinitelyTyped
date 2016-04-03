declare module goog {
    function require(name: 'goog.events.KeyCodes'): typeof goog.events.KeyCodes;
}

declare module goog.events {

    /**
     * Key codes for common characters.
     *
     * This list is not localized and therefore some of the key codes are not
     * correct for non US keyboard layouts. See comments below.
     *
     * @enum {number}
     */
    type KeyCodes = number;
    var KeyCodes: {
        WIN_KEY_FF_LINUX: KeyCodes;
        MAC_ENTER: KeyCodes;
        BACKSPACE: KeyCodes;
        TAB: KeyCodes;
        NUM_CENTER: KeyCodes;
        ENTER: KeyCodes;
        SHIFT: KeyCodes;
        CTRL: KeyCodes;
        ALT: KeyCodes;
        PAUSE: KeyCodes;
        CAPS_LOCK: KeyCodes;
        ESC: KeyCodes;
        SPACE: KeyCodes;
        PAGE_UP: KeyCodes;
        PAGE_DOWN: KeyCodes;
        END: KeyCodes;
        HOME: KeyCodes;
        LEFT: KeyCodes;
        UP: KeyCodes;
        RIGHT: KeyCodes;
        DOWN: KeyCodes;
        PRINT_SCREEN: KeyCodes;
        INSERT: KeyCodes;
        DELETE: KeyCodes;
        ZERO: KeyCodes;
        ONE: KeyCodes;
        TWO: KeyCodes;
        THREE: KeyCodes;
        FOUR: KeyCodes;
        FIVE: KeyCodes;
        SIX: KeyCodes;
        SEVEN: KeyCodes;
        EIGHT: KeyCodes;
        NINE: KeyCodes;
        FF_SEMICOLON: KeyCodes;
        FF_EQUALS: KeyCodes;
        FF_DASH: KeyCodes;
        QUESTION_MARK: KeyCodes;
        A: KeyCodes;
        B: KeyCodes;
        C: KeyCodes;
        D: KeyCodes;
        E: KeyCodes;
        F: KeyCodes;
        G: KeyCodes;
        H: KeyCodes;
        I: KeyCodes;
        J: KeyCodes;
        K: KeyCodes;
        L: KeyCodes;
        M: KeyCodes;
        N: KeyCodes;
        O: KeyCodes;
        P: KeyCodes;
        Q: KeyCodes;
        R: KeyCodes;
        S: KeyCodes;
        T: KeyCodes;
        U: KeyCodes;
        V: KeyCodes;
        W: KeyCodes;
        X: KeyCodes;
        Y: KeyCodes;
        Z: KeyCodes;
        META: KeyCodes;
        WIN_KEY_RIGHT: KeyCodes;
        CONTEXT_MENU: KeyCodes;
        NUM_ZERO: KeyCodes;
        NUM_ONE: KeyCodes;
        NUM_TWO: KeyCodes;
        NUM_THREE: KeyCodes;
        NUM_FOUR: KeyCodes;
        NUM_FIVE: KeyCodes;
        NUM_SIX: KeyCodes;
        NUM_SEVEN: KeyCodes;
        NUM_EIGHT: KeyCodes;
        NUM_NINE: KeyCodes;
        NUM_MULTIPLY: KeyCodes;
        NUM_PLUS: KeyCodes;
        NUM_MINUS: KeyCodes;
        NUM_PERIOD: KeyCodes;
        NUM_DIVISION: KeyCodes;
        F1: KeyCodes;
        F2: KeyCodes;
        F3: KeyCodes;
        F4: KeyCodes;
        F5: KeyCodes;
        F6: KeyCodes;
        F7: KeyCodes;
        F8: KeyCodes;
        F9: KeyCodes;
        F10: KeyCodes;
        F11: KeyCodes;
        F12: KeyCodes;
        NUMLOCK: KeyCodes;
        SCROLL_LOCK: KeyCodes;
        FIRST_MEDIA_KEY: KeyCodes;
        LAST_MEDIA_KEY: KeyCodes;
        SEMICOLON: KeyCodes;
        DASH: KeyCodes;
        EQUALS: KeyCodes;
        COMMA: KeyCodes;
        PERIOD: KeyCodes;
        SLASH: KeyCodes;
        APOSTROPHE: KeyCodes;
        TILDE: KeyCodes;
        SINGLE_QUOTE: KeyCodes;
        OPEN_SQUARE_BRACKET: KeyCodes;
        BACKSLASH: KeyCodes;
        CLOSE_SQUARE_BRACKET: KeyCodes;
        WIN_KEY: KeyCodes;
        MAC_FF_META: KeyCodes;
        MAC_WK_CMD_LEFT: KeyCodes;
        MAC_WK_CMD_RIGHT: KeyCodes;
        WIN_IME: KeyCodes;
        VK_NONAME: KeyCodes;
        PHANTOM: KeyCodes;

        /**
         * Returns true if the event contains a text modifying key.
         * @param {goog.events.BrowserEvent} e A key event.
         * @return {boolean} Whether it's a text modifying key.
         */
        isTextModifyingKeyEvent: (e: goog.events.BrowserEvent) => boolean;

        /**
         * Returns true if the key fires a keypress event in the current browser.
         *
         * Accoridng to MSDN [1] IE only fires keypress events for the following keys:
         * - Letters: A - Z (uppercase and lowercase)
         * - Numerals: 0 - 9
         * - Symbols: ! @ # $ % ^ & * ( ) _ - + = < [ ] { } , . / ? \ | ' ` " ~
         * - System: ESC, SPACEBAR, ENTER
         *
         * That's not entirely correct though, for instance there's no distinction
         * between upper and lower case letters.
         *
         * [1] http://msdn2.microsoft.com/en-us/library/ms536939(VS.85).aspx)
         *
         * Safari is similar to IE, but does not fire keypress for ESC.
         *
         * Additionally, IE6 does not fire keydown or keypress events for letters when
         * the control or alt keys are held down and the shift key is not. IE7 does
         * fire keydown in these cases, though, but not keypress.
         *
         * @param {number} keyCode A key code.
         * @param {number=} opt_heldKeyCode Key code of a currently-held key.
         * @param {boolean=} opt_shiftKey Whether the shift key is held down.
         * @param {boolean=} opt_ctrlKey Whether the control key is held down.
         * @param {boolean=} opt_altKey Whether the alt key is held down.
         * @return {boolean} Whether it's a key that fires a keypress event.
         */
        firesKeyPressEvent: (keyCode: number, opt_heldKeyCode?: number, opt_shiftKey?: boolean, opt_ctrlKey?: boolean, opt_altKey?: boolean) => boolean;

        /**
         * Returns true if the key produces a character.
         * This does not cover characters on non-US keyboards (Russian, Hebrew, etc.).
         *
         * @param {number} keyCode A key code.
         * @return {boolean} Whether it's a character key.
         */
        isCharacterKey: (keyCode: number) => boolean;

        /**
         * Normalizes key codes from OS/Browser-specific value to the general one.
         * @param {number} keyCode The native key code.
         * @return {number} The normalized key code.
         */
        normalizeKeyCode: (keyCode: number) => number;

        /**
         * Normalizes key codes from their Gecko-specific value to the general one.
         * @param {number} keyCode The native key code.
         * @return {number} The normalized key code.
         */
        normalizeGeckoKeyCode: (keyCode: number) => number;

        /**
         * Normalizes key codes from their Mac WebKit-specific value to the general one.
         * @param {number} keyCode The native key code.
         * @return {number} The normalized key code.
         */
        normalizeMacWebKitKeyCode: (keyCode: number) => number;
    };
}
