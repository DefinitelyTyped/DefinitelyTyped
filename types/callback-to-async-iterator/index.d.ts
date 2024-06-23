export interface AsyncifyOptions<T, R> {
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    onClose?: ((arg: R) => void | T) | undefined;
    onError?: (() => Error) | undefined;
    buffering?: boolean | undefined;
}

export default function callbackToAsyncIterator<T, R = void>(
    listener: (callback: (message: T) => void) => Promise<R>,
    options?: AsyncifyOptions<T, R>,
): AsyncIterableIterator<T>;
