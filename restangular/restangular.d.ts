// Type definitions for Restangular v0.8.0 - 2013-06-03
// Project: https://github.com/mgonto/restangular
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../angularjs/angular.d.ts" />

interface Restangular extends RestangularCustom {
    one(route: string, id?: number): RestangularElement;
    one(route: string, id?: string): RestangularElement;
    all(route: string): RestangularCollection;
    copy(fromElement: any): RestangularElement;
    withConfig(configurer: (RestangularProvider) => any): Restangular;
}

interface RestangularElement extends Restangular {
    get (queryParams?: any, headers?: any): ng.IPromise<any>;
    getList(subElement: any, queryParams?: any, headers?: any): ng.IPromise<any>;
    put(queryParams?: any, headers?: any): ng.IPromise<any>;
    post(subElement, elementToPost, queryParams?, headers?): ng.IPromise<any>;
    remove(queryParams?, headers?): ng.IPromise<any>;
    head(queryParams?, headers?): ng.IPromise<any>;
    trace(queryParams?, headers?): ng.IPromise<any>;
    options(queryParams?, headers?): ng.IPromise<any>;
    patch(queryParams?, headers?): ng.IPromise<any>;
    getRestangularUrl(): string;
}

interface RestangularCollection extends Restangular {
    getList(queryParams?, headers?): ng.IPromise<any>;
    post(elementToPost, queryParams?, headers?): ng.IPromise<any>;
    head(queryParams?, headers?): ng.IPromise<any>;
    trace(queryParams?, headers?): ng.IPromise<any>;
    options(queryParams?, headers?): ng.IPromise<any>;
    patch(queryParams?, headers?): ng.IPromise<any>;
    putElement(idx, params, headers): ng.IPromise<any>;
    getRestangularUrl(): string;
}

interface RestangularCustom {
    customGET(path, params?, headers?): ng.IPromise<any>;
    customGETLIST(path, params?, headers?): ng.IPromise<any>;
    customDELETE(path, params?, headers?): ng.IPromise<any>;
    customPOST(path, params?, headers?, elem?): ng.IPromise<any>;
    customPUT(path, params?, headers?, elem?): ng.IPromise<any>;
    customOperation(operation, path, params?, headers?, elem?): ng.IPromise<any>;
    addRestangularMethod(name, operation, path?, params?, headers?, elem?): ng.IPromise<any>;
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
    setRequestInterceptor(requestInterceptor: (element: any, operation: string, what: string, url: string) => any);
    setFullRequestInterceptor(fullRequestInterceptor: (element: any, operation: string, what: string, url: string, headers: any, params: any) => {element: any; headers: any; params: any});
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
