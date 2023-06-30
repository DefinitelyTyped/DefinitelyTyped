import {
    NewBrowserContextOptions,
} from './';
import { BrowserContext } from './browser_context';
import { Page } from './page';

/**
 * The `Browser` class is the entry point for all your tests, it interacts
 * with the actual web browser via Chrome DevTools Protocol (CDP).
 */
export class Browser {
    /**
     * Returns the current `BrowserContext`. There is a 1-to-1 mapping between
     * `Browser` and `BrowserContext`. If no `BrowserContext` has been
     * initialized, it will return null.
     */
    context(): BrowserContext;

    /**
     * Indicates whether the CDP connection to the browser process is active or
     * not.
     */
    isConnected(): boolean;

    /**
     * Creates and returns a new `BrowserContext` if one hasn't already been
     * initialized for the `Browser`. If one has already been initialized an
     * error is thrown.
     *
     * There is a 1-to-1 mapping between `Browser` and `BrowserContext`. Due to
     * this restriction, if one already exists, it must be closed first before
     * creating a new one.
     * @param options
     */
    newContext(
        options?: NewBrowserContextOptions,
    ): BrowserContext;

    /**
     * Creates and returns a new `Page` in a new `BrowserContext` if a
     * `BrowserContext` hasn't already been initialized for the `Browser`. If a
     * `BrowserContext` has already been initialized an error is thrown.
     *
     * There is a 1-to-1 mapping between `Browser` and `BrowserContext`. Due to
     * this restriction, if one already exists, it must be closed first before
     * creating a new one.
     * @param options
     */
    newPage(
        options?: NewBrowserContextOptions,
    ): Page;

    /**
     * Returns the browser application's version.
     */
    version(): string;
}
