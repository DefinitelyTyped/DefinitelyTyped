// `AbortSignal` is defined here to prevent a dependency on a particular
// implementation like the `abort-controller` package, and to avoid requiring
// the `dom` library in `tsconfig.json`.

export interface AbortSignal {
    aborted: boolean;

    addEventListener: (type: "abort", listener: ((this: AbortSignal, event: any) => any), options?: boolean | {
        capture?: boolean,
        once?: boolean,
        passive?: boolean
    }) => void;

    removeEventListener: (type: "abort", listener: ((this: AbortSignal, event: any) => any), options?: boolean | {
        capture?: boolean
    }) => void;

    dispatchEvent: (event: any) => boolean;

    onabort?: null | ((this: AbortSignal, event: any) => void);
}
