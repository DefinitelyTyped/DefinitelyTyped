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
    withConfig(configurer: any): Restangular;
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
    setBaseUrl(newValue: string): void;
    setExtraFields(newValues: string[]): void;
    setDefaultHttpFields(newValue: any): void;
    setMethodOverriders(newValue: any): void;
    setResponseExtractor(newValue: any): void;
    setRequestInterceptor(newValue: any): void;
    setListTypeIsArray(newValue: boolean): void;
    setRestangularFields(newValue: any): void;
    setRequestSuffix(newValue: any): void;
    addElementTransformer(type, secondArg, thirdArg): void;
}

declare var Restangular: Restangular;
declare var RestangularProvider: RestangularProvider;
