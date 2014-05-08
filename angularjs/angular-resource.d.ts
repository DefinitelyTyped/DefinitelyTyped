// Type definitions for Angular JS 1.2 (ngResource module)
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>, Michael Jess <http://github.com/miffels> (minor enhancements)
// Definitions: https://github.com/daptiv/DefinitelyTyped

/// <reference path="angular.d.ts" />


///////////////////////////////////////////////////////////////////////////////
// ngResource module (angular-resource.js)
///////////////////////////////////////////////////////////////////////////////
declare module ng.resource {

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
                                 actionDescriptors?: any): IResourceClass<IResource<any>>;
        <T, U>(url: string, paramDefaults?: any,
                                 /** example:  {update: { method: 'PUT' }, delete: deleteDescriptor }
                                  where deleteDescriptor : IActionDescriptor */
                                 actionDescriptors?: any): U;
        <T>(url: string, paramDefaults?: any,
                                 /** example:  {update: { method: 'PUT' }, delete: deleteDescriptor }
                                  where deleteDescriptor : IActionDescriptor */
                                 actionDescriptors?: any): IResourceClass<T>;
    }

    // Just a reference to facilitate describing new actions
    interface IActionDescriptor {
        method: string;
        isArray?: boolean;
        params?: any;
        headers?: any;
    }

    // Baseclass for everyresource with default actions.
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
        new(dataOrParams? : any) : T;
        get(): T;
        get(params: Object): T;
        get(success: Function, error?: Function): T;
        get(params: Object, success: Function, error?: Function): T;
        get(params: Object, data: Object, success?: Function, error?: Function): T;

        query(): IResourceArray<T>;
        query(params: Object): IResourceArray<T>;
        query(success: Function, error?: Function): IResourceArray<T>;
        query(params: Object, success: Function, error?: Function): IResourceArray<T>;
        query(params: Object, data: Object, success?: Function, error?: Function): IResourceArray<T>;

        save(): T;
        save(data: Object): T;
        save(success: Function, error?: Function): T;
        save(data: Object, success: Function, error?: Function): T;
        save(params: Object, data: Object, success?: Function, error?: Function): T;

        remove(): T;
        remove(params: Object): T;
        remove(success: Function, error?: Function): T;
        remove(params: Object, success: Function, error?: Function): T;
        remove(params: Object, data: Object, success?: Function, error?: Function): T;

        delete(): T;
        delete(params: Object): T;
        delete(success: Function, error?: Function): T;
        delete(params: Object, success: Function, error?: Function): T;
        delete(params: Object, data: Object, success?: Function, error?: Function): T;
    }

    // Instance calls always return the the promise of the request which retrieved the object
    // https://github.com/angular/angular.js/blob/v1.2.0/src/ngResource/resource.js#L538-L546
    interface IResource<T> {
        $get(): ng.IPromise<T>;
        $get(params?: Object, success?: Function, error?: Function): ng.IPromise<T>;
        $get(success: Function, error?: Function): ng.IPromise<T>;

        $query(): ng.IPromise<IResourceArray<T>>;
        $query(params?: Object, success?: Function, error?: Function): ng.IPromise<IResourceArray<T>>;
        $query(success: Function, error?: Function): ng.IPromise<IResourceArray<T>>;

        $save(): ng.IPromise<T>;
        $save(params?: Object, success?: Function, error?: Function): ng.IPromise<T>;
        $save(success: Function, error?: Function): ng.IPromise<T>;

        $remove(): ng.IPromise<T>;
        $remove(params?: Object, success?: Function, error?: Function): ng.IPromise<T>;
        $remove(success: Function, error?: Function): ng.IPromise<T>;

        $delete(): ng.IPromise<T>;
        $delete(params?: Object, success?: Function, error?: Function): ng.IPromise<T>;
        $delete(success: Function, error?: Function): ng.IPromise<T>;

        /** the promise of the original server interaction that created this instance. **/
        $promise : ng.IPromise<T>;
        $resolved : boolean;
    }

    /**
     * Really just a regular Array object with $promise and $resolve attached to it
     */
    interface IResourceArray<T> extends Array<T> {
        /** the promise of the original server interaction that created this collection. **/
        $promise : ng.IPromise<IResourceArray<T>>;
        $resolved : boolean;
    }

    /** when creating a resource factory via IModule.factory */
    interface IResourceServiceFactoryFunction<T> {
        ($resource: ng.resource.IResourceService): IResourceClass<T>;
        <U extends IResourceClass<T>>($resource: ng.resource.IResourceService): U;
    }
}

/** extensions to base ng based on using angular-resource */
declare module ng {

    interface IModule {
        /** creating a resource service factory */
        factory(name: string, resourceServiceFactoryFunction: ng.resource.IResourceServiceFactoryFunction<any>): IModule;
    }
}

interface Array<T>
{
    /** the promise of the original server interaction that created this collection. **/
    $promise : ng.IPromise<Array<T>>;
    $resolved : boolean;
}
