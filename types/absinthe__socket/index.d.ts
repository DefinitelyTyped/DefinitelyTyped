import { Channel, Socket } from "phoenix";

export interface AbsintheSocket<T = {}> {
    channel: Channel;
    channelJoinCreated: boolean;
    notifiers: Array<Notifier<T>>;
    phoenixSocket: Socket;
}

export type GqlOperationType = "mutation" | "query" | "subscription";
export type RequestStatus = "canceled" | "canceling" | "pending" | "sent" | "sending";

export interface GqlRequest<Variables> {
    operation: string;
    variables?: Variables | undefined;
}

export interface Observer<Variables = {}, Result = {}> {
    onAbort?: ((error: Error) => any) | undefined;
    onCancel?: (() => any) | undefined;
    onError?: ((error: Error) => any) | undefined;
    onStart?: ((notifier: Notifier<Variables>) => any) | undefined;
    onResult?: ((result: Result) => any) | undefined;
}

export interface Notifier<Variables = {}, Result = {}> {
    activeObservers: ReadonlyArray<Observer<Variables, Result>>;
    canceledObservers: ReadonlyArray<Observer<Variables, Result>>;
    isActive: boolean;
    operationType: GqlOperationType;
    request: GqlRequest<Variables>;
    requestStatus: RequestStatus;
    subscriptionId?: string | undefined;
}
/** Cancels a notifier sending a Cancel event to all its observers and unsubscribing in case it holds a subscription request */
export function cancel(absintheSocket: AbsintheSocket, notifier: Notifier): AbsintheSocket;

/** Creates an Absinthe Socket using the given Phoenix Socket instance */
export function create(socket: Socket): AbsintheSocket;

/** Observes given notifier using the provided observer */
export function observe<Variables = object>(
    absintheSocket: AbsintheSocket,
    notifier: Notifier<Variables>,
    observer: Observer<Variables>,
): AbsintheSocket;

/** Sends given request and returns an object (notifier) to track its progress (see observe function) */
export function send<Variables = {}>(
    absintheSocket: AbsintheSocket,
    gqlRequest: GqlRequest<Variables>,
): Notifier<Variables>;

/** Creates an Observable that will follow the given notifier */
export function toObservable<Variables = {}>(
    absintheSocket: AbsintheSocket,
    notifier: Notifier<Variables>,
    observer?: {
        onError: (error: Error) => any;
        onStart: (notifier: Notifier<Variables>) => any;
        unsubscribe: (
            absintheSocket: AbsintheSocket,
            notifier?: Notifier<Variables>,
            observer?: Observer<Variables>,
        ) => void;
    },
): Observer<Variables>;

/** Detaches observer from notifier */
export function unobserve<Variables = {}>(
    absintheSocket: AbsintheSocket,
    notifier: Notifier<Variables>,
    observer: Observer<Variables>,
): AbsintheSocket;

/** Cancels notifier if there are no more observers apart from the one given, or detaches given observer from notifier otherwise */
export function unobserveOrCancel<Variables = {}>(
    absintheSocket: AbsintheSocket,
    notifier: Notifier<Variables>,
    observer: Observer<Variables>,
): AbsintheSocket;
