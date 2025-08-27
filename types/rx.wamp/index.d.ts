import autobahn = require("autobahn");
import * as Rx from "rx";

interface IWampEvent {
    args?: any[] | undefined;
    kwargs?: any;
    details?: autobahn.IEvent | undefined;
}

interface IObservableWampStatic {
    fromConnection(
        options: autobahn.IConnectionOptions,
        keepReconnecting?: boolean,
        factory?: (options?: autobahn.IConnectionOptions) => autobahn.Connection,
    ): Rx.Observable<autobahn.Session>;
    fromPubSubPattern(
        session: autobahn.Session,
        topic: string,
        options: autobahn.ISubscribeOptions,
        openObserver?: Rx.IObserver<autobahn.ISubscription>,
    ): IPubSubSubject;

    subscriber(sessionOrObservable: autobahn.Session | Rx.Observable<any>): Subscriber;
    subscribeAsObservable(
        sessionOrObservable: autobahn.Session | Rx.Observable<autobahn.Session>,
        topic: string,
        options?: autobahn.ISubscribeOptions,
        openObserver?: Rx.IObserver<autobahn.ISubscription>,
    ): Rx.Observable<IWampEvent>;
    publishAsObservable(
        session: autobahn.Session,
        topic: string,
        args?: any[],
        kwargs?: any,
        options?: autobahn.IPublishOptions,
    ): Rx.Observable<autobahn.IPublication>;
    registerAsObservable(
        sessionOrObservable: autobahn.Session | Rx.Observable<autobahn.Session>,
        procedure: string,
        endpoint: autobahn.RegisterEndpoint,
        options: autobahn.IRegisterOptions,
    ): Rx.Observable<autobahn.IRegistration>;
    callAsObservable<TResult>(
        session: autobahn.Session,
        procedure: string,
        options?: autobahn.ICallOptions,
    ): (args?: any[], kwargs?: any) => Rx.Observable<TResult>;
}

declare class Subscriber {
    to(
        topic: string,
        options: autobahn.ISubscribeOptions,
        observerOrOnNext?: Rx.IObserver<IWampEvent> | ((value: IWampEvent) => void),
        onError?: (exception: any) => void,
        onCompleted?: () => void,
    ): Subscriber;

    dispose(): void;
}

interface IPubSubSubject extends Rx.Observable<IWampEvent>, Rx.Observer<IWampEvent> {
    observable: Rx.Observable<IWampEvent>;
    observer: Rx.Observer<IWampEvent>;
    errors: Rx.IObservable<autobahn.IError>;
    opened: Rx.IObservable<autobahn.ISubscription>;
}

export as namespace RxWamp;

declare module "rx" {
    // Patch ObservableStatic to contain observableWamp methods.
    interface ObservableStatic extends IObservableWampStatic {}
}
