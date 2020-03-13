/**
 * @deprecated use `waitFor`
 * @old ```ts
 * await wait()
 * ```
 * @new ```ts
 * await waitFor(() => {})
 * ```
 */
export function wait(
    callback?: () => void,
    options?: {
        timeout?: number;
        interval?: number;
    },
): Promise<void>;
