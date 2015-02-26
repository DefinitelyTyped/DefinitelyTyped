// Type definitions for JSData Http Adapter v1.2.0
// Project: https://github.com/js-data/js-data-http
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../js-data/js-data.d.ts" />

declare module JSData_ {
    
    interface DSHttpAdapterOptions {
        serialize?: (resourceName:string, data:any)=>any;
        deserialize?: (resourceName:string, data:any)=>any;
        queryTransform?: (resourceName:string, params:DSFilterParams)=>any;
        httpConfig?: any;
        forceTrailingSlash?: boolean;
        log?: any;
        // TODO wait for union types to be supported
        // log: (message?: any, ...optionalParams: any[])=> void;
        // log: boolean;
        error?: any;
        // TODO wait for union types to be supported
        // error: (message?: any, ...optionalParams: any[])=> void;
        // error: boolean;
    }

    interface DSHttpAdapterPromiseResolveType {
        data: any;
        headers: any;
        status: number;
        config: any;
    }

    interface DSHttpAdapter extends IDSAdapter {

        new(options?:DSHttpAdapterOptions):DSHttpAdapter;

        // DSHttpAdapter uses axios so options are axios config objects.
        HTTP(options?:Object):Promise<DSHttpAdapterPromiseResolveType>;
        DEL(url:string, data?:Object, options?:Object):Promise<DSHttpAdapterPromiseResolveType>;
        GET(url:string, data?:Object, options?:Object):Promise<DSHttpAdapterPromiseResolveType>;
        POST(url:string, data?:Object, options?:Object):Promise<DSHttpAdapterPromiseResolveType>;
        PUT(url:string, data?:Object, options?:Object):Promise<DSHttpAdapterPromiseResolveType>;
    }
}

declare var DSHttpAdapter:JSData_.DSHttpAdapter;