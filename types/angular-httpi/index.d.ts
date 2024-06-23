/// <reference types="angular" />

declare namespace Httpi {
    export interface HttpiPayload extends ng.IRequestShortcutConfig {
        method?: string | undefined;
        url?: string | undefined;
        params?: {} | undefined;
        data?: {} | undefined;
        keepTrailingSlash?: boolean | undefined;
    }

    export interface HttpiFactory {
        (config: HttpiPayload): ng.IHttpPromise<{}>;

        resource(url: string): HttpiResource;
    }

    export class HttpiResource {
        constructor(http: ng.IHttpService, url: string);

        delete<T>(config: HttpiPayload): ng.IHttpPromise<T>;

        get<T>(config: HttpiPayload): ng.IHttpPromise<T>;

        head<T>(config: HttpiPayload): ng.IHttpPromise<T>;

        jsonp<T>(config: HttpiPayload): ng.IHttpPromise<T>;

        post<T>(config: HttpiPayload): ng.IHttpPromise<T>;

        put<T>(config: HttpiPayload): ng.IHttpPromise<T>;

        setKeepTrailingSlash(newKeepTrailingSlash: boolean): HttpiResource;
    }
}
