export {};

/**
 * Represents a single key, or a single possible behavior of a key. Each key
 * on the on-screen keyboard must have at least one associated
 * Guacamole.OnScreenKeyboard.Key, whether that key is explicitly defined or
 * implied, and may have multiple Guacamole.OnScreenKeyboard.Key if behavior
 * depends on modifier states.
 */
declare class Key {
    /**
     * @param template The object whose identically-named properties will be used to initialize
     * the properties of this key.
     * @param [name] The name to use instead of any name provided within the template, if
     * any. If omitted, the name within the template will be used, assuming the
     * template contains a name.
     */
    constructor(template: Key, name?: string);

    /**
     * The unique name identifying this key within the keyboard layout.
     */
    name: string;

    /**
     * The human-readable title that will be displayed to the user within the
     * key. If not provided, this will be derived from the key name.
     */
    title: string;

    /**
     * The keysym to be pressed/released when this key is pressed/released. If
     * not provided, this will be derived from the title if the title is a
     * single character.
     */
    keysym: number;

    /**
     * The name of the modifier set when the key is pressed and cleared when
     * this key is released, if any. The names of modifiers are distinct from
     * the names of keys; both the "RightShift" and "LeftShift" keys may set
     * the "shift" modifier, for example. By default, the key will affect no
     * modifiers.
     */
    modifier: string;

    /**
     * An array containing the names of each modifier required for this key to
     * have an effect. For example, a lowercase letter may require nothing,
     * while an uppercase letter would require "shift", assuming the Shift key
     * is named "shift" within the layout. By default, the key will require
     * no modifiers.
     */
    requires: string[];
}

/**
 * Represents an entire on-screen keyboard layout, including all available
 * keys, their behaviors, and their relative position and sizing.
 * @param template
 *     The object whose identically-named properties will be used to initialize
 *     the properties of this layout.
 */
declare class Layout {
    constructor(template: Layout);
    /**
     * The language of keyboard layout, such as "en_US". This property is for
     * informational purposes only, but it is recommend to conform to the
     * [language code]_[country code] format.
     */
    language: string;

    /**
     * The type of keyboard layout, such as "qwerty". This property is for
     * informational purposes only, and does not conform to any standard.
     */
    type: string;

    /**
     * Map of key name to corresponding keysym, title, or key object. If only
     * the keysym or title is provided, the key object will be created
     * implicitly. In all cases, the name property of the key object will be
     * taken from the name given in the mapping.
     */
    keys: Record<string, number | string | Key | Key[]>;

    /**
     * Arbitrarily nested, arbitrarily grouped key names. The contents of the
     * layout will be traversed to produce an identically-nested grouping of
     * keys in the DOM tree. All strings will be transformed into their
     * corresponding sets of keys, while all objects and arrays will be
     * transformed into named groups and anonymous groups respectively. Any
     * numbers present will be transformed into gaps of that size, scaled
     * according to the same units as each key.
     */
    layout: Layout;

    /**
     * The width of the entire keyboard, in arbitrary units. The width of each
     * key is relative to this width, as both width values are assumed to be in
     * the same units. The conversion factor between these units and pixels is
     * derived later via a call to resize() on the Guacamole.OnScreenKeyboard.
     */
    width: number;

    /**
     * The width of each key, in arbitrary units, relative to other keys in
     * this layout. The true pixel size of each key will be determined by the
     * overall size of the keyboard. If not defined here, the width of each
     * key will default to 1.
     */
    keyWidths: Record<string, number>;
}

export namespace OnScreenKeyboard {
    export {};
    export type Key = typeof Key;
    export type Layout = typeof Layout;
}

/**
 * Dynamic on-screen keyboard. Given the layout object for an on-screen
 * keyboard, this object will construct a clickable on-screen keyboard with its
 * own key events.
 * @param layout The layout of the on-screen keyboard to display.
 */
export class OnScreenKeyboard {
    constructor(layout: Layout);

    /**
     * The number of mousemove events to require before re-enabling mouse
     * event handling after receiving a touch event.
     */
    touchMouseThreshold: number;

    /**
     * Fired whenever the user presses a key on this Guacamole.OnScreenKeyboard.
     *
     * @event
     * @param keysym The keysym of the key being pressed.
     */
    onkeydown: null | ((keysym: number) => void);

    /**
     * Fired whenever the user releases a key on this Guacamole.OnScreenKeyboard.
     * @event
     * @param keysym The keysym of the key being released.
     */
    onkeyup: null | ((keysym: number) => void);

    /**
     * The keyboard layout provided at time of construction.
     */
    layout: Layout;

    /**
     * Returns the element containing the entire on-screen keyboard.
     * @returns The element containing the entire on-screen keyboard.
     */
    getElement(): HTMLElement;

    /**
     * Resizes all elements within this Guacamole.OnScreenKeyboard such that
     * the width is close to but does not exceed the specified width. The
     * height of the keyboard is determined based on the width.
     * @param width The width to resize this Guacamole.OnScreenKeyboard to, in pixels.
     */
    resize(width: number): void;

    /**
     * Map of all key names to their corresponding set of keys. Each key name
     * may correspond to multiple keys due to the effect of modifiers.
     */
    keys: Record<string, Key[]>;
}
