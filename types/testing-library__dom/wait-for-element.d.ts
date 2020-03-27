export interface WaitForElementOptions {
    container?: HTMLElement;
    timeout?: number;
    mutationObserverOptions?: MutationObserverInit;
}

export function waitForElement<T>(callback: () => T, options?: WaitForElementOptions): Promise<T>;
