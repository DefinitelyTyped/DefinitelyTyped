// Type definitions for Angular JS 1.2 (ngResource module)
// Project: http://angularjs.org
// Definitions by: Diego Vilar <http://github.com/diegovilar>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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
            actionDescriptors?: any): IResourceClass;
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
    interface IResourceClass {
        get(): IResource;
        get(dataOrParams: any): IResource;
        get(dataOrParams: any, success: Function): IResource;
        get(success: Function, error?: Function): IResource;
        get(params: any, data: any, success?: Function, error?: Function): IResource;
        save(): IResource;
        save(dataOrParams: any): IResource;
        save(dataOrParams: any, success: Function): IResource;
        save(success: Function, error?: Function): IResource;
        save(params: any, data: any, success?: Function, error?: Function): IResource;
        query(): IResource[];
        query(dataOrParams: any): IResource[];
        query(dataOrParams: any, success: Function): IResource[];
        query(success: Function, error?: Function): IResource[];
        query(params: any, data: any, success?: Function, error?: Function): IResource[];
        remove(): IResource;
        remove(dataOrParams: any): IResource;
        remove(dataOrParams: any, success: Function): IResource;
        remove(success: Function, error?: Function): IResource;
        remove(params: any, data: any, success?: Function, error?: Function): IResource;
        delete(): IResource;
        delete(dataOrParams: any): IResource;
        delete(dataOrParams: any, success: Function): IResource;
        delete(success: Function, error?: Function): IResource;
        delete(params: any, data: any, success?: Function, error?: Function): IResource;
    }

    interface IResource {
        $get(): IResource;
        $get(dataOrParams: any): IResource;
        $get(dataOrParams: any, success: Function): IResource;
        $get(success: Function, error?: Function): IResource;
        $get(params: any, data: any, success?: Function, error?: Function): IResource;
        $save(): IResource;
        $save(dataOrParams: any): IResource;
        $save(dataOrParams: any, success: Function): IResource;
        $save(success: Function, error?: Function): IResource;
        $save(params: any, data: any, success?: Function, error?: Function): IResource;
        $query(): IResource[];
        $query(dataOrParams: any): IResource[];
        $query(dataOrParams: any, success: Function): IResource[];
        $query(success: Function, error?: Function): IResource[];
        $query(params: any, data: any, success?: Function, error?: Function): IResource[];
        $remove(): IResource;
        $remove(dataOrParams: any): IResource;
        $remove(dataOrParams: any, success: Function): IResource;
        $remove(success: Function, error?: Function): IResource;
        $remove(params: any, data: any, success?: Function, error?: Function): IResource;
        $delete(): IResource;
        $delete(dataOrParams: any): IResource;
        $delete(dataOrParams: any, success: Function): IResource;
        $delete(success: Function, error?: Function): IResource;
        $delete(params: any, data: any, success?: Function, error?: Function): IResource;
    }

    /** when creating a resource factory via IModule.factory */
    interface IResourceServiceFactoryFunction {
        ($resource: ng.resource.IResourceService): ng.resource.IResourceClass;
    }
}

/** extensions to base ng based on using angular-resource */
declare module ng {

    interface IModule {
        /** creating a resource service factory */
        factory(name: string, resourceServiceFactoryFunction: ng.resource.IResourceServiceFactoryFunction): IModule;
    }
}
