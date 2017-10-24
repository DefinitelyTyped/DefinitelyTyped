// Type definitions for clipboard.js 1.5
// Project: https://github.com/zenorocha/clipboard.js
// Definitions by: Andrei Kurosh <https://github.com/impworks>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Clipboard {
    constructor(selector: (string | Element | NodeListOf<Element>), options?: Clipboard.Options);

    /**
     * Subscribes to events that indicate the result of a copy/cut operation.
     * @param type Event type ('success' or 'error').
     * @param handler Callback function.
     */
    on(type: "success" | "error", handler: (e: Clipboard.Event) => void): this;
    on(type: string, handler: (...args: any[]) => void): this;

    /**
     * Clears all event bindings.
     */
    destroy(): void;

    /**
     * Checks if clipboard.js is supported
     */
    isSupported(): boolean;
}

declare namespace Clipboard {
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
    }

    interface Event {
        action: string;
        text: string;
        trigger: Element;
        clearSelection(): void;
    }
}

export = Clipboard;

export as namespace Clipboard;
