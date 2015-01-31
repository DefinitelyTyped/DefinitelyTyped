// Type definitions for angular-data v1.5.3
// Project: http://angular-data.pseudobry.com
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../angularjs/angular.d.ts" />

// Support AMD require
declare module 'angular-data'
{
    export = ngData;
}

///////////////////////////////////////////////////////////////////////////////
// angular-data module (angular-data.js)
///////////////////////////////////////////////////////////////////////////////
declare module ngData
{

    interface DSFilterParams
    {
        where?: Object;

        limit?: number;

        skip?: number;
        offset?: number;

        orderBy?: any;
        // wait for union types to be supported
        //orderBy?: Array<Array<string>>;
        //orderBy?: Array<string>;
        //orderBy?: string;

        sort?: any;
        // wait for union types to be supported
        //sort?: string;
        //sort?: Array<string>;
        //sort?: Array<Array<string>>;
    }

    interface DSChangeOptions
    {
        blacklist?: Array<any>;
        // wait for union types to be supported
        //blacklist?: Array<string>;
        //blacklist?: Array<RegExp>;
    }

    interface DSFilterOptions
    {
        loadFromServer?: boolean;
        allowSimpleWhere?: boolean;
    }

    interface DSResourceRelations
    {
        hasMany?: Object;
        hasOne?: Object;
        belongsTo?: Object;
    }

    interface IDSResourceLifecycleValidateEventHandlers
    {
        beforeValidate?: (resourceName:string, attrs:any, cb:(err:any, attrs?:any)=>void)=>void;
        validate?: (resourceName:string, attrs:any, cb:(err:any, attrs?:any)=>void)=>void;
        afterValidate?: (resourceName:string, attrs:any, cb:(err:any, attrs?:any)=>void)=>void;
    }

    interface IDSResourceLifecycleCreateEventHandlers
    {
        beforeCreate?: (resourceName:string, attrs:any, cb:(err:any, attrs?:any)=>void)=>void;
        afterCreate?: (resourceName:string, attrs:any, cb:(err:any, attrs?:any)=>void)=>void;
    }

    interface IDSResourceLifecycleUpdateEventHandlers
    {
        beforeUpdate?: (resourceName:string, attrs:any, cb:(err:any, attrs?:any)=>void)=>void;
        afterUpdate?: (resourceName:string, attrs:any, cb:(err:any, attrs?:any)=>void)=>void;
    }

    interface IDSResourceLifecycleDestroyEventHandlers
    {
        beforeDestroy?: (resourceName:string, attrs:any, cb:(err:any, attrs?:any)=>void)=>void;
        afterDestroy?: (resourceName:string, attrs:any, cb:(err:any, attrs:any)=>void)=>void;
    }

    interface IDSResourceLifecycleSerializeEventHandlers
    {
        serialize?: (resourceName:string, data:any)=>void;
        deserialize?: (resourceName:string, data:any)=>void;
    }

    interface IDSResourceLifecycleInjectEventHandlers
    {
        beforeInject?: (resourceName:string, attrs:any)=>void;
        afterInject?: (resourceName:string, attrs:any)=>void;
    }

    interface IDSResourceLifecycleAllEventHandlers extends IDSResourceLifecycleCreateEventHandlers,
                                                           IDSResourceLifecycleValidateEventHandlers,
                                                           IDSResourceLifecycleUpdateEventHandlers,
                                                           IDSResourceLifecycleDestroyEventHandlers,
                                                           IDSResourceLifecycleInjectEventHandlers,
                                                           IDSResourceLifecycleSerializeEventHandlers
    {

    }

    interface DSResourceDefinition extends IDSResourceLifecycleAllEventHandlers
    {
        name?: string;
        idAttribute?: string;
        endpoint?: string;
        baseUrl?: string;
        useClass?: boolean;
        keepChangeHistory?: boolean;
        resetHistoryOnInject?: boolean;
        defaultFilter?: (collection:Array<any>, resourceName:string, params:DSFilterParams, options:DSFilterOptions)=>Array<any>;
        methods?: any;
        relations?: DSResourceRelations;
        computed?: any;
    }

