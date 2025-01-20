import { MouseEvent, RefObject } from "react";

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics -- Backwards compatibility. Can be removed in a Major release.
declare function useDoubleClick<T = unknown>(options: {
    /** Dom node to watch for double clicks */
    ref: RefObject<T | null>;
    /** The amount of time (in milliseconds) to wait before differentiating a single from a double click. Defaults to 300. */
    latency?: number | undefined;
    /** A callback function for single click events */
    onSingleClick?: ((e: MouseEvent) => void) | undefined;
    /** A callback function for double click events */
    onDoubleClick?: ((e: MouseEvent) => void) | undefined;
}): void;

export = useDoubleClick;
