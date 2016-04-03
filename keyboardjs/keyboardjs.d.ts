// Type definitions for KeyboardJS v2.2.0
// Project: https://github.com/RobertWHurst/KeyboardJS
// Definitions by: Vincent Bortone <https://github.com/vbortone/>,
//                 David Asmuth <https://github.com/piranha771>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// KeyboardJS is a library for use in the browser (node.js compatible). 
// It Allows developers to easily setup key bindings. Use key combos to setup complex bindings.
// KeyboardJS also provides contexts. Contexts are great for single page applications.
// They allow you to scope your bindings to various parts of your application.
// Out of the box keyboardJS uses a US keyboard locale. If you need support for 
// a different type of keyboard KeyboardJS provides custom locale support so you can create 
// with a locale that better matches your needs.

declare module keyboardjs {

    /**
	 * Information and functions in the current callback.
	 */
    interface KeyEvent{
        preventRepeat(): void;
    }

    /**
     * Callback function when a keyCombo is triggered.
     * @see KeyEvent
     */
    interface Callback {
        /**
		 * Keyevent
		 */
        (e: KeyEvent): void;
    }

    // ---------- Key Binding ---------- //

    /**
     * Binds a keyCombo to specific callback functions.
     * @param keyCombo String of keys to be pressed to execute callbacks.
     * @param pressed Callback that gets executed when the keyComboState is 'pressed', can be null.
     * @param released Callback that gets executed when the keyComboState is 'released'
     */
    export function bind(keyCombo: string, pressed: Callback, released: Callback): void;
    /**
     * Binds a keyCombo to specific callback functions.
     * @param keyCombo String of keys to be pressed to execute callbacks.
     * @param pressed Callback that gets executed when the keyComboState is 'pressed'
     */
    export function bind(keyCombo: string, pressed: Callback): void;


    /**
     * Unbinds a keyCombo
     * @param keyCombo String of keys to be pressed to execute callbacks.
     */
    export function unbind(keyCombo: string): void;

    // ---------- Context ---------- //

    /**
     * Sets the context KeyboardJS operates in. Default is global context.
     * Bindings in global context will execute in all contexts.
     * @param identifier The name of the context. If the context doesn't exists, it will be created.
     * Use 'global' to switch to global context.
     */
    export function setContext(identifier: string): void;
    /**
     * Executes a Callback without loosing the current context.
     * @param identifier The name of the context the callback should be in. If the context doesn't exists, it will be created.
     * @param inContextCallBack The callback function. Will be executed in the given context.
     */
    export function withContext(identifier: string, inContextCallBack: () => void): void;
    /**
     * Returns the context KeyboardJS currently operates in.
     */
    export function getContext(): string;

    // ---------- KeyboardJS Control ---------- //

    /**
     * The keyboard will no longer trigger bindings.
     */
    export function pause(): void;
    /**
     * The keyboard will once again trigger bindings.
     */
    export function resume(): void;
    /**
     * All active bindings will released and unbound.
     */
    export function reset(): void;

    // ---------- Virtual Key Press ---------- //

    /**
     * Triggers a key press. Stays in pressed state until released.
     * @param keyCombo String of keys to be pressed to execute 'pressed' callbacks.
     */
    export function pressKey(keyCombo: string): void
    /**
     * Triggers a key release.
     * @param keyCombo String of keys to be released to execute 'released' callbacks.
     */
    export function releaseKey(keyCombo: string): void;
    /**
     * Releases all keys.
     */
    export function releaseAllKeys(): void;

    // ---------- Attachment ---------- //

    /**
     * Attaches keyboardJS a specific window and a specific document or form.
     * @param myWin The window to attach to.
     * @param myDoc The document or form to attach to.
     */
    export function watch(myWin: Window, myDoc: Document | HTMLFormElement): void;
    /**
     * Attaches keyboardJS to the current window and a specific document or form.
     * @param myDoc The document or form to attach to.
     */
    export function watch(myDoc: Document | HTMLFormElement): void;
    /**
     * Attaches keyboardJS to the current window an document.
     */
    export function watch(): void;

    /**
     * Detaches KeyboardJS from the window and document/element
     */
    export function stop(): void;
}

declare module 'keyboardjs' {
    export = keyboardjs;
}