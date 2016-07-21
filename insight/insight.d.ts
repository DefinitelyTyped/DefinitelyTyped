// Type definitions for insight 0.4.3
// Project: https://github.com/yeoman/insight
// Definitions by: vvakame <http://github.com/vvakame>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace insight {
    interface IOptions {
        trackingCode:string;
        trackingProvider?:string;
        packageName:string;
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
}

declare module "insight" {
    import IOptions = insight.IOptions;
    import IConfigstore = insight.IConfigstore;

    class Insight {
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

        askPermission(msg?:string, cb?:Function):void;
    }

    export = Insight;
}
