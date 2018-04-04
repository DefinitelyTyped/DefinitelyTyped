// Type definitions for AutobahnJS v0.9.7
// Project: http://autobahn.ws/js/
// Definitions by: Elad Zelingher <https://github.com/darkl>, Andy Hawkins <https://github.com/a904guy/,http://a904guy.com/,http://www.bmbsqd.com>, Wladimir Totino <https://github.com/valepu>, Mathias Teier <https://github.com/glenroy37/,http://kagent.at>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="when" />

export = autobahn;

declare namespace autobahn {

    export class Session {
        id: number;
        realm: string;
        isOpen: boolean;
        features: any;
        caller_disclose_me: boolean;
        publisher_disclose_me: boolean;
        subscriptions: ISubscription[][];
        registrations: IRegistration[];

        constructor(transport: ITransport, defer: DeferFactory, challenge: OnChallengeHandler);

        join(realm: string, authmethods: string[], authid: string): void;

        leave(reason: string, message: string): void;

        call<TResult>(procedure: string, args?: any[], kwargs?: any, options?: ICallOptions): When.Promise<TResult>;

        publish(topic: string, args?: any[], kwargs?: any, options?: IPublishOptions): When.Promise<IPublication>;

        subscribe(topic: string, handler: SubscribeHandler, options?: ISubscribeOptions): When.Promise<ISubscription>;

        register(procedure: string, endpoint: RegisterEndpoint, options?: IRegisterOptions): When.Promise<IRegistration>;

        unsubscribe(subscription: ISubscription): When.Promise<any>;

        unregister(registration: IRegistration): When.Promise<any>;

        prefix(prefix: string, uri: string): void;

        resolve(curie: string): string;

        onjoin: (roleFeatures: any) => void;
        onleave: (reason: string, details: any) => void;
    }

    interface IInvocation {
        caller?: number;
        progress?: (args : any[], kwargs : any) => void;
        procedure: string;
    }

    class Invocation implements IInvocation {
        constructor(caller?: number, progress?: boolean, procedure?: string);

        procedure: string;
    }

    interface IEvent {
        publication: number;
        publisher?: number;
        topic: string;
    }

    class Event implements IEvent {
        constructor(publication?: number, publisher?: string, topic?: string);

        publication: number;
        topic: string;
    }

    interface IResult {
        args: any[];
        kwargs: any;
    }

    class Result implements IResult {
        constructor(args?: any[], kwargs?: any);

        args: any[];
        kwargs: any;
    }

    interface IError {
        error: string;
        args: any[];
        kwargs: any;
    }

    class Error implements IError {
        constructor(error?: string, args?: any[], kwargs?: any);

        error: string;
        args: any[];
        kwargs: any;
    }

    type SubscribeHandler = (args?: any[], kwargs?: any, details?: IEvent) => void;

    interface ISubscription {
        topic: string;
        handler: SubscribeHandler;
        options: ISubscribeOptions;
        session: Session;
        id: number;
        active: boolean;
        unsubscribe(): When.Promise<any>;
    }

    class Subscription implements ISubscription {
        constructor(topic? : string, handler?: SubscribeHandler, options?: ISubscribeOptions, session?: Session, id?: number);

        handler: SubscribeHandler;

        unsubscribe(): When.Promise<any>;

        topic: string;
        options: ISubscribeOptions;
        session: Session;
        id: number;
        active: boolean;
    }

    type RegisterEndpoint = (args?: any[], kwargs?: any, details?: IInvocation) => void;

    interface IRegistration {
        procedure: string;
        endpoint: RegisterEndpoint;
        options: IRegisterOptions;
        session: Session;
        id: number;
        active: boolean;
        unregister(): When.Promise<any>;
    }

    class Registration implements IRegistration {
        constructor(procedure?: string, endpoint?: RegisterEndpoint, options?: IRegisterOptions, session?: Session, id?: number);

        endpoint: RegisterEndpoint;

        unregister(): When.Promise<any>;

        procedure: string;
        options: IRegisterOptions;
        session: Session;
        id: number;
        active: boolean;
    }

    interface IPublication {
        id: number;
    }

    class Publication implements IPublication {
        constructor(id: number);

        id: number;
    }

    interface ICallOptions {
        timeout?: number;
        receive_progress?: boolean;
        disclose_me?: boolean;
    }

    interface IPublishOptions {
        acknowledge?: boolean;
        exclude?: number[];
        exclude_authid?: string[];
        exclude_authrole?: string[];
        eligible?: number[];
        eligible_authid?: string[];
        eligible_authrole?: string[];
        retain?: boolean;
        disclose_me?: boolean;
        exclude_me?: boolean;
    }

    interface ISubscribeOptions {
        match?: string;
        get_retained?: boolean;
    }

    interface IRegisterOptions {
        disclose_caller?: boolean;
        invoke?: 'single' | 'roundrobin' | 'random' | 'first' | 'last';
    }

    export class Connection {
        constructor(options?: IConnectionOptions);

        open(): void;

        close(reason?: string, message?: string): void;

        onopen: (session: Session, details: any) => void;
        onclose: (reason: string, details: any) => boolean;
    }

    interface ITransportDefinition {
        url?: string;
        protocols?: string[];
        type: string;
    }

    type DeferFactory = () => When.Promise<any>;

    type OnChallengeHandler = (session: Session, method: string, extra: any) => string;

    interface IConnectionOptions {
        use_es6_promises?: boolean;
        // use explicit deferred factory, e.g. jQuery.Deferred or Q.defer
        use_deferred?: DeferFactory;
        transports?: ITransportDefinition[];
        retry_if_unreachable?: boolean;
        max_retries?: number;
        initial_retry_delay?: number;
        max_retry_delay?: number;
        retry_delay_growth?: number;
        retry_delay_jitter?: number;
        url?: string;
        protocols?: string[];
        onchallenge?: OnChallengeHandler;
        realm?: string;
        authmethods?: string[];
        authid?: string;
    }

    interface ICloseEventDetails {
        wasClean: boolean;
        reason: string;
        code: number;
    }

    interface ITransport {
        onopen: () => void;
        onmessage: (message: any[]) => void;
        onclose: (details: ICloseEventDetails) => void;

        send(message: any[]): void;
        close(errorCode: number, reason?: string): void;
    }

    interface ITransportFactory {
        // constructor(options: any);
        type: string;
        create(): ITransport;
    }

    interface ITransports {
        register(name: string, factory: any): void;
        isRegistered(name: string): boolean;
        get(name: string): any;
        list(): string[];
    }

    interface ILog {
        debug(...args: any[]): void;
    }

    interface IUtil {
        assert(condition: boolean, message: string): void;
    }

    interface IAuthCra {
        derive_key(secret: string, salt: string, iterations: number, keylen: number): string;
        sign(key: string, challenge: string): string;
    }

    var util: IUtil;
    var log: ILog;
    var transports: ITransports;
    var auth_cra: IAuthCra;
}
