interface RiotRoute {
    /**
     * Execute the given callback when the URL changes.
     */
    (callback: (...params: string[]) => void): void;

    /**
     * Execute the given callback when the URL changes and it match the filter.
     * @since v2.3
     */
    (filter: string, callback: (...params: string[]) => void): void;

    /**
     * Changes the browser URL and notifies all the listeners assigned with `route(callback)`.
     */
    (to: string, title?: string, shouldReplace?: boolean): void;

    /**
     * Returns a new routing context.
     * @since v2.3
     */
    create(): RiotSubRoute;

    /**
     * Start listening the url changes
     * and also exec routing on the current url.
     */
    start(autoStart?: boolean): void;

    /**
     * Stop all the routings. It'll removes the listeners and clear also the callbacks.
     */
    stop(): void;

    /**
     * Study the current browser path "in place" and emit routing without waiting for it to change.
     */
    exec(): void;

    /**
     * This is an utility function to extract the query from the url.
     * @since v2.3
     */
    query(): { [name: string]: string; };

    /**
     * Change the base path.
     *
     * @param arg - a new base or '#' or '#!'
     */
    base(arg?: string|RegExp): void;

    /**
     * Changes the default parser to a custom one.
     * @param parser
     * @param secondParser
     */
    parser(
        parser: (path: string) => any[],
        secondParser?: (path: string, filter: string) => string[] | undefined
    ): void;
}

interface RiotSubRoute extends RiotRoute {
    /**
     * Stop only subRoute's routings. It'll removes the listeners and clear also the callbacks.
     *
     * @since v2.3
     */
    stop(): void;
}

declare const route: RiotRoute;

export default route;
