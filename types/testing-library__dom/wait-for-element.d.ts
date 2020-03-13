export interface WaitForElementOptions {
    container?: HTMLElement;
    timeout?: number;
    mutationObserverOptions?: MutationObserverInit;
}

/**
 * @deprecated Should normally be accomplished with one of the [find* queries](https://testing-library.com/docs/dom-testing-library/api-queries#findby).
 * @old ```ts
 * const element = await waitForElement(() => screen.getByText(/loading/i))
 * ```
 * @new ```ts
 * const element = await screen.findByText(/loading/i)
 * ```
 * @old ```ts
 * const element = await waitForElement(() => container.querySelector('.loading'))
 * ```
 * @new ```ts
 * const element = await waitFor(() => container.querySelector('.loading'))
 * ```
 */
export function waitForElement<T>(callback: () => T, options?: WaitForElementOptions): Promise<T>;
