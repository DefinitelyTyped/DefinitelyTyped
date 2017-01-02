// Type definitions for JSData v2.8.0
// Project: https://github.com/js-data/js-data
// Definitions by: Stefan Steinhart <https://github.com/reppners>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///////////////////////////////////////////////////////////////////////////////
// js-data module (js-data.js)
///////////////////////////////////////////////////////////////////////////////

declare namespace JSData {

    interface JSDataPromise<R> {
        then<U>(onFulfilled?:(value:R) => U | JSDataPromise<U>, onRejected?:(error:any) => U | JSDataPromise<U>): JSDataPromise<U>;

        catch<U>(onRejected?:(error:any) => U | JSDataPromise<U>): JSDataPromise<U>;

        // enhanced with finally
        finally(finallyCb?:() => any): JSDataPromise<R>;
    }

    interface DSConfiguration extends IDSResourceLifecycleEventHandlers {
        actions?: Object;
        allowSimpleWhere?: boolean;
        basePath?: string;
        bypassCache?: boolean;
        cacheResponse?: boolean;
        clearEmptyQueries?:boolean;
        debug?:boolean;
        defaultAdapter?: string;
        defaultFilter?: (collection:Array<any>, resourceName:string, params:DSFilterArg, options:DSConfiguration)=>Array<any>;
        defaultValues?:Object;
        eagerEject?: boolean;
        endpoint?: string;
        error?: boolean | ((message?:any, ...optionalParams:any[])=> void);
        fallbackAdapters?: Array<string>;
        findAllFallbackAdapters?: Array<string>;
        findAllStrategy?: string;
        findFallbackAdapters?: Array<string>;
        findStrategy?: string
        findStrictCache?:boolean;
        idAttribute?: string;
        ignoredChanges?: Array<RegExp | string>;
        ignoreMissing?: boolean;
        instanceEvents?:boolean;
        keepChangeHistory?: boolean;
        linkRelations?:boolean;
        log?: boolean | ((message?:any, ...optionalParams:any[])=> void);
        maxAge?: number;
        notify?: boolean;
        omit?:Array<string|RegExp>;
        onConflict?:string; // "merge"(default) or "replace"
        reapAction?: string;
        reapInterval?: number;
        relationsEnumerable?:boolean;
        resetHistoryOnInject?: boolean;
        returnMeta?:boolean;
        scopes?:Object;
        strategy?: string;
        upsert?: boolean;
        useClass?: any;
        useFilter?: boolean;
        watchChanges?:boolean;
    }

    interface DSResourceDefinitionConfiguration extends DSConfiguration {
        computed?: any;
        meta?:any;
        methods?: any;
        name: string;
        relations?: {
            hasMany?: Object;
            hasOne?: Object;
            belongsTo?: Object;
        };
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

    interface DSAdapterOperationConfiguration extends DSConfiguration {
        adapter?: string;
        params?: {
            [paramName: string]: string | number | boolean;
        };
    }

    interface DSSaveConfiguration extends DSAdapterOperationConfiguration {
        changesOnly?: boolean;
    }

    interface DSCollection<T> extends Array<T> {
        fetch(params?:DSFilterArg, options?:DSConfiguration):JSDataPromise<Array<T & DSInstanceShorthands<T>>>;
        params:DSFilterArg;
        resourceName:string;
    }

    interface DSEvents {
        on(name:string, handler:(...args:any[])=>void):void;
        off(name:string, handler:(...args:any[])=>void):void;
        emit(name:string, ...args:any[]):void;
    }

    interface DS extends DSEvents {
        new(config?:DSConfiguration):DS;

        // rather undocumented
        errors:DSErrors;

        // those are objects containing the defined resources and adapters
        definitions:any;
        adapters:any;

        defaults:DSConfiguration;

