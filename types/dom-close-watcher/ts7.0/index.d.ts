declare class CloseWatcher extends EventTarget {
    constructor(options?: CloseWatcherOptions);

    oncancel: ((this: CloseWatcher, ev: Event) => any) | null;
    onclose: ((this: CloseWatcher, ev: Event) => any) | null;

    requestClose(): void;
    close(): void;
    destroy(): void;
}

interface CloseWatcherOptions {
    signal?: AbortSignal;
}
