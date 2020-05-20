import { TreeState } from './state';

export type ResolvedLoadablePromiseInfo<T> = Readonly<{
    value: T;
    upstreamState__INTERNAL_DO_NOT_USE?: TreeState;
}>;

export type LoadablePromise<T> = Promise<ResolvedLoadablePromiseInfo<T>>;

export type Accessors<T> = Readonly<{
    /**
     * Attemps to get the value. If state === 'hasError', that error will be thrown. If state === 'loading', the pending Promise will be thrown.
     */
    getValue: () => T;

    /**
     * Returns a Promise that resolves (or rejects) depending on the eventual fulfillment of the underlying Promise.
     */
    toPromise: () => LoadablePromise<T>;

    /**
     * Will return value if it exists. Otherwise will return undefined if value is in error or loading state.
     */
    valueMaybe: () => T | void;

    /**
     * Throws a generic error if state !== 'hasValue' (if it is in loading or error state)
     */
    valueOrThrow: () => T;

    /**
     * If state === 'hasError', returns that error. Otherwise, returns undefined.
     */
    errorMaybe: () => Error | void;

    /**
     * If state !== 'hasError', throw a generic error message. Otherwise, return the error.
     */
    errorOrThrow: () => Error;

    /**
     * If state === 'loading', return the Promise. Otherwise, return undefined.
     */
    promiseMaybe: () => Promise<T> | void;

    /**
     * If state !== 'loading', throw a generic error message. Otherwise, return the Promise.
     */
    promiseOrThrow: () => Promise<T>;
}>;

export type Loadable<T> =
    | Readonly<Accessors<T> & { state: 'hasValue'; contents: T }>
    | Readonly<Accessors<T> & { state: 'hasError'; contents: Error }>
    | Readonly<
          Accessors<T> & {
              state: 'loading';
              contents: LoadablePromise<T>;
          }
      >;
