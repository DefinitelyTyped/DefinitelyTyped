// Type definitions for clipboard.js 1.5.9
// Project: https://github.com/zenorocha/clipboard.js
// Definitions by: Andrei Kurosh <https://github.com/impworks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Clipboard {
    constructor(selector: (string | Element | NodeListOf<Element>), options?: ClipboardOptions);

    /**
     * Subscribes to events that indicate the result of a copy/cut operation.
     * @param type {String} Event type ('success' or 'error').
     * @param handler Callback function.
     */
    on(type: "success", handler: (e: ClipboardEvent) => void): this;
    on(type: "error", handler: (e: ClipboardEvent) => void): this;
    on(type: string, handler: (e: ClipboardEvent) => void): this;

    /**
     * Clears all event bindings.
     */
    destroy(): void;
}

interface ClipboardOptions {
    /**
     * Overwrites default command ('cut' or 'copy').
     * @param {Element} elem Current element
     * @returns {String} Only 'cut' or 'copy'.
     */
    action?: (elem: Element) => string;

    /**
     * Overwrites default target input element.
     * @param {Element} elem Current element
     * @returns {Element} <input> element to use.
     */
    target?: (elem: Element) => Element;

    /**
     * Returns the explicit text to copy.
     * @param {Element} elem Current element
     * @returns {String} Text to be copied.
     */
    text?: (elem: Element) => string;
}

interface ClipboardEvent {
    action: string;
    text: string;
    trigger: Element;
    clearSelection(): void;
}

declare module 'clipboard' {
    export = Clipboard;
}
