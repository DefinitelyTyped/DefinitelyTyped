// Type definitions for Angulartics 1.4
// Project: http://luisfarzati.github.io/angulartics/
// Definitions by: Bateast2 <https://github.com/bateast2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as angular from 'angular';

export = angulartics;//AMD/Require module support
export as namespace angulartics;//UMD module support
declare namespace angulartics {

    interface IAngularticsStatic {
        waitForVendorApi(objectName: string, delay: number, containsField?: any, registerFn?: any, onTimeout?: boolean): void;
    }

    interface IAnalyticsService {
        pageTrack(path: string, location?: angular.ILocationService): any;
        eventTrack(eventName: string, properties?: any): any;
        exceptionTrack(error: any, cause: string): any;
        transactionTrack: any;
        setAlias(alias: string): any;
        setUsername(username: string): any;
        setUserProperties(userProperties: any): any;
        setUserPropertiesOnce(userProperties: any): any;
        setSuperProperties(superProperties: any): any;
        setSuperPropertiesOnce(superProperties: any): any;
        incrementProperty(property: string, value?: any): any;
        userTimings(properties: any): any;
        clearCookies: any;

        getOptOut(): boolean;
        setOptOut(value: boolean): void;
    }

    interface IAnalyticsServiceProvider extends angular.IServiceProvider {
        virtualPageviews(value: boolean): void;
        trackStates(value: boolean): void;
        trackRoutes(value: boolean): void;
        excludeRoutes(value: string[]): void;
        queryKeysWhitelist(keys: string[]): void
        queryKeysBlacklist(keys: string[]): void
        firstPageview(value: boolean): void;
        withBase(value: boolean): void;
        withAutoBase(value: boolean): void;
        trackExceptions(value: boolean): void;
        developerMode(value: boolean): void;

        registerPageTrack(callback: (path: string, location?: angular.ILocationService) => any): void;
        registerEventTrack(callback: (eventName: string, properties?: any) => any): void;
        registerTransactionTrack(callback: any): void;
        registerSetAlias(callback: (alias: string) => any): void;
        registerSetUsername(callback: (username: string) => any): void;
        registerSetUserProperties(callback: (userProperties: any) => any): void;
        registerSetUserPropertiesOnce(callback: (userProperties: any) => any): void;
        registerSetSuperProperties(callback: (superProperties: any) => any): void;
        registerSetSuperPropertiesOnce(callback: (superProperties: any) => any): void;
        registerIncrementProperty(callback: (property: string, value?: any) => any): void;
        registerUserTimings(callback: (properties: any) => any): void;
        registerClearCookies(callback: any): void;

        settings: {
            pageTracking: {
                autoTrackingVirtualPages: boolean,
                autoTrackingFirstPage: boolean,
                trackRelativePath: boolean,
                trackRoutes: boolean,
                trackStates: boolean,
                autoBasePath: boolean,
                basePath: string,
                excludedRoutes: string[],
                queryKeysWhitelisted: string[],
                queryKeysBlacklisted: string[]
            },
            eventTracking: {},
            bufferFlushDelay: number,
            trackExceptions: boolean,
            optOut: boolean,
            developerMode: boolean
        };
    }
}

declare var angulartics: angulartics.IAngularticsStatic;
