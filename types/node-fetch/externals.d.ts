export type Event = any;
export interface AbortSignal {
    aborted: boolean;

    addEventListener: (type: "abort", listener: ((this: AbortSignal, event: Event) => any), options?: boolean | {
        capture?: boolean,
        once?: boolean,
        passive?: boolean
    }) => void;

    removeEventListener: (type: "abort", listener: ((this: AbortSignal, event: Event) => any), options?: boolean | {
        capture?: boolean
    }) => void;

    dispatchEvent: (event: Event) => boolean;

    onabort?: null | ((this: AbortSignal, event: Event) => void);
}
