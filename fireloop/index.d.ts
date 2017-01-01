// Type definitions for fireloop 1.0
// Project: http://fireloop.io/
// Definitions by: Andres Jimenez <https://github.com/kattsushi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

declare namespace fireloop {
    interface ModelLoopback {
        modelName?: string;
        dataSource?: {
            name: string;
            config: any;
        };
        sharedMethod?: any;
        settings: any;
    }

    interface Model {
        //Event stuff//
        /**
         * @see https://docs.strongloop.com/display/public/APIC/Basic+model+any#Basicmodelany-Events
         */
        on(event: 'attached'|'dataSourceAttached'|'set'|'changed'|'deleted'|'deletedAll', listener: () => void): void;

        // Persistedmodel
        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-bulkupdate
         */
        bulkUpdate(updates: any[], options: any, callback: findCallback): void;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-bulkupdate
         */
        changes(since: number, filter: Filter, callback: findCallback): void;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-checkpoint
         */
        checkpoint(callback: findCallback): void;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-checkpoint
         */
        count(where: any, callback: countCallback): PromiseLike<number>;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-create
         */
        create(data: any | any[], callback: findCallbackById): PromiseLike<any>;

        /**
         * Check Fireloop () => voidality for this method in RealTime
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-create
         */
        // createChangeStream(data: any | any[], callback: findCallbackById): PromiseLike<any>;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-createupdates
         */
        createUpdates(deltas: any[], callback: () => void): PromiseLike<any[]>;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-currentcheckpoint
         */
        currentCheckpoint(callback: () => void): PromiseLike<number>;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-destroyall
         */
        destroyAll(where: any, callback: () => void): PromiseLike<number>;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-destroybyid
         */
        destroyById(id: string, callback: () => void): PromiseLike<any>;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-diff
         */
        diff(since: number, remoteChanges: any[], callback: () => void): PromiseLike<any>;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-enablechangetracking
         */
        enableChangeTracking(id: string, callback: () => void): PromiseLike<any>;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-exists
         */
        exists(id: string, callback: () => void): PromiseLike<any>;

        //Find stuff//
        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-find
         */
        find(filter: Filter, callback: findCallback): PromiseLike<any[]>;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-findbyid
         */
        findById(id: string, filter: Filter, callback: findCallbackById): PromiseLike<any>;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-findone
         */
        findOne(filter: Filter, callback: findCallbackById): PromiseLike<any>;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-findorcreate
         */
        findOrCreate(filter: Filter, data: any, callback: findCallbackById): PromiseLike<any>;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-getchangemodel
         */
        getChangeModel(): void;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-getidname
         */
        getIdName(): string;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-getsourceid
         */
        getSourceId(callback: () => void): string;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-getsourceid
         */
        handleChangeError(err: Error): void;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-rectifychange
         */
        rectifyChange(id: string, callback: () => void): void;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-replacebyid
         */
        replaceById(id: string, data: any, callback: findCallbackById): PromiseLike<any>;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-replaceorcreate
         */
        replaceOrCreate(data: any, options: any, callback: findCallbackById): PromiseLike<any>;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-replicate
         */
        replicate(since: number, targetModel: Model, options: any, filter: any, callback: () => void): void;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-updateall
         */
        updateAll(where: any, data: any, callback: findCallback): void;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-upsert
         */
        upsert(data: any, callback: findCallback): PromiseLike<any>;

        /**
         * Override this to customize core find behavior
         * 
         * @see https://apidocs.strongloop.com/loopback/#persistedmodel-upsertwithwhere
         */
        upsertWithWhere(where: any, data: any, callback: findCallback): PromiseLike<any>;

        //Remote method stuff//

        /**
         * The `loopback.Model.extend()` method calls this when you create a model that extends another model.
         * Add any setup or configuration code you want executed when the model is created.
         * See  [Setting up a custom model](http://docs.strongloop.com/display/LB/Extending+built-in+models#Extendingbuilt-inmodels-Settingupacustommodel).
         */
        setup(): void;

        /**
         * Check if the given access token can invoke the specified method.
         */
        checkAccess(token: any, modelId: string, sharedMethod: any, ctx: any, callback: (err: string|Error, allowed: boolean) => void ): void;

        /**
         * Get the `Application` any to which the Model is attached.
         */
        getApp(callback: findCallback): void;

        /**
         * Enable remote invocation for the specified method.
         * See [Remote methods](http://docs.strongloop.com/display/LB/Remote+methods) for more information.
         */
        remoteMethod(name: string, options: RemoteMethodOptions): void;

        /**
         * Disable remote invocation for the method with the given name.
         */
        disableRemoteMethod(name: string, isStatic: boolean): void;

        /**
         * Disable remote invocation for the method with the given name.
         */
        disableRemoteMethodByName(name: string): void;

        /**
        * Enabled deeply-nested queries of related models via REST API.
        */
        nestRemoting(relationName: string, options: any, filterCallback: findCallback): void;

        //Validatable stuff//
        /**
         * Validate presence of one or more specified properties.
         * Requires a model to include a property to be considered valid; fails when validated field is blank.
         */
        validatesPresenceOf(propertyName: string): void;

        /**
         * Validate absence of one or more specified properties.
         * A model should not include a property to be considered valid; fails when validated field not blank.
         */
        validatesAbsenceOf(propertyName: string): void;

        /**
         * Validate length. Require a property length to be within a specified range.
         * Three kinds of validations: min, max, is.
         */
        validatesLengthOf(propertyName: string): void;

        /**
         * Validate numericality.  Requires a value for property to be either an integer or number.
         */
        validatesNumericalityOf(propertyName: string): void;

        /**
         * Validate inclusion in set.  Require a value for property to be in the specified array.
         */
        validatesInclusionOf(propertyName: string): void;

        /**
         * Validate exclusion.  Require a property value not be in the specified array
         */
        validatesExclusionOf(propertyName: string): void;

        /**
         * Validate format. Require a model to include a property that matches the given format.
         */
        validatesFormatOf(propertyName: string): void;

        /**
         * Validate using custom validation () => void.
         */
        validate(propertyName: string, validatorFn: () => void): void;

        /**
         * Validate using custom asynchronous validation () => void.
         */
        validateAsync(propertyName: string, validatorFn: () => void): void;

        /**
         * Validate uniqueness. Ensure the value for property is unique in the collection of models.
         * Not available for all connectors. Currently supported with these connectors:
         *  - In Memory
         *  - Oracle
         *  - MongoDB
        */
        validatesUniquenessOf(propertyName: string): void;
    }

    interface Filter {
        fields?: string|any|string[];
        include?: string|any|any[];
        limit?: number;
        order?: string;
        skip?: number;
        where?: any;
    }

    type Next = (err?: Error, result?: any) => void;

    type findCallbackById = (error?: Error, result?: any) => void;

    type findCallback = (error?: Error, result?: any[]) => void;

    type countCallback = (error?: Error, result?: number) => void;


    interface RemoteMethodOptions {
        accepts: RemoteMethodArgument[];
        description?: string|string[];
        http: {
            path?: string;
            verb?: 'get' | 'post' | 'patch' | 'put' | 'del' | 'all';
            status?: number;
            errorStatus?: number;
        };
        isStatic?:	boolean;
        notes?: string | string[];
        returns: RemoteMethodArgument;
    }

    interface RemoteMethodArgument {
        arg: string;
        description: string | string[];
        http: any;
        required: boolean;
        root: boolean;
        type: 'any' | 'Array' | 'boolean' | 'Buffer' | 'Date' | 'GeoPoint' | 'null' | 'number' | 'any' | 'string';
        default: string;
    }
}

export = fireloop;