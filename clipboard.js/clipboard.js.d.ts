// Type definitions for clipboard.js 1.5.5
// Project: https://github.com/zenorocha/clipboard.js
// Definitions by: Andrei Kurosh <https://github.com/impworks>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module clipboardjs {

    export class Clipboard {
        constructor (selector: string, options?: ITargetOptions);
        constructor (selector: string, options?: ITextOptions);

        /**
         * Subscribes to events that indicate the result of a copy/cut operation.
         * @param type {String} Event type ('success' or 'error').
         * @param handler Callback function.
         */
        on(type: "success", handler: (e: Event) => void);
        on(type: "error", handler: (e: Event) => void);
        on(type: string, handler: (e: Event) => void);

        /**
         * Clears all event bindings.
         */
        destroy();
    }

    interface IOptions {
        /**
         * Overwrites default command ('cut' or 'copy').
         * @param {Element} elem Current element
         * @returns {String} Only 'cut' or 'copy'.
         */
        action?: (elem: Element) => string;
    }

    // Two different interfaces, because 'target' and 'text' attributes cannot be used together.

    interface ITargetOptions extends IOptions {
        /**
         * Overwrites default target input element.
         * @param {Element} elem Current element
         * @returns {Element} <input> element to use.
         */
        target?: (elem: Element) => Element;
    }

    interface ITextOptions extends IOptions {
        /**
         * Returns the explicit text to copy.
         * @param {Element} elem Current element
         * @returns {String} Text to be copied.
         */
        text?: (elem: Element) => string;
    }
}

declare module 'clipboardjs' {
    export = clipboardjs;
}