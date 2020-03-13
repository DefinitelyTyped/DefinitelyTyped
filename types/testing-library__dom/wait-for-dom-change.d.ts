/**
 * @deprecated encouraged testing implementation details because the user
 * doesn't care about when the DOM changes, they care about when something
 * appears or disappears from the page, so it's better to use `waitFor` with
 * a specific assertion or `waitForElementToBeRemoved` (if that's what you're
 * actually trying to do)
 * @old ```ts
 * await waitForDomChange()
 * ```
 * @new ```ts
 * await waitFor(() => {})
 * // remember, this is not recommended, provide a specific assertion
 * ```
 * @old ```ts
 * await waitForDomChange(mutationObserverOptions)
 * ```
 * @new ```ts
 * await waitFor(() => {}, mutationObserverOptions)
 * // if you provided mutationObserverOptions, you can provide those as a second argument
 * ```
 */
export function waitForDomChange(options?: {
    container?: HTMLElement;
    timeout?: number;
    mutationObserverOptions?: MutationObserverInit;
}): Promise<any>;