    interface DSGetOptions
    {
        loadFromServer?: boolean;
    }

    interface DSInjectOptions
    {
        useClass?: boolean;
        findBelongsTo?: boolean;
        findHasMany?: boolean;
        findHasOne?: boolean;
        linkInverse?: boolean;
    }

    interface DSCreateOptions extends IDSResourceLifecycleValidateEventHandlers, IDSResourceLifecycleCreateEventHandlers
    {
        useClass?: boolean;
        cacheResponse?:boolean;
        upsert?:boolean;
        eagerInject?:boolean;
    }

    interface DSDestroyOptions extends IDSResourceLifecycleDestroyEventHandlers
    {
        eagerEject?: boolean;
    }

    interface DSDestroyAllOptions
    {
        bypassCache?: boolean;
    }

    interface DSFindOptions
    {
        useClass?: boolean;
        bypassCache?: boolean;
        cacheResponse?: boolean;
    }

    interface DSSaveOptions extends IDSResourceLifecycleValidateEventHandlers, IDSResourceLifecycleUpdateEventHandlers
    {
        cacheResponse?: boolean;
        changesOnly?: boolean;
    }

    interface DSUpdateAllOptions
    {
        cacheResponse?: boolean;
    }

    interface DSResourceConfiguration
    {

        //TODO reverse engineer
    }

    interface DSResource
    {

        //TODO reverse engineer
        constructor:any;
    }

    // DS
    interface DS
    {

        // properties
        adapters: any; // Object consists of key-values pairs where the key is the name of the adapter and the value is
                       // the adapter itself.
        defaults: DSProviderDefaults;
        errors: DSErrors;

        // sync methods
        bindAll<T>(scope:ng.IScope, expr:string, resourceName:string, params:DSFilterParams, cb?:(err:DSError, items:Array<T>)=>void): Function;

        bindOne<T>(scope:ng.IScope, expr:string, resourceName:string, id:string, cb?:(err:DSError, item:T)=>void): Function;
        bindOne<T>(scope:ng.IScope, expr:string, resourceName:string, id:number, cb?:(err:DSError, item:T)=>void): Function;

        changeHistory<T>(resourceName:string, id?:string):Array<T>;
        changeHistory<T>(resourceName:string, id?:number):Array<T>;

        changes<T>(resourceName:string, id:string, options?:DSChangeOptions):T;
        changes<T>(resourceName:string, id:number, options?:DSChangeOptions):T;

        compute<T>(resourceName:string, id:number):T;
        compute<T>(resourceName:string, id:string):T;
        compute<T>(resourceName:string, instance:Object):T;

        createInstance<T>(resourceName:string, attrs?:T, options?:{useClass:boolean}):T;

        defineResource(resourceName:string):DSResourceConfiguration
        defineResource(definition:DSResourceDefinition):DSResourceConfiguration
        defineResource(resourceName:string, definition:DSResourceDefinition):DSResourceConfiguration

        digest():void;

        eject<T>(resourceName:string, id:string):T;
        eject<T>(resourceName:string, id:number):T;

        ejectAll<T>(resourceName:string, params?:DSFilterParams):Array<T>;

        filter<T>(resourceName:string, params?:DSFilterParams, options?:DSFilterOptions):Array<T>;

        get<T>(resourceName:string, id:string, options?:DSGetOptions):T;
        get<T>(resourceName:string, id:number, options?:DSGetOptions):T;

        getAll<T>(resourceName:string, ids?:Array<string>):Array<T>;
        getAll<T>(resourceName:string, ids?:Array<number>):Array<T>;

        hasChanges(resourceName:string, id:string):boolean;
        hasChanges(resourceName:string, id:number):boolean;

        inject<T>(resourceName:string, attrs:T, options?:DSInjectOptions):T;

        lastModified(resourceName:string, id?:string):number // timestamp
        lastModified(resourceName:string, id?:number):number // timestamp

        lastModified(resourceName:string, id?:string):number // timestamp
        lastModified(resourceName:string, id?:number):number // timestamp

