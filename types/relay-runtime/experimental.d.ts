import { DataID } from "./lib/util/RelayRuntimeTypes";

export { resolverDataInjector } from "./lib/store/live-resolvers/resolverDataInjector";
export { observeFragment } from "./lib/store/observeFragmentExperimental";
export { observeQuery } from "./lib/store/observeQueryExperimental";
export { waitForFragmentData } from "./lib/store/waitForFragmentExperimental";

export type IdOf<_A extends string, Typename extends undefined | string = undefined> = Typename extends undefined
    ? { id: DataID }
    : { id: DataID; __typename: Typename };

interface ErrorResult<Error> {
    ok: false;
    errors: readonly Error[];
}

interface OkayResult<T> {
    ok: true;
    value: T;
}

// The type returned by fields annotated with `@catch`
export type Result<T, Error> = OkayResult<T> | ErrorResult<Error>;

export function isValueResult<T = unknown>(input: Result<T, Error>): input is OkayResult<T>;

export function isErrorResult(input: Result<unknown, Error>): input is ErrorResult<Error>;
