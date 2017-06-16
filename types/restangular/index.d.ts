// Type definitions for Restangular v1.5.0
// Project: https://github.com/mgonto/restangular
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="angular" />

// Support AMD require (copying angular.d.ts approach)
// allows for import {IRequestConfig} from 'restangular' ES6 approach
import * as angular from 'angular';
export = restangular;
export as namespace Restangular;

declare namespace restangular {

  interface IPromise<T> extends angular.IPromise<T> {
    call(methodName: string, params?: any): IPromise<T>;
    get(fieldName: string): IPromise<T>;
    $object: T;
}

  interface ICollectionPromise<T> extends angular.IPromise<T[]> {
    push(object: any): ICollectionPromise<T>;
    call(methodName: string, params?: any): ICollectionPromise<T>;
    get(fieldName: string): ICollectionPromise<T>;
    $object: T[];
  }

  interface IResponse {
    status: number;
    data: any;
    headers(name: string): string;
    config: {
        method: string;
        url: string;
        params: any;
    }
  }

  interface IProvider {
    setBaseUrl(baseUrl: string): IProvider;
    setExtraFields(fields: string[]): IProvider;
    setParentless(parentless: boolean, routes: string[]): IProvider;
    setDefaultHttpFields(httpFields: any): IProvider;
    addElementTransformer(route: string, transformer: Function): IProvider;
    addElementTransformer(route: string, isCollection: boolean, transformer: Function): IProvider;
    setTransformOnlyServerElements(active: boolean): IProvider;
    setOnElemRestangularized(callback: (elem: any, isCollection: boolean, what: string, restangular: IService) => any): IProvider;
    setResponseInterceptor(responseInterceptor: (data: any, operation: string, what: string, url: string, response: IResponse, deferred: angular.IDeferred<any>) => any): IProvider;
    setResponseExtractor(responseInterceptor: (data: any, operation: string, what: string, url: string, response: IResponse, deferred: angular.IDeferred<any>) => any): IProvider;
    addResponseInterceptor(responseInterceptor: (data: any, operation: string, what: string, url: string, response: IResponse, deferred: angular.IDeferred<any>) => any): IProvider;
    setRequestInterceptor(requestInterceptor: (element: any, operation: string, what: string, url: string) => any): IProvider;
    addRequestInterceptor(requestInterceptor: (element: any, operation: string, what: string, url: string) => any): IProvider;
    setFullRequestInterceptor(fullRequestInterceptor: (element: any, operation: string, what: string, url: string, headers: any, params: any, httpConfig: angular.IRequestShortcutConfig) => {element: any; headers: any; params: any}): IProvider;
    addFullRequestInterceptor(requestInterceptor: (element: any, operation: string, what: string, url: string, headers: any, params: any, httpConfig: angular.IRequestShortcutConfig) => {headers: any; params: any; element: any; httpConfig: angular.IRequestShortcutConfig}): IProvider;
    setErrorInterceptor(errorInterceptor: (response: IResponse, deferred: angular.IDeferred<any>, responseHandler: (response: restangular.IResponse) => any) => any): IProvider;
    setRestangularFields(fields: {[fieldName: string]: string}): IProvider;
    setMethodOverriders(overriders: string[]): IProvider;
    setJsonp(jsonp: boolean): IProvider;
    setDefaultRequestParams(params: any): IProvider;
    setDefaultRequestParams(method: string, params: any): IProvider;
    setDefaultRequestParams(methods: string[], params: any): IProvider;
    setFullResponse(fullResponse: boolean): IProvider;
    setDefaultHeaders(headers: any): IProvider;
    setRequestSuffix(suffix: string): IProvider;
    setUseCannonicalId(useCannonicalId: boolean): IProvider;
    setEncodeIds(encode: boolean): IProvider;
    setSelfLinkAbsoluteUrl(value: boolean): IProvider;
    setParentless(value: any) : IProvider;
  }

  interface ICustom {
    customGET(path: string, params?: any, headers?: any): IPromise<any>;
    customGETLIST(path: string, params?: any, headers?: any): ICollectionPromise<any>;
    customDELETE(path: string, params?: any, headers?: any): IPromise<any>;
    customPOST(elem?: any, path?: string, params?: any, headers?: any): IPromise<any>;
    customPUT(elem?: any, path?: string, params?: any, headers?: any): IPromise<any>;
    customPATCH(elem?: any, path?: string, params?: any, headers?: any): IPromise<any>;
    customOperation(operation: string, path: string, params?: any, headers?: any, elem?: any): IPromise<any>;
    addRestangularMethod(name: string, operation: string, path?: string, params?: any, headers?: any, elem?: any): IPromise<any>;
  }

