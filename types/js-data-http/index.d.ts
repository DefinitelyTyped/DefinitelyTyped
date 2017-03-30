// Type definitions for JSData Http Adapter 1.2
// Project: https://github.com/js-data/js-data-http 2.2
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as JSData from 'js-data';

declare module 'js-data' {
    interface DSHttpAdapterOptions {
        serialize?(resourceName: string, data: any): any;
        deserialize?(resourceName: string, data: any): any;
        queryTransform?(resourceName: string, params: DSFilterParams): any;
        httpConfig?: any;
        forceTrailingSlash?: boolean;
        log?: boolean | ((message?: any, ...optionalParams: any[]) => void);
        error?: boolean | ((message?: any, ...optionalParams: any[]) => void);
        basePath?: string;
        verbsUseBasePath?: string;
    }

    interface DSHttpAdapterPromiseResolveType {
        data: any;
        headers: any;
        status: number;
        config: any;
    }

    interface DSHttpAdapter extends IDSAdapter {
        new(options?: DSHttpAdapterOptions): DSHttpAdapter;

        defaults: DSHttpAdapterOptions;
        http: any;

        // DSHttpAdapter uses axios so options are axios config objects.
        HTTP(options?: Object): JSDataPromise<DSHttpAdapterPromiseResolveType>;
        DEL(url: string, data?: Object, options?: Object): JSDataPromise<DSHttpAdapterPromiseResolveType>;
        GET(url: string, data?: Object, options?: Object): JSDataPromise<DSHttpAdapterPromiseResolveType>;
        POST(url: string, data?: Object, options?: Object): JSDataPromise<DSHttpAdapterPromiseResolveType>;
        PUT(url: string, data?: Object, options?: Object): JSDataPromise<DSHttpAdapterPromiseResolveType>;
    }
}

declare var DSHttpAdapter: JSData.DSHttpAdapter;
export = DSHttpAdapter;
export as namespace DSHttpAdapter;
