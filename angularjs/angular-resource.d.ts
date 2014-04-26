// Type definitions for Angular JS 1.2 (ngResource module)
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>
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
    interface IResourceClass<T> {
        new(dataOrParams? : any) : T;
        get(): T;
        get(dataOrParams: any): T;
        get(dataOrParams: any, success: Function): T;
        get(success: Function, error?: Function): T;
        get(params: any, data: any, success?: Function, error?: Function): T;
        save(): T;
        save(dataOrParams: any): T;
        save(dataOrParams: any, success: Function): T;
        save(success: Function, error?: Function): T;
        save(params: any, data: any, success?: Function, error?: Function): T;
        query(): T[];
        query(dataOrParams: any): T[];
        query(dataOrParams: any, success: Function): T[];
        query(success: Function, error?: Function): T[];
        query(params: any, data: any, success?: Function, error?: Function): T[];
        remove(): T;
        remove(dataOrParams: any): T;
        remove(dataOrParams: any, success: Function): T;
        remove(success: Function, error?: Function): T;
        remove(params: any, data: any, success?: Function, error?: Function): T;
        delete(): T;
        delete(dataOrParams: any): T;
        delete(dataOrParams: any, success: Function): T;
        delete(success: Function, error?: Function): T;
        delete(params: any, data: any, success?: Function, error?: Function): T;
    }

    interface IResource<T> {
        $get(): T;
        $get(dataOrParams: any): T;
        $get(dataOrParams: any, success: Function): T;
        $get(success: Function, error?: Function): T;
        $get(params: any, data: any, success?: Function, error?: Function): T;
        $save(): T;
        $save(dataOrParams: any): T;
        $save(dataOrParams: any, success: Function): T;
        $save(success: Function, error?: Function): T;
        $save(params: any, data: any, success?: Function, error?: Function): T;
        $query(): T[];
        $query(dataOrParams: any): T[];
        $query(dataOrParams: any, success: Function): T[];
        $query(success: Function, error?: Function): T[];
        $query(params: any, data: any, success?: Function, error?: Function): T[];
        $remove(): T;
        $remove(dataOrParams: any): T;
        $remove(dataOrParams: any, success: Function): T;
        $remove(success: Function, error?: Function): T;
        $remove(params: any, data: any, success?: Function, error?: Function): T;
        $delete(): T;
        $delete(dataOrParams: any): T;
        $delete(dataOrParams: any, success: Function): T;
        $delete(success: Function, error?: Function): T;
        $delete(params: any, data: any, success?: Function, error?: Function): T;
        
        /** the promise of the original server interaction that created this instance. **/
        $promise : ng.IPromise<T>;
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
