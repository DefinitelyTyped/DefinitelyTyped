// Type definitions for JSData v1.3.0
// Project: https://github.com/js-data/js-data
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

///////////////////////////////////////////////////////////////////////////////
// Promises in js-data are ES6 polyfill promises
///////////////////////////////////////////////////////////////////////////////

/// <reference path="../es6-promise/es6-promise.d.ts" />

///////////////////////////////////////////////////////////////////////////////
// js-data module (js-data.js)
///////////////////////////////////////////////////////////////////////////////

// defining what exists in JSData and how it looks
declare module JSData {

    interface JSDataPromise<R> extends Promise<R> {

        // enhanced with finally
        finally<U>(finallyCb?:() => U):Promise<U>;
    }

    //TODO switch to class again when typescript supports open ended class declaration
    interface DS {

        new(config?:DSConfiguration):DS;

        // rather undocumented
        errors:DSErrors;

        // those are objects containing the defined resources and adapters
        definitions:any;
        adapters:any;

        defaults:DSConfiguration;

        changeHistory(resourceName:string, id?:string):Array<Object>;
        changeHistory(resourceName:string, id?:number):Array<Object>;

        changes(resourceName:string, id:string):Object;
        changes(resourceName:string, id:number):Object;

        compute<T>(resourceName:string, id:number):T;
        compute<T>(resourceName:string, id:string):T;
        compute<T>(resourceName:string, instance:Object):T;

        create<T>(resourceName:string, attrs:any, options?:DSConfiguration):JSDataPromise<T>;

        createInstance<T>(resourceName:string, attrs?:T, options?:DSAdapterOperationConfiguration):T;

        defineResource<T>(resourceName:string):DSResourceDefinition<T>;
        defineResource<T>(definition:DSResourceDefinitionConfiguration):DSResourceDefinition<T>;

        destroy(resourceName:string, id:string, options?:DSAdapterOperationConfiguration):JSDataPromise<any>;
        destroy(resourceName:string, id:number, options?:DSAdapterOperationConfiguration):JSDataPromise<any>;

        destroyAll(resourceName:string, params?:DSFilterParams, options?:DSAdapterOperationConfiguration):JSDataPromise<any>;

        digest():void;

        eject<T>(resourceName:string, id:string, options?:DSConfiguration):T;
        eject<T>(resourceName:string, id:number, options?:DSConfiguration):T;

        ejectAll<T>(resourceName:string, params:DSFilterParams, options?:DSConfiguration):Array<T>;

        filter<T>(resourceName:string, params:DSFilterParams, options?:DSConfiguration):Array<T>;

