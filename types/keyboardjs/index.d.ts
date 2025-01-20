declare namespace keyboardjs {
    /**
     * Information and functions in the current callback.
     */
    interface KeyEvent extends KeyboardEvent {
        preventRepeat(): void;
        pressedKeys: string[];
    }

    /**
     * Callback function when a keyCombo is triggered.
     * @see KeyEvent
     */
    interface Callback {
        /**
         * Keyevent
         */
        (event?: KeyEvent): void;
    }

    // ---------- Key Binding ---------- //

    /**
     * Binds a keyCombo to specific callback functions.
     * @param keyCombo String of keys to be pressed to execute callbacks.
     * @param pressed Callback that gets executed when the keyComboState is 'pressed', can be null.
     * @param released Callback that gets executed when the keyComboState is 'released'
     * @param preventRepeatByDefault Whether or not to prevent repeat by default. Defaults to false.
     */
    function bind(
        keyCombo: string | string[],
        pressed: Callback | null,
        released?: Callback,
        preventRepeatByDefault?: boolean,
    ): void;
    let on: typeof bind;
    let addListener: typeof bind;

    /**
     * Unbinds a keyCombo completely or only specific pressed & released callback combos.
     * @param keyCombo String of keys to be pressed to execute callbacks.
     * @param pressed Callback that gets executed when the keyComboState is 'pressed', can be null.
     * @param released Callback that gets executed when the keyComboState is 'released', can be null.
     */
    function unbind(keyCombo: string | string[], pressed?: Callback | null, released?: Callback): void;
    let off: typeof bind;
    let removeListener: typeof bind;

    // ---------- Context ---------- //

    /**
     * Sets the context KeyboardJS operates in. Default is global context.
     * Bindings in global context will execute in all contexts.
     * @param identifier The name of the context. If the context doesn't exists, it will be created.
     * Use 'global' to switch to global context.
     */
    function setContext(identifier: string): void;
    /**
     * Executes a Callback without loosing the current context.
     * @param identifier The name of the context the callback should be in. If the context doesn't exists, it will be created.
     * @param inContextCallBack The callback function. Will be executed in the given context.
     */
    function withContext(identifier: string, inContextCallBack: () => void): void;
    /**
     * Returns the context KeyboardJS currently operates in.
     */
    function getContext(): string;

    // ---------- KeyboardJS Control ---------- //

    /**
     * The keyboard will no longer trigger bindings.
     */
    function pause(): void;
    /**
     * The keyboard will once again trigger bindings.
     */
    function resume(): void;
    /**
     * All active bindings will released and unbound.
     */
    function reset(): void;

    // ---------- Virtual Key Press ---------- //

    /**
     * Triggers a key press. Stays in pressed state until released.
     * @param keyCombo String of keys or keyCode to be pressed to execute 'pressed' callbacks.
     * @param event The KeyEvent, can be null.
     */
    function pressKey(keyCombo: string | number, event?: KeyEvent): void;
    /**
     * Triggers a key release.
     * @param keyCombo String of keys or keyCode to be released to execute 'released' callbacks.
     * @param event The KeyEvent, can be null.
     */
    function releaseKey(keyCombo: string | number, event?: KeyEvent): void;
    /**
     * Releases all keys.
     */
    function releaseAllKeys(): void;

    // ---------- Attachment ---------- //

    /**
     * Attaches keyboardJS a specific window and a specific document or form.
     * @param myWin The window to attach to.
     * @param myDoc The document or form to attach to.
     */
    function watch(myWin?: Window, myDoc?: Document | HTMLFormElement): void;
    /**
     * Attaches keyboardJS to the current window and a specific document or form.
     * @param myDoc The document or form to attach to.
     */
    function watch(myDoc: Document | HTMLFormElement): void;

    /**
     * Detaches KeyboardJS from the window and document/element
     */
    function stop(): void;
}

export = keyboardjs;
export as namespace keyboardJS;
