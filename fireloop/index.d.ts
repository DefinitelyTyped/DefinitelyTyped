// Type definitions for fireloop 1.0.0-beta.1.3
// Project: http://fireloop.io/
// Definitions by: Andres Jimenez <https://github.com/kattsushi/>, forked: Sequoia McDowell <https://github.com/Sequoia/loopback-type-definitions>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface ModelLoopback {
    modelName?: string;
    dataSource?: {
        name: string;
        config: Object;
    };
    sharedMethod?: Object;
    settings: Object;
}

interface ModelConstructor {
    //Event stuff//
    /**
     * @see https://docs.strongloop.com/display/public/APIC/Basic+model+object#Basicmodelobject-Events
     */
    on(event: 'attached'|'dataSourceAttached'|'set'|'changed'|'deleted'|'deletedAll', listener: Function): void;

    // Persistedmodel
    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-bulkupdate
     */
    bulkUpdate(updates: Array<Object >, options: Object, callback: findCallback): void;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-bulkupdate
     */
    changes(since: Number, filter: Filter, callback: findCallback): void;

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
    count(where: Object, callback: countCallback): PromiseLike<Number>;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-create
     */
    create(data: Object | Array<Object>, callback: findCallbackById): PromiseLike<Object>;

    /**
     * Check Fireloop Functionality for this method in RealTime
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-create
     */
    // createChangeStream(data: Object | Array<Object>, callback: findCallbackById): PromiseLike<Object>;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-createupdates
     */
    createUpdates(deltas: Array<Object>, callback: Function): PromiseLike<Array<Object>>;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-currentcheckpoint
     */
    currentCheckpoint(callback: Function): PromiseLike<number>;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-destroyall
     */
    destroyAll(where: Object, callback: Function): PromiseLike<number>;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-destroybyid
     */
    destroyById(id: string, callback: Function): PromiseLike<Object>;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-diff
     */
    diff(since: Number, remoteChanges: Array<Object>, callback: Function): PromiseLike<Object>;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-enablechangetracking
     */
    enableChangeTracking(id: string, callback: Function): PromiseLike<Object>;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-exists
     */
    exists(id: string, callback: Function): PromiseLike<Object>;

    //Find stuff//
    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-find
     */
    find(filter: Filter, callback: findCallback): PromiseLike<Array<Object>>;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-findbyid
     */
    findById(id: string, filter: Filter, callback: findCallbackById): PromiseLike<Object>;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-findone
     */
    findOne(filter: Filter, callback: findCallbackById): PromiseLike<Object>;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-findorcreate
     */
    findOrCreate(filter: Filter, data: Object, callback: findCallbackById): PromiseLike<Object>;

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
    getIdName(): String;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-getsourceid
     */
    getSourceId(callback: Function): String;

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
    rectifyChange(id: string, callback: Function): void;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-replacebyid
     */
    replaceById(id: string, data: Object, callback: findCallbackById): PromiseLike<Object>;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-replaceorcreate
     */
    replaceOrCreate(data: Object, options: Object, callback: findCallbackById): PromiseLike<Object>;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-replicate
     */
    replicate(since: Number, targetModel: ModelConstructor, options: Object, filter: Object, callback: Function): void;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-updateall
     */
    updateAll(where: Object, data: Object, callback: findCallback): void;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-upsert
     */
    upsert(data: Object, callback: findCallback): PromiseLike<Object>;

    /**
     * Override this to customize core find behavior
     * 
     * @see https://apidocs.strongloop.com/loopback/#persistedmodel-upsertwithwhere
     */
    upsertWithWhere(where: Object, data: Object, callback: findCallback): PromiseLike<Object>;

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
    checkAccess(token: Object, modelId: string, sharedMethod: Object, ctx: Object, callback: (err: String|Error, allowed: boolean) => void ): void;

    /**
     * Get the `Application` object to which the Model is attached.
     */
    getApp(callback: findCallback): void;

    /**
     * Enable remote invocation for the specified method.
     * See [Remote methods](http://docs.strongloop.com/display/LB/Remote+methods) for more information.
     */
    remoteMethod(name: String, options: RemoteMethodOptions): void;

    /**
     * Disable remote invocation for the method with the given name.
     */
    disableRemoteMethod(name: String, isStatic: Boolean): void;

    /**
     * Disable remote invocation for the method with the given name.
     */
    disableRemoteMethodByName(name: String): void;

    /**
    * Enabled deeply-nested queries of related models via REST API.
    */
    nestRemoting(relationName: String, options: Object, filterCallback: findCallback): void;

    //Validatable stuff//
    /**
     * Validate presence of one or more specified properties.
     * Requires a model to include a property to be considered valid; fails when validated field is blank.
     */
    validatesPresenceOf(propertyName: String): void;

    /**
     * Validate absence of one or more specified properties.
     * A model should not include a property to be considered valid; fails when validated field not blank.
     */
    validatesAbsenceOf(propertyName: String): void;

    /**
     * Validate length. Require a property length to be within a specified range.
     * Three kinds of validations: min, max, is.
     */
    validatesLengthOf(propertyName: String): void;

    /**
     * Validate numericality.  Requires a value for property to be either an integer or number.
     */
    validatesNumericalityOf(propertyName: String): void;

    /**
     * Validate inclusion in set.  Require a value for property to be in the specified array.
     */
    validatesInclusionOf(propertyName: String): void;

    /**
     * Validate exclusion.  Require a property value not be in the specified array
     */
    validatesExclusionOf(propertyName: String): void;

    /**
     * Validate format. Require a model to include a property that matches the given format.
     */
    validatesFormatOf(propertyName: String): void;

    /**
     * Validate using custom validation function.
     */
    validate(propertyName: string, validatorFn: Function): void;

    /**
     * Validate using custom asynchronous validation function.
     */
    validateAsync(propertyName: String, validatorFn: Function): void;

    /**
     * Validate uniqueness. Ensure the value for property is unique in the collection of models.
     * Not available for all connectors. Currently supported with these connectors:
     *  - In Memory
     *  - Oracle
     *  - MongoDB
    */
    validatesUniquenessOf(propertyName: String): void;
}

interface Filter {
    fields?: string|Object|Array<string>;
    include?: string|Object|Array<Object>;
    limit?: Number;
    order?: String;
    skip?: Number;
    where?: Object;
}

interface Next { (err?: Error, result?: Object): void; }

interface findCallbackById { (error?: Error, result?: Object): void; }

interface findCallback { (error?: Error, result?: Array<Object>): void; }
interface countCallback { (error?: Error, result?: Number): void; }


interface RemoteMethodOptions {
    accepts: Array<RemoteMethodArgument>;
    description?: String|String[];
    http: {
        path?: String;
        verb?: 'get' | 'post' | 'patch' | 'put' | 'del' | 'all';
        status?: Number;
        errorStatus?: Number;
    };
    isStatic?:	Boolean;
    notes?: String | String[];
    returns: RemoteMethodArgument;
}

interface RemoteMethodArgument {
    arg: String;
    description: String | String[];
    http: Object;
    required: Boolean;
    root: Boolean;
    type: 'any' | 'Array' | 'Boolean' | 'Buffer' | 'Date' | 'GeoPoint' | 'null' | 'Number' | 'Object' | 'String';
    default: String;
}

declare var ModelConstructor: ModelConstructor;

declare module 'fireloop' {
    export = ModelConstructor;
}
