declare interface URLS {
    resetPassword: (token: string) => string;
    verifyEmail: (token: string) => string;
    enrollAccount: (token: string) => string;
}

declare interface EmailFields {
    from?: (user: Meteor.User) => string;
    subject?: (user: Meteor.User) => string;
    text?: (user: Meteor.User, url: string) => string;
    html?: (user: Meteor.User, url: string) => string;
}

declare module Accounts {
    var urls: URLS;

    function user(options?: { fields?: Mongo.FieldSpecifier }): Meteor.User | null;

    function userId(): string | null;

    function createUser(options: {
        username?: string;
        email?: string;
        password?: string;
        profile?: Object;
    }, callback?: (error?: Error | Meteor.Error | Meteor.TypedError) => void): string;

    function config(options: {
        sendVerificationEmail?: boolean;
        forbidClientAccountCreation?: boolean;
        restrictCreationByEmailDomain?: string | Function;
        loginExpirationInDays?: number;
        oauthSecretKey?: string;
        passwordResetTokenExpirationInDays?: number;
        passwordEnrollTokenExpirationInDays?: number;
        ambiguousErrorMessages?: boolean;
        defaultFieldSelector?: {[key: string]: 0 | 1}
    }): void;

    function onLogin(func: Function): {
        stop: () => void
    };

    function onLoginFailure(func: Function): {
        stop: () => void
    };

    function loginServicesConfigured(): boolean;

    function onPageLoadLogin(func: Function): void;
}

declare module Accounts {
    function changePassword(oldPassword: string, newPassword: string, callback?: (error?: Error | Meteor.Error | Meteor.TypedError) => void): void;

    function forgotPassword(options: {
        email?: string;
    }, callback?: (error?: Error | Meteor.Error | Meteor.TypedError) => void): void;

    function resetPassword(token: string, newPassword: string, callback?: (error?: Error | Meteor.Error | Meteor.TypedError) => void): void;

    function verifyEmail(token: string, callback?: (error?: Error | Meteor.Error | Meteor.TypedError) => void): void;

    function onEmailVerificationLink(callback: Function): void;

    function onEnrollmentLink(callback: Function): void;

    function onResetPasswordLink(callback: Function): void;

    function loggingIn(): boolean;

    function logout(callback?: (error?: Error | Meteor.Error | Meteor.TypedError) => void): void;

    function logoutOtherClients(callback?: (error?: Error | Meteor.Error | Meteor.TypedError) => void): void;

    var ui: {
        config(options: {
            requestPermissions?: Object;
            requestOfflineToken?: Object;
            forceApprovalPrompt?: Object;
            passwordSignupFields?: string;
        }): void;
    };
}

declare interface Header {
    [id: string]: string;
}

declare interface EmailTemplates {
    from: string;
    siteName: string;
    headers?: Header;
    resetPassword: EmailFields;
    enrollAccount: EmailFields;
    verifyEmail: EmailFields;
}

declare module Accounts {
    var emailTemplates: EmailTemplates;

    function addEmail(userId: string, newEmail: string, verified?: boolean): void;

    function removeEmail(userId: string, email: string): void;

    function onCreateUser(func: (options: { profile?: {} }, user: Meteor.User) => void): void;

    function findUserByEmail(email: string): Meteor.User | null | undefined;

    function findUserByUsername(username: string): Meteor.User | null | undefined;

    function sendEnrollmentEmail(userId: string, email?: string): void;

    function sendResetPasswordEmail(userId: string, email?: string): void;

    function sendVerificationEmail(userId: string, email?: string): void;

    function setUsername(userId: string, newUsername: string): void;

    function setPassword(userId: string, newPassword: string, options?: {
        logout?: Object;
    }): void;

    function validateNewUser(func: Function): boolean;

    function validateLoginAttempt(func: Function): {
        stop: () => void
    };

    function _hashPassword(password: string): { digest: string; algorithm: string; };

    interface IValidateLoginAttemptCbOpts {
        type: string;
        allowed: boolean;
        error: Meteor.Error;
        user: Meteor.User;
        connection: Meteor.Connection;
        methodName: string;
        methodArguments: any[];
    }
}

declare module Accounts {
    function onLogout(func: Function): void;
}

declare module Accounts {
    function onLogout(func: (options: { user: Meteor.User, connection: Meteor.Connection; }) => void): void;
}

declare module Accounts {
    interface LoginMethodOptions {
        /**
         * The method to call (default 'login')
         */
        methodName?: string;
        /**
         * The arguments for the method
         */
        methodArguments?: any[];
        /**
         * If provided, will be called with the result of the
         * method. If it throws, the client will not be logged in (and
         * its error will be passed to the callback).
         */
        validateResult?: Function;
        /**
         * Will be called with no arguments once the user is fully
         * logged in, or with the error on error.
         */
        userCallback?: (err?: any) => void;
    }

    /**
     *
     * Call a login method on the server.
     *
     * A login method is a method which on success calls `this.setUserId(id)` and
     * `Accounts._setLoginToken` on the server and returns an object with fields
     * 'id' (containing the user id), 'token' (containing a resume token), and
     * optionally `tokenExpires`.
     *
     * This function takes care of:
     * - Updating the Meteor.loggingIn() reactive data source
     * - Calling the method in 'wait' mode
     * - On success, saving the resume token to localStorage
     * - On success, calling Accounts.connection.setUserId()
     * - Setting up an onReconnect handler which logs in with
     *   the resume token
     *
     * Options:
     * - methodName: The method to call (default 'login')
     * - methodArguments: The arguments for the method
     * - validateResult: If provided, will be called with the result of the
     *   method. If it throws, the client will not be logged in (and
     *   its error will be passed to the callback).
     * - userCallback: Will be called with no arguments once the user is fully
     * logged in, or with the error on error.
     *
     * */
    function callLoginMethod(options: LoginMethodOptions): void;

    /**
     *
     * The main entry point for auth packages to hook in to login.
     *
     * A login handler is a login method which can return `undefined` to
     * indicate that the login request is not handled by this handler.
     *
     * @param name {String} Optional.  The service name, used by default
     * if a specific service name isn't returned in the result.
     *
     * @param handler {Function} A function that receives an options object
     * (as passed as an argument to the `login` method) and returns one of:
     * - `undefined`, meaning don't handle;
     * - a login method result object
     **/
    function registerLoginHandler(name: string, handler: (options: any) => undefined | Object): void;

    type Password =
        | string
        | {
            digest: string;
            algorithm: 'sha-256';
        };

    /**
     *
     * Check whether the provided password matches the bcrypt'ed password in
     * the database user record. `password` can be a string (in which case
     * it will be run through SHA256 before bcrypt) or an object with
     * properties `digest` and `algorithm` (in which case we bcrypt
     * `password.digest`).
     */
    function _checkPassword(user: Meteor.User, password: Password): { userId: string; error?: any };
}

declare module Accounts {
    type StampedLoginToken = {
        token: string;
        when: Date;
    }
    type HashedStampedLoginToken = {
        hashedToken: string;
        when: Date;
    }

    function _generateStampedLoginToken(): StampedLoginToken;
    function _hashStampedToken(token: StampedLoginToken): HashedStampedLoginToken;
    function _insertHashedLoginToken<T>(userId: string, token: HashedStampedLoginToken, query?: Mongo.Selector<T> | Mongo.ObjectID | string): void;
    function _hashLoginToken(token: string): string;
}
