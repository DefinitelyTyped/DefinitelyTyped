import { ILocation, WebDriver, WebElement } from '../';
import { Executor } from './command';

/**
 * Defines the reference point from which to compute offsets for
 * {@linkplain ./input.Pointer#move pointer move} actions.
 */
export enum Origin {
    /** Compute offsets relative to the pointer's current position. */
    POINTER = 'pointer',
    /** Compute offsets relative to the viewport. */
    VIEWPORT = 'viewport',
}

/**
 * Enumeration of the buttons used in the advanced interactions API.
 */
export enum Button {
    LEFT = 0,
    MIDDLE = 1,
    RIGHT = 2,
}

export interface IKey {
    NULL: string;
    CANCEL: string; // ^break
    HELP: string;
    BACK_SPACE: string;
    TAB: string;
    CLEAR: string;
    RETURN: string;
    ENTER: string;
    SHIFT: string;
    CONTROL: string;
    ALT: string;
    PAUSE: string;
    ESCAPE: string;
    SPACE: string;
    PAGE_UP: string;
    PAGE_DOWN: string;
    END: string;
    HOME: string;
    ARROW_LEFT: string;
    LEFT: string;
    ARROW_UP: string;
    UP: string;
    ARROW_RIGHT: string;
    RIGHT: string;
    ARROW_DOWN: string;
    DOWN: string;
    INSERT: string;
    DELETE: string;
    SEMICOLON: string;
    EQUALS: string;

    NUMPAD0: string; // number pad keys
    NUMPAD1: string;
    NUMPAD2: string;
    NUMPAD3: string;
    NUMPAD4: string;
    NUMPAD5: string;
    NUMPAD6: string;
    NUMPAD7: string;
    NUMPAD8: string;
    NUMPAD9: string;
    MULTIPLY: string;
    ADD: string;
    SEPARATOR: string;
    SUBTRACT: string;
    DECIMAL: string;
    DIVIDE: string;

    F1: string; // function keys
    F2: string;
    F3: string;
    F4: string;
    F5: string;
    F6: string;
    F7: string;
    F8: string;
    F9: string;
    F10: string;
    F11: string;
    F12: string;

    COMMAND: string; // Apple command key
    META: string; // alias for Windows key

    /**
     * Simulate pressing many keys at once in a 'chord'. Takes a sequence of
     * keys or strings, appends each of the values to a string,
     * and adds the chord termination key ({@link Key.NULL}) and returns
     * the resulting string.
     *
     * Note: when the low-level webdriver key handlers see Keys.NULL, active
     * modifier keys (CTRL/ALT/SHIFT/etc) release via a keyup event.
     *
     * @param {...string} var_args The key sequence to concatenate.
     * @return {string} The null-terminated key sequence.
     */
    chord(...var_args: Array<string | IKey>): string;
}

/**
 * Representations of pressable keys that aren't text.  These are stored in
 * the Unicode PUA (Private Use Area) code points, 0xE000-0xF8FF.  Refer to
 * http://www.google.com.au/search?&q=unicode+pua&btnG=Search
 *
 */
export const Key: IKey;

export interface IDirection {
    x?: number | undefined;
    y?: number | undefined;
    duration?: number | undefined;
    origin?: Origin | WebElement | undefined;
}

export const INTERNAL_COMPUTE_OFFSET_SCRIPT: string;

export class Device {
    constructor(type: string, id: string);
}

export class Pointer extends Device {}
export class Keyboard extends Device {}

/**
 * Class for defining sequences of complex user interactions. Each sequence
 * will not be executed until {@link #perform} is called.
 *
 * Example:
 *
 *     new Actions(driver).
 *         keyDown(Key.SHIFT).
 *         click(element1).
 *         click(element2).
 *         dragAndDrop(element3, element4).
 *         keyUp(Key.SHIFT).
 *         perform();
 *
 */
export class Actions {
    // region Constructors

    constructor(
        executor: Executor,
        options?: { async: boolean; bridge: boolean } | { async: boolean } | { bridge: boolean },
    );

    // endregion

