// Type definitions for Angular JS 1.5 (ngResource module)
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>, Michael Jess <http://github.com/miffels>
// Definitions: https://github.com/daptiv/DefinitelyTyped

/// <reference path="angular.d.ts" />

declare module 'angular-resource' {
    var _: string;
    export = _;
}

///////////////////////////////////////////////////////////////////////////////
// ngResource module (angular-resource.js)
///////////////////////////////////////////////////////////////////////////////
declare namespace angular.resource {

    /**
     * Currently supported options for the $resource factory options argument.
     */
    interface IResourceOptions {
        /**
         * If true then the trailing slashes from any calculated URL will be stripped (defaults to true)
         */
        stripTrailingSlashes?: boolean;
        /**
         * If true, the request made by a "non-instance" call will be cancelled (if not already completed) by calling
         * $cancelRequest() on the call's return value. This can be overwritten per action. (Defaults to false.)
         */
        cancellable?: boolean;
    }


    ///////////////////////////////////////////////////////////////////////////
    // ResourceService
    // see http://docs.angularjs.org/api/ngResource.$resource
    // Most part of the following definitions were achieved by analyzing the
    // actual implementation, since the documentation doesn't seem to cover
    // that deeply.
    ///////////////////////////////////////////////////////////////////////////
    interface IResourceService {
        (url: string, paramDefaults?: any,
            /** example:  {update: { method: 'PUT' }, delete: deleteDescriptor }
             where deleteDescriptor : IActionDescriptor */
            actions?: IActionHash, options?: IResourceOptions): IResourceClass<IResource<any>>;
        <T, U>(url: string, paramDefaults?: any,
            /** example:  {update: { method: 'PUT' }, delete: deleteDescriptor }
             where deleteDescriptor : IActionDescriptor */
            actions?: IActionHash, options?: IResourceOptions): U;
        <T>(url: string, paramDefaults?: any,
            /** example:  {update: { method: 'PUT' }, delete: deleteDescriptor }
             where deleteDescriptor : IActionDescriptor */
            actions?: IActionHash, options?: IResourceOptions): IResourceClass<T>;
    }
    
    // Hash of action descriptors allows custom action names
    interface IActionHash {
        [action: string]: IActionDescriptor
    }

    // Just a reference to facilitate describing new actions
    interface IActionDescriptor {
        method: string;
        params?: any;
        url?: string;
        isArray?: boolean;
        transformRequest?: angular.IHttpRequestTransformer | angular.IHttpRequestTransformer[];
        transformResponse?: angular.IHttpResponseTransformer | angular.IHttpResponseTransformer[];
        headers?: any;
        cache?: boolean | angular.ICacheObject;
        /**
         * Note: In contrast to $http.config, promises are not supported in $resource, because the same value
         * would be used for multiple requests. If you are looking for a way to cancel requests, you should
         * use the cancellable option.
         */
        timeout?: number
        cancellable?: boolean;
        withCredentials?: boolean;
        responseType?: string;
        interceptor?: IHttpInterceptor;
    }

    // Allow specify more resource methods
    // No need to add duplicates for all four overloads.
    interface IResourceMethod<T> {
        (): T;
        (params: Object): T;
        (success: Function, error?: Function): T;
        (params: Object, success: Function, error?: Function): T;
        (params: Object, data: Object, success?: Function, error?: Function): T;
    }

    // Allow specify resource moethod which returns the array
    // No need to add duplicates for all four overloads.
    interface IResourceArrayMethod<T> {
        (): IResourceArray<T>;
        (params: Object): IResourceArray<T>;
        (success: Function, error?: Function): IResourceArray<T>;
        (params: Object, success: Function, error?: Function): IResourceArray<T>;
        (params: Object, data: Object, success?: Function, error?: Function): IResourceArray<T>;
    }

