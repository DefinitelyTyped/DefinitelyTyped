import {
    BrowserPermissions,
} from './';
import { Browser } from './browser';
import { Page } from './page';

/**
 * `BrowserContext` provides a way to operate multiple independent sessions, with
 * separate pages, cache, and cookies.
 */
export class BrowserContext {
    /**
     * Returns the `Browser` instance that this `BrowserContext` belongs to.
     */
    browser(): Browser;

    /**
     * Adds cookies into the `BrowserContext`.
     */
    addCookies(cookies: Array<{
        name: string,

        value: string,

        /**
         * either url or domain / path are required.
         */
        url?: string,

        /**
         * either url or domain / path are required.
         */
        domain?: string,

        /**
         * either url or domain / path are required.
         */
        path?: string,

        /**
         * Unix time in seconds.
         */
        expires?: number,

        httpOnly?: boolean,

        secure?: boolean,

        sameSite?: 'Strict' | 'Lax' | 'None',
    }>): void;

    /**
     * Clear the `BrowserContext`'s cookies.
     */
    clearCookies(): void;

    /**
     * Clears all permission overrides for the `BrowserContext`.
     */
    clearPermissions(): void;

    /**
     * Close the `BrowserContext` and all its `Page`s.
     */
    close(): void;

    /**
     * Grants specified permissions to the `BrowserContext`.
     */
    grantPermissions(
        /**
         * A string array of permissions to grant.
         */
        permissions: BrowserPermissions[],
        options?: {
            /**
             * The origin to grant permissions to, e.g. 'https://test.k6.com'.
             */
            origin: string,
        },
    ): void;

    /**
     * Creates a new `Page` in the `BrowserContext`.
     */
    newPage(): Page;

    /**
     * Returns a list of `Page`s that belongs to the `BrowserContext`.
     */
    pages(): Page[];

    /**
     * Sets the default navigation timeout in milliseconds.
     */
    setDefaultNavigationTimeout(
        /**
         * The timeout in milliseconds.
         */
        timeout: number,
    ): void;

    /**
     * Sets the default maximum timeout for all methods accepting a timeout
     * option in milliseconds.
     */
    setDefaultTimeout(
        /**
         * The timeout in milliseconds.
         */
        timeout: number,
    ): void;

    /**
     * Sets the `BrowserContext`'s geolocation.
     */
    setGeolocation(
        geolocation?: {
            /**
             * latitude should be between -90 and 90.
             */
            latitude: number;

            /**
             * longitude should be between -180 and 180.
             */
            longitude: number;

            /**
             * accuracy should only be a non-negative number. Defaults to 0.
             */
            accuracy: number;
        },
    ): void;

    /**
     * Toggles the `BrowserContext`'s connectivity on/off.
     */
    setOffline(
        /**
         * Whether to emulate the BrowserContext being disconnected (`true`)
         * or connected (`false`). Defaults to `false`.
         */
        offline: boolean,
    ): void;

    /**
     * Waits for the event to fire and passes its value into the predicate
     * function.
     */
    waitForEvent(
        /**
         * Name of event to wait for.
         *
         * NOTE: Currently this argument is disregarded, and waitForEvent will
         * always wait for 'close' or 'page' events.
         */
        event: string,

        /**
         * The `Page` or null event data will be passed to it and it must
         * return true to continue.
         */
        optionsOrPredicate: {
            /**
             * Function that will be called when the 'Page' event is emitted.
             * The event data will be passed to it and it must return true
             * to continue.
             *
             * If `Page` is passed to predicate, this signals that a new page
             * has been created.
             * If null is passed to predicate, this signals that the page is
             * closing.
             */
            predicate: (page: Page | null) => boolean,

            /**
             * Maximum time to wait in milliseconds. Pass 0 to disable timeout.
             * Defaults to 30000 milliseconds.
             */
            timeout?: number,
        },
    ): Page | null;
}
