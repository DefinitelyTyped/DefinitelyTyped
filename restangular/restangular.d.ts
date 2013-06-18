// Type definitions for Restangular v0.8.0 - 2013-06-03
// Project: https://github.com/mgonto/restangular
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="../angularjs/angular.d.ts" />

interface Restangular extends RestangularCustom {
    one(route: string, id?: number): RestangularElement;
    all(route: string): RestangularCollection;
    copy(fromElement: any): RestangularElement;
    withConfig(configurer: any): RestangularElement;
}

interface RestangularElement extends Restangular {
    get (): ng.IPromise;
    get (params: any): ng.IPromise;
    get (params: any, headers: any): ng.IPromise;

    getList(): ng.IPromise;
    getList(subElement: any): ng.IPromise;
    getList(subElement: any, queryParams: string, headers: any): ng.IPromise;

    put(queryParams?: string, headers?: any): ng.IPromise;

    post(subElement, elementToPost, queryParams?, headers?): ng.IPromise;

    remove(queryParams?, headers?): ng.IPromise;
    head(queryParams?, headers?): ng.IPromise;
    trace(queryParams?, headers?): ng.IPromise;
    options(queryParams?, headers?): ng.IPromise;
    patch(queryParams?, headers?): ng.IPromise;
}

interface RestangularCollection extends Restangular {
    getList(queryParams?, headers?): ng.IPromise;
    post(elementToPost, queryParams?, headers?): ng.IPromise;
    head(queryParams?, headers?): ng.IPromise;
    trace(queryParams?, headers?): ng.IPromise;
    options(queryParams?, headers?): ng.IPromise;
    patch(queryParams?, headers?): ng.IPromise;
    putElement(idx, params, headers): ng.IPromise;
}

interface RestangularCustom {
    customGET(path, params?, headers?): ng.IPromise;
    customGETLIST(path, params?, headers?): ng.IPromise;
    customDELETE(path, params?, headers?): ng.IPromise;
    customPOST(path, params?, headers?, elem?): ng.IPromise;
    customPUT(path, params?, headers?, elem?): ng.IPromise;
    customOperation(operation, path, params?, headers?, elem?): ng.IPromise;
    addRestangularMethod(name, operation, path?, params?, headers?, elem?): ng.IPromise;
}

interface RestangularProvider {
    setBaseUrl(newValue: string): void;
    setExtraFields(newValues: string[]): void;
    setDefaultHttpFields(newValue: any): void;
    setMethodOverriders(newValue: any): void;
    setResponseExtractor(newValue: any): void;
    setRequestInterceptor(newValue: any): void;
    setListTypeIsArray(newValue: bool): void;
    setRestangularFields(newValue: any): void;
    setRequestSuffix(newValue: any): void;
    addElementTransformer(type, secondArg, thirdArg): void;
}

declare var Restangular: Restangular;
declare var RestangularProvider: RestangularProvider;