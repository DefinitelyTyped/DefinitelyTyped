// Type definitions for falcor 0.1
// Project: http://netflix.github.io/falcor/
// Definitions by: Quramy <https://github.com/Quramy/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

import { Path, PathSet, PathValue, JSONEnvelope, JSONGraph, JSONGraphEnvelope } from 'falcor-json-graph';

export as namespace falcor;

/////////////////////////////////////////////////////
//  Global types
/////////////////////////////////////////////////////

export { XMlHttpSource as HttpDataSource } from "falcor-http-datasource";
export {
    Atom,
    Error,
    Key,
    KeySet,
    Path,
    PathSet,
    PathValue,
    JSONEnvelope,
    JSONGraph,
    JSONGraphEnvelope,
    Range,
    Reference,
    ref,
    atom,
    error,
    pathValue } from "falcor-json-graph";

/////////////////////////////////////////////////////
//  DataSource
/////////////////////////////////////////////////////

/**
 * A DataSource is an interface which can be implemented to expose JSON Graph information to a Model.
 * Every DataSource is associated with a single JSON Graph object.
 * Models execute JSON Graph operations (get, set, and call) to retrieve values from the DataSource’s JSON Graph object.
 * DataSources may retrieve JSON Graph information from anywhere, including device memory, a remote machine, or even a lazily-run computation.
 */
export abstract class DataSource {
    /**
     * The get method retrieves values from the DataSource's associated JSONGraph object.
     */
    get(pathSets: PathSet[]): Observable<JSONGraphEnvelope>;

    /**
     * The set method accepts values to set in the DataSource's associated JSONGraph object.
     */
    set(jsonGraphEnvelope: JSONGraphEnvelope): Observable<JSONGraphEnvelope>;

    /**
     * Invokes a function in the DataSource's JSONGraph object.
     */
    call(functionPath: Path, args?: any[], refSuffixes?: PathSet[], thisPaths?: PathSet[]): Observable<JSONGraphEnvelope>;
}

/////////////////////////////////////////////////////
//  Model
/////////////////////////////////////////////////////

export interface ModelOptions {
    source?: DataSource;
    cache?: JSONGraph;
    maxSize?: number;
    collectRatio?: number;
    errorSelector?: ModelErrorSelector;
    onChange?: ModelOnChange;
    comparator?: ModelComparator;
}

/**
 * This callback is invoked when the Model's cache is changed.
 */
export type ModelOnChange = () => void;

/**
 * This function is invoked on every JSONGraph Error retrieved from the DataSource. This function allows Error objects to be transformed before being stored in the Model's cache.
 */
export type ModelErrorSelector = (jsonGraphError: any) => any;

/**
 * This function is invoked every time a value in the Model cache is about to be replaced with a new value.
 * If the function returns true, the existing value is replaced with a new value and the version flag on all of the value's ancestors in the tree are incremented.
 */
export type ModelComparator = (existingValue: any, newValue: any) => boolean;

/**
 * A Model object is used to execute commands against a {@link JSONGraph} object
 * {@link Model}s can work with a local JSONGraph cache, or it can work with a remote {@link JSONGraph} object through a {@link DataSource}.
 */
export class Model {
    constructor(options?: ModelOptions);

    /**
     * The get method retrieves several {@link Path}s or {@link PathSet}s from a {@link Model}. The get method loads each value into a JSON object and returns in a ModelResponse.
     */
    get(...path: Array<string | PathSet>): ModelResponse<JSONEnvelope<any>>;
    get<T>(...path: Array<string | PathSet>): ModelResponse<JSONEnvelope<T>>;

    /**
     * Sets the value at one or more places in the JSONGraph model.
     * The set method accepts one or more {@link PathValue}s, each of which is a combination of a location in the document and the value to place there.
     * In addition to accepting  {@link PathValue}s, the set method also returns the values after the set operation is complete.
     */
    set(...args: PathValue[]): ModelResponse<JSONEnvelope<any>>;
    set<T>(...args: PathValue[]): ModelResponse<JSONEnvelope<T>>;
    set(jsonGraph: JSONGraph): ModelResponse<JSONEnvelope<any>>;
    set<T>(jsonGraph: JSONGraph): ModelResponse<JSONEnvelope<T>>;

    /**
     * The preload method retrieves several {@link Path}s or {@link PathSet}s from a {@link Model} and loads them into the Model cache.
     */
    preload(...path: PathSet[]): void;

    /**
     * Invokes a function in the JSON Graph.
     */
    // NOTE: In http://netflix.github.io/falcor/doc/Model.html#call, it says that refPaths should be an PathSet[].
    // However, model implementation returns an error with setting refPaths as PathSet[] and it works with refPaths as PathSet.
    // So refPaths is defined as a PathSet in this .d.ts.
    call(functionPath: string | Path, args?: any[], refPaths?: PathSet, thisPaths?: PathSet[]): ModelResponse<JSONEnvelope<any>>;
    call<T>(functionPath: string | Path, args?: any[], refPaths?: PathSet, thisPaths?: PathSet[]): ModelResponse<JSONEnvelope<T>>;

    /**
     * The invalidate method synchronously removes several {@link Path}s or {@link PathSet}s from a {@link Model} cache.
     */
    invalidate(...path: PathSet[]): void;

    /**
     * Returns a new {@link Model} bound to a location within the {@link JSONGraph}.
     * The bound location is never a {@link Reference}: any {@link Reference}s encountered while resolving the bound {@link Path} are always replaced with the {@link Reference}s target value.
     * For subsequent operations on the {@link Model}, all paths will be evaluated relative to the bound path. Deref allows you to:
     * - Expose only a fragment of the {@link JSONGraph} to components, rather than the entire graph
     * - Hide the location of a {@link JSONGraph} fragment from components
     * - Optimize for executing multiple operations and path looksup at/below the same location in the {@link JSONGraph}
     */
    deref(responseObject: any): Model;

