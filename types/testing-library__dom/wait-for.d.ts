export function waitFor<T>(
    callback: () => T,
    options?: {
        container?: HTMLElement;
        timeout?: number;
        interval?: number;
        mutationObserverOptions?: MutationObserverInit;
    },
): Promise<T>;
