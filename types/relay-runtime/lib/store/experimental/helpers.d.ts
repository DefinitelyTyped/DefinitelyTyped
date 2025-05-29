export type FragmentState<T> =
    | { state: "ok"; value: T }
    | { state: "error"; error: Error }
    | { state: "loading" };
