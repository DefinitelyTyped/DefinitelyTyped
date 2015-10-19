// Type definitions for Angulartics v0.19.2
// Project: http://luisfarzati.github.io/angulartics/
// Definitions by: Steven Fan <https://github.com/stevenfan>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />
declare module angulartics {

    interface IAngularticsStatic {
        waitForVendorApi(objectName:string, delay:number, containsField?:any, registerFn?:any, onTimeout?:boolean): void;
    }

    interface IAnalyticsService {
        eventTrack(eventName: string, properties?: any): any;
        pageTrack(path:string, location?:angular.ILocationService): any;
        setAlias(alias: string): any;
        setUsername(username: string): any;
        setUserProperties(properties: any): any;
        setSuperProperties(properties: any): any;
    }

    interface IAnalyticsServiceProvider extends angular.IServiceProvider {
        virtualPageviews(value: boolean): void;
        firstPageview(value: boolean): void;
        withBase(value: boolean): void;
        withAutoBase(value: boolean): void;
        developerMode(value: boolean): void;

        registerPageTrack(callback:(path:string, location?:angular.ILocationService) => any): void;
        registerEventTrack(callback: (eventName: string, properties?: any) => any): void;
        registerSetAlias(callback: (alias: string) => any): void
        registerSetUsername(callback: (username: string) => any): void
        registerSetUserProperties(callback: (userProperties: any) => any): void
        registerSetSuperProperties(callback: (superProperties: any) => any): void
        
        settings: { 
            pageTracking: { 
                autoTrackingVirtualPages: boolean,
                autoTrackingFirstPage: boolean,
                basePath: string,
                autoBasePath: boolean
            },
            developerMode: boolean
        }
    }
}

declare var angulartics:angulartics.IAngularticsStatic;
