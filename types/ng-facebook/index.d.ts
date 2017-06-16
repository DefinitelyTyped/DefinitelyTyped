// Type definitions for ng-facebook
// Project: https://github.com/GoDisco/ngFacebook
// Definitions by: Crevil <https://github.com/Crevil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />
/// <reference types="fb" />

import * as angular from 'angular';

declare module 'angular' {
    export namespace ngFacebook {
        interface IFacebookProvider {
            setAppId(appId: string): IFacebookProvider;
            getAppId(): string;

            setVersion(version: string): IFacebookProvider;
            getVersion(): string;

            setPermissions(permissions: string | Array<string>): IFacebookProvider;
            getPermissions(): string;

            setCustomInit(customInit: FBInitParams): IFacebookProvider;
            getCustomInit(): FBInitParams;
        }

        interface IFacebookService {
            config<T extends string | number | FBInitParams>(property: string): T;
            init(): void;

            setCache<T>(attr: string, val: T): void;
            getCache<T>(attr: string): T;
            clearCache(): void;

            isConnected(): boolean;
            getAuthResponse(): {};
            getLoginStatus(force?: boolean): angular.IPromise<{}>;
            login(permissions?: string, rerequest?: boolean): angular.IPromise<{}>;
            logout(): angular.IPromise<void>;

            ui(params: FBUIParams): angular.IPromise<any>;
            api(path: string): angular.IPromise<{}>;
            api(path: string, method: string): angular.IPromise<{}>;
            api(path: string, params: Object): angular.IPromise<{}>;
            api(path: string, method: string, params: Object): angular.IPromise<{}>;

            cachedApi(path: string): angular.IPromise<any>;
        }
    }
}
