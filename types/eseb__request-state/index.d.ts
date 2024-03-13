export type State = "FAILED" | "IN_PROGRESS" | "NOT_REQUESTED" | "SUCCEEDED";

export default class RequestState<T = never> {
    readonly state: State;

    readonly attachment?: T | undefined;

    constructor(state?: State, attachment?: T);

    /** Does request have "FAILED" state? */
    isFailed(): boolean;
    /** Does request have "IN_PROGESS" state? */
    isInProgress(): boolean;
    /** Does request have "NOT_REQUESTED" state? */
    isNotRequested(): boolean;
    /** Does request have "SUCCEEDED" state? */
    isSucceeded(): boolean;
    /** Does the request have "NOT_REQUESTED" or "FAILED" state? */
    shouldBeRequested(): boolean;
    /** Does the request have "NOT_REQUESTED" or "IN_PROGESS" state? */
    shouldShowAsLoading(): boolean;
    /** Create a new `RequestState` instance with the same state and the passed attachment. */
    withAttachment<A>(attachment: A): RequestState<A>;
}

export const FAILED: RequestState;
export const IN_PROGRESS: RequestState;
export const NOT_REQUESTED: RequestState;
export const SUCCEEDED: RequestState;
