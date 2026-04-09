/**
 * Isolated Web App (IWA) interface.
 * Contains the set of blink extensions available to allowlisted IWAs in ChromeOS.
 */
export interface IsolatedWebApp {
    /**
     * Sets the shape of the current window to the union of the given `rects`.
     * Only areas of the window that are covered by at least one rectangle become
     * visible and can be interacted with.
     *
     * Passing an empty list of `rects` resets the window shape back to normal.
     *
     * @param rects An array of DOMRectReadOnly objects representing the new window shape.
     *              Pass an empty array to reset the shape.
     * @returns A promise that resolves when the operation is successful, and
     *          rejects if the shape couldn't be set (e.g., when `rects` are invalid, or
     *          the window could not be found).
     */
    setShape(rects: DOMRectReadOnly[]): Promise<void>;
}

export interface ChromeOS {
    readonly isolatedWebApp: IsolatedWebApp;
}

declare global {
    interface Window {
        readonly chromeos?: ChromeOS;
    }
}

export const chromeos: ChromeOS | undefined;
