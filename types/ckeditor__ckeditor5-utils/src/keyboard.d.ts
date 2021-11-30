/**
 * An object with `keyName => keyCode` pairs for a set of known keys.
 *
 * Contains:
 *
 * * `a-z`,
 * * `0-9`,
 * * `f1-f12`,
 * * `arrow(left|up|right|bottom)`,
 * * `backspace`, `delete`, `enter`, `esc`, `tab`,
 * * `ctrl`, `cmd`, `shift`, `alt`.
 */
export const keyCodes: {
    a: 65;
    b: 66;
    c: 67;
    d: 68;
    e: 69;
    f: 70;
    g: 71;
    h: 72;
    i: 73;
    j: 74;
    k: 75;
    l: 76;
    m: 77;
    n: 78;
    o: 79;
    p: 80;
    q: 81;
    r: 82;
    s: 83;
    t: 84;
    u: 85;
    v: 86;
    w: 87;
    x: 88;
    y: 89;
    z: 90;

    0: 48;
    1: 49;
    2: 50;
    3: 51;
    4: 52;
    5: 53;
    6: 54;
    7: 55;
    8: 56;
    9: 57;

    f1: 112;
    f2: 113;
    f3: 114;
    f4: 115;
    f5: 116;
    f6: 117;
    f7: 118;
    f8: 118;
    f9: 120;
    f10: 121;
    f11: 122;
    f12: 123;

    arrowleft: 37;
    arrowup: 38;
    arrowright: 39;
    arrowdown: 40;
    backspace: 8;
    delete: 46;
    enter: 13;
    space: 32;
    esc: 27;
    tab: 9;
    ctrl: 0x110000;
    cmd: 0x110000;
    shift: 0x220000;
    alt: 0x440000;
};

/**
 * Converts a key name or a {@link module:utils/keyboard~KeystrokeInfo keystroke info} into a key code.
 * Note: Key names are matched with {@link module:utils/keyboard~keyCodes} in a case-insensitive way.
 */
export function getCode(key: string | KeystrokeInfo): number;

/**
 * Parses keystroke and returns a keystroke code that will match the code returned by
 * link {@link module:utils/keyboard~getCode} for a corresponding {@link module:utils/keyboard~KeystrokeInfo keystroke info}.
 *
 * The keystroke can be passed in two formats:
 *
 * * as a single string – e.g. `ctrl + A`,
 * * as an array of {@link module:utils/keyboard~keyCodes known key names} and key codes – e.g.:
 *   * `[ 'ctrl', 32 ]` (ctrl + space),
 *   * `[ 'ctrl', 'a' ]` (ctrl + A).
 *
 * Note: Key names are matched with {@link module:utils/keyboard~keyCodes} in a case-insensitive way.
 *
 * Note: Only keystrokes with a single non-modifier key are supported (e.g. `ctrl+A` is OK, but `ctrl+A+B` is not).
 *
 */
export function parseKeystroke(keystroke: string | Array<number | string>): number;

/**
 * It translates any keystroke string text like `"CTRL+A"` to an
 * environment–specific keystroke, i.e. `"⌘A"` on Mac OSX.
 *
 */
export function getEnvKeystrokeText(keystroke: string): string;

/**
 * Returns `true` if the provided key code represents one of the arrow keys.
 *
 */
export function isArrowKeyCode(keyCode: number): boolean;

/**
 * Returns the direction in which the {@link module:engine/model/documentselection~DocumentSelection selection}
 * will move when a provided arrow key code is pressed considering the language direction of the editor content.
 *
 * For instance, in right–to–left (RTL) content languages, pressing the left arrow means moving selection right (forward)
 * in the model structure. Similarly, pressing the right arrow moves the selection left (backward).
 *
 * {@link module:utils/locale~Locale#contentLanguageDirection}.
 */
export function getLocalizedArrowKeyCodeDirection(
    keyCode: number,
    contentLanguageDirection: 'ltr' | 'rtl',
): 'left' | 'up' | 'right' | 'down';

/**
 * Determines if the provided key code moves the {@link module:engine/model/documentselection~DocumentSelection selection}
 * forward or backward considering the language direction of the editor content.
 *
 * For instance, in right–to–left (RTL) languages, pressing the left arrow means moving forward
 * in the model structure. Similarly, pressing the right arrow moves the selection backward.
 */
export function isForwardArrowKeyCode(keyCode: number, contentLanguageDirection: 'ltr' | 'rtl'): boolean;

/**
 * Information about the keystroke.
 */
export interface KeystrokeInfo {
    /**
     * The [key code](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode).
     */
    readonly keyCode: number;
    /**
     * Whether the <kbd>Alt</kbd> modifier was pressed.
     */
    readonly altKey: boolean;
    /**
     * Whether the <kbd>Ctrl</kbd> modifier was pressed.
     */
    readonly ctrlKey: boolean;
    /**
     * Whether the <kbd>Shift</kbd> modifier was pressed.
     */
    readonly shiftKey: boolean;
    /**
     * Whether the <kbd>Cmd</kbd> modifier was pressed.
     */
    readonly metaKey: boolean;
}