  interface IService extends ICustom, IProvider {
    one(route: string, id?: number): IElement;
    one(route: string, id?: string): IElement;
    oneUrl(route: string, url: string): IElement;
    all(route: string): ICollection;
    allUrl(route: string, url: string): ICollection;
    copy(fromElement: any): IElement;
    withConfig(configurer: (RestangularProvider: IProvider) => any): IService;
    restangularizeElement(parent: any, element: any, route: string, collection?: any, reqParams?: any): IElement;
    restangularizeCollection(parent: any, element: any, route: string): ICollection;
    service(route: string, parent?: any): IScopedService;
    stripRestangular(element: any): any;
    extendModel(route: string, extender: (model: IElement) => any): void;
    extendCollection(route: string, extender: (collection: ICollection) => any): void;
  }

  interface IScopedService extends IService {
    one(id: number): IElement;
    one(id: string): IElement;
    post(elementToPost: any, queryParams?: any, headers?: any): IPromise<any>;
    post<T>(elementToPost: T, queryParams?: any, headers?: any): IPromise<T>;
    getList(queryParams?: any, headers?: any): ICollectionPromise<any>;
    getList<T>(queryParams?: any, headers?: any): ICollectionPromise<T>;
  }

  interface IScopedService extends IService {
    one(id: number): IElement;
    one(id: string): IElement;
    post(elementToPost: any, queryParams?: any, headers?: any): IPromise<any>;
    post<T>(elementToPost: T, queryParams?: any, headers?: any): IPromise<T>;
    getList(queryParams?: any, headers?: any): ICollectionPromise<any>;
    getList<T>(queryParams?: any, headers?: any): ICollectionPromise<T>;
  }

  interface IElement extends IService {
    get(queryParams?: any, headers?: any): IPromise<any>;
    get<T>(queryParams?: any, headers?: any): IPromise<T>;
    getList(subElement?: any, queryParams?: any, headers?: any): ICollectionPromise<any>;
    getList<T>(subElement?: any, queryParams?: any, headers?: any): ICollectionPromise<T>;
    put(queryParams?: any, headers?: any): IPromise<any>;
    post(subElement: any, elementToPost: any, queryParams?: any, headers?: any): IPromise<any>;
    post<T>(subElement: any, elementToPost: T, queryParams?: any, headers?: any): IPromise<T>;
    remove(queryParams?: any, headers?: any): IPromise<any>;
    head(queryParams?: any, headers?: any): IPromise<any>;
    trace(queryParams?: any, headers?: any): IPromise<any>;
    options(queryParams?: any, headers?: any): IPromise<any>;
    patch(queryParams?: any, headers?: any): IPromise<any>;
    clone(): IElement;
    plain(): any;
    plain<T>(): T;
    withHttpConfig(httpConfig: angular.IRequestShortcutConfig): IElement;
    save(queryParams?: any, headers?: any): IPromise<any>;
    getRestangularUrl(): string;
    getRequestedUrl(): string;
    route?: string;
    id?: string;
    reqParams?: any;
  }

  interface ICollection extends IService, Array<any> {
    getList(queryParams?: any, headers?: any): ICollectionPromise<any>;
    getList<T>(queryParams?: any, headers?: any): ICollectionPromise<T>;
    post(elementToPost: any, queryParams?: any, headers?: any): IPromise<any>;
    post<T>(elementToPost: T, queryParams?: any, headers?: any): IPromise<T>;
    head(queryParams?: any, headers?: any): IPromise<any>;
    trace(queryParams?: any, headers?: any): IPromise<any>;
    options(queryParams?: any, headers?: any): IPromise<any>;
    patch(queryParams?: any, headers?: any): IPromise<any>;
    putElement(idx: any, params: any, headers: any): IPromise<any>;
    withHttpConfig(httpConfig: angular.IRequestShortcutConfig): ICollection;
    clone(): ICollection;
    plain(): any;
    plain<T>(): T[];
    getRestangularUrl(): string;
    getRequestedUrl(): string;
  }
}