    // Baseclass for every resource with default actions.
    // If you define your new actions for the resource, you will need
    // to extend this interface and typecast the ResourceClass to it.
    //
    // In case of passing the first argument as anything but a function,
    // it's gonna be considered data if the action method is POST, PUT or
    // PATCH (in other words, methods with body). Otherwise, it's going
    // to be considered as parameters to the request.
    // https://github.com/angular/angular.js/blob/v1.2.0/src/ngResource/resource.js#L461-L465
    //
    // Only those methods with an HTTP body do have 'data' as first parameter:
    // https://github.com/angular/angular.js/blob/v1.2.0/src/ngResource/resource.js#L463
    // More specifically, those methods are POST, PUT and PATCH:
    // https://github.com/angular/angular.js/blob/v1.2.0/src/ngResource/resource.js#L432
    //
    // Also, static calls always return the IResource (or IResourceArray) retrieved
    // https://github.com/angular/angular.js/blob/v1.2.0/src/ngResource/resource.js#L538-L549
    interface IResourceClass<T> {
        new(dataOrParams? : any) : T & IResource<T>;
        get: IResourceMethod<T>;

        query: IResourceArrayMethod<T>;

        save: IResourceMethod<T>;

        remove: IResourceMethod<T>;

        delete: IResourceMethod<T>;
    }

    // Instance calls always return the the promise of the request which retrieved the object
    // https://github.com/angular/angular.js/blob/v1.2.0/src/ngResource/resource.js#L538-L546
    interface IResource<T> {
        $get(): angular.IPromise<T>;
        $get(params?: Object, success?: Function, error?: Function): angular.IPromise<T>;
        $get(success: Function, error?: Function): angular.IPromise<T>;

        $query(): angular.IPromise<IResourceArray<T>>;
        $query(params?: Object, success?: Function, error?: Function): angular.IPromise<IResourceArray<T>>;
        $query(success: Function, error?: Function): angular.IPromise<IResourceArray<T>>;

        $save(): angular.IPromise<T>;
        $save(params?: Object, success?: Function, error?: Function): angular.IPromise<T>;
        $save(success: Function, error?: Function): angular.IPromise<T>;

        $remove(): angular.IPromise<T>;
        $remove(params?: Object, success?: Function, error?: Function): angular.IPromise<T>;
        $remove(success: Function, error?: Function): angular.IPromise<T>;

        $delete(): angular.IPromise<T>;
        $delete(params?: Object, success?: Function, error?: Function): angular.IPromise<T>;
        $delete(success: Function, error?: Function): angular.IPromise<T>;

        $cancelRequest(): void;

        /** the promise of the original server interaction that created this instance. **/
        $promise : angular.IPromise<T>;
        $resolved : boolean;
        toJSON(): T;
    }

    /**
     * Really just a regular Array object with $promise and $resolve attached to it
     */
    interface IResourceArray<T> extends Array<T & IResource<T>> {
        /** the promise of the original server interaction that created this collection. **/
        $promise : angular.IPromise<IResourceArray<T>>;
        $resolved : boolean;
    }

    /** when creating a resource factory via IModule.factory */
    interface IResourceServiceFactoryFunction<T> {
        ($resource: angular.resource.IResourceService): IResourceClass<T>;
        <U extends IResourceClass<T>>($resource: angular.resource.IResourceService): U;
    }

    // IResourceServiceProvider used to configure global settings
    interface IResourceServiceProvider extends angular.IServiceProvider {

        defaults: IResourceOptions;
    }

}

/** extensions to base ng based on using angular-resource */
declare namespace angular {

    interface IModule {
        /** creating a resource service factory */
        factory(name: string, resourceServiceFactoryFunction: angular.resource.IResourceServiceFactoryFunction<any>): IModule;
    }
    
    namespace auto {
    	interface IInjectorService {
    		get(name: '$resource'): ng.resource.IResourceService;
    	}
    }
}

interface Array<T>
{
    /** the promise of the original server interaction that created this collection. **/
    $promise : angular.IPromise<Array<T>>;
    $resolved : boolean;
}
