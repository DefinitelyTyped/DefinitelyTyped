export {};

export namespace Keyboard {
    export {};
    /**
     * The state of all supported keyboard modifiers.
     */
    export class ModifierState {
        /**
         * Returns the modifier state applicable to the keyboard event given.
         * @param event The keyboard event to read.
         * @returns The current state of keyboard modifiers.
         */
        static fromKeyboardEvent(event: KeyboardEvent): ModifierState;

        /**
         * Whether shift is currently pressed.
         */
        shift: boolean;

        /**
         * Whether ctrl is currently pressed.
         */
        ctrl: boolean;

        /**
         * Whether alt is currently pressed.
         */
        alt: boolean;

        /**
         * Whether meta (apple key) is currently pressed.
         */
        meta: boolean;

        /**
         * Whether hyper (windows key) is currently pressed.
         */
        hyper: boolean;
    }
}

/**
 * Provides cross-browser and cross-keyboard keyboard for a specific element.
 * Browser and keyboard layout variation is abstracted away, providing events
 * which represent keys as their corresponding X11 keysym.
 */
export class Keyboard {
    /**
     * @param element
     * The Element to use to provide keyboard events. If omitted, at least one
     * Element must be manually provided through the listenTo() function for
     * the Guacamole.Keyboard instance to have any effect.
     */
    constructor(element?: HTMLDocument | HTMLElement);

    /**
     * Fired whenever the user presses a key with the element associated
     * with this Guacamole.Keyboard in focus.
     * @event
     * @param keysym The keysym of the key being pressed.
     * @return true if the key event should be allowed through to the browser, false otherwise.
     */
    onkeydown: null | ((keysym: number) => boolean | void);

    /**
     * Fired whenever the user releases a key with the element associated
     * with this Guacamole.Keyboard in focus.
     * @event
     * @param keysym The keysym of the key being released.
     */
    onkeyup: null | ((keysym: number) => void);

    /**
     * All modifiers and their states.
     */
    modifiers: Keyboard.ModifierState;

    /**
     * The state of every key, indexed by keysym. If a particular key is
     * pressed, the value of pressed for that keysym will be true. If a key
     * is not currently pressed, it will not be defined.
     */
    pressed: { [keysym: number]: true };

    /**
     * Marks a key as pressed, firing the keydown event if registered. Key
     * repeat for the pressed key will start after a delay if that key is
     * not a modifier. The return value of this function depends on the
     * return value of the keydown event handler, if any.
     *
     * @param keysym The keysym of the key to press.
     * @return true if event should NOT be canceled, false otherwise.
     */
    press(keysym: number): boolean;

    /**
     * Marks a key as released, firing the keyup event if registered.
     * @param keysym The keysym of the key to release.
     */
    release(keysym: number): void;

    /**
     * Presses and releases the keys necessary to type the given string of
     * text.
     *
     * @param str The string to type.
     */
    type(str: string): void;

    /**
     * Resets the state of this keyboard, releasing all keys, and firing keyup
     * events for each released key.
     */
    reset(): void;

    /**
     * Attaches event listeners to the given Element, automatically translating
     * received key, input, and composition events into simple keydown/keyup
     * events signalled through this Guacamole.Keyboard's onkeydown and
     * onkeyup handlers.
     *
     * @param element
     * The Element to attach event listeners to for the sake of handling key or input events.
     */
    listenTo(element: HTMLElement | HTMLDocument): void;
}
