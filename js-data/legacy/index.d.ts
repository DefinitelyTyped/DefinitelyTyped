// Type definitions for JSData v1.5.4
// Project: https://github.com/js-data/js-data
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///////////////////////////////////////////////////////////////////////////////
// js-data module (js-data.js)
///////////////////////////////////////////////////////////////////////////////

// defining what exists in JSData and how it looks
declare namespace JSData {

    interface JSDataPromise<R> {
        then<U>(onFulfilled?: (value: R) => U | JSDataPromise<U>,  onRejected?: (error: any) => U | JSDataPromise<U>): JSDataPromise<U>;
        catch<U>(onRejected?: (error: any) => U | JSDataPromise<U>): JSDataPromise<U>;
        // enhanced with finally
        finally<U>(finallyCb?:() => U):JSDataPromise<U>;
    }

    interface DS {

        new(config?:DSConfiguration):DS;

        // rather undocumented
        errors:DSErrors;

        // those are objects containing the defined resources and adapters
        definitions:any;
        adapters:any;

        defaults:DSConfiguration;

        // async
        create<T>(resourceName:string, attrs:Object, options?:DSConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        destroy(resourceName:string, id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<any>;
        destroyAll(resourceName:string, params?:DSFilterArg, options?:DSAdapterOperationConfiguration):JSDataPromise<any>;
        find<T>(resourceName:string, id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        findAll<T>(resourceName:string, params?:DSFilterArg, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T & DSInstanceShorthands<T>>>;
        loadRelations<T>(resourceName:string, idOrInstance:string | number | Object, relations:string | Array<string>, options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        update<T>(resourceName:string, id:string | number, attrs:Object, options?:DSSaveConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        updateAll<T>(resourceName:string, attrs:Object, params?:DSFilterArg, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T & DSInstanceShorthands<T>>>;
        reap(resourceName:string, options?:DSConfiguration):JSDataPromise<any>;
        refresh<T>(resourceName:string, id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        save<T>(resourceName:string, id:string | number, options?:DSSaveConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;

        // sync
        changeHistory(resourceName:string, id?:string | number):Array<Object>;
        changes(resourceName:string, id:string | number):Object;
        compute(resourceName:string, idOrInstance:number | string | Object ):void;
        createInstance<T>(resourceName:string, attrs?:T, options?:DSAdapterOperationConfiguration):T & DSInstanceShorthands<T>;
        digest():void;
        eject<T>(resourceName:string, id:string | number, options?:DSConfiguration):T & DSInstanceShorthands<T>;
        ejectAll<T>(resourceName:string, params:DSFilterArg, options?:DSConfiguration):Array<T & DSInstanceShorthands<T>>;
        filter<T>(resourceName:string, params:DSFilterArg, options?:DSConfiguration):Array<T & DSInstanceShorthands<T>>;
        get<T>(resourceName:string, id:string | number, options?:DSConfiguration):T & DSInstanceShorthands<T>;
        getAll<T>(resourceName:string, ids?:Array<string | number>):Array<T & DSInstanceShorthands<T>>;
        hasChanges(resourceName:string, id:string | number):boolean;
        inject<T>(resourceName:string, item:T, options?:DSConfiguration):T & DSInstanceShorthands<T>;
        inject<T>(resourceName:string, items:Array<T>, options?:DSConfiguration):Array<T & DSInstanceShorthands<T>>;
        is(resourceName:string, object:Object): boolean;
        lastModified(resourceName:string, id?:string | number):number; // timestamp
        lastSaved(resourceName:string, id?:string | number):number; // timestamp
        link<T>(resourceName:string, id:string | number, relations?:Array<string>):T & DSInstanceShorthands<T>;
        linkAll<T>(resourceName:string, params:DSFilterArg, relations?:Array<string>):T & DSInstanceShorthands<T>;
        linkInverse<T>(resourceName:string, id:string | number, relations?:Array<string>):T & DSInstanceShorthands<T>;
        previous<T>(resourceName:string, id:string | number):T & DSInstanceShorthands<T>;
        revert<T>(resourceName:string, id:string | number):T & DSInstanceShorthands<T>;
        unlinkInverse<T>(resourceName:string, id:string | number, relations?:Array<string>):T & DSInstanceShorthands<T>;

        defineResource<T>(resourceNameOrDefinition:string | DSResourceDefinitionConfiguration):DSResourceDefinition<T>;
        defineResource<T, TActions>(resourceNameOrDefinition:string | DSResourceDefinitionConfiguration):DSResourceDefinition<T> & TActions;
        registerAdapter(adapterId:string, adapter:IDSAdapter, options?:{default: boolean}):void;
    }

    interface DSConfiguration extends IDSResourceLifecycleEventHandlers {
        actions?: Object;
        allowSimpleWhere?: boolean;
        basePath?: string;
        bypassCache?: boolean;
        cacheResponse?: boolean;
        defaultAdapter?: string;
        defaultFilter?: (collection:Array<any>, resourceName:string, params:DSFilterArg, options:DSConfiguration)=>Array<any>;
        eagerEject?: boolean;
        endpoint?: string;
        error?: boolean | ((message?:any, ...optionalParams:any[])=> void);
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
        ignoredChanges?: Array<RegExp | string>;
        keepChangeHistory?: boolean;
        loadFromServer?: boolean;
        log?: boolean | ((message?: any, ...optionalParams: any[])=> void);
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
        adapter?: string;
        params?: {
            [paramName: string]: string | number | boolean;
        };
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

        //async
        create<TInject>(attrs:TInject, options?:DSConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        destroy(id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<void>;
        destroyAll(params?:DSFilterArg, options?:DSAdapterOperationConfiguration):JSDataPromise<void>;
        find(id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        findAll(params?:DSFilterArg, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T & DSInstanceShorthands<T>>>;
        loadRelations(idOrInstance:string | number | Object, relations:string | Array<string>, options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        update(id:string | number, attrs:Object, options?:DSSaveConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        updateAll(attrs:Object, params?:DSFilterArg, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T & DSInstanceShorthands<T>>>;
        reap(options?:DSConfiguration):JSDataPromise<void>;
        refresh(id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        save(id:string | number, options?:DSSaveConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;

        // sync
        changeHistory(id?:string | number):Array<Object>;
        changes(id:string | number):Object;
        compute(idOrInstance:number | string | Object ):void;
        createInstance<TInject>(attrs?:TInject, options?:DSAdapterOperationConfiguration):T & DSInstanceShorthands<T>;
        digest():void;
        eject(id:string | number, options?:DSConfiguration):T & DSInstanceShorthands<T>;
        ejectAll(params:DSFilterArg, options?:DSConfiguration):Array<T & DSInstanceShorthands<T>>;
        filter(params:DSFilterArg, options?:DSConfiguration):Array<T & DSInstanceShorthands<T>>;
        get(id:string | number, options?:DSConfiguration):T & DSInstanceShorthands<T>;
        getAll(ids?:Array<string | number>):Array<T & DSInstanceShorthands<T>>;
        hasChanges(id:string | number):boolean;
        inject(item:T, options?:DSConfiguration):T & DSInstanceShorthands<T>;
        inject(items:Array<T>, options?:DSConfiguration):Array<T & DSInstanceShorthands<T>>;
        is(object:Object): boolean;
        lastModified(id?:string | number):number; // timestamp
        lastSaved(id?:string | number):number; // timestamp
        link(id:string | number, relations?:Array<string>):T & DSInstanceShorthands<T>;
        linkAll(params:DSFilterArg, relations?:Array<string>):T & DSInstanceShorthands<T>;
        linkInverse(id:string | number, relations?:Array<string>):T & DSInstanceShorthands<T>;
        previous(id:string | number):T & DSInstanceShorthands<T>;
        unlinkInverse(id:string | number, relations?:Array<string>):T & DSInstanceShorthands<T>;
    }

    export interface DSInstanceShorthands<T> {
        DSCompute():void;
        DSRefresh(options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        DSSave(options?:DSSaveConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        DSUpdate(options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        DSDestroy(options?:DSAdapterOperationConfiguration):JSDataPromise<void>;
        DSCreate(options?:DSConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        DSLoadRelations(relations:string | Array<string>, options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        DSChangeHistory():Array<Object>;
        DSChanges():Object;
        DSHasChanges():boolean;
        DSLastModified():number; // timestamp
        DSLastSaved():number; // timestamp
        DSLink(relations?:Array<string>):T & DSInstanceShorthands<T>;
        DSLinkInverse(relations?:Array<string>):T & DSInstanceShorthands<T>;
        DSPrevious():T & DSInstanceShorthands<T>;
        DSUnlinkInverse(relations?:Array<string>):T & DSInstanceShorthands<T>;
    }

    interface DSFilterParams {
        where?: Object;

        limit?: number;

        skip?: number;
        offset?: number;

        orderBy?: string | Array<string> | Array<Array<string>>;
        sort?: string | Array<string> | Array<Array<string>>;
    }

    type DSFilterArg = DSFilterParams | Object;

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
        create<T>(config:DSResourceDefinition<T>, attrs:Object, options?:DSConfiguration):JSDataPromise<T>;

        destroy<T>(config:DSResourceDefinition<T>, id:string | number, options?:DSConfiguration):JSDataPromise<any>;

        destroyAll<T>(config:DSResourceDefinition<T>, params:DSFilterArg, options?:DSConfiguration):JSDataPromise<any>;

        find<T>(config:DSResourceDefinition<T>, id:string | number, options?:DSConfiguration):JSDataPromise<T>;

        findAll<T>(config:DSResourceDefinition<T>, params?:DSFilterArg, options?:DSConfiguration):JSDataPromise<T>;

        update<T>(config:DSResourceDefinition<T>, id:string | number, attrs:Object, options?:DSConfiguration):JSDataPromise<T>;
        updateAll<T>(config:DSResourceDefinition<T>, attrs:Object, params?:DSFilterArg, options?:DSConfiguration):JSDataPromise<T>;
    }

    // Custom action config
    interface DSActionConfig {
        adapter?: string;
        endpoint?: string;
        pathname?: string;
        method?: string;
    }

    // Custom action method definition
    // options are passed to adapter.HTTP() method-call, js-data-http adapter by default uses AXIOS but can also be $http in case of angular
    // or a custom adapter implementation. The adapter can be set via the DSActionConfig.
    interface DSActionFn {
        <T>(id:string | number, options?:Object):JSDataPromise<T>
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
