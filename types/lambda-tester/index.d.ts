// Type definitions for lambda-tester 3.6
// Project: https://github.com/vandium-io/lambda-tester#readme
// Definitions by: Ivan Kerin <https://github.com/ivank>
//                 Hajo Aho-Mantila <https://github.com/HajoAhoMantila>
//                 Suntharesan Mohan <https://github.com/msuntharesan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

/* tslint:disable:no-unnecessary-generics */

import { Context, ClientContext, CognitoIdentity, Handler, Callback } from 'aws-lambda';

declare namespace lambdaTester {
    type HandlerEvent<T extends Handler> = T extends Handler<infer TEvent> ? TEvent : never;
    type HandlerResult<T extends Handler> = T extends Handler<any, infer TResult> ? TResult : never;
    type HandlerError<T extends Handler> = T extends Handler<any, infer TResult>
        ? NonNullable<Parameters<Callback<TResult>>['0']>
        : never;

    interface VerifierFn<S> {
        (result: S, additional?: any): void | Promise<void>;
        (result: S, additional?: any, done?: () => {}): void;
    }
    type Verifier<S> = S extends HandlerError<Handler>
        ? S extends string
            ? VerifierFn<string>
            : S extends Error
            ? VerifierFn<Error>
            : never
        : VerifierFn<S>;

    class LambdaTester<T extends Handler> {
        event(event: HandlerEvent<T>): this;
        context(context: Context): this;
        clientContext(clientContext: ClientContext): this;
        identity(cognitoIdentityId: string, cognitoIdentityPoolId: string): this;
        timeout(seconds: number): this;
        xray(): this;
        expectSucceed(verifier: Verifier<HandlerResult<T>>): Promise<any>;
        expectFail(verifier: Verifier<HandlerError<T>>): Promise<any>;
        expectResult(verifier: Verifier<HandlerResult<T>>): Promise<any>;
        expectError(verifier: Verifier<HandlerError<T>>): Promise<any>;
        expectResolve(verifier: Verifier<HandlerResult<T>>): Promise<any>;
        expectReject(verifier: Verifier<HandlerError<T>>): Promise<any>;
    }
}

declare function lambdaTester<T extends Handler>(handler: T): lambdaTester.LambdaTester<T>;

export = lambdaTester;
