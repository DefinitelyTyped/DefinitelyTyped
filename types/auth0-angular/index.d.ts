// Type definitions for auth0-angular
// Project: https://github.com/auth0/auth0-angular
// Definitions by: Matt Emory <https://github.com/homesar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

declare namespace auth0.angular {

    interface IAuth0ClientOptions {
        /**
        * Login url if you're using ngRoute
        */
        loginUrl?: string;

        /**
        * Login state if you're using ui-router
        */
        loginState?: string;

        /**
        * Client identifier of your Auth0 application
        */
        clientID: string;

        /**
        * Domain of your Auth0 account
        */
        domain: string;

        /**
        * Use single signon
        */
        sso?: boolean;
    }

    interface ITokenOptions {

        targetClientId?: string;
        api?: string;
    }

    interface IAuth0Options {
        /**
        * Connection name
        */
        connection?: string;

        /**
        * Username
        */
        username?: string;

        /**
        * Email address
        */
        email?: string;
    }

    interface ISuccessCallback {
        (profile?: string, idToken?: string, accessToken?: string, state?: string, refreshToken?: string): void;
    }

    interface IErrorCallback {
        (error: any): void;
    }

    interface IAuth0Service {
        /**
        * Hooks to internal Angular events so that a user will be redirected to the login page if trying to visit a restricted resource
        */
        hookEvents(): void;

        /**
        * Performs a token delegation request exchanging th ecurrent token for another one.
        * @param options Token options
        */
        getToken(options?: ITokenOptions): ng.IPromise<any>;

        /**
        * Refreshes the Id token
        * @param refreshToken Refresh token to use when renewing
        */
        refreshIdToken(refreshToken: string): ng.IPromise<any>;

        /**
        * Renews the Id Token with the same scopes as the original token
        * @param id_token Id Token
        */
        renewIdToken(id_token: string): ng.IPromise<any>;

        /**
        * Logs in a user, returning tokens and profile information
        * @param options Options to bypass displaying the Lock UI
        * @param successCallback Callback on successful login
        * @param errorCallback Callback on failed login
        */
        signin(options?: IAuth0Options, successCallback?: ISuccessCallback, errorCallback?: IErrorCallback): void;

        /**
        * Displays Lock in signup mode, and logs the user in immediately after a successful signup.
        * @param options Options to bypass displaying the Lock UI
        * @param successCallback Callback on successful signup
        * @param errorCallback Callback on failed signup
        */
        signup(options?: IAuth0Options, successCallback?: ISuccessCallback, errorCallback?: IErrorCallback): void;

        /**
        * Performs the "forgot your password" flow.
        * @param options Options to bypass displaying the Lock UI
        * @param successCallback Callback on successful reset
        * @param errorCallback Callback on failed reset
        */
        reset(options?: IAuth0Options, successCallback?: ISuccessCallback, errorCallback?: IErrorCallback): void;

        /**
        * Validates the user
        * @param options Options to bypass displaying the Lock UI
        * @param successCallback Callback on successful validation
        * @param errorCallback Callback on failed validation
        */
        validateUser(options: IAuth0Options, successCallback?: ISuccessCallback, errorCallback?: IErrorCallback): void;

        /**
        * Logs the user out locally by deleting their token from local storage.
        */
        signout(): void;

        /**
        * Reauthenticates the user by using a stored profile and token without going through the login flow.
        * @param profile Profile of the user
        * @param idToken Id token
        * @param accessToken Access token
        * @param state State
        * @param refreshToken Flag to indicate refreshing the token
        */
        authenticate(profile?: any, idToken?: string, accessToken?: string, state?: any, refreshToken?: boolean): ng.IPromise<any>;

        /**
        * Gets the user's profile
        * @param idToken Id token
        */
        getProfile(idToken?: string): ng.IPromise<any>;

        // Properties

        accessToken: string;
        idToken: string;
        profile: any;
        isAuthenticated: boolean;
        config: any;
    }

    interface IAuth0ServiceProvider {
        /**
        * Configures the auth service
        * @param options Client options passed into Auth0
        */
        init(options: IAuth0ClientOptions): void;

        /**
        * @param event Name of the event to handle.
        * @param handler Event handler
        */
        on(event: string, handler: (...args: any[]) => any): void;
    }
}
