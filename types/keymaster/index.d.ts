// Type definitions for keymaster 1.6
// Project: https://github.com/madrobby/keymaster
// Definitions by: Martin W. Kirst <https://github.com/nitram509>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace key;
export = Keymaster;

declare const Keymaster: Keymaster;

interface Keymaster {
    /**
     * Defines a shortcut.
     *
     * Keymaster understands the following modifiers:
     * `⇧`, `shift`, `option`, `⌥`, `alt`, `ctrl`, `control`, `command`, and `⌘`.
     *
     * The following special keys can be used for shortcuts:
     * `backspace`, `tab`, `clear`, `enter`, `return`, `esc`, `escape`, `space`,
     * `up`, `down`, `left`, `right`, `home`, `end`, `pageup`, `pagedown`, `del`, `delete`
     * and `f1` through `f19`.
     *
     * @example
     * import key = require('keymaster');
     *
     * // define short of 'a'
     * key('a', () => alert('you pressed a!'));
     *
     * // returning false stops the event and prevents default browser events
     * key('ctrl+r', () => {
     *     alert('stopped reload!');
     *     return false;
     * });
     *
     * // multiple shortcuts that do the same thing
     * key('⌘+r, ctrl+r', () => {});
     *
     * // define shortcuts with a scope
     * key('o, enter', 'issues', () => {});
     * key('o, enter', 'files', () => {});
     */
    (key: string, callback: Keymaster.KeyHandler): void;
    (key: string, scope: string, callback: Keymaster.KeyHandler): void;

    /**
     * At any point in time (even in code other than key shortcut handlers),
     * you can query the `key` object for the state of any keys. This
     * allows easy implementation of things like shift+click handlers. For example,
     * `key.shift` is `true` if the shift key is currently pressed.
     *
     * @example
     * if (key.shift) {
     *     alert('shift is pressed, OMGZ!');
     * }
     */
    shift: boolean;
    "⇧": boolean;
    alt: boolean;
    option: boolean;
    "⌥": boolean;
    ctrl: boolean;
    control: boolean;
    "⌃": boolean;
    command: boolean;
    "⌘": boolean;

    /**
     * Set the scope if you want to reuse the same shortcut for separate
     * areas in your single page app.
     *
     * @example
     * // set the scope (only 'all' and 'issues' shortcuts will be honored)
     * key.setScope('issues'); // default scope is 'all'
     */
    setScope(scopeName?: string): void;

    /**
     * @returns The current scope.
     */
    getScope(): string;

    /**
     * Remove all events that are set in a scope.
     *
     * @example
     * key.deleteScope('issues');
     */
    deleteScope(scopeName: string): void;

    /**
     * By default, when an `INPUT`, `SELECT` or `TEXTAREA` element is focused,
     * Keymaster doesn't process any shortcuts.
     *
     * You can change this by overwriting `key.filter` with a new function.
     * This function is called before Keymaster processes shortcuts.
     *
     * If your function returns false, then the no shortcuts will be processed.
     *
     * Here's the default implementation for reference:
     *
     * ```ts
     * function filter(event: KeyboardEvent) {
     *     const tagName = event.target!.tagName;
     *     return !(tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA");
     * }
     * ```
     *
     * If you only want _some_ shortcuts to work while in an input element, you
     * can change the scope in the `key.filter` function. Below is an example
     * implementation, setting the scope to either `'input'` or `'other'`.
     * Don't forget to return `true` so the any shortcuts get processed.
     *
     * However a more robust way to handle this is to use proper
     * focus and blur event handlers on your input element, and change scopes there as you see fit.
     *
     * @example
     * key.filter = (event) => {
     *   const tagName = event.target!.tagName;
     *   key.setScope(/^(INPUT|TEXTAREA|SELECT)$/.test(tagName) ? 'input' : 'other');
     *   return true;
     * }
     */
    filter(event: Keymaster.FilterEvent): boolean;

    /**
     * At any point in time (even in code other than key shortcut handlers),
     * you can query the `key` object for the state of any key. This
     * is very helpful for game development using a game loop. For example,
     * `key.isPressed(77)` is `true` if the M key is currently pressed.
     *
     * @example
     * if (key.isPressed('M')) {
     *     alert('M key is pressed, can ya believe it!?');
     * }
     * if (key.isPressed(77)) {
     *     alert('M key is pressed, can ya believe it!?');
     * }
     */
    isPressed(keyCode: number | string): boolean;

    /**
     * @returns The key codes currently pressed.
     */
    getPressedKeyCodes(): number[];

    /**
     * Removes the `key` function from global scope and restore whatever
     * `key` was defined to before Keymaster was loaded.
     *
     * @returns The Keymaster `key` function.
     *
     * @example
     * const keymaster = key.noConflict();
     * keymaster('a', () => {});
     *
     * key()
     * // --> TypeError: 'undefined' is not a function
     */
    noConflict(): Keymaster;

    /**
     * Shortcuts can be unbound with this method.
     *
     * @example
     * // unbind 'a' handler
     * key.unbind('a');
     *
     * // unbind a key only for a single scope
     * // when no scope is specified it defaults to the current scope (key.getScope())
     * key.unbind('o, enter', 'issues');
     * key.unbind('o, enter', 'files');
     */
    unbind(key: string, scopeName?: string): void;
}

declare namespace Keymaster {
    interface Handler {
        key: string;
        method: KeyHandler;
        mods: number[];
        /**
         * The scope (or `all`).
         */
        scope: string;
        /**
         * The shortcut used, e.g. `ctrl+r`.
         */
        shortcut: string;
    }

    type KeyHandler = (keyboardEvent: KeyboardEvent, handler: Handler) => boolean | void;

    type FilterEvent = EventTarget & {
        target: HTMLElement | null;
        srcElement: HTMLElement | null;
    };
}
