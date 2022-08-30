export type ResultType<P extends ZalgoPromise<any>> = P extends ZalgoPromise<infer R> ? R : never;

export type FlattenPromises<T extends {}> = {
    [K in keyof T]: T[K] extends ZalgoPromise<any> ? ResultType<T[K]> : T[K];
};

export class ZalgoPromise<R> {
    constructor(handler?: (resolve: (result: R) => void, reject: (error: any) => void) => void);

    resolve(result: R): this;

    reject(error: any): this;

    asyncReject(error: any): this;

    dispatch(): void;

    then<X>(onSuccess?: (result: R) => ZalgoPromise<X>, onError?: (error: any) => ZalgoPromise<X>): ZalgoPromise<X>;
    then<Y>(onSuccess?: (result: R) => Y, onError?: (error: any) => Y): ZalgoPromise<Y>;
    // to support mixed promise/non-promise return types
    then<X, Y>(onSuccess: (result: R) => ZalgoPromise<X> | Y, onError: (error: any) => ZalgoPromise<X> | Y): ZalgoPromise<X | Y>;

    catch<X>(onError: (error: any) => ZalgoPromise<X>): ZalgoPromise<X>;
    catch<Y>(onError: (error: any) => Y): ZalgoPromise<Y>;

    finally(onFinally: () => any): this;

    timeout(time: number, err?: Error): this;

    toPromise(): Promise<R>;

    lazy(): this;

    static resolve(): ZalgoPromise<void>;
    static resolve<X>(value: ZalgoPromise<X>): ZalgoPromise<X>;
    static resolve<Y>(value: Y): ZalgoPromise<Y>;

    static reject(error: any): ZalgoPromise<any>;

    static asyncReject(error: any): ZalgoPromise<any>;

    static all<X extends readonly any[]>(promises: X): ZalgoPromise<FlattenPromises<X>>;

    static hash<O extends {}>(promises: O): ZalgoPromise<FlattenPromises<O>>;

    static map<T, X>(items: readonly T[], method: (item: T) => (ZalgoPromise<X> | X)): ZalgoPromise<readonly X[]>;

    static onPossiblyUnhandledException(handler: (err: any) => void): {cancel: () => void};

    // to support conditional promising returning method
    static try<X, A extends readonly any[]>(method: (...args: A) => ZalgoPromise<X> | undefined, context?: any, args?: Partial<A>): ZalgoPromise<X | undefined>;
    static try<X, A extends readonly any[]>(method: (...args: A) => ZalgoPromise<X>, context?: any, args?: Partial<A>): ZalgoPromise<X>;
    static try<Y, A extends readonly any[]>(method: (...args: A) => Y, context?: any, args?: Partial<A>): ZalgoPromise<Y>;

    static delay(delay: number): ZalgoPromise<void>;

    static isPromise(value: any): boolean;

    static flush(): ZalgoPromise<void>;
}
