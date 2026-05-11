import { DataID } from "./lib/util/RelayRuntimeTypes";

export { resolverDataInjector } from "./lib/store/live-resolvers/resolverDataInjector";
export { observeFragment } from "./lib/store/observeFragmentExperimental";
export { observeQuery } from "./lib/store/observeQueryExperimental";
export { waitForFragmentData } from "./lib/store/waitForFragmentExperimental";

export type IdOf<_A extends string, Typename extends undefined | string = undefined> = Typename extends undefined
    ? { id: DataID }
    : { id: DataID; __typename: Typename };

interface ErrorResult<E> {
    ok: false;
    errors: readonly E[];
}

interface OkayResult<T> {
    ok: true;
    value: T;
}

// The type returned by fields annotated with `@catch`
export type Result<T, E> = OkayResult<T> | ErrorResult<E>;

export function isValueResult<T = unknown>(input: Result<T, unknown>): input is OkayResult<T>;

export function isErrorResult<E = unknown>(input: Result<unknown, E>): input is ErrorResult<E>;
