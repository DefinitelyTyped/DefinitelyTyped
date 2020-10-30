// Type definitions for lambda-wrapper 0.3
// Project: https://github.com/nordcloud/lambda-wrapper
// Definitions by: Gaelan Steele <https://github.com/Gaelan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.3

import { Handler, Context, Callback } from 'aws-lambda';

export interface Wrapped<TEvent, TResult> {
    // None of these functions resolve the promise if a callback is present, so prohibit using both.
    run(event: TEvent, context: Partial<Context>, callback: Callback<TResult>): void;
    run(event: TEvent, callback: Callback<TResult>): void;
    run(event: TEvent, context?: Partial<Context>): Promise<TResult>;

    runHandler(event: TEvent, context: Partial<Context>, callback?: Callback<TResult>): void;
    runHandler(event: TEvent, context: Partial<Context>): Promise<TResult>;
}

export function wrap<TEvent, TResult, THandlerName extends string = 'handler'>(
    mod: { [name in THandlerName]: Handler<TEvent, TResult> },
    options?: { handler?: THandlerName },
): Wrapped<TEvent, TResult>;
export function wrap(mod: { lambdaFunction: string; region: string }, options?: {}): Wrapped<any, any>;

// Legacy (pre-v0.1) API for backwards compatibility
export function init(mod: any, options: any): void;
export function run(event: any, context: Partial<Context>, callback: Callback): Promise<any>;
export function run(event: any, callback: Callback): Promise<any>;
