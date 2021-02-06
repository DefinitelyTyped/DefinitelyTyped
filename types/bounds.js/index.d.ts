// Type definitions for bounds.js 1.0
// Project: https://github.com/ChrisCavs/bounds.js#readme
// Definitions by: Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace bounds;
/**
 * Asynchronous boundary detection. 1KB, no dependencies.
 */
declare function bounds(options?: bounds.Options): bounds.Boundary;

declare namespace bounds {
    type Margins = Partial<Record<'top' | 'right' | 'bottom' | 'left', number>>;

    interface Action {
        readonly el: Element;
        readonly inside: boolean;
        readonly outside: boolean;
        readonly ratio: number;
    }

    type WatchCallback = (ratio: number) => void;

    /**
     * These properties can be mutated
     */
    interface WatchOptions {
        onEnter: WatchCallback;
        onLeave: WatchCallback;
    }

    interface Options {
        /**
         * The root is the element for which we are creating the boundary.
         * Events will be emitted whenever a watched element enters/exits the root element.
         * @default window
         */
        root?: Element | null;

        /**
         * Accepts a mapping, where values are stated in pixels.
         * You can specify a `top`, `right`, `bottom`, or `left` margin to add to the root's bounding box.
         * This affects detection, NOT style on the root element.
         * @default { top: 0, right: 0, bottom: 0, left: 0 }
         */
        margins?: Margins;

        /**
         * Accepts a number between 0.0 and 1.0.
         * The ratio of intersecting area required before a callback is made.
         * A threshold of 0.0 means that if even a single pixel of a watched element enters the boundary, a callback is made.
         * A threshold of 1.0 means that every pixel of a watched element must be inside the boundary before a callback is made.
         * @default 0.0
         */
        threshold?: number;

        /**
         * The provided callback will be executed whenever any watched element enters or exits the boundary,
         * once all individual callbacks have executed.
         * This is a useful option if you'd like some action to take place no matter what element enters/exits your boundary.
         * @default () => {}
         */
        onEmit?: (actions: Action[]) => void;
    }

    class Boundary {
        /**
         * The static `checkCompatibility` method will throw an error if `Bounds.js` is not supported in the user's browser.
         */
        static checkCompatibility(): void;

        /**
         * Calling watch will instruct your boundary to watch the desired element.
         * When the specified element enters your boundary, the `onEnter` callback will be executed.
         * When the specified element leaves your boundary, the `onLeave` callback will be executed.
         * Each callback is passed 1 argument, `ratio`, which represents the ratio of the element's bounding box that is inside the boundary.
         */
        watch(el: Element | null, onEnter?: WatchCallback, onLeave?: WatchCallback): WatchOptions;

        /**
         * The `unWatch` method will instruct your boundary to stop watching a certain element.
         * Callbacks for that element will no longer be executed.
         */
        unWatch(el: Element | null): this;

        /**
         * The check method will return a `boolean`, indicating if the provided `element` is currently inside the boundary.
         * The check is based on history, which starts once you watch the element.
         * If the element is not currently being watched, check will return undefined.
         */
        check(el: Element | null): boolean;

        /**
         * The `clear` method will effectively `unWatch` all elements for the boundary, destroy all history for the elements the boundary was watching,
         * and ensure that no events are emitted by the boundary going forward.
         */
        clear(): void;
    }
}

export = bounds;
