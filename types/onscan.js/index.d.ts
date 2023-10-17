export interface ScanOptions {
    /**
     * Callback after sccessful scan.
     * @param scanned Scanned code
     * @param qty Quantity
     */
    onScan?(scanned: string, qty: number): void;
    /**
     * Callback after the scan button was pressed and held down for a time
     * defined in ``scanButtonLongPressThreshold``. This can only be used if
     * the scan button behaves as a key itself and the ``scanButtonKeyCode``
     * option is set.
     */
    onScanButtonLongPress?(): void;
    /**
     * Callback after a scanned string being dropped due to restrictors.
     * @param debug Plain object with various debug data
     */
    onScanError?(debug: any): void;
    /**
     * Callback after every detected key event. Further event processing can be
     * canceled by returning ``false`` from this callback - e.g. to exclude certain
     * key events completely.
     * @param keyCode Detected key code
     * @param event Complete event instance
     */
    onKeyDetect?(keyCode: number, event: KeyboardEvent): void | boolean;
    /**
     * Callback after a key event was decoded and found to be part of a
     * potential scan code. Keep in mind, that a this point it is not yet
     * known, whether it's a scan or not - it's just a valid character being
     * processed and decoded.
     * @param char Decoded character
     * @param event Complete event instance
     */
    onKeyProcess?(char: string, event: KeyboardEvent): void;
    /**
     * Callback after detecting a paste. Only fired if ``reactToPaste`` is set
     * to ``true``.
     * @param pasted Pasted string
     * @param event Complete event instance
     */
    onPaste?(pasted: string, event: Event): void;
    /**
     * A function to extract the character from a ``keydown`` event. The event
     * will be ignored if the function returns ``null``. See chapter "Decoding
     * key codes" below for more information.
     */
    keyCodeMapper?(event: any): any;
    /**
     * Wait duration (ms) after keypress event to check if scanning finished.
     */
    timeBeforeScanTest?: number;
    /**
     * Average time (ms) between 2 chars. If a scan is detected, but it took
     * more time that [code length] * ``avgTimeByChar``, a ``scanError`` will
     * be triggered.
     */
    avgTimeByChar?: number;
    /**
     * Minimum length for a scanned code. If the scan ends before reaching this
     * length, it will trigger a scanError event.
     */
    minLength?: number;
    /**
     * An array with possible suffix codes sent by the scanner after the actual
     * data. Detecting one of them means end of scanning, but they can never be
     * part of the scanned code. Many scanners will send key code ``13``
     * (enter) as suffix by default. This can be changed in the configuration
     * in most cases.
     *
     * NOTE: KeyboardEvents with these key codes will be silenced via
     * ``event.stopImmediatePropagation()`` and ``event.preventDefault()``.
     */
    suffixKeyCodes?: number[];
    /**
     * An array with possible prefix codes sent by the scanner before the
     * actual data. Detecting one of them means the start of scanning, but they
     * can never be part of the scanned code. Many scanners support prefix
     * characters in their configuration.
     *
     * NOTE: KeyboardEvents with these key codes will be silenced via
     * ``event.stopImmediatePropagation()`` and ``event.preventDefault()``.
     */
    prefixKeyCodes?: number[];
    /**
     * Ignore scans if the currently focused element matches this selector. For
     * example, if you set this option to ``'input'``, scan events will not be
     * fired if an input field is focused. You can either pass an DOMElement, a
     * CSS selector or an array containing multiple besaid objects
     */
    ignoreIfFocusOn?: boolean;
    /**
     * Key code of the scanner hardware button (i.e. if the scanner button a
     * acts as a key itself). Knowing this key code is important, because it is
     * not part of the scanned code and must be ignored.
     */
    scanButtonKeyCode?: boolean;
    /**
     * Time (ms) to hold the scan button before ``onScanButtonLongPress`` is
     * triggered. Only works if ``scanButtonKeyCode`` is set.
     */
    scanButtonLongPressTime?: number;
    /**
     * Stop immediate propagation of events, that are processed successfully.
     *
     * __WARNING:__ If ``reactToKeyDown`` is true, every keyboard event, that
     * could potentially be part of a scancode will be stopped!
     */
    stopPropagation?: boolean;
    /**
     * Prevent default action of events, that are processed successfully.
     *
     * __WARNING:__ If ``reactToKeyDown`` is true, the default of every
     * keyboard event, that could potentially be part of a scancode will be
     * prevented - in particular you won't be able to use the keyboard for
     * typing!!!
     */
    preventDefault?: boolean;
    /**
     * Set to ``true`` to force all relevant events to be dispatched to onScan
     * before being dispatched to any ``EventTarget`` beneath it in the DOM
     * tree. Use this if you need to cancel certain events in onScan callbacks.
     * Technically this option is used as the third parameter in
     * ``.addEventListener(type, listener [, useCapture])`` calls. The exact
     * behavior is documented [here](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener).
     */
    captureEvents?: boolean;

    /**
     * This is the quantity of items which gets returned on a single successful
     * scan.
     */
    singleScanQty?: number;
    /**
     * Look for scan input among ``keydown`` events (i.e. if the scanner works
     * in keyboard-mode).
     */
    reactToKeyDown?: boolean;
    /**
     * Look for scan input among ``paste`` events (i.e. if the scanner works in
     * clipboard-mode).
     */
    reactToPaste?: boolean;
}

