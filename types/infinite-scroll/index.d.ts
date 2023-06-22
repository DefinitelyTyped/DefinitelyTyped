// Type definitions for infinite-scroll 4.0
// Project: https://github.com/metafizzy/infinite-scroll
// Definitions by: Adam Thompson-Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

/// <reference types="jquery" />

import Isotope = require('isotope-layout');
import Masonry = require('masonry-layout');
import { Packery } from 'packery';

export as namespace InfiniteScroll;

declare namespace InfiniteScroll {
    interface Options {
        /** Log events and state changes to the console */
        debug?: boolean | undefined;

        // Loading
        path?: string | (() => string) | undefined;
        /**
         * Appends selected elements from loaded page to the container
         * @default false
         */
        append?: string | false | undefined;
        /**
         * Checks if Infinite Scroll has reached the last page.
         * This prevents Infinite Scroll from requesting a non-existent page.
         * `last` event will be triggered when last page is reached
         * @default true
         */
        checkLastPage?: boolean | undefined;
        /**
         * Sets the Response body interface method,
         * on the response returned from fetch request
         * @see {@link <https://developer.mozilla.org/en-US/docs/Web/API/Response#Body_Interface_Methods>}
         * @default 'text'
         */
        responseBody?: string | undefined;
        /**
         * When enabled parses the response body into a DOM.
         * Disable to load flat text
         * @default true
         */
        domParseResponse?: boolean | undefined;
        /**
         * Sets method, headers, CORS mode, and other options for the fetch request
         * @see {@link <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options>}
         */
        fetchOptions?: RequestInit | (() => RequestInit) | undefined;
        /**
         * Integrates Masonry, Isotope or Packery.
         * Infinite Scroll will add appended items to the layout
         */
        outlayer?: Masonry | Isotope | Packery | undefined;
        /**
         * Called on initialization.
         * Useful for initial binding events with vanilla JS
         */
        onInit?: (() => void) | undefined;

        // Scrolling
        /**
         * Sets the distance between the viewport to scroll area
         * for `scrollThreshold` event to be triggered
         * @default 400
         */
        scrollThreshold?: number | false | undefined;
        /**
         * Sets scroller to an element for overflow element scrolling.
         * Disabled by default, `window` is used to scroll.
         * We recommend disabling `history` with `elementScroll`.
         *
         * Set elementScroll to a selector string or element to use a different parent element.
         * This is useful if a `status` element or `button` is at the bottom of the scroll area
         */
        elementScroll?: string | Element | true | undefined;
        /**
         * Loads next page when scroll crosses over `scrollThreshold`.
         * Disable `loadOnScroll` if you do not want to load pages on scroll,
         * but still want the `scrollThreshold` event triggered
         * @default true
         */
        loadOnScroll?: boolean | undefined;

        // History
        /**
         * Changes page URL and browser history.
         * Default will use `history.replaceState()`
         * to change the current history entry.
         * Going back in the browser will return the user to previous site
         *
         * Set to `false` to disable
         *
         * Set to `'push'` to use `history.pushState()`
         * to create new history entries for each page change.
         * Going back in the browser will load the previous page
         *
         * @default 'replace'
         */
        history?: 'push' | 'replace' | false | undefined;
        /**
         * Updates the window title. Requires history enabled
         * @default true
         */
        historyTitle?: boolean | undefined;

        // UI
        /** Hides navigation element */
        hideNav?: string | Element | undefined;

        /**
         * Displays status elements indicating state of page loading. Within the selected element:
         *
         * - `.infinite-scroll-request` element will be displayed on request
         * - `.infinite-scroll-last` element will be displayed on last
         * - `.infinite-scroll-error` element will be displayed on error
         *
         * The selected status element will be hidden on append or load
         *
         * @example
         * ```html
         * <div class="page-load-status">
         *   <p class="infinite-scroll-request">Loading...</p>
         *   <p class="infinite-scroll-last">End of content</p>
         *   <p class="infinite-scroll-error">No more pages to load</p>
         * </div>
         * ```
         * ```js
         * status: '.page-load-status'
         * ```
         */
        status?: string | Element | undefined;

        /**
         * Enables a button to load pages on click.
         * The button state is changed by Infinite Scroll events:
         *
         * - Disabled while loading on request
         * - Re-enabled after page is loaded on load
         * - Hidden when no more pages to load on error and last
         */
        button?: string | Element | undefined;
    }

    type Methods = 'loadNextPage' | 'appendItems' | 'getPath' | 'getAbsolutePath' | 'option' | 'destroy';

    interface EventsMap {
        scrollThreshold(): void;
        request(path: string, fetchPromise: Promise<Response>): void;
        load(body: string | object, path: string, response: Response): void;
        append(body: unknown, path: string, items: NodeList, response: Response): void;
        error(error: Error | string, path: string, response: Response): void;
        last(body: string | object, path: string): void;
        history(title: string, path: string): void;
    }
}

declare class InfiniteScroll {
    constructor(element: string | Element, options: InfiniteScroll.Options);

    /**
     * The number of the current loaded page.
     * `pageIndex` increments by 1 on each `load`
     */
    pageIndex: number;
    /**
     * The number of pages loaded.
     * `loadCount` increments by 1 on each `load`
     */
    loadCount: number;

    /** Load the next page */
    loadNextPage(): Promise<{
        /** Reponse returned from `fetch` */
        response: Response;
        /** The operative content loaded from the fetch request */
        body: string | object;
        /** Appended elements if `append` is `true` in config */
        items?: NodeList | undefined;
    }>;
    /**
     * Append items to the container.
     * `appendItems` will load `<script>` within item elements,
     * which is useful for loading embed scripts
     * @param items jQuery object, NodeList, or Array of Elements
     */
    appendItems(items: JQuery | NodeList | ArrayLike<Element>): void;
    /** Get the relative URL path for the next page */
    getPath(): string;
    /** Get the absolute URL path for the next page */
    getAbsolutePath(): string;
    /** Set options after initialization */
    option(options: InfiniteScroll.Options): void;
    /** Remove Infinite Scroll functionality completely */
    destroy(): void;

    on<E extends keyof InfiniteScroll.EventsMap & string>(event: E, handler: InfiniteScroll.EventsMap[E]): void;
    once: this['on'];

    /**
     * Get the Infinite Scroll instance via its element.
     * This is useful for getting the Infinite Scroll instance in JavaScript
     * after it has been initalized in HTML
     */
    static data(element: string | Element): InfiniteScroll;
}

declare global {
    interface JQuery<TElement> {
        /** Initialize Infinite Scroll on an element */
        infiniteScroll(options: InfiniteScroll.Options): JQuery<TElement>;

        /** Call an Infinite Scroll function on an element */
        infiniteScroll<M extends InfiniteScroll.Methods>(
            method: M,
            ...params: Parameters<InfiniteScroll[M]>
        ): JQuery<TElement>;

        /**
         * Get the Infinite Scroll instance from a jQuery object.
         * Infinite Scroll instances are useful to access Infinite Scroll properties
         */
        data(key: 'infiniteScroll'): InfiniteScroll;

        on<E extends keyof InfiniteScroll.EventsMap & string>(
            event: `${E}.infiniteScroll`,
            handler: (event: Event, ...params: Parameters<InfiniteScroll.EventsMap[E]>) => void,
        ): void;
    }
}

export = InfiniteScroll;
