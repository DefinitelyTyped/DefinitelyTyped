interface IConfiguration {
    SYSTEM_CHANNEL: string;
    DEFAULT_CHANNEL: string;
    resolver: IResolver;
}

interface IResolver {
    compare(binding: string, topic: string, headerOptions: {}): boolean;
    reset(): void;
    purge(options?: { topic?: string | undefined; binding?: string | undefined; compact?: boolean | undefined }): void;
}

interface ICallback<T> {
    (data: T, envelope: IEnvelope<T>): void;
}

interface ISubscriptionDefinition<T> {
    channel: string;
    topic: string;
    callback: ICallback<T>;

    // after and before lack documentation

    constraint(predicateFn: (data: T, envelope: IEnvelope<T>) => boolean): ISubscriptionDefinition<T>;
    constraints(predicateFns: ((data: T, envelope: IEnvelope<T>) => boolean)[]): ISubscriptionDefinition<T>;
    context(theContext: any): ISubscriptionDefinition<T>;
    debounce(interval: number): ISubscriptionDefinition<T>;
    defer(): ISubscriptionDefinition<T>;
    delay(waitTime: number): ISubscriptionDefinition<T>;
    disposeAfter(maxCalls: number): ISubscriptionDefinition<T>;
    distinct(): ISubscriptionDefinition<T>;
    distinctUntilChanged(): ISubscriptionDefinition<T>;
    logError(): ISubscriptionDefinition<T>;
    once(): ISubscriptionDefinition<T>;
    throttle(interval: number): ISubscriptionDefinition<T>;
    subscribe(callback: ICallback<T>): ISubscriptionDefinition<T>;
    unsubscribe(): void;
}

interface IEnvelope<T> {
    topic: string;
    data?: T | undefined;

    /*Uses DEFAULT_CHANNEL if no channel is provided*/
    channel?: string | undefined;

    timeStamp?: string | undefined;
}

interface IChannelDefinition<T> {
    subscribe(topic: string, callback: ICallback<T>): ISubscriptionDefinition<T>;

    publish(topic: string, data?: T): void;

    channel: string;
}

interface IPostal {
    subscriptions: {};
    wireTaps: ICallback<any>[];

    addWireTap(callback: ICallback<any>): () => void;

    channel<T>(name?: string): IChannelDefinition<T>;

    getSubscribersFor(): ISubscriptionDefinition<any>[];
    getSubscribersFor(
        options: { channel?: string | undefined; topic?: string | undefined; context?: any },
    ): ISubscriptionDefinition<any>[];
    getSubscribersFor(predicateFn: (sub: ISubscriptionDefinition<any>) => boolean): ISubscriptionDefinition<any>[];

    publish(envelope: IEnvelope<any>): void;

    reset(): void;

    subscribe(
        options: { channel?: string | undefined; topic: string; callback: ICallback<any> },
    ): ISubscriptionDefinition<any>;
    unsubscribe(sub: ISubscriptionDefinition<any>): void;
    unsubscribeFor(): void;
    unsubscribeFor(options: { channel?: string | undefined; topic?: string | undefined; context?: any }): void;

    configuration: IConfiguration;
}

declare var postal: IPostal;

declare module "postal" {
    var postal: IPostal;
    export = postal;
}