        link<T>(resourceName:string, id:string, relations?:Array<string>):T;
        link<T>(resourceName:string, id:number, relations?:Array<string>):T;

        linkAll<T>(resourceName:string, params?:DSFilterParams, relations?:Array<string>):T;

        linkInverse<T>(resourceName:string, id:number, relations?:Array<string>):T;

        previous<T>(resourceName:string, id:string):T;
        previous<T>(resourceName:string, id:number):T;

        unlinkInverse<T>(resourceName:string, id:string, relations?:Array<string>):T;
        unlinkInverse<T>(resourceName:string, id:number, relations?:Array<string>):T;

        // async methods
        create<T>(resourceName:string, attrs:any, options?:DSCreateOptions):ng.IPromise<T>;

        destroy(resourceName:string, id:string, options?:DSDestroyOptions):ng.IPromise<any>;
        destroy(resourceName:string, id:number, options?:DSDestroyOptions):ng.IPromise<any>;

        destroyAll(resourceName:string, params:DSFilterParams, options?:DSDestroyAllOptions):ng.IPromise<any>;

        find<T>(resourceName:string, id:string, options?:DSFindOptions):ng.IPromise<T>;
        find<T>(resourceName:string, id:number, options?:DSFindOptions):ng.IPromise<T>;

        findAll<T>(resourceName:string, params:DSFilterParams, options?:DSFindOptions):ng.IPromise<Array<T>>;

        loadRelations<T>(resourceName:string, id:string, relations?:string, options?:DSFindOptions):ng.IPromise<T>;
        loadRelations<T>(resourceName:string, id:number, relations?:string, options?:DSFindOptions):ng.IPromise<T>;
        loadRelations<T>(resourceName:string, instance:Object, relations?:string, options?:DSFindOptions):ng.IPromise<T>;
        loadRelations<T>(resourceName:string, id:string, relations?:Array<string>, options?:DSFindOptions):ng.IPromise<T>;
        loadRelations<T>(resourceName:string, id:number, relations?:Array<string>, options?:DSFindOptions):ng.IPromise<T>;
        loadRelations<T>(resourceName:string, instance:Object, relations?:Array<string>, options?:DSFindOptions):ng.IPromise<T>;

        refresh<T>(resourceName:string, id:string, options?:DSFindOptions):ng.IPromise<T>;
        refresh<T>(resourceName:string, id:number, options?:DSFindOptions):ng.IPromise<T>;

        save<T>(resourceName:string, id:string, options?:DSSaveOptions):ng.IPromise<T>;
        save<T>(resourceName:string, id:number, options?:DSSaveOptions):ng.IPromise<T>;

        update<T>(resourceName:string, id:string, attrs:any, options?:DSSaveOptions):ng.IPromise<T>;
        update<T>(resourceName:string, id:number, attrs:any, options?:DSSaveOptions):ng.IPromise<T>;

        updateAll<T>(resourceName:string, attrs:any, params:DSFilterParams, options?:DSUpdateAllOptions):ng.IPromise<Array<T>>;
    }

    // ------------------------------

    interface IDSAdapterOptions
    {
        baseUrl?: string;
    }

    interface IDSHttpAdapterOptions extends IDSAdapterOptions
    {
        endpoint?: string;
        params?: any;
    }

    // DSAdapter interface
    interface IDSAdapter
    {

        create<T>(config:DSResourceConfiguration, attrs:any, options?:IDSAdapterOptions):ng.IPromise<T>;

        destroy(config:DSResourceConfiguration, id:string, options?:IDSAdapterOptions):ng.IPromise<any>;
        destroy(config:DSResourceConfiguration, id:number, options?:IDSAdapterOptions):ng.IPromise<any>;

        destroyAll(config:DSResourceConfiguration, params:DSFilterParams, options?:IDSAdapterOptions):ng.IPromise<any>;

        find<T>(config:DSResourceConfiguration, id:string, options?:IDSAdapterOptions):ng.IPromise<T>;
        find<T>(config:DSResourceConfiguration, id:number, options?:IDSAdapterOptions):ng.IPromise<T>;

