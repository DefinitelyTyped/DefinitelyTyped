// Type definitions for clipboard.js 2.0
// Project: https://github.com/zenorocha/clipboard.js
// Definitions by: Andrei Kurosh <https://github.com/impworks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class ClipboardJS {
    constructor(
        selector: string | Element | NodeListOf<Element>,
        options?: ClipboardJS.Options
    );

    /**
     * Subscribes to events that indicate the result of a copy/cut operation.
     * @param type Event type ('success' or 'error').
     * @param handler Callback function.
     */
    on(type: "success" | "error", handler: (e: ClipboardJS.Event) => void): this;
    on(type: string, handler: (...args: any[]) => void): this;

    /**
     * Clears all event bindings.
     */
    destroy(): void;

    /**
     * Checks if clipboard.js is supported
     */
    static isSupported(): boolean;
}

declare namespace ClipboardJS {
    interface Options {
        /**
         * Overwrites default command ('cut' or 'copy').
         * @param elem Current element
         */
        action?(elem: Element): "cut" | "copy";

        /**
         * Overwrites default target input element.
         * @param elem Current element
         * @returns <input> element to use.
         */
        target?(elem: Element): Element;

        /**
         * Returns the explicit text to copy.
         * @param elem Current element
         * @returns Text to be copied.
         */
        text?(elem: Element): string;

        /**
         * For use in Bootstrap Modals or with any
         * other library that changes the focus
         * you'll want to set the focused element
         * as the container value.
         */
        container?: Element;
    }

    interface Event {
        action: string;
        text: string;
        trigger: Element;
        clearSelection(): void;
    }
}

export = ClipboardJS;

export as namespace ClipboardJS;
