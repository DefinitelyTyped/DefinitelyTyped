// Type definitions for non-npm package Atmosphere package mdg:validated-method 1.2
// Project: https://github.com/meteor/validated-method
// Definitions by: Artemis Kearney <https://github.com/artemiswkearney>
//                 Nicusor Chiciuc <https://github.com/nicu-chiciuc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

// Inspiration taken from https://github.com/nicu-chiciuc/typed-meteor-methods,
// which was based on https://github.com/meteor-typings/validated-method/blob/master/main.d.ts by Dave Allen

/// <reference types="meteor"/>

// tslint:disable-next-line no-single-declare-module
declare module 'meteor/mdg:validated-method' {
    export {};
    export type ValidatedMethodName<T> = T extends ValidatedMethod<infer TName, any> ? TName : never;
    export type ValidatedMethodArg<T> = T extends ValidatedMethod<string, infer TRun> ? Argument<TRun> : never;
    export type ValidatedMethodReturn<T> = T extends ValidatedMethod<string, infer TRun> ? Return<TRun> : never;

    export interface ValidatedMethodThisBase {
        /**
         * @summary Access inside a method invocation.  Boolean value, true if this invocation is a stub.
         * @locus Anywhere
         */
        isSimulation: boolean;
        /**
         * @summary Call inside a method invocation.  Allow subsequent method from this client to begin running in a new fiber.
         * @locus Server
         */
        unblock(): void;
        /**
         * @summary The id of the user that made this method call, or `null` if no user was logged in.
         * @locus Anywhere
         */
        userId: string | null;
        /**
         * @summary Set the logged in user.
         * @locus Server
         * @param userId The value that should be returned by `userId` on this connection.
         */
        setUserId(userId: string | null): void;
        /**
         * @summary Access inside a method invocation. The [connection](#meteor_onconnection) that this method was received on. `null` if the method is not associated with a connection, eg. a server
         * initiated method call. Calls to methods made from a server method which was in turn initiated from the client share the same `connection`.
         * @locus Server
         */
        connection: Meteor.Connection;
        /**
         * @summary The seed for randomStream value generation
         */
        randomSeed(): string;
    }

    /**
     * When declaring a mixin that adds fields to ValidatedMethodOptions, augment this to add them
     */
    // tslint:disable-next-line no-empty-interface
    export interface ValidatedMethodOptionsMixinFields<TRunArg, TRunReturn> {}

    export type NoArguments = undefined;

    export interface ValidatedMethodOptions<TName extends string, TRun extends (...args: any[]) => any>
        extends ValidatedMethodOptionsMixinFields<Argument<TRun>, Return<TRun>> {
        // Force the name to be a string literal
        name: TName & string;
        validate: ((arg: Argument<TRun> extends NoArguments ? any : Argument<TRun>) => any) | null;
        applyOptions?: {
            noRetry?: boolean;
            returnStubValue?: boolean;
            throwStubExceptions?: boolean;
            onResultReceived?: (result: any) => void;
            [key: string]: any;
        };
        run: TRun;
    }

    export type Mixin<TName extends string, TRun extends (...args: any[]) => any> = (
        options: ValidatedMethodOptions<TName, TRun>,
    ) => ValidatedMethodOptions<TName, TRun>;
    export type GenericMixin = <TName extends string, TRun extends (...args: any[]) => any>(
        options: ValidatedMethodOptions<TName, TRun>,
    ) => ValidatedMethodOptions<TName, TRun>;

    export interface ValidatedMethodOptionsWithMixins<TName extends string, TRun extends (...args: any[]) => any>
        extends ValidatedMethodOptions<TName, TRun> {
        // Force TRun to be inferred from run itself rather than from the elements of mixins
        mixins?: TRun extends infer TRunAlias
            ? TRunAlias extends TRun
                ? ReadonlyArray<Mixin<TName, TRunAlias>>
                : never
            : never;
    }

    type Return<TFunc> = TFunc extends (...args: any[]) => infer TReturn ? TReturn : never;
    type Argument<TFunc> = TFunc extends (...args: infer TArgs) => any
        ? TArgs extends [infer TArg]
            ? TArg
            : NoArguments
        : never;
    export type ValidatedMethodOptionsReturn<
        TOptions extends ValidatedMethodOptions<any, any>
    > = TOptions extends ValidatedMethodOptions<any, infer TRun> ? Return<TRun> : never;
    export type ValidatedMethodOptionsArgument<
        TOptions extends ValidatedMethodOptions<any, any>
    > = TOptions extends ValidatedMethodOptions<any, infer TRun> ? Argument<TRun> : never;

    export class ValidatedMethod<TName extends string, TRun extends (...args: any[]) => any> {
        constructor(options: ValidatedMethodOptionsWithMixins<TName, TRun> & ThisType<ValidatedMethodThisBase & { name: TName extends string ? TName : string }>);
        call: Argument<TRun> extends NoArguments
            ? // methods with no argument can be called with () or just a callback
              ((unusedArg: any, callback: (error: Meteor.Error, result: Return<TRun>) => void) => void) &
                  ((callback: (error: Meteor.Error, result: Return<TRun>) => void) => void) &
                  (() => Return<TRun>)
            : // methods with arguments require those arguments to be called
              ((arg: Argument<TRun>, callback: (error: Meteor.Error, result: Return<TRun>) => void) => void) &
                  ((arg: Argument<TRun>) => Return<TRun>);
        _execute: Argument<TRun> extends NoArguments // methods with no argument can be called without an argument
            ? (context: { [key: string]: any }) => Return<TRun>
            : (context: { [key: string]: any }, args: Argument<TRun>) => Return<TRun>;
    }
}