        changeHistory(resourceName:string, id:string | number):Array<Object>;
        changes(resourceName:string, id:string | number, options?:{ignoredChanges:Array<string|RegExp>}):Object;
        clear<T>():Array<T & DSInstanceShorthands<T>>;
        compute<T>(resourceName:string, idOrInstance:number | string | T):T & DSInstanceShorthands<T>;
        create<T>(resourceName:string, attrs:Object, options?:DSConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        createCollection<T>(resourceName:string, array?:Array<T>, params?:DSFilterArg, options?:DSConfiguration):DSCollection<T & DSInstanceShorthands<T>>;
        createInstance<T>(resourceName:string, attrs?:Object, options?:DSConfiguration):T & DSInstanceShorthands<T>;
        destroy(resourceName:string, id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<void>;
        destroyAll(resourceName:string, params?:DSFilterArg, options?:DSAdapterOperationConfiguration):JSDataPromise<void>;
        digest():void;
        eject<T>(resourceName:string, id:string | number, options?:DSConfiguration):T & DSInstanceShorthands<T>;
        ejectAll<T>(resourceName:string, params:DSFilterArg, options?:DSConfiguration):Array<T & DSInstanceShorthands<T>>;
        filter<T>(resourceName:string, params:DSFilterArg, options?:DSConfiguration):Array<T & DSInstanceShorthands<T>>;
        find<T>(resourceName:string, id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        findAll<T>(resourceName:string, params?:DSFilterArg, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T & DSInstanceShorthands<T>>>;
        get<T>(resourceName:string, id:string | number):T & DSInstanceShorthands<T>;
        getAll<T>(resourceName:string, ids?:Array<string | number>):Array<T & DSInstanceShorthands<T>>;
        hasChanges(resourceName:string, id:string | number):boolean;
        inject<TInject, U>(resourceName:string, attrs:TInject, options?:DSConfiguration):U & DSInstanceShorthands<U>;
        inject<TInject, U>(resourceName:string, items:Array<TInject>, options?:DSConfiguration):Array<U & DSInstanceShorthands<U>>;
        is(resourceName:string, object:Object): boolean;
        lastModified(resourceName:string, id?:string | number):number; // timestamp
        lastSaved(resourceName:string, id?:string | number):number; // timestamp
        loadRelations<T>(resourceName:string, idOrInstance:string | number, relations:string | Array<string>, options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        previous<T>(resourceName:string, id:string | number):T & DSInstanceShorthands<T>;
        reap(resourceName:string):JSDataPromise<void>;
        refresh<T>(resourceName:string, id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        refreshAll<T>(resourceName:string, params?:DSFilterArg, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T & DSInstanceShorthands<T>>>;
        revert<T>(resourceName:string, id:string | number):T & DSInstanceShorthands<T>;
        save<T>(resourceName:string, id:string | number, options?:DSSaveConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        update<T>(resourceName:string, id:string | number, attrs:Object, options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        updateAll<T>(resourceName:string, attrs:Object, params?:DSFilterArg, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T & DSInstanceShorthands<T>>>;

        defineResource<T>(resourceNameOrDefinition:string | DSResourceDefinitionConfiguration):DSResourceDefinition<T>;
        defineResource<T, TActions>(resourceNameOrDefinition:string | DSResourceDefinitionConfiguration):DSResourceDefinition<T> & TActions;
        registerAdapter(adapterId:string, adapter:IDSAdapter, options?:{default: boolean}):void;
    }

    interface DSResourceDefinition<T> extends DSResourceDefinitionConfiguration, DSEvents {
        changeHistory(id:string | number):Array<Object>;
        changes(id:string | number, options?:{ignoredChanges:Array<string|RegExp>}):Object;
        clear():Array<T & DSInstanceShorthands<T>>;
        compute(idOrInstance:number | string | T):T & DSInstanceShorthands<T>;
        create(attrs:Object, options?:DSConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        createCollection(array?:Array<T>, params?:DSFilterArg, options?:DSConfiguration):DSCollection<T & DSInstanceShorthands<T>>;
        createInstance(attrs?:Object, options?:DSConfiguration):T & DSInstanceShorthands<T>;
        destroy(id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<void>;
        destroyAll(params?:DSFilterArg, options?:DSAdapterOperationConfiguration):JSDataPromise<void>;
        digest():void;
        eject(id:string | number, options?:DSConfiguration):T & DSInstanceShorthands<T>;
        ejectAll(params:DSFilterArg, options?:DSConfiguration):Array<T & DSInstanceShorthands<T>>;
        filter(params:DSFilterArg, options?:DSConfiguration):Array<T & DSInstanceShorthands<T>>;
        find(id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        findAll(params?:DSFilterArg, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T & DSInstanceShorthands<T>>>;
        get(id:string | number):T & DSInstanceShorthands<T>;
        getAll(ids?:Array<string | number>):Array<T & DSInstanceShorthands<T>>;
        hasChanges(id:string | number):boolean;
        inject<TInject>(attrs:TInject, options?:DSConfiguration):T & DSInstanceShorthands<T>;
        inject<TInject>(items:Array<TInject>, options?:DSConfiguration):Array<T & DSInstanceShorthands<T>>;
        is(object:Object): boolean;
        lastModified(id?:string | number):number; // timestamp
        lastSaved(id?:string | number):number; // timestamp
        loadRelations(idOrInstance:string | number, relations:string | Array<string>, options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        previous(id:string | number):T & DSInstanceShorthands<T>;
        reap():JSDataPromise<void>;
        refresh(id:string | number, options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        refreshAll(params?:DSFilterArg, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T & DSInstanceShorthands<T>>>;
        revert(id:string | number):T & DSInstanceShorthands<T>;
        save(id:string | number, options?:DSSaveConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        update(id:string | number, attrs:Object, options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        updateAll(attrs:Object, params?:DSFilterArg, options?:DSAdapterOperationConfiguration):JSDataPromise<Array<T & DSInstanceShorthands<T>>>;
    }

    // cannot specify T at interface level because the interface is used as generic constraint itself which ends up being recursive
    export interface DSInstanceShorthands<T> extends DSEvents {
        DSCompute():void;
        DSRefresh(options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        DSSave(options?:DSSaveConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        DSUpdate(options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        DSDestroy(options?:DSAdapterOperationConfiguration):JSDataPromise<void>;
        DSCreate(options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        DSLoadRelations(relations:string | Array<string>, options?:DSAdapterOperationConfiguration):JSDataPromise<T & DSInstanceShorthands<T>>;
        DSChangeHistory():Array<Object>;
        DSChanges():Object;
        DSHasChanges():boolean;
        DSLastModified():number; // timestamp
        DSLastSaved():number; // timestamp
        DSPrevious():T & DSInstanceShorthands<T>;
        DSRevert():T & DSInstanceShorthands<T>;
    }

    type DSSyncLifecycleHookHandler = (resource:DSResourceDefinition<any>, data:any) => void;
    type DSAsyncLifecycleHookHandler = (resource:DSResourceDefinition<any>, data:any) => JSDataPromise<any>;
    type DSAsyncLifecycleHookHandlerCb = (resource:DSResourceDefinition<any>, data:any, cb:(err:Error, data:any)=>void) => void

    interface IDSResourceLifecycleValidateEventHandlers {
        beforeValidate?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb;
        validate?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb;
        afterValidate?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb;
    }

    interface IDSResourceLifecycleCreateEventHandlers {
        beforeCreate?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb;
        afterCreate?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb;
    }

    interface IDSResourceLifecycleUpdateEventHandlers {
        beforeUpdate?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb;
        afterUpdate?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb;
    }

    interface IDSResourceLifecycleDestroyEventHandlers {
        beforeDestroy?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb;
        afterDestroy?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb;
    }

    interface IDSResourceLifecycleCreateInstanceEventHandlers {
        beforeCreateInstance?: DSSyncLifecycleHookHandler;
        afterCreateInstance?: DSSyncLifecycleHookHandler;
    }

    interface IDSResourceLifecycleInjectEventHandlers {
        beforeInject?: DSSyncLifecycleHookHandler;
        afterInject?: DSSyncLifecycleHookHandler;
    }

    interface IDSResourceLifecycleEjectEventHandlers {
        beforeEject?: DSSyncLifecycleHookHandler;
        afterEject?: DSSyncLifecycleHookHandler;
    }

    interface IDSResourceLifecycleReapEventHandlers {
        beforeReap?: DSSyncLifecycleHookHandler;
        afterReap?: DSSyncLifecycleHookHandler;
    }

    interface IDSResourceLifecycleFindEventHandlers {
        afterFind?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb;
    }

    interface IDSResourceLifecycleFindAllEventHandlers {
        afterFindAll?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb;
    }

    interface IDSResourceLifecycleLoadRelationsEventHandlers {
        afterLoadRelations?: DSAsyncLifecycleHookHandler | DSAsyncLifecycleHookHandlerCb;
    }

    interface IDSResourceLifecycleCreateCollectionEventHandlers {
        beforeCreateCollection?: DSSyncLifecycleHookHandler;
        afterCreateCollection?: DSSyncLifecycleHookHandler;
    }

    interface IDSResourceLifecycleEventHandlers extends IDSResourceLifecycleCreateEventHandlers,
        IDSResourceLifecycleCreateInstanceEventHandlers,
        IDSResourceLifecycleValidateEventHandlers,
        IDSResourceLifecycleUpdateEventHandlers,
        IDSResourceLifecycleDestroyEventHandlers,
        IDSResourceLifecycleInjectEventHandlers,
        IDSResourceLifecycleEjectEventHandlers,
        IDSResourceLifecycleReapEventHandlers,
        IDSResourceLifecycleFindEventHandlers,
        IDSResourceLifecycleFindAllEventHandlers,
        IDSResourceLifecycleLoadRelationsEventHandlers,
        IDSResourceLifecycleCreateCollectionEventHandlers {
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
        create(config:DSResourceDefinition<any>, attrs:Object, options?:DSConfiguration):JSDataPromise<any>;

        destroy(config:DSResourceDefinition<any>, id:string | number, options?:DSConfiguration):JSDataPromise<void>;
        destroyAll(config:DSResourceDefinition<any>, params:DSFilterArg, options?:DSConfiguration):JSDataPromise<void>;

        find(config:DSResourceDefinition<any>, id:string | number, options?:DSConfiguration):JSDataPromise<any>;
        findAll(config:DSResourceDefinition<any>, params?:DSFilterArg, options?:DSConfiguration):JSDataPromise<any>;

        update(config:DSResourceDefinition<any>, id:string | number, attrs:Object, options?:DSConfiguration):JSDataPromise<any>;
        updateAll(config:DSResourceDefinition<any>, attrs:Object, params?:DSFilterArg, options?:DSConfiguration):JSDataPromise<any>;
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
    DSUtils: any;
};

export = JSData;
