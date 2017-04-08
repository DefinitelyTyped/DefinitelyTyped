// Type definitions for vue-resoure 0.9.3
// Project: https://github.com/vuejs/vue-resource
// Definitions by: kaorun343 <https://github.com/kaorun343>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="vue" />

declare namespace vuejs {

    interface HttpHeaders {
        put?: { [key: string]: string };
        post?: { [key: string]: string };
        patch?: { [key: string]: string };
        delete?: { [key: string]: string };
        common?: { [key: string]: string };
        custom?: { [key: string]: string };
        [key: string]: any;
    } 

    interface HttpResponse {
        data: Object;
        ok: boolean;
        status: number;
        statusText: string;
        headers: Function;
        text():string;
        json():any;
        blob():Blob;
    }

    interface HttpOptions {
        url?: string;
        method?: string;
        body?: any;
        params?: any;
        headers?: any;
        before?(request: any): any;
        progress?(event: any): any;
        credentials?:boolean;
        emulateHTTP?: boolean;
        emulateJSON?: boolean;
    }

    interface $http {
        (url: string, data?: any, options?: HttpOptions): PromiseLike<HttpResponse>;
        (url: string, options?: HttpOptions): PromiseLike<HttpResponse>;
    }

    interface HttpInterceptor {
        request?(request: HttpOptions): HttpOptions;
        response?(response: HttpResponse): HttpResponse;
    }

    interface Http {
        options: HttpOptions & { root: string };
        headers: HttpHeaders;
        interceptors: (HttpInterceptor | (() => HttpInterceptor))[];
        get: $http;
        post: $http;
        put: $http;
        patch: $http;
        delete: $http;
        jsonp: $http;
    }

    interface ResourceActions {
        get: { method: string };
        save: { method: string };
        query: { method: string };
        update: { method: string };
        remove: { method: string };
        delete: { method: string };
    }

    interface ResourceMethod {
        (params: any, data?: any, success?: Function, error?: Function): PromiseLike<HttpResponse>;
        (params: any, success?: Function, error?: Function): PromiseLike<HttpResponse>;
        (success?: Function, error?: Function): PromiseLike<HttpResponse>;
    }

    interface ResourceMethods {
        get: ResourceMethod;
        save: ResourceMethod;
        query: ResourceMethod;
        update: ResourceMethod;
        remove: ResourceMethod;
        delete: ResourceMethod;
    }

    interface $resource {
        (url: string, params?: Object, actions?: any, options?: HttpOptions): ResourceMethods;
    }

    interface Resource extends $resource {
        actions: ResourceActions;
    }

    interface Vue {
        $http: {
            (options: HttpOptions): PromiseLike<HttpResponse>;
            get: $http;
            post: $http;
            put: $http;
            patch: $http;
            delete: $http;
            jsonp: $http;
        };
        $resource: $resource;
    }

    interface VueStatic {
        http: Http;
        resource: Resource;
    }

    interface ComponentOption {
        http?: (HttpOptions & { headers?: HttpHeaders } & { [key: string]: any })
    }
}

declare module "vue-resource" {
    const install: (vue: vuejs.VueStatic) => void;
    export = install;
}
