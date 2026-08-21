/**
 * Opens a window and initiates a cross-domain request. Call this from the
 * "untrusted" or "client" site.
 *
 * @param options - Options for `open`
 * @param responseCallback - Called when the request completes with a response
 * or an error
 */
export function open(
    options: {
        /**
         * URL of the "trusted" window
         */
        url: string;
        /**
         * URL of the `relay.html` iframe (used for Internet Explorer support)
         */
        relay_url: string;
        /**
         * Target name passed to `window.open`
         */
        window_name?: string | undefined;
        /**
         * Comma-separated features passed to `window.open`
         */
        window_features?: string | undefined;
        /**
         * Application-defined parameters for the request
         */
        params?: unknown;
    },
    responseCallback: (err: string | null, response?: unknown) => void,
): {
    /**
     * Closes the window.
     */
    close: () => void;
    /**
     * Tries to move the focus to the window.
     */
    focus: () => void;
};

/**
 * Listens for a request. Call this from the "trusted" site providing the
 * window.
 *
 * @param requestCallback - Called to initiate the request
 */
export function onOpen(
    requestCallback: (
        origin: string,
        params: unknown,
        sendResponse: (response: unknown) => void,
    ) => void,
): {
    /**
     * Detaches the channel without sending a response yet. Call this before
     * navigating to another page in a multi-page dialog.
     */
    detach: () => void;
};
