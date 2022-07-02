// Type definitions for passport-local-mongoose 6.1
// Project: https://github.com/saintedlama/passport-local-mongoose
// Definitions by: Linus Brolin <https://github.com/linusbrolin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

/// <reference types="mongoose" />
/// <reference types="passport-local" />

declare module 'mongoose' {
    import passportLocal = require('passport-local');

    export interface AuthenticationResult {
        user: any;
        error: any;
    }

    // methods
    export interface PassportLocalDocument extends Document {
        setPassword(password: string): Promise<PassportLocalDocument>;
        setPassword(password: string, cb: (err: any, res: any) => void): void;
        changePassword(oldPassword: string, newPassword: string): Promise<PassportLocalDocument>;
        changePassword(oldPassword: string, newPassword: string, cb: (err: any, res: any) => void): void;
        authenticate(password: string): Promise<AuthenticationResult>;
        authenticate(password: string, cb: (err: any, user: any, error: any) => void): void;
        resetAttempts(): Promise<PassportLocalDocument>;
        resetAttempts(cb: (err: any, res: any) => void): void;
    }

    interface AuthenticateMethod<T> {
        (username: string, password: string): Promise<AuthenticationResult>;
        (username: string, password: string, cb: (err: any, user: T | boolean, error: any) => void): void;
    }

    // statics
    interface PassportLocalModel<T extends Document> extends Model<T> {
        authenticate(): AuthenticateMethod<T>;
        serializeUser(): (user: T, cb: (err: any, id?: any) => void) => void;
        deserializeUser(): (username: string, cb: (err: any, user?: any) => void) => void;

        register(user: T, password: string): Promise<T>;
        register(user: T, password: string, cb: (err: any, account: any) => void): void;
        findByUsername(username: string, selectHashSaltFields: boolean): Query<T, T>;
        findByUsername(username: string, selectHashSaltFields: boolean, cb: (err: any, account: any) => void): any;
        createStrategy(): passportLocal.Strategy;
    }

    // error messages
    export interface PassportLocalErrorMessages {
        MissingPasswordError?: string | undefined;
        AttemptTooSoonError?: string | undefined;
        TooManyAttemptsError?: string | undefined;
        NoSaltValueStoredError?: string | undefined;
        IncorrectPasswordError?: string | undefined;
        IncorrectUsernameError?: string | undefined;
        MissingUsernameError?: string | undefined;
        UserExistsError?: string | undefined;
    }

    // plugin options
    export interface PassportLocalOptions {
        saltlen?: number | undefined;
        iterations?: number | undefined;
        keylen?: number | undefined;
        encoding?: string | undefined;
        digestAlgorithm?: string | undefined;
        passwordValidator?: ((password: string, cb: (err: any) => void) => void) | undefined;

        usernameField?: string | undefined;
        usernameUnique?: boolean | undefined;

        usernameQueryFields: Array<string>;

        selectFields?: string | undefined;
        populateFields?: string | undefined;

        usernameLowerCase?: boolean | undefined;

        hashField?: string | undefined;
        saltField?: string | undefined;

        limitAttempts?: boolean | undefined;
        lastLoginField?: string | undefined;
        attemptsField?: string | undefined;
        interval?: number | undefined;
        maxInterval?: number | undefined;
        maxAttempts?: number | undefined;

        errorMessages?: PassportLocalErrorMessages | undefined;
    }

    export interface PassportLocalSchema extends Schema {
        plugin(
            plugin: (schema: PassportLocalSchema, options?: PassportLocalOptions) => void,
            options?: PassportLocalOptions,
        ): this;

        // overload for the default mongoose plugin function
        plugin(plugin: (schema: Schema, options?: Object) => void, opts?: Object): this;
    }

    export function model<T extends Document>(
        name: string,
        schema?: PassportLocalSchema,
        collection?: string,
        skipInit?: boolean,
    ): PassportLocalModel<T>;

    export function model<T extends Document, U extends PassportLocalModel<T>>(
        name: string,
        schema?: PassportLocalSchema,
        collection?: string,
        skipInit?: boolean,
    ): U;
}

declare module 'passport-local-mongoose' {
    import mongoose = require('mongoose');
    var _: (schema: mongoose.Schema, options?: Object) => void;
    export = _;
}
