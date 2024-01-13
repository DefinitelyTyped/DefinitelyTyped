import * as Q from "q";

export = Q;

declare module "q" {
    export interface IRetryOptions {
        limit?: number | undefined;
        interval?: number | undefined;
        maxInterval?: number | undefined;
        intervalMultiplier?: number | undefined;
    }

    export function retry<U>(
        process: () => IPromise<U>,
        onFail: (reason: any, retries: number) => void,
        limit: number,
    ): Promise<U>;
    export function retry<U>(
        process: () => IPromise<U>,
        onFail: (reason: any, retries: number) => void,
        options?: IRetryOptions,
    ): Promise<U>;
    export function retry<U>(process: () => IPromise<U>, limit: number): Promise<U>;
    export function retry<U>(process: () => IPromise<U>, options?: IRetryOptions): Promise<U>;
    export function retry<U>(
        process: () => U,
        onFail: (reason: any, retries: number) => void,
        limit: number,
    ): Promise<U>;
    export function retry<U>(
        process: () => U,
        onFail: (reason: any, retries: number) => void,
        options?: IRetryOptions,
    ): Promise<U>;
    export function retry<U>(process: () => U, limit: number): Promise<U>;
    export function retry<U>(process: () => U, options?: IRetryOptions): Promise<U>;

    interface Promise<T> {
        retry<U>(
            process: (value: T) => IPromise<U>,
            onFail: (reason: any, retries: number) => void,
            limit: number,
        ): Promise<U>;
        retry<U>(
            process: (value: T) => IPromise<U>,
            onFail: (reason: any, retries: number) => void,
            options?: IRetryOptions,
        ): Promise<U>;
        retry<U>(process: (value: T) => IPromise<U>, limit: number): Promise<U>;
        retry<U>(process: (value: T) => IPromise<U>, options?: IRetryOptions): Promise<U>;
        retry<U>(process: (value: T) => U, onFail: (reason: any, retries: number) => void, limit: number): Promise<U>;
        retry<U>(
            process: (value: T) => U,
            onFail: (reason: any, retries: number) => void,
            options?: IRetryOptions,
        ): Promise<U>;
        retry<U>(process: (value: T) => U, limit: number): Promise<U>;
        retry<U>(process: (value: T) => U, options?: IRetryOptions): Promise<U>;
    }
}
