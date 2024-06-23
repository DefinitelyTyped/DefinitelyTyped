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

        join(realm: string, authmethods: string[], authid: string, authextra?: object): void;

        leave(reason: string, message: string): void;

        call<TResult, TArgs = any[], TKWArgs = any, TName = string>(
            procedure: TName,
            args?: TArgs,
            kwargs?: TKWArgs,
            options?: ICallOptions,
        ): When.Promise<TResult>;

        publish<TArgs = any[], TKWArgs = any, TName = string>(
            topic: TName,
            args?: TArgs,
            kwargs?: TKWArgs,
            options?: IPublishOptions,
        ): When.Promise<IPublication>;

        subscribe<TArgs = any[], TKWArgs = any, TName = string>(
            topic: TName,
            handler: SubscribeHandler<TArgs, TKWArgs, TName>,
            options?: ISubscribeOptions,
        ): When.Promise<ISubscription<TArgs, TKWArgs, TName>>;

        register<TResult = any, TArgs = any[], TKWArgs = any, TName = string>(
            procedure: TName,
            endpoint: RegisterEndpoint<TResult, TArgs, TKWArgs>,
            options?: IRegisterOptions,
        ): When.Promise<IRegistration<TResult, TArgs, TKWArgs, TName>>;

        unsubscribe<TArgs, TKWArgs>(subscription: ISubscription<TArgs, TKWArgs>): When.Promise<any>;

        unregister<TResult, TArgs, TKWArgs, TName>(
            registration: IRegistration<TResult, TArgs, TKWArgs, TName>,
        ): When.Promise<any>;

        prefix(prefix: string, uri: string): void;

        resolve(curie: string): string;

        onjoin: (roleFeatures: any) => void;
        onleave: (reason: string, details: any) => void;
    }

    interface IInvocation {
        caller?: number | undefined;
        progress?: ((args: any[], kwargs: any) => void) | undefined;
        procedure: string;
    }

    class Invocation implements IInvocation {
        constructor(caller?: number, progress?: boolean, procedure?: string);

        procedure: string;
    }

    interface IEvent<TName = string> {
        publication: number;
        publisher?: number | undefined;
        topic: TName;
    }

    class Event<TName = string> implements IEvent<TName> {
        constructor(publication?: number, publisher?: string, topic?: TName);

        publication: number;
        topic: TName;
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

    type SubscribeHandler<TArgs = any[], TKWArgs = any, TName = string> = (
        args?: TArgs,
        kwargs?: TKWArgs,
        details?: IEvent<TName>,
    ) => void;

    interface ISubscription<TArgs = any[], TKWArgs = any, TName = string> {
        topic: TName;
        handler: SubscribeHandler<TArgs, TKWArgs>;
        options: ISubscribeOptions;
        session: Session;
        id: number;
        active: boolean;
        unsubscribe(): When.Promise<any>;
    }

    class Subscription<TArgs = any[], TKWArgs = any, TName = string> implements ISubscription<TArgs, TKWArgs, TName> {
        constructor(
            topic?: TName,
            handler?: SubscribeHandler<TArgs, TKWArgs>,
            options?: ISubscribeOptions,
            session?: Session,
            id?: number,
        );

        handler: SubscribeHandler<TArgs, TKWArgs>;

        unsubscribe(): When.Promise<any>;

        topic: TName;
        options: ISubscribeOptions;
        session: Session;
        id: number;
        active: boolean;
    }

    type RegisterEndpoint<TResult = any, TArgs = any[], TKWArgs = any> = (
        args?: TArgs,
        kwargs?: TKWArgs,
        details?: IInvocation,
    ) => TResult;

    interface IRegistration<TResult = any, TArgs = any[], TKWArgs = any, TName = string> {
        procedure: TName;
        endpoint: RegisterEndpoint<TResult, TArgs, TKWArgs>;
        options: IRegisterOptions;
        session: Session;
        id: number;
        active: boolean;
        unregister(): When.Promise<any>;
    }

    class Registration<TResult = any, TArgs = any[], TKWArgs = any, TName = string>
        implements IRegistration<TResult, TArgs, TKWArgs, TName>
    {
        constructor(
            procedure?: TName,
            endpoint?: RegisterEndpoint<TResult, TArgs, TKWArgs>,
            options?: IRegisterOptions,
            session?: Session,
            id?: number,
        );

        endpoint: RegisterEndpoint<TResult, TArgs, TKWArgs>;

        unregister(): When.Promise<any>;

        procedure: TName;
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
        timeout?: number | undefined;
        receive_progress?: boolean | undefined;
        disclose_me?: boolean | undefined;
    }

    interface IPublishOptions {
        acknowledge?: boolean | undefined;
        exclude?: number[] | undefined;
        exclude_authid?: string[] | undefined;
        exclude_authrole?: string[] | undefined;
        eligible?: number[] | undefined;
        eligible_authid?: string[] | undefined;
        eligible_authrole?: string[] | undefined;
        retain?: boolean | undefined;
        disclose_me?: boolean | undefined;
        exclude_me?: boolean | undefined;
    }

    interface ISubscribeOptions {
        match?: string | undefined;
        get_retained?: boolean | undefined;
    }

    interface IRegisterOptions {
        disclose_caller?: boolean | undefined;
        invoke?: "single" | "roundrobin" | "random" | "first" | "last" | undefined;
    }

    export class Connection {
        constructor(options?: IConnectionOptions);

        readonly isConnected: boolean;
        readonly isOpen: boolean;
        readonly isRetrying: boolean;
        readonly transport: ITransport;
        readonly session?: Session | undefined;
        readonly defer?: DeferFactory | undefined;

        open(): void;

        close(reason?: string, message?: string): void;

        onopen: (session: Session, details: any) => void;
        onclose: (reason: string, details: any) => boolean;
    }

    interface ITransportDefinition {
        url?: string | undefined;
        protocols?: string[] | undefined;
        type: TransportType;
    }

    interface ITlsConfiguration {
        ca: string;
        cert: string;
        key: string;
    }

    type DeferFactory = () => When.Promise<any>;

    type OnChallengeHandler = (
        session: Session,
        method: string,
        extra: any,
    ) => string | [string, any] | When.Promise<string | [string, any]>;
    type OnInternalErrorHandler = (error: object | Error, error_message?: string) => void;
    type OnUserErrorHandler = (error: object | Error, error_message?: string) => void;

    interface IConnectionOptions {
        use_es6_promises?: boolean | undefined;
        // use explicit deferred factory, e.g. jQuery.Deferred or Q.defer
        use_deferred?: DeferFactory | undefined;
        transports?: ITransportDefinition[] | undefined;
        retry_if_unreachable?: boolean | undefined;
        max_retries?: number | undefined;
        initial_retry_delay?: number | undefined;
        max_retry_delay?: number | undefined;
        retry_delay_growth?: number | undefined;
        retry_delay_jitter?: number | undefined;
        url?: string | undefined;
        protocols?: string[] | undefined;
        onchallenge?: OnChallengeHandler | undefined;
        on_internal_error?: OnInternalErrorHandler | undefined;
        on_user_error?: OnUserErrorHandler | undefined;
        realm: string;
        authmethods?: string[] | undefined;
        authid?: string | undefined;
        authextra?: object | undefined;
        // Below options only work when the transport is websocket and the underlying platform is NodeJS/Electron.
        autoping_interval?: number | undefined;
        autoping_timeout?: number | undefined;
        autoping_size?: number | undefined;
        tlsConfiguration?: ITlsConfiguration | undefined;
    }

    interface ICloseEventDetails {
        wasClean: boolean;
        reason: string;
        code: number;
    }

    type DefaultTransportType = "websocket" | "longpoll" | "rawsocket";

    // Workaround to get intellisense on type unions of 'literals' | string.
    // See https://github.com/Microsoft/TypeScript/issues/29729
    type CustomTransportType = string & { zz_IGNORE_ME?: never | undefined };
    type TransportType = DefaultTransportType | CustomTransportType;

    interface ITransportInfo {
        url?: string | undefined;
        protocol?: string | undefined;
        type: TransportType;
    }

    interface ITransport {
        onopen: () => void;
        onmessage: (message: any[]) => void;
        onclose: (details: ICloseEventDetails) => void;

        send(message: any[]): void;
        close(errorCode: number, reason?: string): void;
        info: ITransportInfo;
    }

    interface ITransportFactory {
        type: TransportType;
        create(): ITransport;
    }

    interface ITransportFactoryFactory {
        new(options: any): ITransportFactory;
    }

    interface ITransports {
        register(name: TransportType, factory: ITransportFactoryFactory): void;
        isRegistered(name: TransportType): boolean;
        get(name: TransportType): ITransportFactoryFactory;
        list(): TransportType[];
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