        findAll<T>(config:DSResourceConfiguration, params?:DSFilterParams, options?:IDSAdapterOptions):ng.IPromise<T>;

        update<T>(config:DSResourceConfiguration, id:string, attrs:any, options?:IDSAdapterOptions):ng.IPromise<T>;
        update<T>(config:DSResourceConfiguration, id:number, attrs:any, options?:IDSAdapterOptions):ng.IPromise<T>;

        updateAll<T>(config:DSResourceConfiguration, attrs:any, params?:DSFilterParams, options?:IDSAdapterOptions):ng.IPromise<T>;
    }

    interface DSHttpAdapterProviderDefaults
    {

        queryTransform:(resourceName:string, params:any)=>Object;
    }

    // DSHttpAdapter
    interface DSHttpAdapter extends IDSAdapter
    {

        // methods
        DEL<T>(url:string, options?:ng.IRequestShortcutConfig):ng.IPromise<T>;
        GET<T>(url:string, options?:ng.IRequestShortcutConfig):ng.IPromise<T>;
        HTTP<T>(config:ng.IRequestConfig):ng.IPromise<T>;
        POST<T>(url:string, attrs:any, options?:ng.IRequestShortcutConfig):ng.IPromise<T>;
        PUT<T>(url:string, attrs:any, options?:ng.IRequestShortcutConfig):ng.IPromise<T>;

        getPath(method:string, resourceConfig:DSResourceConfiguration, id:string, options:IDSHttpAdapterOptions):string;
        getPath(method:string, resourceConfig:DSResourceConfiguration, id:number, options:IDSHttpAdapterOptions):string;
        getPath(method:string, resourceConfig:DSResourceConfiguration, attrs:any, options:IDSHttpAdapterOptions):string;
        getPath(method:string, resourceConfig:DSResourceConfiguration, params:DSFilterParams, options:IDSHttpAdapterOptions):string;

        // properties
        defaults:DSHttpAdapterProviderDefaults
    }

    // DSHttpAdapterProvider
    interface DSHttpAdapterProvider
    {

        // properties
        $httpConfig:ng.IRequestConfig;
        defaults:DSHttpAdapterProviderDefaults;
        queryTransform:(resourceName:string, params:any)=>Object;
    }

    // DSLocalStorageAdapter
    interface DSLocalStorageAdapter extends IDSAdapter
    {

        // methods
        DEL<T>(key:string):ng.IPromise<T>;
        GET<T>(key:string):ng.IPromise<T>;
        PUT<T>(key:string, value:T):ng.IPromise<T>;

        getPath(method:string, resourceConfig:DSResourceConfiguration, id:string, options:IDSAdapterOptions):string;
        getPath(method:string, resourceConfig:DSResourceConfiguration, id:number, options:IDSAdapterOptions):string;
        getPath(method:string, resourceConfig:DSResourceConfiguration, attrs:any, options:IDSAdapterOptions):string;
        getPath(method:string, resourceConfig:DSResourceConfiguration, params:DSFilterParams, options:IDSAdapterOptions):string;
    }

    // ------------------------------

    interface DSProviderDefaults extends IDSResourceLifecycleAllEventHandlers
    {
        baseUrl: string;
        idAttribute: string;
        defaultAdapter: string;
        events: string;
        //TODO possibly open this interface for extending because this is a customization point
        filter: (collection:Array<any>, resourceName:string, params:DSFilterParams, options:DSFilterOptions)=>Array<any>;
    }

    // DSProvider
    interface DSProvider extends IDSResourceLifecycleAllEventHandlers
    {

        // properties
        defaults: DSProviderDefaults;
        events: string;

        ignoredChanges?:Array<any>;
        // wait for Union types to be supported
        //ignoredChanges?:Array<string>;
        //ignoredChanges?:Array<RegExp>;
    }

    // ------------------------------

    // errors
    interface DSErrors
    {

        // types
        IllegalArgumentError:DSError
        NonexistentResourceError:DSError
        RuntimeError:DSError
    }

    interface DSError
    {
        new (message?:string):DSError;
        message: string;
        type: string;
    }
}


