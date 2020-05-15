import { TreeState } from './state';

export type ResolvedLoadablePromiseInfo<T> = Readonly<{
    value: T;
    upstreamState__INTERNAL_DO_NOT_USE?: TreeState;
}>;

export type LoadablePromise<T> = Promise<ResolvedLoadablePromiseInfo<T>>;

export type Accessors<T> = Readonly<{
    // Attempt to get the value.
    // If there's an error, throw an error.  If it's still loading, throw a Promise
    // This is useful for composing with React Suspense or in a Recoil Selector.
    getValue: () => T;

    toPromise: () => LoadablePromise<T>;

    // Convenience accessors
    valueMaybe: () => T | void;
    valueOrThrow: () => T;
    errorMaybe: () => Error | void;
    errorOrThrow: () => Error;
    promiseMaybe: () => Promise<T> | void;
    promiseOrThrow: () => Promise<T>;

    map: <S>(map: (val: any) => Promise<S> | S) => Loadable<S>;
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
