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

    interface Verifier<S> {
        (result: S, additional?: any): void | Promise<void>;
        (result: S, additional?: any, done?: () => {}): void;
    }

    // type Verifier<T> = (result: T, additional?: any, done?: () => {}) => void | Promise<void>;

    class LambdaTester<T extends Handler> {
        event(event: HandlerEvent<T>): this;
        context(context: Context): this;
        clientContext(clientContext: ClientContext): this;
        identity(cognitoIdentityId: string, cognitoIdentityPoolId: string): this;
        timeout(seconds: number): this;
        xray(): this;
        expectSucceed<S extends HandlerResult<T> = HandlerResult<T>>(verifier: Verifier<S>): Promise<any>;
        expectFail<S = HandlerError<T>>(verifier: Verifier<S>): Promise<any>;
        expectResult<S extends HandlerResult<T> = HandlerResult<T>>(verifier: Verifier<S>): Promise<any>;
        expectError<S = HandlerError<T>>(verifier: Verifier<S>): Promise<any>;
        expectResolve<S extends HandlerResult<T> = HandlerResult<T>>(verifier: Verifier<S>): Promise<any>;
        expectReject<S = HandlerError<T>>(verifier: Verifier<S>): Promise<any>;
    }
}

declare function lambdaTester<T extends Handler = Handler>(handler: T): lambdaTester.LambdaTester<T>;

export = lambdaTester;
