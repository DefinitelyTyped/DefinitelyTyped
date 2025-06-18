export = inflight;

type Resolvable<T> = PromiseLike<T> | T;
/**
 * @param unique A globally-unique key that is used to identify the call to this
 * function. It determines how to cache the inlfight request. eg. a url or
 * filename or whatever.
 * @param doFly The function that actually carries out the request, eg. fetches
 * the url or whatever.
 * @returns One promise as long as the `doFly()` promise is pending. Note that
 * if `bluebird` is installed, this promise will be a Bluebird promise.
 */
declare function inflight<T>(
    unique: Resolvable<string> | Resolvable<ReadonlyArray<Resolvable<string>>>,
    doFly: () => Resolvable<T>,
): Promise<T>;

declare namespace inflight {
    const active: {
        [key: string]: Promise<any>;
    };
}
