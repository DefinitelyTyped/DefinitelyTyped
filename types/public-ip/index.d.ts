// Type definitions for public-ip 2.4
// Project: https://github.com/sindresorhus/public-ip#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function v4(options?: Options): CancelablePromise<string>;
export function v6(options?: Options): CancelablePromise<string>;

export interface Options {
    https?: boolean;
    timeout?: number;
}

export type CancelablePromise<T> = Promise<T> & {
    cancel(): void;
};