        find<T>(resourceName:string, id:string, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        find<T>(resourceName:string, id:number, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;

        findAll<T>(resourceName:string, params?:DSFilterParams, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T>>;

        get<T>(resourceName:string, id:string, options?:DSConfiguration):T;
        get<T>(resourceName:string, id:number, options?:DSConfiguration):T;

        getAll<T>(resourceName:string, ids?:Array<string>):Array<T>;
        getAll<T>(resourceName:string, ids?:Array<number>):Array<T>;

        hasChanges(resourceName:string, id:string):boolean;
        hasChanges(resourceName:string, id:number):boolean;

        inject<T>(resourceName:string, attrs:T, options?:DSConfiguration):T;
        inject<T>(resourceName:string, items:Array<T>, options?:DSConfiguration):Array<T>;

        is(resourceName:string, object:Object): boolean;

        lastModified(resourceName:string, id?:string):number; // timestamp
        lastModified(resourceName:string, id?:number):number; // timestamp

        lastSaved(resourceName:string, id?:string):number; // timestamp
        lastSaved(resourceName:string, id?:number):number; // timestamp

        link<T>(resourceName:string, id:string, relations?:Array<string>):T;
        link<T>(resourceName:string, id:number, relations?:Array<string>):T;

        linkAll<T>(resourceName:string, params:DSFilterParams, relations?:Array<string>):T;

        linkInverse<T>(resourceName:string, id:string, relations?:Array<string>):T;
        linkInverse<T>(resourceName:string, id:number, relations?:Array<string>):T;

        loadRelations<T>(resourceName:string, id:string, relations:string, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        loadRelations<T>(resourceName:string, id:number, relations:string, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        loadRelations<T>(resourceName:string, instance:Object, relations:string, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        loadRelations<T>(resourceName:string, id:string, relations:Array<string>, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        loadRelations<T>(resourceName:string, id:number, relations:Array<string>, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        loadRelations<T>(resourceName:string, instance:Object, relations:Array<string>, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;

        previous<T>(resourceName:string, id:string):T;
        previous<T>(resourceName:string, id:number):T;

        reap(resourceName:string, options?:DSConfiguration):JSDataPromise<any>;

        refresh<T>(resourceName:string, id:string, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        refresh<T>(resourceName:string, id:number, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;

        registerAdapter(adapterId:string, adapter:IDSAdapter, options?:{default: boolean}):void;

        save<T>(resourceName:string, id:string, options?:DSSaveConfiguration):JSDataPromise<T>;
        save<T>(resourceName:string, id:number, options?:DSSaveConfiguration):JSDataPromise<T>;

        unlinkInverse<T>(resourceName:string, id:string, relations?:Array<string>):T;
        unlinkInverse<T>(resourceName:string, id:number, relations?:Array<string>):T;

        update<T>(resourceName:string, id:string, attrs:any, options?:DSSaveConfiguration):JSDataPromise<T>;
        update<T>(resourceName:string, id:number, attrs:any, options?:DSSaveConfiguration):JSDataPromise<T>;

        updateAll<T>(resourceName:string, attrs:any, params?:DSFilterParams, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T>>;
    }

    interface DSConfiguration extends IDSResourceLifecycleEventHandlers {
        actions?: Object;
        allowSimpleWhere?: boolean;
        basePath?: string;
        bypassCache?: boolean;
        cacheResponse?: boolean;
        defaultAdapter?: string;
        defaultFilter?: (collection:Array<any>, resourceName:string, params:DSFilterParams, options:DSConfiguration)=>Array<any>;
        eagerEject?: boolean;
        // TODO enable when eagerInject in DS#create is implemented
        //eagerInject?: boolean;
        endpoint?: string;
        error?: (message?:any, ...optionalParams:any[])=> void;
        fallbackAdapters?: Array<string>;
        findAllFallbackAdapters?: Array<string>;
        findAllStrategy?: string;
        findBelongsTo?: boolean;
        findFallbackAdapters?: Array<string>;
        findHasOne?: boolean;
        findHasMany?: boolean;
        findInverseLinks?: boolean;
        findStrategy?: string
        idAttribute?: string;
        ignoredChanges?: Array<any>;
        // TODO ignoreMissing is undocumented
        //ignoreMissing: boolean;
        keepChangeHistory?: boolean;
        loadFromServer?: boolean;
        log?: any;
        // TODO wait for union types to be supported
        // log: (message?: any, ...optionalParams: any[])=> void;
        // log: boolean;
        maxAge?: number;
        notify?: boolean;
        reapAction?: string;
        reapInterval?: number;
        resetHistoryOnInject?: boolean;
        strategy?: string;
        upsert?: boolean;
        useClass?: boolean;
        useFilter?: boolean;
    }

    interface DSAdapterOperationConfiguration extends DSConfiguration {
        adapter?: string
    }

    interface DSSaveConfiguration extends DSAdapterOperationConfiguration {
        changesOnly?: boolean;
    }

    interface DSResourceDefinitionConfiguration extends DSConfiguration {
        name: string;
        computed?: any;
        methods?: any;
        relations?: {
            hasMany?: Object;
            hasOne?: Object;
            belongsTo?: Object;
        };
    }

    interface DSResourceDefinition<T> extends DSResourceDefinitionConfiguration {

        changeHistory(id?:string):Array<Object>;
        changeHistory(id?:number):Array<Object>;

        changes(id:string):Object;
        changes(id:number):Object;

        compute<T>(id:number):T;
        compute<T>(id:string):T;
        compute<T>(instance:Object):T;

        create<T>(attrs:any, options?:DSConfiguration):JSDataPromise<T>;

        createInstance<T>(attrs?:T, options?:DSAdapterOperationConfiguration):T;

        defineResource<T>(resourceName:string):DSResourceDefinition<T>;
        defineResource<T>(definition:DSResourceDefinitionConfiguration):DSResourceDefinition<T>;

        destroy(id:string, options?:DSAdapterOperationConfiguration):JSDataPromise<any>;
        destroy(id:number, options?:DSAdapterOperationConfiguration):JSDataPromise<any>;

        destroyAll(params?:DSFilterParams, options?:DSAdapterOperationConfiguration):JSDataPromise<any>;

        digest():void;

        eject<T>(id:string, options?:DSConfiguration):T;
        eject<T>(id:number, options?:DSConfiguration):T;

        ejectAll<T>(params:DSFilterParams, options?:DSConfiguration):Array<T>;

        filter<T>(params:DSFilterParams, options?:DSConfiguration):Array<T>;

        find<T>(id:string, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        find<T>(id:number, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;

        findAll<T>(params?:DSFilterParams, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T>>;

        get<T>(id:string, options?:DSConfiguration):T;
        get<T>(id:number, options?:DSConfiguration):T;

        getAll<T>(ids?:Array<string>):Array<T>;
        getAll<T>(ids?:Array<number>):Array<T>;

        hasChanges(id:string):boolean;
        hasChanges(id:number):boolean;

        inject<T>(attrs:T, options?:DSConfiguration):T;
        inject<T>(items:Array<T>, options?:DSConfiguration):Array<T>;

        is(object:Object): boolean;

        lastModified(id?:string):number; // timestamp
        lastModified(id?:number):number; // timestamp

        lastSaved(id?:string):number; // timestamp
        lastSaved(id?:number):number; // timestamp

        link<T>(id:string, relations?:Array<string>):T;
        link<T>(id:number, relations?:Array<string>):T;

        linkAll<T>(params:DSFilterParams, relations?:Array<string>):T;

        linkInverse<T>(id:string, relations?:Array<string>):T;
        linkInverse<T>(id:number, relations?:Array<string>):T;

        loadRelations<T>(id:string, relations:string, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        loadRelations<T>(id:number, relations:string, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        loadRelations<T>(instance:T, relations:string, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        loadRelations<T>(id:string, relations:Array<string>, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        loadRelations<T>(id:number, relations:Array<string>, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        loadRelations<T>(instance:T, relations:Array<string>, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;

        previous<T>(id:string):T;
        previous<T>(id:number):T;

        reap(options?:DSConfiguration):JSDataPromise<any>;

        refresh<T>(id:string, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;
        refresh<T>(id:number, options?:DSAdapterOperationConfiguration):JSDataPromise<T>;

        save<T>(id:string, options?:DSSaveConfiguration):JSDataPromise<T>;
        save<T>(id:number, options?:DSSaveConfiguration):JSDataPromise<T>;

        unlinkInverse<T>(id:string, relations?:Array<string>):T;
        unlinkInverse<T>(id:number, relations?:Array<string>):T;

        update<T>(id:string, attrs:any, options?:DSSaveConfiguration):JSDataPromise<T>;
        update<T>(id:number, attrs:any, options?:DSSaveConfiguration):JSDataPromise<T>;

        updateAll<T>(attrs:any, params?:DSFilterParams, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T>>;
    }

    interface DSFilterParams {
        where?: Object;

        limit?: number;

        skip?: number;
        offset?: number;

        orderBy?: any;
        // TODO wait for union types to be supported
        //orderBy?: Array<Array<string>>;
        //orderBy?: Array<string>;
        //orderBy?: string;

        sort?: any;
        // TODO wait for union types to be supported
        //sort?: string;
        //sort?: Array<string>;
        //sort?: Array<Array<string>>;
    }

    interface IDSResourceLifecycleValidateEventHandlers {
        beforeValidate?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
        validate?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
        afterValidate?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
    }

    interface IDSResourceLifecycleCreateEventHandlers {
        beforeCreate?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
        afterCreate?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
    }

    interface IDSResourceLifecycleCreateInstanceEventHandlers {
        beforeCreateInstance?: (resourceName:string, data:any)=>void;
        afterCreateInstance?: (resourceName:string, data:any)=>void;
    }

    interface IDSResourceLifecycleUpdateEventHandlers {
        beforeUpdate?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
        afterUpdate?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
    }

    interface IDSResourceLifecycleDestroyEventHandlers {
        beforeDestroy?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
        afterDestroy?: (resourceName:string, data:any, cb:(err:any, data?:any)=>void)=>void;
    }

    interface IDSResourceLifecycleInjectEventHandlers {
        beforeInject?: (resourceName:string, data:any)=>void;
        afterInject?: (resourceName:string, data:any)=>void;
    }

    interface IDSResourceLifecycleEjectEventHandlers {
        beforeEject?: (resourceName:string, data:any)=>void;
        afterEject?: (resourceName:string, data:any)=>void;
    }

    interface IDSResourceLifecycleReapEventHandlers {
        beforeReap?: (resourceName:string, data:any)=>void;
        afterReap?: (resourceName:string, data:any)=>void;
    }

    interface IDSResourceLifecycleEventHandlers extends IDSResourceLifecycleCreateEventHandlers,
        IDSResourceLifecycleCreateInstanceEventHandlers,
        IDSResourceLifecycleValidateEventHandlers,
        IDSResourceLifecycleUpdateEventHandlers,
        IDSResourceLifecycleDestroyEventHandlers,
        IDSResourceLifecycleInjectEventHandlers,
        IDSResourceLifecycleEjectEventHandlers,
        IDSResourceLifecycleReapEventHandlers {

    }

    // errors
    interface DSErrors {

        // types
        IllegalArgumentError:DSError;
        IA:DSError;
        RuntimeError:DSError;
        R:DSError;
        NonexistentResourceError:DSError;
        NER:DSError;
    }

    interface DSError extends Error {
        new (message?:string):DSError;
        message: string;
        type: string;
    }

    // DSAdapter interface
    interface IDSAdapter {
        create<T>(config:DSResourceDefinition<T>, attrs:any, options?:DSConfiguration):JSDataPromise<T>;

        destroy<T>(config:DSResourceDefinition<T>, id:string, options?:DSConfiguration):JSDataPromise<any>;
        destroy<T>(config:DSResourceDefinition<T>, id:number, options?:DSConfiguration):JSDataPromise<any>;

        destroyAll<T>(config:DSResourceDefinition<T>, params:DSFilterParams, options?:DSConfiguration):JSDataPromise<any>;

        find<T>(config:DSResourceDefinition<T>, id:string, options?:DSConfiguration):JSDataPromise<T>;
        find<T>(config:DSResourceDefinition<T>, id:number, options?:DSConfiguration):JSDataPromise<T>;

        findAll<T>(config:DSResourceDefinition<T>, params?:DSFilterParams, options?:DSConfiguration):JSDataPromise<T>;

        update<T>(config:DSResourceDefinition<T>, id:string, attrs:any, options?:DSConfiguration):JSDataPromise<T>;
        update<T>(config:DSResourceDefinition<T>, id:number, attrs:any, options?:DSConfiguration):JSDataPromise<T>;

        updateAll<T>(config:DSResourceDefinition<T>, attrs:any, params?:DSFilterParams, options?:DSConfiguration):JSDataPromise<T>;
    }
}

// declaring the existing global js object
declare var JSData:{
    DS: JSData.DS;
    DSErrors: JSData.DSErrors;
};

//Support node require
declare module 'js-data' {

    export = JSData;
}