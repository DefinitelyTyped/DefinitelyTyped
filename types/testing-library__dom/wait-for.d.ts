/**
 * @param callback recommend avoiding empty callbacks; use an assertion inside.
 * @example `waitFor(() => { assertion here })`
 */
export function waitFor<T>(
    callback: () => T,
    options?: {
        container?: HTMLElement;
        timeout?: number;
        interval?: number;
        mutationObserverOptions?: MutationObserverInit;
    },
): Promise<T>;
