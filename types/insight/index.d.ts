// Type definitions for insight 0.8.0
// Project: https://github.com/yeoman/insight
// Definitions by: vvakame <https://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace insight {
    interface IPackage {
        name: string;
        version: string;
    }
    
    interface IOptions {
        trackingCode:string;
        trackingProvider?:string;
        pkg?:IPackage;
        packageName?:string;
        packageVersion?:string;
        config?:IConfigstore;
    }

    interface IConfigstore {
        path:string;
        all:any;
        get(key:string):any;
        set(key:string, val:any):void;
        del(key:string):void;
    }
    
    interface IEvent {
        category:string;
        action:string;
        label?:string;
        value?:number|string;
    }
}

import IPackage = insight.IPackage;
import IOptions = insight.IOptions;
import IConfigstore = insight.IConfigstore;
import IEvent = insight.IEvent;

declare class Insight {
    trackingCode:string;
    trackingProvider:string;
    packageName:string;
    packageVersion:string;
    os:string;
    nodeVersion:string;
    appVersion:string;
    config:IConfigstore;

    optOut:boolean;
    clientId:string;

    constructor(options:IOptions);

    track(...args:string[]):void;
    trackEvent(event:IEvent):void;

    askPermission(msg?:string, cb?:Function):void;
}

export = Insight;