    /**
     * Get data for a single {@link Path}.
     */
    getValue(path: string | Path): ModelResponse<any>;
    getValue<T>(path: string | Path): ModelResponse<T>;

    /**
     * Set value for a single {@link Path}.
     */
    setValue(path: string | Path, value: any): ModelResponse<any>;
    setValue<T>(path: string | Path, value: any): ModelResponse<T>;

    /**
     * Set the local cache to a {@link JSONGraph} fragment. This method can be a useful way of mocking a remote document, or restoring the local cache from a previously stored state.
     */
    setCache(jsonGraph: JSONGraph): void;

    /**
     * Get the local {@link JSONGraph} cache. This method can be a useful to store the state of the cache.
     */
    getCache(...path: PathSet[]): JSONGraph;

    /**
     * Retrieves a number which is incremented every single time a value is changed underneath the Model or the object at an optionally-provided Path beneath the Model.
     */
    getVersion(path?: Path): number;

    /**
     * Returns a clone of the {@link Model} that enables batching. Within the configured time period, paths for get operations are collected and sent to the {@link DataSource} in a batch.
     * Batching can be more efficient if the {@link DataSource} access the network, potentially reducing the number of HTTP requests to the server.
     */
    batch(schedulerOrDelay?: number | Scheduler): Model;       // FIXME what's a valid type for scheduler?

    /**
     * Returns a clone of the {@link Model} that disables batching. This is the default mode. Each get operation will be executed on the {@link DataSource} separately.
     */
    unbatch(): Model;

    /**
     * Returns a clone of the {@link Model} that treats errors as values. Errors will be reported in the same callback used to report data.
     * Errors will appear as objects in responses, rather than being sent to the {@link Observable~onErrorCallback} callback of the {@link ModelResponse}.
     */
    treatErrorsAsValues(): Model;

    /**
     * Adapts a Model to the {@link DataSource} interface.
     */
    asDataSource(): DataSource;

    /**
     * Returns a clone of the {@link Model} that boxes values returning the wrapper ({@link Atom}, {@link Reference}, or {@link Error}), rather than the value inside it.
     * This allows any metadata attached to the wrapper to be inspected.
     */
    boxValues(): Model;

    /**
     * Returns a clone of the {@link Model} that unboxes values, returning the value inside of the wrapper ({@link Atom}, {@link Reference}, or {@link Error}), rather than the wrapper itself.
     * This is the default mode.
     */
    unboxValues(): Model;

    /**
     * Returns a clone of the {@link Model} that only uses the local {@link JSONGraph} and never uses a {@link DataSource} to retrieve missing paths.
     */
    withoutDataSource(): Model;

    /**
     * Returns the {@link Path} to the object within the JSON Graph that this Model references.
     */
    getPath(): Path;
}

/////////////////////////////////////////////////////
//  ModelResponse
/////////////////////////////////////////////////////

export class ModelResponse<T> extends Observable<T> {
    constructor(observable: Observable<T>);
    progressively(): ModelResponse<JSONEnvelope<T>>;
    forEach(onNext: (value: T) => void, onError?: (error: Error) => void, onCompleted?: () => void): Subscription;
    then(onFulfilled?: (value: T) => any | Thenable<any>, onRejected?: (error: any) => void): Thenable<any>;
    then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => void): Thenable<U>;
}

export interface Thenable<T> {
    then<U>(onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U> | void): Thenable<U>;
}

/////////////////////////////////////////////////////
//  Observable
/////////////////////////////////////////////////////

export class Observable<T>{
    /**
     * The forEach method is a synonym for {@link Observable.prototype.subscribe} and triggers the execution of the Observable, causing the values within to be pushed to a callback.
     * An Observable is like a pipe of water that is closed.
     * When forEach is called, we open the valve and the values within are pushed at us.
     * These values can be received using either callbacks or an {@link Observer} object.
     */
    forEach(onNext?: ObservableOnNextCallback<T>, onError?: ObservableOnErrorCallback , onCompleted?: ObservableOnCompletedCallback ): Subscription;

    /**
     * The subscribe method is a synonym for {@link Observable.prototype.forEach} and triggers the execution of the Observable, causing the values within to be pushed to a callback.
     * An Observable is like a pipe of water that is closed.
     * When forEach is called, we open the valve and the values within are pushed at us.  These values can be received using either callbacks or an {@link Observer} object.
     */
    subscribe(onNext?: ObservableOnNextCallback<T>, onError?: ObservableOnErrorCallback , onCompleted?: ObservableOnCompletedCallback ): Subscription;
}

/**
 * This callback accepts a value that was emitted while evaluating the operation underlying the {@link Observable} stream.
 */
export type ObservableOnNextCallback<T> = (value: T) => void;

/**
 * This callback accepts an error that occurred while evaluating the operation underlying the {@link Observable} stream.
 * When this callback is invoked, the {@link Observable} stream ends and no more values will be received by the {@link Observable~onNextCallback}.
 */
export type ObservableOnErrorCallback = (error: Error) => void;

/**
 * This callback is invoked when the {@link Observable} stream ends.
 * When this callback is invoked the {@link Observable} stream has ended, and therefore the {@link Observable~onNextCallback} will not receive any more values.
 */
export type ObservableOnCompletedCallback = () => void;

export class Subscription {
    /**
     * When this method is called on the Subscription, the Observable that created the Subscription will stop sending values to the callbacks passed when the Subscription was created.
     */
    dispose(): void;
}

export interface Scheduler {
    catch(handler: (exception: any) => boolean): Scheduler;
    catchException(handler: (exception: any) => boolean): Scheduler;
}
