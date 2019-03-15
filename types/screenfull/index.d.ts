// Type definitions for screenfull.js 4.0
// Project: https://github.com/sindresorhus/screenfull.js
// Definitions by: Ilia Choly <https://github.com/icholy>
//                 lionelb <https://github.com/lionelb>
//                 Joel Shepherd <https://github.com/joelshepherd>
//                 BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.5

export = screenfull;
export as namespace screenfull;

declare const screenfull: screenfull.Screenfull | false;

declare namespace screenfull {
    interface Screenfull {
        /**
         * Returns a boolean whether fullscreen is active.
         */
        readonly isFullscreen: boolean;
        /**
         * Returns the element currently in fullscreen, otherwise `null`.
         */
        readonly element: Element | null;
        /**
         * Returns a boolean whether you are allowed to enter fullscreen. If your page is inside an `<iframe>`
         * you will need to add a `allowfullscreen` attribute (+ `webkitallowfullscreen` and `mozallowfullscreen`).
         */
        readonly enabled: boolean;
        /**
         * Exposes the raw properties (prefixed if needed) used internally.
         */
        raw: RawEventNames;
        /**
         * Make an element fullscreen.
         *
         * If your page is inside an `<iframe>` you will need to add a `allowfullscreen` attribute
         * (+ `webkitallowfullscreen` and `mozallowfullscreen`).
         *
         * Keep in mind that the browser will only enter fullscreen when initiated by user events like click, touch, key.
         *
         * @param element Default is `<html>`. If called with another element than the currently active,
         * it will switch to that if it's a decendant.
         * @returns A promise that resolves after the element enters fullscreen.
         */
        request(element?: Element): Promise<void>;
        /**
         * Brings you out of fullscreen.
         * @returns A promise that resolves after the element exits fullscreen.
         */
        exit(): Promise<void>;
        /**
         * Requests fullscreen if not active, otherwise exits.
         * @returns A promise that resolves after the element enters/exits fullscreen.
         */
        toggle(elem?: Element): Promise<void>;
        /**
         * Add a listener for when the browser switches in and out of fullscreen or when there is an error.
         */
        on(name: EventName, handler: (event: Event) => void): void;
        /**
         * Remove a previously registered event listener.
         */
        off(name: EventName, handler: (event: Event) => void): void;
        /**
         * Alias for `.on('change', function)`.
         */
        onchange(handler: (event: Event) => void): void;
        /**
         * Alias for `.on('error', function)`.
         */
        onerror(handler: (event: Event) => void): void;
    }

    interface RawEventNames {
        requestFullscreen: string;
        exitFullscreen: string;
        fullscreenElement: string;
        fullscreenEnabled: string;
        fullscreenchange: string;
        fullscreenerror: string;
    }

    type EventName = 'change' | 'error';
}
