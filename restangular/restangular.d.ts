// Type definitions for Restangular v1.2.2
// Project: https://github.com/mgonto/restangular
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../angularjs/angular.d.ts" />

interface RestangularRequestConfig {
    params?: any;
    headers?: any;
    cache?: any;
    withCredentials?: boolean;
    data?: any;
    transformRequest?: any;
    transformResponse?: any;
    timeout?: any; // number | promise
}

interface Restangular extends RestangularCustom {
    one(route: string, id?: number): RestangularElement;
    one(route: string, id?: string): RestangularElement;
    oneUrl(route: string, url: string): RestangularElement;
    all(route: string): RestangularCollection;
    allUrl(route: string, url: string): RestangularCollection;
    copy(fromElement: any): RestangularElement;
    withConfig(configurer: (RestangularProvider: RestangularProvider) => any): Restangular;
    restangularizeElement(parent: any, element: any, route: string, collection?: any, reqParams?: any): RestangularElement;
    restangularizeCollection(parent: any, element: any, route: string): RestangularCollection;
    stripRestangular(element: any): any;
}

interface RestangularElement extends Restangular {
    get(queryParams?: any, headers?: any): ng.IPromise<any>;
    getList(subElement: any, queryParams?: any, headers?: any): ng.IPromise<any>;
    put(queryParams?: any, headers?: any): ng.IPromise<any>;
    post(subElement: any, elementToPost: any, queryParams?: any, headers?: any): ng.IPromise<any>;
    remove(queryParams?: any, headers?: any): ng.IPromise<any>;
    head(queryParams?: any, headers?: any): ng.IPromise<any>;
    trace(queryParams?: any, headers?: any): ng.IPromise<any>;
    options(queryParams?: any, headers?: any): ng.IPromise<any>;
    patch(queryParams?: any, headers?: any): ng.IPromise<any>;
    withHttpConfig(httpConfig: RestangularRequestConfig): RestangularElement;
    getRestangularUrl(): string;
}

interface RestangularCollection extends Restangular {
    getList(queryParams?: any, headers?: any): ng.IPromise<any>;
    post(elementToPost: any, queryParams?: any, headers?: any): ng.IPromise<any>;
    head(queryParams?: any, headers?: any): ng.IPromise<any>;
    trace(queryParams?: any, headers?: any): ng.IPromise<any>;
    options(queryParams?: any, headers?: any): ng.IPromise<any>;
    patch(queryParams?: any, headers?: any): ng.IPromise<any>;
    putElement(idx: any, params: any, headers: any): ng.IPromise<any>;
    withHttpConfig(httpConfig: RestangularRequestConfig): RestangularCollection;
    getRestangularUrl(): string;
}

interface RestangularCustom {
    customGET(path: string, params?: any, headers?: any): ng.IPromise<any>;
    customGETLIST(path: string, params?: any, headers?: any): ng.IPromise<any>;
    customDELETE(path: string, params?: any, headers?: any): ng.IPromise<any>;
    customPOST(path: string, params?: any, headers?: any, elem?: any): ng.IPromise<any>;
    customPUT(path: string, params?: any, headers?: any, elem?: any): ng.IPromise<any>;
    customOperation(operation: string, path: string, params?: any, headers?: any, elem?: any): ng.IPromise<any>;
    addRestangularMethod(name: string, operation: string, path?: string, params?: any, headers?: any, elem?: any): ng.IPromise<any>;
}

interface RestangularProvider {
    setBaseUrl(baseUrl: string): void;
    setExtraFields(fields: string[]): void;
    setParentless(parentless: boolean, routes: string[]): void;
    setDefaultHttpFields(httpFields: any): void;
    addElementTransformer(route: string, transformer: Function): void;
    addElementTransformer(route: string, isCollection: boolean, transformer: Function): void;
    setOnElemRestangularized(callback: (elem: any, isCollection: boolean, what: string, restangular: Restangular) => any): void;
    setResponseInterceptor(responseInterceptor: (data: any, operation: string, what: string, url: string, response: RestangularResponse, deferred: ng.IDeferred<any>) => any): void;
    setResponseExtractor(responseInterceptor: (data: any, operation: string, what: string, url: string, response: RestangularResponse, deferred: ng.IDeferred<any>) => any): void;
    setRequestInterceptor(requestInterceptor: (element: any, operation: string, what: string, url: string) => any): void;
    setFullRequestInterceptor(fullRequestInterceptor: (element: any, operation: string, what: string, url: string, headers: any, params: any) => {element: any; headers: any; params: any}): void;
    setErrorInterceptor(errorInterceptor: (response: RestangularResponse) => any): void;
    setRestangularFields(fields: {[fieldName: string]: string}): void;
    setMethodOverriders(overriders: string[]): void;
    setDefaultRequestParams(params: any): void;
    setDefaultRequestParams(methods: any, params: any): void;
    setFullResponse(fullResponse: boolean): void;
    setDefaultHeaders(headers: any): void;
    setRequestSuffix(suffix: string): void;
    setUseCannonicalId(useCannonicalId: boolean): void;
}

interface RestangularResponse {
    status: number;
    data: any;
    config: {
        method: string;
        url: string;
        params: any;
    }
}

declare var Restangular: Restangular;
declare var RestangularProvider: RestangularProvider;
