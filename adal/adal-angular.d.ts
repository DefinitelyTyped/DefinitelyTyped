// Type definitions for ADAL.JS 1.0.8
// Project: https://github.com/AzureAD/azure-activedirectory-library-for-js
// Definitions by: mmaitre314 <https://github.com/mmaitre314>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/// <reference types="angular" />

declare namespace adal {

    interface AdalAuthenticationServiceProvider {
        init(configOptions: Config, httpProvider: angular.IHttpProvider): void;
    }

    interface UserInfo {
        isAuthenticated: boolean,
        userName: string,
        loginError: string,
        profile: any
    }

    interface AdalAuthenticationService {

        config: Config;
        userInfo: UserInfo,

        login(): void;
        loginInProgress(): boolean;
        logOut(): void;
        getCachedToken(resource: string): string;
        acquireToken(resource: string): angular.IPromise<string>;
        getUser(): angular.IPromise<User>;
        getResourceForEndpoint(endpoint: string): string,
        clearCache(): void;
        clearCacheForResource(resource: string): void;
        info(message: string): void;
        verbose(message: string): void;
    }

}