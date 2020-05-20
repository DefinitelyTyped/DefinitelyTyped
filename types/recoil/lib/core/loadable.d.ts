import { TreeState } from './state';

export type ResolvedLoadablePromiseInfo<T> = Readonly<{
    value: T;
    upstreamState__INTERNAL_DO_NOT_USE?: TreeState;
}>;

export type LoadablePromise<T> = Promise<ResolvedLoadablePromiseInfo<T>>;

export type Loadable<T> =
    | Readonly<{ state: 'hasValue'; contents: T }>
    | Readonly<{ state: 'hasError'; contents: Error }>
    | Readonly<
          {
              state: 'loading';
              contents: LoadablePromise<T>;
          }
      >;
