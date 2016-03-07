declare module goog {
    function require(name: 'goog.events.KeyNames'): typeof goog.events.KeyNames;
}

declare module goog.events {

    /**
     * Key names for common characters. These should be used with keyup/keydown
     * events, since the .keyCode property on those is meant to indicate the
     * *physical key* the user held down on the keyboard. Hence the mapping uses
     * only the unshifted version of each key (e.g. no '#', since that's shift+3).
     * Keypress events on the other hand generate (mostly) ASCII codes since they
     * correspond to *characters* the user typed.
     *
     * For further reference: http://unixpapa.com/js/key.html
     *
     * This list is not localized and therefore some of the key codes are not
     * correct for non-US keyboard layouts.
     *
     * @see goog.events.KeyCodes
     * @enum {string}
     */
    type KeyNames = string;
    var KeyNames: {
        8: KeyNames;
        9: KeyNames;
        13: KeyNames;
        16: KeyNames;
        17: KeyNames;
        18: KeyNames;
        19: KeyNames;
        20: KeyNames;
        27: KeyNames;
        32: KeyNames;
        33: KeyNames;
        34: KeyNames;
        35: KeyNames;
        36: KeyNames;
        37: KeyNames;
        38: KeyNames;
        39: KeyNames;
        40: KeyNames;
        45: KeyNames;
        46: KeyNames;
        48: KeyNames;
        49: KeyNames;
        50: KeyNames;
        51: KeyNames;
        52: KeyNames;
        53: KeyNames;
        54: KeyNames;
        55: KeyNames;
        56: KeyNames;
        57: KeyNames;
        59: KeyNames;
        61: KeyNames;
        65: KeyNames;
        66: KeyNames;
        67: KeyNames;
        68: KeyNames;
        69: KeyNames;
        70: KeyNames;
        71: KeyNames;
        72: KeyNames;
        73: KeyNames;
        74: KeyNames;
        75: KeyNames;
        76: KeyNames;
        77: KeyNames;
        78: KeyNames;
        79: KeyNames;
        80: KeyNames;
        81: KeyNames;
        82: KeyNames;
        83: KeyNames;
        84: KeyNames;
        85: KeyNames;
        86: KeyNames;
        87: KeyNames;
        88: KeyNames;
        89: KeyNames;
        90: KeyNames;
        93: KeyNames;
        96: KeyNames;
        97: KeyNames;
        98: KeyNames;
        99: KeyNames;
        100: KeyNames;
        101: KeyNames;
        102: KeyNames;
        103: KeyNames;
        104: KeyNames;
        105: KeyNames;
        106: KeyNames;
        107: KeyNames;
        109: KeyNames;
        110: KeyNames;
        111: KeyNames;
        112: KeyNames;
        113: KeyNames;
        114: KeyNames;
        115: KeyNames;
        116: KeyNames;
        117: KeyNames;
        118: KeyNames;
        119: KeyNames;
        120: KeyNames;
        121: KeyNames;
        122: KeyNames;
        123: KeyNames;
        186: KeyNames;
        187: KeyNames;
        189: KeyNames;
        188: KeyNames;
        190: KeyNames;
        191: KeyNames;
        192: KeyNames;
        219: KeyNames;
        220: KeyNames;
        221: KeyNames;
        222: KeyNames;
        224: KeyNames;
    };
}
