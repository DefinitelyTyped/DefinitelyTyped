// Type definitions for angular-httpi
// Project: https://github.com/bennadel/httpi
// Definitions by: Andrew Camilleri <https://github.com/Kukks>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

declare module Httpi {
    export interface HttpiPayload extends ng.IRequestShortcutConfig {
        method?: string;
        url?: string;
        params?: {};
        data?: {};
        keepTrailingSlash?: boolean;
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