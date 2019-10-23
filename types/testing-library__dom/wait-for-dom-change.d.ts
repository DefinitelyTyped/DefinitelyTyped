export function waitForDomChange(options?: {
    container?: HTMLElement;
    timeout?: number;
    mutationObserverOptions?: MutationObserverInit;
}): Promise<any>;