    // region Methods
    keyboard(): Keyboard;
    mouse(): Pointer;
    /**
     * Executes this action sequence.
     * @return {!Promise} A promise that will be resolved once
     *     this sequence has completed.
     */
    clear(): Promise<void>;

    /**
     * Executes this action sequence.
     * @return {!Promise} A promise that will be resolved once
     *     this sequence has completed.
     */
    perform(): Promise<void>;

    pause(duration?: number | Device, ...devices: Device[]): Actions;

    /**
     * Inserts an action to press a mouse button at the mouse's current location.
     * Defaults to `LEFT`.
     */
    press(button?: Button): Actions;

    /**
     * Inserts an action to release a mouse button at the mouse's current
     * location.  Defaults to `LEFT`.
     */
    release(button?: Button): Actions;

    /**
     * Inserts an action for moving the mouse `x` and `y` pixels relative to the
     * specified `origin`. The `origin` may be defined as the mouse's
     * {@linkplain ./input.Origin.POINTER current position}, the
     * {@linkplain ./input.Origin.VIEWPORT viewport}, or the center of a specific
     * {@linkplain ./webdriver.WebElement WebElement}.
     *
     * You may adjust how long the remote end should take, in milliseconds, to
     * perform the move using the `duration` parameter (defaults to 100 ms).
     * The number of incremental move events generated over this duration is an
     * implementation detail for the remote end.
     *
     * Defaults to moving the mouse to the top-left
     *     corner of the viewport over 100ms.
     */
    move(direction: IDirection): Actions;

    /**
     * Convenience function for performing a 'drag and drop' manuever. The target
     * element may be moved to the location of another element, or by an offset (in
     * pixels).
     */
    dragAndDrop(
        from: WebElement,
        to?: WebElement | { x?: number | string | undefined; y?: number | string | undefined } | null,
    ): Actions;

    /**
     * Short-hand for performing a simple left-click (down/up) with the mouse.
     *
     * @param {./WebElement=} element If specified, the mouse will
     *     first be moved to the center of the element before performing the
     *     click.
     * @return {!Actions} a self reference.
     */
    click(element?: WebElement): Actions;

    /**
     * Short-hand for performing a double left-click with the mouse.
     *
     * @param {./WebElement=} element If specified, the mouse will
     *     first be moved to the center of the element before performing the
     *     click.
     * @return {!Actions} a self reference.
     */
    doubleClick(element?: WebElement): Actions;

    /**
     * Short-hand for performing a simple right-click (down/up) with the mouse.
     *
     * @param {./WebElement=} element If specified, the mouse will
     *     first be moved to the center of the element before performing the
     *     click.
     * @return {!Actions} a self reference.
     */
    contextClick(element?: WebElement): Actions;

    /**
     * Performs a modifier key press. The modifier key is <em>not released</em>
     * until {@link #keyUp} or {@link #sendKeys} is called. The key press will be
     * targetted at the currently focused element.
     * @param {!Key} key The modifier key to push. Must be one of
     *     {ALT, CONTROL, SHIFT, COMMAND, META}.
     * @return {!Actions} A self reference.
     * @throws {Error} If the key is not a valid modifier key.
     */
    keyDown(key: string): Actions;

    /**
     * Performs a modifier key release. The release is targetted at the currently
     * focused element.
     * @param {!Key} key The modifier key to release. Must be one of
     *     {ALT, CONTROL, SHIFT, COMMAND, META}.
     * @return {!Actions} A self reference.
     * @throws {Error} If the key is not a valid modifier key.
     */
    keyUp(key: string): Actions;

    /**
     * Simulates typing multiple keys. Each modifier key encountered in the
     * sequence will not be released until it is encountered again. All key events
     * will be targeted at the currently focused element.
     *
     * @param {...(string|!input.Key|!Array<(string|!input.Key)>)} var_args
     *     The keys to type.
     * @return {!Actions} A self reference.
     * @throws {Error} If the key is not a valid modifier key.
     */
    sendKeys(...var_args: Array<string | Promise<string>>): Actions;

    // endregion
}
