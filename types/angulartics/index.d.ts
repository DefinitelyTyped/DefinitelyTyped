// Type definitions for Angulartics 1.3
// Project: http://luisfarzati.github.io/angulartics/
// Definitions by: Steven Fan <https://github.com/stevenfan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as angular from 'angular';

declare namespace angulartics {

    interface IAngularticsStatic {
        waitForVendorApi(objectName: string, delay: number, containsField?: any, registerFn?: any, onTimeout?: boolean): void;
    }

    interface IAnalyticsService {
        eventTrack(eventName: string, properties?: any): any;
        getOptOut(): boolean;
        pageTrack(path: string, location?: angular.ILocationService): any;
        setAlias(alias: string): any;
        setOptOut(value: boolean): void;
        setUsername(username: string): any;
        setUserProperties(properties: any): any;
        setSuperProperties(properties: any): any;
    }

    interface IAnalyticsServiceProvider extends angular.IServiceProvider {
        virtualPageviews(value: boolean): void;
        excludeRoutes(value: string[]): void;
        firstPageview(value: boolean): void;
        withBase(value: boolean): void;
        withAutoBase(value: boolean): void;
        developerMode(value: boolean): void;
        trackExceptions(value: boolean): void;
        trackRoutes(value: boolean): void;
        trackStates(value: boolean): void;

        registerPageTrack(callback: (path: string, location?: angular.ILocationService) => any): void;
        registerEventTrack(callback: (eventName: string, properties?: any) => any): void;
        registerSetAlias(callback: (alias: string) => any): void;
        registerSetUsername(callback: (username: string) => any): void;
        registerSetUserProperties(callback: (userProperties: any) => any): void;
        registerSetSuperProperties(callback: (superProperties: any) => any): void;

        settings: {
            pageTracking: {
                autoTrackingVirtualPages: boolean,
                autoTrackingFirstPage: boolean,
                basePath: string,
                autoBasePath: boolean
            },
            developerMode: boolean
        };
    }
}

declare var angulartics: angulartics.IAngularticsStatic;