export type KeyCode =
    | number
    | {
        keyCode: number;
        key: string;
        shiftKey?: boolean;
    };

export interface OnScan {
    /**
     * Initializes listening for scan events for given DOM element. Only events
     * fired for this DOM element will be processed. Use ``document`` to
     * process all possible events. This is the best pick in most cases.
     *
     * NOTE: onScan.js can be attached to a DOM element only once. If you, for
     * some reason, need to call ``attachTo()`` for a single element multiple
     * times, you must call ``detachFrom()`` first.
     */
    attachTo(node: Node, options?: ScanOptions): void;
    /**
     * Removes all scanner detection logic from the given DOM element.
     */
    detachFrom(node: Node): void;
    /**
     * Fires the scan event for the given scan code - usefull to trigger
     * listeners manually (e.g. for testing). Accepts either an already decoded
     * string or an array with key codes or event property objects
     */
    simulate(node: Node, stringOrArray: string | KeyCode[]): void;
    /**
     * Replaces only the newly sent options.
     */
    setOptions(node: Node, options: ScanOptions): void;
    /**
     * Retrieves entire options object.
     */
    getOptions(node: Node): ScanOptions;
    /**
     * Extracts the scanned string character from a keyboard event (i.e.
     * ``keydown``).
     */
    decodeKeyEvent(event: Event): any;
    /**
     * Returns ``true`` if onScan is attached to the given DOM element and
     * ``false`` otherwise.
     */
    isAttachedTo(node: Node): boolean;
    /**
     * Returns ``true`` the scanner is currently in the middle of a scan
     * sequence and ``false`` otherwise. Technically, this means, that the scan
     * sequence started (e.g. via prefix character) and has not ended yet (e.g.
     * via suffix or timeout). This method is useful inside event handlers.
     */
    isScanInProgressFor(node: Node): boolean;
}

declare const onScan: OnScan;
export default onScan;

export interface Scan {
    /**
     * Quantity
     */
    qty: number;
    /**
     * Scanned code
     */
    scanCode: string;
}

export interface ScanEvent extends CustomEvent<Scan> {}

export interface ScanError {
    message: string;
    scanCode: string;
    scanDuration: number;
    avgTimeByChar: number;
    minLength: number;
}

export interface ScanErrorEvent extends CustomEvent<ScanError> {}

declare global {
    interface DocumentEventMap {
        "scan": ScanEvent;
        "scanError": ScanErrorEvent;
    }
}
