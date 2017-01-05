// Type definitions for Loopback 2.3
// Project: https://github.com/strongloop/loopback
// Definitions by: Andres D Jimenez <https://github.comhttps://github.com/kattsushi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/************************************************
*                                               *
*               LoopBack v2.x API               *
*                                               *
************************************************/

/**
* The `App` object represents a Loopback application.
*
* The App object extends [Express](expressjs.com/api.html#express) and
* supports Express middleware. See
* [Express documentation](expressjs.com) for details.
*
* ```js
* var loopback = require('loopback');
* var app = loopback();
*
* app.get('/', function(req, res){
*   res.send('hello world');
* });
*
* app.listen(3000);
* ```
*
* @class LoopBackApplication
* @header var app = loopback()
*/

declare class LoopBackApplication {

    /**
     * Lazily load a set of [remote objects](apidocs.strongloop.com/strong-remoting/#remoteObjectsoptions).
    *
    * **NOTE:** Calling `app.remotes()` more than once returns only a single set of remote objects.
    * @returns {any} remoteObjects
    */

    remotes(): any;

    /**
     * Attach a model to the app. The `Model` will be available on the
    * `app.models` object.
    *
    * Example - Attach an existing model:
    ```js
    * var User = loopback.User;
    * app.model(User);
    *```
    * Example - Attach an existing model, alter some aspects of the model:
    * ```js
    * var User = loopback.User;
    * app.model(User, { dataSource: 'db' });
    *```
    *
    * @param {any|string} Model The model to attach.
    * @options {any} config The model's configuration.
    * @property {string|DataSource} dataSource The `DataSource` to which to attach the model.
    * @property {boolean} [public] Whether the model should be exposed via REST API.
    * @property {any} [relations] Relations to add/update.
    * @end
    * @returns {any} the model class
    */

    model(Model: any|string, config: {dataSource: string|DataSource, public?: boolean, relations?: any}): any;

    /**
     * Get the models exported by the app. Returns only models defined using `app.model()`
    *
    * There are two ways to access models:
    *
    * 1.  Call `app.models()` to get a list of all models.
    *
    * ```js
    * var models = app.models();
    *
    * models.forEach(function(Model) {
    *  console.log(Model.modelName); // color
    * });
    * ```
    *
    * 2. Use `app.model` to access a model by name.
    * `app.models` has properties for all defined models.
    *
    * The following example illustrates accessing the `Product` and `CustomerReceipt` models
    * using the `models` object.
    *
    * ```js
    * var loopback = require('loopback');
    *  var app = loopback();
    *  app.boot({
    *   dataSources: {
    *     db: {connector: 'memory'}
    *   }
    * });
    *
    * app.model('product', {dataSource: 'db'});
    * app.model('customer-receipt', {dataSource: 'db'});
    *
    * // available based on the given name
    * var Product = app.models.Product;
    *
    * // also available as camelCase
    * var product = app.models.product;
    *
    * // multi-word models are avaiable as pascal cased
    * var CustomerReceipt = app.models.CustomerReceipt;
    *
    * // also available as camelCase
    * var customerReceipt = app.models.customerReceipt;
    * ```
    *
    * @returns {Array} Array of model classes.
    */

    models(): any[];

    /**
     * Define a DataSource.
    *
    * @param {string} name The data source name
    * @param {any} config The data source config
    */

    dataSource(name: string, config: any): void;

    /**
     * Register a connector.
    *
    * When a new data-source is being added via `app.dataSource`, the connector
    * name is looked up in the registered connectors first.
    *
    * Connectors are required to be explicitly registered only for applications
    * using browserify, because browserify does not support dynamic require,
    * which is used by LoopBack to automatically load the connector module.
    *
    * @param {string} name Name of the connector, e.g. 'mysql'.
    * @param {any} connector Connector object as returned
    *   by `require('loopback-connector-{name}')`.
    */

    connector(name: string, connector: any): void;

    /**
     * Get all remote objects.
    * @returns {any} [Remote objects](apidocs.strongloop.com/strong-remoting/#remoteObjectsoptions).
    */

    remoteObjects(): any;

    /**
     * An object to store dataSource instances.
    */

    dataSources(): void;

    /**
     * Enable app wide authentication.
    */

    enableAuth(): void;

    /**
     * Listen for connections and update the configured port.
    *
    * When there are no parameters or there is only one callback parameter,
    * the server will listen on `app.get('host')` and `app.get('port')`.
    *
    * For example, to listen on host/port configured in app config:
    * ```js
    * app.listen();
    * ```
    *
    * Otherwise all arguments are forwarded to `http.Server.listen`.
    *
    * For example, to listen on the specified port and all hosts, and ignore app config.
    * ```js
    * app.listen(80);
    * ```
    *
    * The function also installs a `listening` callback that calls
    * `app.set('port')` with the value returned by `server.address().port`.
    * This way the port param contains always the real port number, even when
    * listen was called with port number 0.
    *
    * @param {() => void} [cb] If specified, the callback is added as a listener
    *   for the server's "listening" event.
    * @returns {any} http.Server A node `http.Server` with this application configured
    *   as the request handler.
    listen(cb?: () => void):http.Server;
    */

    listen(port?: number, cb?: () => void): any;
}

/**
* Register a middleware using a factory function and a JSON config.
*
* **Example**
*
* ```js
* app.middlewareFromConfig(compression, {
*   enabled: true,
*   phase: 'initial',
*   params: {
*     threshold: 128
*   }
* });
* ```
*
* @param {function} factory The factory function creating a middleware handler.
*   Typically a result of `require()` call, e.g. `require('compression')`.
* @options {any} config The configuration.
* @property {string} phase The phase to register the middleware in.
* @property {boolean} [enabled] Whether the middleware is enabled.
*   Default: `true`.
* @property {Array|*} [params] The arguments to pass to the factory
*   function. Either an Array of arguments,
*   or the value of the first argument when the factory expects
*   a single argument only.
* @property {Array|string|RegExp} [paths] Optional list of paths limiting
*   the scope of the middleware.
*
* @returns {any} this (fluent API)
*
* @header app.middlewareFromConfig(factory, config)
*/

declare function middlewareFromConfig(factory: () => void, config: {phase: string, enabled?: boolean, params?: any[]|any, paths?: any[]|string|RegExp}): any;

/**
* Register (new) middleware phases.
*
* If all names are new, then the phases are added just before "routes" phase.
* Otherwise the provided list of names is merged with the existing phases
* in such way that the order of phases is preserved.
*
* **Examples**
*
* ```js
* // built-in phases:
* // initial, session, auth, parse, routes, files, final
*
* app.defineMiddlewarePhases('custom');
* // new list of phases
* // initial, session, auth, parse, custom, routes, files, final
*
* app.defineMiddlewarePhases([
*   'initial', 'postinit', 'preauth', 'routes', 'subapps'
* ]);
* // new list of phases
* // initial, postinit, preauth, session, auth, parse, custom,
* // routes, subapps, files, final
* ```
*
* @param {string|string[]} nameOrArray A phase name or a list of phase
*   names to add.
*
* @returns {any} this (fluent API)
*
* @header app.defineMiddlewarePhases(nameOrArray)
*/

declare function defineMiddlewarePhases(nameOrArray: string|string[]): any;

/**
* Register a middleware handler to be executed in a given phase.
* @param {string} name The phase name, e.g. "init" or "routes".
* @param {Array|string|RegExp} [paths] Optional list of paths limiting
*   the scope of the middleware.
*   string paths are interpreted as expressjs path patterns,
*   regular expressions are used as-is.
* @param {function} handler The middleware handler, one of
*   `function(req, res, next)` or
*   `function(err, req, res, next)`
* @returns {any} this (fluent API)
*
* @header app.middleware(name, handler)
*/

declare function middleware(name: string, paths?: any[]|string|RegExp, handler?: () => void): any;

/**
* LoopBack core module. It provides static properties and
* methods to create models and data sources. The module itself is a function
* that creates loopback `app`. For example:
*
* ```js
* var loopback = require('loopback');
* var app = loopback();
* ```
*
* @property {string} version Version of LoopBack framework.  Static read-only property.
* @property {string} mime
* @property {boolean} isBrowser True if running in a browser environment; false otherwise.  Static read-only property.
* @property {boolean} isServer True if running in a server environment; false otherwise.  Static read-only property.
* @property {Registry} registry The global `Registry` object.
* @property {string} faviconFile Path to a default favicon shipped with LoopBack.
* Use as follows: `app.use(require('serve-favicon')(loopback.faviconFile));`
* @class loopback
* @header loopback
*/

declare function loopback(): LoopBackApplication;

declare module 'loopback' {
      export = loopback;
}

declare namespace loopback {

      /**
      * Add a remote method to a model.
      * @param {() => void} fn
      * @param {any} options (optional)
      */

      function remoteMethod(fn: () => void, options: any): void;

      /**
      * Create a template helper.
      *
      *     var render = loopback.template('foo.ejs');
      *     var html = render({foo: 'bar'});
      *
      * @param {string} path Path to the template file.
      * @returns {() => void}
      */

      function template(path: string): () => void;

      /**
      * Create a named vanilla JavaScript class constructor with an attached
      * set of properties and options.
      *
      * This function comes with two variants:
      *  * `loopback.createModel(name, properties, options)`
      *  * `loopback.createModel(config)`
      *
      * In the second variant, the parameters `name`, `properties` and `options`
      * are provided in the config object. Any additional config entries are
      * interpreted as `options`, i.e. the following two configs are identical:
      *
      * ```js
      * { name: 'Customer', base: 'User' }
      * { name: 'Customer', options: { base: 'User' } }
      * ```
      *
      * **Example**
      *
      * Create an `Author` model using the three-parameter variant:
      *
      * ```js
      * loopback.createModel(
      *   'Author',
      *   {
      *     firstName: 'string',
      *     lastName: 'string'
      *   },
      *   {
      *     relations: {
      *       books: {
      *         model: 'Book',
      *         type: 'hasAndBelongsToMany'
      *       }
      *     }
      *   }
      * );
      * ```
      *
      * Create the same model using a config object:
      *
      * ```js
      * loopback.createModel({
      *   name: 'Author',
      *   properties: {
      *     firstName: 'string',
      *     lastName: 'string'
      *   },
      *   relations: {
      *     books: {
      *       model: 'Book',
      *       type: 'hasAndBelongsToMany'
      *     }
      *   }
      * });
      * ```
      *
      * @param {string} name Unique name.
      * @param {any} properties
      * @param {any} options (optional)
      *
      * @header loopback.createModel
      */

      function createModel(name: string, properties: any, options: any): void;

      /**
      * Alter an existing Model class.
      * @param {Model} ModelCtor The model constructor to alter.
      * @options {any} config Additional configuration to apply
      * @property {DataSource} dataSource Attach the model to a dataSource.
      * @property {any} [relations] Model relations to add/update.
      *
      * @header loopback.configureModel(ModelCtor, config)
      */

      function configureModel(ModelCtor: Model, config: {dataSource: DataSource, relations?: any}): void;

      /**
      * Look up a model class by name from all models created by
      * `loopback.createModel()`
      * @param {string} modelName The model name
      * @returns {Model} The model class
      *
      * @header loopback.findModel(modelName)
      */

      function findModel(modelName: string): Model;

      /**
      * Look up a model class by name from all models created by
      * `loopback.createModel()`. Throw an error when no such model exists.
      *
      * @param {string} modelName The model name
      * @returns {Model} The model class
      *
      * @header loopback.getModel(modelName)
      */

      function getModel(modelName: string): Model;

      /**
      * Look up a model class by the base model class.
      * The method can be used by LoopBack
      * to find configured models in models.json over the base model.
      * @param {Model} modelType The base model class
      * @returns {Model} The subclass if found or the base class
      *
      * @header loopback.getModelByType(modelType)
      */

      function getModelByType(modelType: Model): Model;

      /**
      * Create a data source with passing the provided options to the connector.
      *
      * @param {string} name Optional name.
      * @options {any} options Data Source options
      * @property {any} connector LoopBack connector.
      * @property {*} [*] Other&nbsp;connector properties.
      *   See the relevant connector documentation.
      */

      function createDataSource(name: string, options: {connector: any, properties?: any}): void;

      /**
      * Get an in-memory data source. Use one if it already exists.
      *
      * @param {string} [name] The name of the data source.
      * If not provided, the `'default'` is used.
      */

      function memory(name?: string): void;

      /**
      * Set the default `dataSource` for a given `type`.
      * @param {string} type The datasource type.
      * @param {any|DataSource} dataSource The data source settings or instance
      * @returns {DataSource} The data source instance.
      *
      * @header loopback.setDefaultDataSourceForType(type, dataSource)
      */

      function setDefaultDataSourceForType(type: string, dataSource: any|DataSource): DataSource;

      /**
      * Get the default `dataSource` for a given `type`.
      * @param {string} type The datasource type.
      * @returns {DataSource} The data source instance
      */

      function getDefaultDataSourceForType(type: string): DataSource;

      /**
      * Attach any model that does not have a dataSource to
      * the default dataSource for the type the Model requests
      */

      function autoAttach(): void;

}

/**
* Define and reference `Models` and `DataSources`.
*
* @class
*/

declare class Registry {

      /**
      * Create a named vanilla JavaScript class constructor with an attached
      * set of properties and options.
      *
      * This function comes with two variants:
      *  * `loopback.createModel(name, properties, options)`
      *  * `loopback.createModel(config)`
      *
      * In the second variant, the parameters `name`, `properties` and `options`
      * are provided in the config object. Any additional config entries are
      * interpreted as `options`, i.e. the following two configs are identical:
      *
      * ```js
      * { name: 'Customer', base: 'User' }
      * { name: 'Customer', options: { base: 'User' } }
      * ```
      *
      * **Example**
      *
      * Create an `Author` model using the three-parameter variant:
      *
      * ```js
      * loopback.createModel(
      *   'Author',
      *   {
      *     firstName: 'string',
      *     lastName: 'string'
      *   },
      *   {
      *     relations: {
      *       books: {
      *         model: 'Book',
      *         type: 'hasAndBelongsToMany'
      *       }
      *     }
      *   }
      * );
      * ```
      *
      * Create the same model using a config object:
      *
      * ```js
      * loopback.createModel({
      *   name: 'Author',
      *   properties: {
      *     firstName: 'string',
      *     lastName: 'string'
      *   },
      *   relations: {
      *     books: {
      *       model: 'Book',
      *       type: 'hasAndBelongsToMany'
      *     }
      *   }
      * });
      * ```
      *
      * @param {string} name Unique name.
      * @param {any} properties
      * @param {any} options (optional)
      *
      * @header loopback.createModel
      */

      createModel(name: string, properties: any, options: any): void;

      /**
      * Alter an existing Model class.
      * @param {Model} ModelCtor The model constructor to alter.
      * @options {any} config Additional configuration to apply
      * @property {DataSource} dataSource Attach the model to a dataSource.
      * @property {any} [relations] Model relations to add/update.
      *
      * @header loopback.configureModel(ModelCtor, config)
      */

      configureModel(ModelCtor: Model, config: {dataSource: DataSource, relations?: any}): void;

      /**
      * Look up a model class by name from all models created by
      * `loopback.createModel()`
      * @param {string|() => void} modelOrName The model name or a `Model` constructor.
      * @returns {Model} The model class
      *
      * @header loopback.findModel(modelName)
      */

      findModel(modelOrName: string ): Model;

      /**
      * Look up a model class by name from all models created by
      * `loopback.createModel()`. **Throw an error when no such model exists.**
      *
      * @param {string} modelOrName The model name or a `Model` constructor.
      * @returns {Model} The model class
      *
      * @header loopback.getModel(modelName)
      */

      getModel(modelOrName: string): Model;

      /**
      * Look up a model class by the base model class.
      * The method can be used by LoopBack
      * to find configured models in models.json over the base model.
      * @param {Model} modelType The base model class
      * @returns {Model} The subclass if found or the base class
      *
      * @header loopback.getModelByType(modelType)
      */

      getModelByType(modelType: Model): Model;

      /**
      * Create a data source with passing the provided options to the connector.
      *
      * @param {string} name Optional name.
      * @options {any} options Data Source options
      * @property {any} connector LoopBack connector.
      * @property {*} [*] Other&nbsp;connector properties.
      *   See the relevant connector documentation.
      */

      createDataSource(name: string, options: {connector: any, properties?: any}): void;

      /**
      * Get an in-memory data source. Use one if it already exists.
      *
      * @param {string} [name] The name of the data source.
      * If not provided, the `'default'` is used.
      */

      memory(name?: string): void;

      /**
      * Set the default `dataSource` for a given `type`.
      * @param {string} type The datasource type.
      * @param {any|DataSource} dataSource The data source settings or instance
      * @returns {DataSource} The data source instance.
      *
      * @header loopback.setDefaultDataSourceForType(type, dataSource)
      */

      setDefaultDataSourceForType(type: string, dataSource: any|DataSource): DataSource;

      /**
      * Get the default `dataSource` for a given `type`.
      * @param {string} type The datasource type.
      * @returns {DataSource} The data source instance
      */

      getDefaultDataSourceForType(type: string): DataSource;

      /**
      * Attach any model that does not have a dataSource to
      * the default dataSource for the type the Model requests
      */

      autoAttach(): void;

}

/**
* Access context represents the context for a request to access protected
* resources
*
* @class
* @options {any} context The context object
* @property {Principal[]} principals An Array of principals
* @property {() => void} model The model class
* @property {string} modelName The model name
* @property {string} modelId The model id
* @property {string} property The model property/method/relation name
* @property {string} method The model method to be invoked
* @property {string} accessType The access type
* @property {AccessToken} accessToken The access token
*
* @returns {AccessContext}
* @constructor
*/

declare class AccessContext {

      /** An Array of principals */
      principals: Principal[];

      /** The model class */
      model: () => void;

      /** The model name */
      modelName: string;

      /** The model id */
      modelId: string;

      /** The model property/method/relation name */
      property: string;

      /** The model method to be invoked */
      method: string;

      /** The access type */
      accesType: string;

      /** The access token */
      accessToken: AccessToken;

      /** context The context object */
      constructor(context: {});

      /**
      * Add a principal to the context
      * @param {string} principalType The principal type
      * @param {*} principalId The principal id
      * @param {string} [principalName] The principal name
      * @returns {boolean}
      */

      addPrincipal(principalType: string, principalId: any, principalName?: string): boolean;

      /**
      * Get the user id
      * @returns {*}
      */

      getUserId(): any;

      /**
      * Get the application id
      * @returns {*}
      */

      getAppId(): any;

      /**
      * Check if the access context has authenticated principals
      * @returns {boolean}
      */

      isAuthenticated(): boolean;
}

/**
* This class represents the abstract notion of a principal, which can be used
* to represent any entity, such as an individual, a corporation, and a login id
* @param {string} type The principal type
* @param {*} id The princiapl id
* @param {string} [name] The principal name
* @returns {Principal}
* @class
*/

declare class Principal {
      constructor(type: string, id: any, name: string);

      /**
      * Compare if two principals are equal
      * Returns true if argument principal is equal to this principal.
      * @param {any} p The other principal
      */

      equals(p: any): void;
}


/**
* A request to access protected resources.
* @param {string} model The model name
* @param {string} property
* @param {string} accessType The access type
* @param {string} permission The requested permission
* @returns {AccessRequest}
* @class
*/

declare class AccessRequest {
      constructor(model: string, property: string, accessType: string, permission: string);

      /**
      * Does the request contain any wildcards?
      *
      * @returns {boolean}
      */

      isWildcard(): boolean;

      /**
      * Does the given `ACL` apply to this `AccessRequest`.
      *
      * @param {ACL} acl
      */

      exactlyMatches(acl: ACL): void;

      /**
      * Is the request for access allowed?
      *
      * @returns {boolean}
      */

      isAllowed(): boolean;

}

/**
* The base class for **all models**.
*
* **Inheriting from `Model`**
*
* ```js
* var properties = {...};
* var options = {...};
* var MyModel = loopback.Model.extend('MyModel', properties, options);
* ```
*
* **Options**
*
*  - `trackChanges` - If true, changes to the model will be tracked. **Required
* for replication.**
*
* **Events**
*
* #### Event: `changed`
*
* Emitted after a model has been successfully created, saved, or updated.
* Argument: `inst`, model instance, object
*
* ```js
* MyModel.on('changed', function(inst) {
*   console.log('model with id %s has been changed', inst.id);
*   // => model with id 1 has been changed
* });
* ```
*
* #### Event: `deleted`
*
* Emitted after an individual model has been deleted.
* Argument: `id`, model ID (number).
*
* ```js
* MyModel.on('deleted', function(id) {
*   console.log('model with id %s has been deleted', id);
*   // => model with id 1 has been deleted
* });
* ```
*
* #### Event: `deletedAll`
*
* Emitted after an individual model has been deleted.
* Argument: `where` (optional), where filter, JSON object.
*
* ```js
* MyModel.on('deletedAll', function(where) {
*   if (where) {
*     console.log('all models where ', where, ' have been deleted');
*     // => all models where
*     // => {price: {gt: 100}}
*     // => have been deleted
*   }
* });
* ```
*
* #### Event: `attached`
*
* Emitted after a `Model` has been attached to an `app`.
*
* #### Event: `dataSourceAttached`
*
* Emitted after a `Model` has been attached to a `DataSource`.
*
* #### Event: set
*
* Emitted when model property is set.
* Argument: `inst`, model instance, object
*
* ```js
* MyModel.on('set', function(inst) {
*   console.log('model with id %s has been changed', inst.id);
*   // => model with id 1 has been changed
* });
* ```
*
* @param {any} data
* @property {string} Model.modelName The name of the model. Static property.
* @property {DataSource} Model.dataSource Data source to which the model is connected, if any. Static property.
* @property {any} Model.sharedMethod The `strong-remoting` [SharedClass](apidocs.strongloop.com/strong-remoting/#sharedclass) that contains remoting (and http) metadata. Static property.
* @property {any} settings Contains additional model settings.
* @property {string} settings.http.path Base URL of the model HTTP route.
* @property [{string}] settings.acls Array of ACLs for the model.
* @class
*/

declare class Model {

      /** The name of the model. */
      static modelName: string;

      /** Data source to which the model is connected, if any. */
      static dataSource: DataSource;

      /** The `strong-remoting` */
      static sharedMethod: any;

      /** Contains additional model settings. */
      static settings: Settings;
      /**
      * The `loopback.Model.extend()` method calls this when you create a model that extends another model.
      * Add any setup or configuration code you want executed when the model is created.
      * See  [Setting up a custom model](docs.strongloop.com/display/LB/Extending+built-in+models#Extendingbuilt-inmodels-Settingupacustommodel).
      */

      setup(): void;

      /**
      * Check if the given access token can invoke the specified method.
      *
      * @param {AccessToken} token The access token.
      * @param {*} modelId The model ID.
      * @param {any} sharedMethod The method in question.
      * @param {any} ctx The remote invocation context.
      * @callback {() => void} callback The callback function.
      * @param {string|Error} err The error object.
      * @param {boolean} allowed True if the request is allowed; false otherwise.
      */

      checkAccess(token: AccessToken, modelId: any, sharedMethod: any, ctx: any, callback: (err: string|Error, allowed: boolean) => void): void;

      /**
      * Get the `Application` object to which the Model is attached.
      *
      * @callback {() => void} callback Callback function called with `(err, app)` arguments.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {Application} app Attached application object.
      * @end
      */

      getApp(callback: (err: Error, app: Application) => void): void;

      /**
      * Enable remote invocation for the specified method.
      * See [Remote methods](docs.strongloop.com/display/LB/Remote+methods) for more information.
      *
      * Static method example:
      * ```js
      * Model.myMethod();
      * Model.remoteMethod('myMethod');
      * ```
      *
      * @param {string} name The name of the method.
      * @param {any} options The remoting options.
      * See [Remote methods - Options](docs.strongloop.com/display/LB/Remote+methods#Remotemethods-Options).
      */

      remoteMethod(name: string, options: any): void;

      /**
      * Disable remote invocation for the method with the given name.
      *
      * @param {string} name The name of the method.
      * @param {boolean} isStatic Is the method static (eg. `MyModel.myMethod`)? Pass
      * `false` if the method defined on the prototype (eg.
      * `MyModel.prototype.myMethod`).
      */

      disableRemoteMethod(name: string, isStatic: boolean): void;

      /**
      * Enabled deeply-nested queries of related models via REST API.
      *
      * @param {string} relationName Name of the nested relation.
      * @options {any} [options] It is optional. See below.
      * @param {string} pathName The HTTP path (relative to the model) at which your remote method is exposed.
      * @param {string} filterMethod The filter name.
      * @param {string} paramName The argument name that the remote method accepts.
      * @param {string} getterName The getter name.
      * @param {boolean} hooks Whether to inherit before/after hooks.
      * @callback {() => void} filterCallback The Optional filter function.
      * @param {any} SharedMethod object. See [here](apidocs.strongloop.com/strong-remoting/#sharedmethod).
      * @param {any} RelationDefinition object which includes relation `type`, `ModelConstructor` of `modelFrom`, `modelTo`, `keyFrom`, `keyTo` and more relation definitions.
      */

      nestRemoting(relationName: string, pathName: string, filterMethod: string, paramName: string, getterName: string, hooks: boolean, options?: {}, filterCallback?: (SharedMethod: any, RelationDefinition: any) => void): void;

}

interface Settings {
      http: {
            path: string;
      };
      acls: ACL[];
}

/**
* Extends Model with basic query and CRUD support.
*
* **Change Event**
*
* Listen for model changes using the `change` event.
*
* ```js
* MyPersistedModel.on('changed', function(obj) {
*    console.log(obj) // => the changed model
* });
* ```
*
* @class PersistedModel
*/

declare class PersistedModel {

      /**
      * Create new instance of Model, and save to database.
      *
      * @param {any}|[{any}] data Optional data argument.  Can be either a single model instance or an Array of instances.
      *
      * @callback {() => void} callback Callback function called with `cb(err, obj)` signature.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {any} models Model instances or null.
      */

      create({any}?: any, callback?: (err: Error, models: any) => void): void;

      /**
      * Update or insert a model instance
      * @param {any} data The model instance data to insert.
      * @callback {() => void} callback Callback function called with `cb(err, obj)` signature.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {any} model Updated model instance.
      */

      upsert(data: any, callback: (err: Error, model: any) => void): void;

      /**
      * Update or insert a model instance based on the search criteria.
      * If there is a single instance retrieved, update the retrieved model.
      * Creates a new model if no model instances were found.
      * Returns an error if multiple instances are found.
      * * @param {any} [where]  `where` filter, like
      * ```
      * { key: val, key2: {gt: 'val2'}, ...}
      * ```
      * <br/>see
      * [Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforothermethods).
      * @param {any} data The model instance data to insert.
      * @callback {() => void} callback Callback function called with `cb(err, obj)` signature.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {any} model Updated model instance.
      */

      upsertWithWhere(data: any, callback: (err: Error, model: any) => void): void;

      /**
      * Replace or insert a model instance; replace existing record if one is found,
      * such that parameter `data.id` matches `id` of model instance; otherwise,
      * insert a new record.
      * @param {any} data The model instance data.
      * @options {any} [options] Options for replaceOrCreate
      * @property {boolean} validate Perform validation before saving.  Default is true.
      * @callback {() => void} callback Callback function called with `cb(err, obj)` signature.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {any} model Replaced model instance.
      */

      replaceOrCreate(data: any, options?: {validate: boolean}, callback?: (err: Error, model: any) => void): void;

      /**
      * Finds one record matching the optional filter object. If not found, creates
      * the object using the data provided as second argument. In this sense it is
      * the same as `find`, but limited to one object. Returns an object, not
      * collection. If you don't provide the filter object argument, it tries to
      * locate an existing object that matches the `data` argument.
      *
      * @options {any} [filter] Optional Filter object; see below.
      * @property {string|any|Array} fields Identify fields to include in return result.
      * <br/>See [Fields filter](docs.strongloop.com/display/LB/Fields+filter).
      * @property {string|any|Array} include  See PersistedModel.include documentation.
      * <br/>See [Include filter](docs.strongloop.com/display/LB/Include+filter).
      * @property {number} limit Maximum number of instances to return.
      * <br/>See [Limit filter](docs.strongloop.com/display/LB/Limit+filter).
      * @property {string} order Sort order: either "ASC" for ascending or "DESC" for descending.
      * <br/>See [Order filter](docs.strongloop.com/display/LB/Order+filter).
      * @property {number} skip number of results to skip.
      * <br/>See [Skip filter](docs.strongloop.com/display/LB/Skip+filter).
      * @property {any} where Where clause, like
      * ```
      * {where: {key: val, key2: {gt: val2}, ...}}
      * ```
      * <br/>See
      * [Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforqueries).
      * @param {any} data Data to insert if object matching the `where` filter is not found.
      * @callback {() => void} callback Callback function called with `cb(err, instance, created)` arguments.  Required.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {any} instance Model instance matching the `where` filter, if found.
      * @param {boolean} created True if the instance matching the `where` filter was created.
      */

      findOrCreate(data: any, filter?: {fields: string|any|any[], include: string|any|any[], limit: number, order: string, skip: number, where: any}, callback?: (err: Error, instance: any, created: boolean) => void): void;

      /**
      * Check whether a model instance exists in database.
      *
      * @param {id} id Identifier of object (primary key value).
      *
      * @callback {() => void} callback Callback function called with `(err, exists)` arguments.  Required.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {boolean} exists True if the instance with the specified ID exists; false otherwise.
      */

      exists(id: any, callback: (err: Error, exists: boolean) => void): void;

      /**
      * Find object by ID with an optional filter for include/fields.
      *
      * @param {*} id Primary key value
      * @options {any} [filter] Optional Filter JSON object; see below.
      * @property {string|any|Array} fields Identify fields to include in return result.
      * <br/>See [Fields filter](docs.strongloop.com/display/LB/Fields+filter).
      * @property {string|any|Array} include  See PersistedModel.include documentation.
      * <br/>See [Include filter](docs.strongloop.com/display/LB/Include+filter).
      * @callback {() => void} callback Callback function called with `(err, instance)` arguments.  Required.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {any} instance Model instance matching the specified ID or null if no instance matches.
      */

      findById(id: any, filter?: {fields: string|any|any[], include: string|any|any[]}, callback?: (err: Error, instance: any) => void): void;

      /**
      * Find all model instances that match `filter` specification.
      * See [Querying models](docs.strongloop.com/display/LB/Querying+models).
      *
      * @options {any} [filter] Optional Filter JSON object; see below.
      * @property {string|any|Array} fields Identify fields to include in return result.
      * <br/>See [Fields filter](docs.strongloop.com/display/LB/Fields+filter).
      * @property {string|any|Array} include  See PersistedModel.include documentation.
      * <br/>See [Include filter](docs.strongloop.com/display/LB/Include+filter).
      * @property {number} limit Maximum number of instances to return.
      * <br/>See [Limit filter](docs.strongloop.com/display/LB/Limit+filter).
      * @property {string} order Sort order: either "ASC" for ascending or "DESC" for descending.
      * <br/>See [Order filter](docs.strongloop.com/display/LB/Order+filter).
      * @property {number} skip number of results to skip.
      * <br/>See [Skip filter](docs.strongloop.com/display/LB/Skip+filter).
      * @property {any} where Where clause, like
      * ```
      * { where: { key: val, key2: {gt: 'val2'}, ...} }
      * ```
      * <br/>See
      * [Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforqueries).
      *
      * @callback {() => void} callback Callback function called with `(err, returned-instances)` arguments.    Required.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {Array} models Model instances matching the filter, or null if none found.
      */

      find(filter?: {fields: string|any|any[], include: string|any|any[], limit: number, order: string, skip: number, where: any}, callback?: (err: Error, models: any[]) => void): void;

      /**
      * Find one model instance that matches `filter` specification.
      * Same as `find`, but limited to one result;
      * Returns object, not collection.
      *
      * @options {any} [filter] Optional Filter JSON object; see below.
      * @property {string|any|Array} fields Identify fields to include in return result.
      * <br/>See [Fields filter](docs.strongloop.com/display/LB/Fields+filter).
      * @property {string|any|Array} include  See PersistedModel.include documentation.
      * <br/>See [Include filter](docs.strongloop.com/display/LB/Include+filter).
      * @property {string} order Sort order: either "ASC" for ascending or "DESC" for descending.
      * <br/>See [Order filter](docs.strongloop.com/display/LB/Order+filter).
      * @property {number} skip number of results to skip.
      * <br/>See [Skip filter](docs.strongloop.com/display/LB/Skip+filter).
      * @property {any} where Where clause, like
      * ```
      * {where: { key: val, key2: {gt: 'val2'}, ...} }
      * ```
      * <br/>See
      * [Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforqueries).
      *
      * @callback {() => void} callback Callback function called with `(err, returned-instance)` arguments.  Required.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {Array} model First model instance that matches the filter or null if none found.
      */

      findOne(filter?: {fields: string|any|any[], include: string|any|any[], order: string, skip: number, where: any}, callback?: (err: Error, model: any[]) => void): void;

      /**
      * Destroy all model instances that match the optional `where` specification.
      *
      * @param {any} [where] Optional where filter, like:
      * ```
      * {key: val, key2: {gt: 'val2'}, ...}
      * ```
      * <br/>See
      * [Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforothermethods).
      *
      * @callback {() => void} callback Optional callback function called with `(err, info)` arguments.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {any} info Additional information about the command outcome.
      * @param {number} info.count number of instances (rows, documents) destroyed.
      */

      destroyAll(where?: any, callback?: (err: Error, info: any, infoCount: number) => void): void;

      /**
      * Alias for `destroyAll`
      */

      deleteAll(): void;

      /**
      * Update multiple instances that match the where clause.
      *
      * Example:
      *
      *```js
      * Employee.updateAll({managerId: 'x001'}, {managerId: 'x002'}, function(err, info) {
      *     ...
      * });
      * ```
      *
      * @param {any} [where] Optional `where` filter, like
      * ```
      * { key: val, key2: {gt: 'val2'}, ...}
      * ```
      * <br/>see
      * [Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforothermethods).
      * @param {any} data any containing data to replace matching instances, if any.
      *
      * @callback {() => void} callback Callback function called with `(err, info)` arguments.  Required.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {any} info Additional information about the command outcome.
      * @param {number} info.count number of instances (rows, documents) updated.
      *
      */

      updateAll(where?: any, data?: any, callback?: (err: Error, info: any, infoCount: number) => void): void;

      /**
      * Alias for updateAll.
      */

      update(): void;

      /**
      * Destroy model instance with the specified ID.
      * @param {*} id The ID value of model instance to delete.
      * @callback {() => void} callback Callback function called with `(err)` arguments.  Required.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      */

      destroyById(id: any, callback: (err: Error) => void): void;

      /**
      * Alias for destroyById.
      */

      removeById(): void;

      /**
      * Alias for destroyById.
      */

      deleteById(): void;

      /**
      * Return the number of records that match the optional "where" filter.
      * @param {any} [where] Optional where filter, like
      * ```
      * { key: val, key2: {gt: 'val2'}, ...}
      * ```
      * <br/>See
      * [Where filter](docs.strongloop.com/display/LB/Where+filter#Wherefilter-Whereclauseforothermethods).
      * @callback {() => void} callback Callback function called with `(err, count)` arguments.  Required.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {number} count number of instances updated.
      */

      count(where?: any, callback?: (err: Error, count: number) => void): void;

      /**
      * Save model instance. If the instance doesn't have an ID, then calls [create](#persistedmodelcreatedata-cb) instead.
      * Triggers: validate, save, update, or create.
      * @options {any} [options] See below.
      * @property {boolean} validate Perform validation before saving.  Default is true.
      * @property {boolean} throws If true, throw a validation error; WARNING: This can crash Node.
      * If false, report the error via callback.  Default is false.
      * @callback {() => void} callback Optional callback function called with `(err, obj)` arguments.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {any} instance Model instance saved or created.
      */

      save(options?: {validate: boolean, throws: boolean}, callback?: (err: Error, instance: any) => void): void;

      /**
      * Determine if the data model is new.
      * @returns {boolean} Returns true if the data model is new; false otherwise.
      */

      isNewRecord(): boolean;

      /**
      * Deletes the model from persistence.
      * Triggers `destroy` hook (async) before and after destroying object.
      * @param {() => void} callback Callback function.
      */

      destroy(callback: () => void): void;

      /**
      * Alias for destroy.
      * @header PersistedModel.remove
      */

      remove(): void;

      /**
      * Alias for destroy.
      * @header PersistedModel.delete
      */

      delete(): void;

      /**
      * Update a single attribute.
      * Equivalent to `updateAttributes({name: 'value'}, cb)`
      *
      * @param {string} name Name of property.
      * @param {any} value Value of property.
      * @callback {() => void} callback Callback function called with `(err, instance)` arguments.  Required.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {any} instance Updated instance.
      */

      updateAttribute(name: string, value: any, callback: (err: Error, instance: any) => void): void;

      /**
      * Update set of attributes.  Performs validation before updating.
      *
      * Triggers: `validation`, `save` and `update` hooks
      * @param {any} data Data to update.
      * @callback {() => void} callback Callback function called with `(err, instance)` arguments.  Required.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {any} instance Updated instance.
      */

      updateAttributes(data: any, callback: (err: Error, instance: any) => void): void;

      /**
      * Replace attributes for a model instance and persist it into the datasource.
      * Performs validation before replacing.
      *
      * @param {any} data Data to replace.
      * @options {any} [options] Options for replace
      * @property {boolean} validate Perform validation before saving.  Default is true.
      * @callback {() => void} callback Callback function called with `(err, instance)` arguments.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {any} instance Replaced instance.
      */

      replaceAttributes(data: any, options?: {validate: boolean}, callback?: (err: Error, instance: any) => void): void;

      /**
      * Replace attributes for a model instance whose id is the first input
      * argument and persist it into the datasource.
      * Performs validation before replacing.
      *
      * @param {*} id The ID value of model instance to replace.
      * @param {any} data Data to replace.
      * @options {any} [options] Options for replace
      * @property {boolean} validate Perform validation before saving.  Default is true.
      * @callback {() => void} callback Callback function called with `(err, instance)` arguments.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {any} instance Replaced instance.
      */

      replaceById(id: any, data: any, options?: {validate: boolean}, callback?: (err: Error, instance: any) => void): void;

      /**
      * Reload object from persistence.  Requires `id` member of `object` to be able to call `find`.
      * @callback {() => void} callback Callback function called with `(err, instance)` arguments.  Required.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {any} instance Model instance.
      */

      reload(callback: (err: Error, instance: any) => void): void;

      /**
      * Set the correct `id` property for the `PersistedModel`. Uses the `setId` method if the model is attached to
      * connector that defines it.  Otherwise, uses the default lookup.
      * Override this method to handle complex IDs.
      *
      * @param {*} val The `id` value. Will be converted to the type that the `id` property specifies.
      */

      setId(val: any): void;

      /**
      * Get the `id` value for the `PersistedModel`.
      *
      * @returns {*} The `id` value
      */

      getId(): any;

      /**
      * Get the `id` property name of the constructor.
      *
      * @returns {string} The `id` property name
      */

      getIdName(): string;

      /**
      * Get a set of deltas and conflicts since the given checkpoint.
      *
      * See [Change.diff()](#change-diff) for details.
      *
      * @param  {number}  since  Find deltas since this checkpoint.
      * @param  {Array}  remoteChanges  An Array of change objects.
      * @callback {() => void} callback Callback function called with `(err, result)` arguments.  Required.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {any} result any with `deltas` and `conflicts` properties; see [Change.diff()](#change-diff) for details.
      */

      diff(since: number, remoteChanges: any[], callback: (err: Error, result: any) => void): void;

      /**
      * Get the changes to a model since the specified checkpoint. Provide a filter object
      * to reduce the number of results returned.
      * @param  {number}   since    Return only changes since this checkpoint.
      * @param  {any}   filter   Include only changes that match this filter, the same as for [#persistedmodel-find](find()).
      * @callback {() => void} callback Callback function called with `(err, changes)` arguments.  Required.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {Array} changes An Array of [Change](#change) objects.
      */

      changes(since: number, filter: any, callback: (err: Error, changes: any[]) => void): void;

      /**
      * Create a checkpoint.
      *
      * @param  {() => void} callback
      */

      checkpoint(callback: () => void): void;

      /**
      * Get the current checkpoint ID.
      *
      * @callback {() => void} callback Callback function called with `(err, currentCheckpointId)` arguments.  Required.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {number} currentCheckpointId Current checkpoint ID.
      */

      currentCheckpoint(callback: (err: Error, currentCheckpointId: number) => void): void;

      /**
      * Replicate changes since the given checkpoint to the given target model.
      *
      * @param  {number}   [since]  Since this checkpoint
      * @param  {Model} targetModel  Target this model class
      * @param  {any} [options]
      * @param {any} [options.filter] Replicate models that match this filter
      * @callback {() => void} [callback] Callback function called with `(err, conflicts)` arguments.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {Conflict[]} conflicts A list of changes that could not be replicated due to conflicts.
      * @param {any] checkpoints The new checkpoints to use as the "since"
      * argument for the next replication.
      */

      replicate(since?: number, targetModel?: Model, options?: any, optionsFilter?: any, callback?: (err: Error, conflicts: Conflict[], param: any) => void): void;

      /**
      * Create an update list (for `Model.bulkUpdate()`) from a delta list
      * (result of `Change.diff()`).
      *
      * @param  {Array}    deltas
      * @param  {() => void} callback
      */

      createUpdates(deltas: any[], callback: () => void): void;

      /**
      * Apply an update list.
      *
      * **Note: this is not atomic**
      *
      * @param  {Array} updates An updates list, usually from [createUpdates()](#persistedmodel-createupdates).
      * @param  {() => void} callback Callback function.
      */

      bulkUpdate(updates: any[], callback: () => void): void;

      /**
      * Get the `Change` model.
      * Throws an error if the change model is not correctly setup.
      * @return {Change}
      */

      getChangeModel(): void;

      /**
      * Get the source identifier for this model or dataSource.
      *
      * @callback {() => void} callback Callback function called with `(err, id)` arguments.
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      * @param {string} sourceId Source identifier for the model or dataSource.
      */

      getSourceId(callback: (err: Error, sourceId: string) => void): void;

      /**
      * Enable the tracking of changes made to the model. Usually for replication.
      */

      enableChangeTracking(): void;

      /**
      * Handle a change error. Override this method in a subclassing model to customize
      * change error handling.
      *
      * @param {Error} err Error object; see [Error object](docs.strongloop.com/display/LB/Error+object).
      */

      handleChangeError(err: Error): void;

      /**
      * Specify that a change to the model with the given ID has occurred.
      *
      * @param {*} id The ID of the model that has changed.
      * @callback {() => void} callback
      * @param {Error} err
      */

      rectifyChange(id: any, callback: (err: Error) => void): void;

      /**
      * Create a change stream. [See here for more info](docs.strongloop.com/pages/viewpage.action?pageId=6721710)
      *
      * @param {any} options
      * @param {any} options.where Only changes to models matching this where filter will be included in the `any`.
      * @callback {() => void} callback
      * @param {Error} err
      * @param {any} changes
      */

      createany(options: any, optionsWhere: any, callback: (err: Error, changes: any) => void): void;

}

/**
* Serve the LoopBack favicon.
* @header loopback.favicon()
*/

// declare function exports(): void;

/**
* Expose models over REST.
*
* For example:
* ```js
* app.use(loopback.rest());
* ```
* For more information, see [Exposing models over a REST API](docs.strongloop.com/display/DOC/Exposing+models+over+a+REST+API).
* @header loopback.rest()
*/

declare function rest(): void;

/**
* Serve static assets of a LoopBack application.
*
* @param {string} root The root directory from which the static assets are to
* be served.
* @param {any} options Refer to
*   [express documentation](expressjs.com/4x/api.html#express.static)
*   for the full list of available options.
* @header loopback.static(root, [options])
*/

declare function static(root: string, options: any): void;

/**
* Return [HTTP response](expressjs.com/4x/api.html#res.send) with basic application status information:
* date the application was started and uptime, in JSON format.
* For example:
* ```js
* {
*  "started": "2014-06-05T00:26:49.750Z",
*  "uptime": 9.394
* }
* ```
*
* @header loopback.status()
*/

// declare function status(): void;

/**
* Check for an access token in cookies, headers, and query string parameters.
* This function always checks for the following:
*
* - `access_token` (params only)
* - `X-Access-Token` (headers only)
* - `authorization` (headers and cookies)
*
* It checks for these values in cookies, headers, and query string parameters _in addition_ to the items
* specified in the options parameter.
*
* **NOTE:** This function only checks for [signed cookies](expressjs.com/api.html#req.signedCookies).
*
* The following example illustrates how to check for an `accessToken` in a custom cookie, query string parameter
* and header called `foo-auth`.
*
* ```js
* app.use(loopback.token({
*   cookies: ['foo-auth'],
*   headers: ['foo-auth', 'X-Foo-Auth'],
*   params: ['foo-auth', 'foo_auth']
* }));
* ```
*
* @options {any} [options] Each option Array is used to add additional keys to find an `accessToken` for a `request`.
* @property {Array} [cookies] Array of cookie names.
* @property {Array} [headers] Array of header names.
* @property {Array} [params] Array of param names.
* @property {boolean} [searchDefaultTokenKeys] Use the default search locations for Token in request
* @property {boolean} [enableDoublecheck] Execute middleware although an instance mounted earlier in the chain didn't find a token
* @property {boolean} [overwriteExistingToken] only has effect in combination with `enableDoublecheck`. If truthy, will allow to overwrite an existing accessToken.
* @property {() => void|string} [model] AccessToken model name or class to use.
* @property {string} [currentUserLiteral] string literal for the current user.
* @header loopback.token([options])
*/

declare function token(options?: {cookies?: any[], headers?: any[], params?: any[], searchDefaultTokenKeys?: boolean, enableDoublecheck?: boolean, overwriteExistingToken?: boolean, model?: () => void|string, currentUserLiteral?: string}): void;

/**
* Convert any request not handled so far to a 404 error
* to be handled by error-handling middleware.
* @header loopback.urlNotFound()
*/

declare function urlNotFound(): void;

/**
 * datasource
 * 
 * 
 */

declare class DataSource {

}

/**
* Token based authentication and access control.
*
* **Default ACLs**
*
*  - DENY EVERYONE `*`
*  - ALLOW EVERYONE create
*
* @property {string} id Generated token ID.
* @property {number} ttl Time to live in seconds, 2 weeks by default.
* @property {Date} created When the token was created.
* @property {any} settings Extends the `Model.settings` object.
* @property {number} settings.accessTokenIdLength Length of the base64-encoded string access token. Default value is 64.
* Increase the length for a more secure access token.
*
* @class AccessToken
* @inherits {PersistedModel}
*/

declare class AccessToken extends PersistedModel {
      
      /** Generated token ID */
      id: string;

      /** Time to live in seconds, 2 weeks by default. */
      ttl: number;

      /** When the token was created. */
      created: Date;

      /** Extends the `Model.settings` object. */
      settings: { http: { path: string }; acls: ACL, accessTokenIdLength: number};

      /**
      * Anonymous Token
      *
      * ```js
      * assert(AccessToken.ANONYMOUS.id === '$anonymous');
      * ```
      */

      ANONYMOUS(): void;

      /**
      * Create a cryptographically random access token id.
      *
      * @callback {() => void} callback
      * @param {Error} err
      * @param {string} token
      */

      createAccessTokenId(callback: (err: Error, token: string) => void): void;

      /**
      * Find a token for the given `any`.
      *
      * @param {any} req
      * @param {any} [options] Options for finding the token
      * @callback {() => void} callback
      * @param {Error} err
      * @param {AccessToken} token
      */

      findForRequest(req: any, options?: any, callback?: (err: Error, token: AccessToken) => void): void;

      /**
      * Validate the token.
      *
      * @callback {() => void} callback
      * @param {Error} err
      * @param {boolean} isValid
      */

      validate(callback: (err: Error, isValid: boolean) => void): void;

}

/**
* A Model for access control meta data.
*
* System grants permissions to principals (users/applications, can be grouped
* into roles).
*
* Protected resource: the model data and operations
* (model/property/method/relation/…)
*
* For a given principal, such as client application and/or user, is it allowed
* to access (read/write/execute)
* the protected resource?
*
* @header ACL
* @property {string} model Name of the model.
* @property {string} property Name of the property, method, scope, or relation.
* @property {string} accessType Type of access being granted: one of READ, WRITE, or EXECUTE.
* @property {string} permission Type of permission granted. One of:
*
*  - ALARM: Generate an alarm, in a system-dependent way, the access specified in the permissions component of the ACL entry.
*  - ALLOW: Explicitly grants access to the resource.
*  - AUDIT: Log, in a system-dependent way, the access specified in the permissions component of the ACL entry.
*  - DENY: Explicitly denies access to the resource.
* @property {string} principalType Type of the principal; one of: Application, Use, Role.
* @property {string} principalId ID of the principal - such as appId, userId or roleId.
* @property {any} settings Extends the `Model.settings` object.
* @property {string} settings.defaultPermission Default permission setting: ALLOW, DENY, ALARM, or AUDIT. Default is ALLOW.
* Set to DENY to prohibit all API access by default.
*
* @class ACL
* @inherits PersistedModel
*/

declare class ACL extends PersistedModel {
      /** model Name of the model. */
      model: string;

      /** property Name of the property, method, scope, or relation. */
      property: string;

      /** accessType Type of access being granted: one of READ, WRITE, or EXECUTE. */
      accesType: 'READ' | 'WRITE' | 'EXECUTE';

      /**permission Type of permission granted  One of:
       *  - ALARM: Generate an alarm, in a system-dependent way, the access specified in the permissions component of the ACL entry.
       *  - ALLOW: Explicitly grants access to the resource.
       *  - AUDIT: Log, in a system-dependent way, the access specified in the permissions component of the ACL entry.
       *  - DENY: Explicitly denies access to the resource.
      */
      permission: 'ALARM' | 'ALLOW' | 'AUDIT' | 'DENY';

      /** principalType Type of the principal; one of: Application, Use, Role. */
      principalType: 'Aplication' | 'User' | 'Role' | string;

      /** principalId ID of the principal - such as appId, userId or roleId. */
      principalId: string;

      /** settings Extends the `Model.settings` object. */
      settings: { http: { path: string }; acls: ACL, defaultPermission: 'DENY'}; 

      /**
      * Calculate the matching score for the given rule and request
      * @param {ACL} rule The ACL entry
      * @param {AccessRequest} req The request
      * @returns {number}
      */

      getMatchingScore(rule: ACL, req: AccessRequest): number;

      /**
      * Get matching score for the given `AccessRequest`.
      * @param {AccessRequest} req The request
      * @returns {number} score
      */

      score(req: AccessRequest): number;

      /**
      * Check if the given principal is allowed to access the model/property
      * @param {string} principalType The principal type.
      * @param {string} principalId The principal ID.
      * @param {string} model The model name.
      * @param {string} property The property/method/relation name.
      * @param {string} accessType The access type.
      * @callback {() => void} callback Callback function.
      * @param {string|Error} err The error object
      * @param {AccessRequest} result The access permission
      */

      checkPermission(principalType: string, principalId: string, model: string, property: string, accessType: string, callback: (err: string|Error, result: AccessRequest) => void): void;

      /**
      * Check if the request has the permission to access.
      * @options {any} context See below.
      * @property {any[]} principals An Array of principals.
      * @property {string|Model} model The model name or model class.
      * @property {*} id The model instance ID.
      * @property {string} property The property/method/relation name.
      * @property {string} accessType The access type:
      *   READ, REPLICATE, WRITE, or EXECUTE.
      * @param {() => void} callback Callback function
      */

      checkAccessForContext(callback: () => void, context: {principals: any[], model: string|Model, id: any, property: string, accessType: string}): void;

      /**
      * Check if the given access token can invoke the method
      * @param {AccessToken} token The access token
      * @param {string} model The model name
      * @param {*} modelId The model id
      * @param {string} method The method name
      * @callback {() => void} callback Callback function
      * @param {string|Error} err The error object
      * @param {boolean} allowed is the request allowed
      */

      checkAccessForToken(token: AccessToken, model: string, modelId: any, method: string, callback: (err: string|Error, allowed: boolean) => void): void;

      /**
      * Resolve a principal by type/id
      * @param {string} type Principal type - ROLE/APP/USER
      * @param {string|number} id Principal id or name
      * @param {() => void} cb Callback function
      */

      resolvePrincipal(type: string, id: string|number, cb: () => void): void;

      /**
      * Check if the given principal is mapped to the role
      * @param {string} principalType Principal type
      * @param {string|*} principalId Principal id/name
      * @param {string|*} role Role id/name
      * @param {() => void} cb Callback function
      */

      isMappedToRole(principalType: string, principalId: string|any, role: string|any, cb: () => void): void;

}

/**
* Manage client applications and organize their users.
*
* @property {string} id  Generated ID.
* @property {string} name Name; required.
* @property {string} description Text description
* @property {string} icon string Icon image URL.
* @property {string} owner User ID of the developer who registers the application.
* @property {string} email E-mail address
* @property {boolean} emailVerified Whether the e-mail is verified.
* @property {string} url OAuth 2.0  application URL.
* @property {string}[]} callbackUrls The OAuth 2.0 code/token callback URL.
* @property {string} status Status of the application; Either `production`, `sandbox` (default), or `disabled`.
* @property {Date} created Date Application object was created.  Default: current date.
* @property {Date} modified Date Application object was modified.  Default: current date.
*
* @property {any} pushSettings.apns APNS configuration, see the options
*   below and also
*   github.com/argon/node-apn/blob/master/doc/apn.markdown
* @property {boolean} pushSettings.apns.production Whether to use production Apple Push Notification Service (APNS) servers to send push notifications.
* If true, uses `gateway.push.apple.com:2195` and `feedback.push.apple.com:2196`.
* If false, uses `gateway.sandbox.push.apple.com:2195` and `feedback.sandbox.push.apple.com:2196`
* @property {string} pushSettings.apns.certData The certificate data loaded from the cert.pem file (APNS).
* @property {string} pushSettings.apns.keyData The key data loaded from the key.pem file (APNS).
* @property {string} pushSettings.apns.pushOptions.gateway (APNS).
* @property {number} pushSettings.apns.pushOptions.port (APNS).
* @property {string} pushSettings.apns.feedbackOptions.gateway  (APNS).
* @property {number} pushSettings.apns.feedbackOptions.port (APNS).
* @property {boolean} pushSettings.apns.feedbackOptions.batchFeedback (APNS).
* @property {number} pushSettings.apns.feedbackOptions.interval (APNS).
* @property {string} pushSettings.gcm.serverApiKey: Google Cloud Messaging API key.
*
* @property {boolean} authenticationEnabled
* @property {boolean} anonymousAllowed
* @property {Array} authenticationSchemes List of authentication schemes
*  (see below).
* @property {string} authenticationSchemes.scheme Scheme name.
*   Supported values: `local`, `facebook`, `google`,
*   `twitter`, `linkedin`, `github`.
* @property {any} authenticationSchemes.credential
*   Scheme-specific credentials.
*
* @class Application
* @inherits {PersistedModel}
*/

declare class Application extends PersistedModel {
      /** Generated ID. */
      id: string;
      name: string;
      description: string;
      icon: string;
      owner: string;
      email: string;
      emailVerified: string;
      url: string;
      callBackUrl: string[];
      status: string;
      created: Date;
      modified: Date;
      pushSetings: {
            apns: {
                  production: boolean;
                  cerData: string;
                  keyData: string;
                  pushOptions: {
                        gateway: string;
                        port: number;
                  };
                  feedBackOptions: {
                        gateway: string;
                        port: number;
                        batchFeedback: boolean;
                        interval: number;
                  };
            };
            gcm: {
                  serverApiKey: string;
            }
      };
      authenticationEnabled: boolean;
      anonymousAllowed: boolean;
      authenticationSchemes: string[];
      
      /**
      * Register a new application
      * @param {string} owner Owner's user ID.
      * @param {string} name  Name of the application
      * @param {any} options  Other options
      * @param {() => void} callback  Callback function
      */

      register(owner: string, name: string, options: any, callback: () => void): void;

      /**
      * Reset keys for the application instance
      * @callback {() => void} callback
      * @param {Error} err
      */

      resetKeys(callback: (err: Error) => void): void;

      /**
      * Reset keys for a given application by the appId
      * @param {Any} appId
      * @callback {() => void} callback
      * @param {Error} err
      */

      resetKeys(appId: any, callback: (err: Error) => void): void;

      /**
      * Authenticate the application id and key.
      *
      * @param {Any} appId
      * @param {string} key
      * @callback {() => void} callback
      * @param {Error} err
      * @param {string} matched The matching key; one of:
      * - clientKey
      * - javaScriptKey
      * - restApiKey
      * - windowsKey
      * - masterKey
      *
      */

      authenticate(appId: any, key: string, callback: (err: Error, matched: string) => void): void;

}

/**
* Change list entry.
*
* @property {string} id Hash of the modelName and ID.
* @property {string} rev The current model revision.
* @property {string} prev The previous model revision.
* @property {number} checkpoint The current checkpoint at time of the change.
* @property {string} modelName Model name.
* @property {string} modelId Model ID.
* @property {any} settings Extends the `Model.settings` object.
* @property {string} settings.hashAlgorithm Algorithm used to create cryptographic hash, used as argument
* to [crypto.createHash](nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm).  Default is sha1.
* @property {boolean} settings.ignoreErrors By default, when changes are rectified, an error will throw an exception.
* However, if this setting is true, then errors will not throw exceptions.
* @class Change
* @inherits {PersistedModel}
*/

declare class Change {

      /**
      * Track the recent change of the given modelIds.
      *
      * @param  {string}   modelName
      * @param  {Array}    modelIds
      * @callback {() => void} callback
      * @param {Error} err
      * @param {Array} changes Changes that were tracked
      */

      rectifyModelChanges(modelName: string, modelIds: any[], callback: (err: Error, changes: any[]) => void): void;

      /**
      * Get an identifier for a given model.
      *
      * @param  {string} modelName
      * @param  {string} modelId
      * @return {string}
      */

      idForModel(modelName: string, modelId: string): void;

      /**
      * Find or create a change for the given model.
      *
      * @param  {string}   modelName
      * @param  {string}   modelId
      * @callback  {() => void} callback
      * @param {Error} err
      * @param {Change} change
      * @end
      */

      findOrCreateChange(modelName: string, modelId: string, callback: (err: Error, change: Change) => void): void;

      /**
      * Update (or create) the change with the current revision.
      *
      * @callback {() => void} callback
      * @param {Error} err
      * @param {Change} change
      */

      rectify(callback: (err: Error, change: Change) => void): void;

      /**
      * Get a change's current revision based on current data.
      * @callback  {() => void} callback
      * @param {Error} err
      * @param {string} rev The current revision
      */

      currentRevision(callback: (err: Error, rev: string) => void): void;

      /**
      * Create a hash of the given `string` with the `options.hashAlgorithm`.
      * **Default: `sha1`**
      *
      * @param  {string} str The string to be hashed
      * @return {string}     The hashed string
      */

      hash(str: string): void;

      /**
      * Get the revision string for the given object
      * @param  {any} inst The data to get the revision string for
      * @return {string}      The revision string
      */

      revisionForInst(inst: any): void;

      /**
      * Get a change's type. Returns one of:
      *
      * - `Change.UPDATE`
      * - `Change.CREATE`
      * - `Change.DELETE`
      * - `Change.UNKNOWN`
      *
      * @return {string} the type of change
      */

      type(): void;

      /**
      * Compare two changes.
      * @param  {Change} change
      * @return {boolean}
      */

      equals(change: Change): void;

      /**
      * Does this change conflict with the given change.
      * @param  {Change} change
      * @return {boolean}
      */

      conflictsWith(change: Change): void;

      /**
      * Are both changes deletes?
      * @param  {Change} a
      * @param  {Change} b
      * @return {boolean}
      */

      bothDeleted(a: Change, b: Change): void;

      /**
      * Determine if the change is based on the given change.
      * @param  {Change} change
      * @return {boolean}
      */

      isBasedOn(change: Change): void;

      /**
      * Determine the differences for a given model since a given checkpoint.
      *
      * The callback will contain an error or `result`.
      *
      * **result**
      *
      * ```js
      * {
      *   deltas: Array,
      *   conflicts: Array
      * }
      * ```
      *
      * **deltas**
      *
      * An Array of changes that differ from `remoteChanges`.
      *
      * **conflicts**
      *
      * An Array of changes that conflict with `remoteChanges`.
      *
      * @param  {string}   modelName
      * @param  {number}   since         Compare changes after this checkpoint
      * @param  {Change[]} remoteChanges A set of changes to compare
      * @callback  {() => void} callback
      * @param {Error} err
      * @param {any} result See above.
      */

      diff(modelName: string, since: number, remoteChanges: Change[], callback: (err: Error, result: any) => void): void;

      /**
      * Correct all change list entries.
      * @param {() => void} cb
      */

      rectifyAll(cb: () => void): void;

      /**
      * Get the checkpoint model.
      * @return {Checkpoint}
      */

      getCheckpointModel(): void;

      /**
      * Get the `Model` class for `change.modelName`.
      * @return {Model}
      */

      getModelCtor(): void;

      /**
      * When two changes conflict a conflict is created.
      *
      * **Note**: call `conflict.fetch()` to get the `target` and `source` models.
      *
      * @param {*} modelId
      * @param {PersistedModel} SourceModel
      * @param {PersistedModel} TargetModel
      * @property {ModelClass} source The source model instance
      * @property {ModelClass} target The target model instance
      * @class Change.Conflict
      */

}

      declare class Conflict {

      /**
      * Fetch the conflicting models.
      *
      * @callback {() => void} callback
      * @param {Error} err
      * @param {PersistedModel} source
      * @param {PersistedModel} target
      */

      models(callback: (err: Error, source: PersistedModel, target: PersistedModel) => void): void;

      /**
      * Get the conflicting changes.
      *
      * @callback {() => void} callback
      * @param {Error} err
      * @param {Change} sourceChange
      * @param {Change} targetChange
      */

      changes(callback: (err: Error, sourceChange: Change, targetChange: Change) => void): void;

      /**
      * Resolve the conflict.
      *
      * Set the source change's previous revision to the current revision of the
      * (conflicting) target change. Since the changes are no longer conflicting
      * and appear as if the source change was based on the target, they will be
      * replicated normally as part of the next replicate() call.
      *
      * This is effectively resolving the conflict using the source version.
      *
      * @callback {() => void} callback
      * @param {Error} err
      */

      resolve(callback: (err: Error) => void): void;

      /**
      * Resolve the conflict using the instance data in the source model.
      *
      * @callback {() => void} callback
      * @param {Error} err
      */

      resolveUsingSource(callback: (err: Error) => void): void;

      /**
      * Resolve the conflict using the instance data in the target model.
      *
      * @callback {() => void} callback
      * @param {Error} err
      */

      resolveUsingTarget(callback: (err: Error) => void): void;

      /**
      * Return a new Conflict instance with swapped Source and Target models.
      *
      * This is useful when resolving a conflict in one-way
      * replication, where the source data must not be changed:
      *
      * ```js
      * conflict.swapParties().resolveUsingTarget(cb);
      * ```
      *
      * @returns {Conflict} A new Conflict instance.
      */

      swapParties(): Conflict;

      /**
      * Resolve the conflict using the supplied instance data.
      *
      * @param {any} data The set of changes to apply on the model
      * instance. Use `null` value to delete the source instance instead.
      * @callback {() => void} callback
      * @param {Error} err
      */

      resolveManually(data: any, callback: (err: Error) => void): void;

      /**
      * Determine the conflict type.
      *
      * Possible results are
      *
      *  - `Change.UPDATE`: Source and target models were updated.
      *  - `Change.DELETE`: Source and or target model was deleted.
      *  - `Change.UNKNOWN`: the conflict type is uknown or due to an error.
      *
      * @callback {() => void} callback
      * @param {Error} err
      * @param {string} type The conflict type.
      */

      type(callback: (err: Error, type: string) => void): void;

}

/**
* Email model.  Extends LoopBack base [Model](#model-new-model).
* @property {string} to Email addressee.  Required.
* @property {string} from Email sender address.  Required.
* @property {string} subject Email subject string.  Required.
* @property {string} text Text body of email.
* @property {string} html HTML body of email.
*
* @class Email
* @inherits {Model}
*/

declare class Email extends Model {

      /**
      * Send an email with the given `options`.
      *
      * Example Options:
      *
      * ```js
      * {
      *   from: "Fred Foo <foo@blurdybloop.com>", // sender address
      *   to: "bar@blurdybloop.com, baz@blurdybloop.com", // list of receivers
      *   subject: "Hello", // Subject line
      *   text: "Hello world", // plaintext body
      *   html: "<b>Hello world</b>" // html body
      * }
      * ```
      *
      * See github.com/andris9/Nodemailer for other supported options.
      *
      * @options {any} options See below
      * @prop {string} from Senders's email address
      * @prop {string} to List of one or more recipient email addresses (comma-delimited)
      * @prop {string} subject Subject line
      * @prop {string} text Body text
      * @prop {string} html Body HTML (optional)
      * @param {() => void} callback Called after the e-mail is sent or the sending failed
      */

      send(callback: () => void, options: {}): void;

      /**
      * A shortcut for Email.send(this).
      */

      send(): void;

}

/**
* The Role model
* @class Role
* @header Role object
*/

declare class Role {
    /**
    *  * Fetch all users assigned to this role
    * @function Role.prototype#users
    * @param {any} [query] query object passed to model find call
    * @param  {() => void} [callback]
    */

    /**
     * Fetch all applications assigned to this role
    * @function Role.prototype#applications
    * @param {any} [query] query object passed to model find call
    * @param  {() => void} [callback]
    */

    /**
     * Add custom handler for roles.
    * @param {string} role Name of role.
    * @param {() => void} resolver () => void that determines
    * if a principal is in the specified role.
    * Should provide a callback or return a promise.
    */

    registerResolver(role: string, resolver: () => void): void;

    /**
     * Check if a given user ID is the owner the model instance.
    * @param {() => void} modelClass The model class
    * @param {*} modelId The model ID
    * @param {*} userId The user ID
    * @param {() => void} callback Callback function
    */

    isOwner(modelClass: () => void, modelId: any, userId: any, callback: () => void): void;

    /**
     * Check if the user ID is authenticated
    * @param {any} context The security context.
    *
    * @callback {() => void} callback Callback function.
    * @param {Error} err Error object.
    * @param {boolean} isAuthenticated True if the user is authenticated.
    */

    isAuthenticated(context: any, callback: (err: Error, isAuthenticated: boolean) => void): void;

    /**
     * Check if a given principal is in the specified role.
    *
    * @param {string} role The role name.
    * @param {any} context The context object.
    *
    * @callback {() => void} callback Callback function.
    * @param {Error} err Error object.
    * @param {boolean} isInRole True if the principal is in the specified role.
    */

    isInRole(role: string, context: any, callback: (err: Error, isInRole: boolean) => void): void;

    /**
     * List roles for a given principal.
    * @param {any} context The security context.
    *
    * @callback {() => void} callback Callback function.
    * @param {Error} err Error object.
    * @param {string[]} roles An Array of role IDs
    */

    getRoles(context: any, callback: (err: Error, roles: string[]) => void): void;

}

/**
* The `RoleMapping` model extends from the built in `loopback.Model` type.
*
* @property {string} id Generated ID.
* @property {string} name Name of the role.
* @property {string} Description Text description.
*
* @class RoleMapping
* @inherits {PersistedModel}
*/

declare class RoleMapping {

      /**
      * Get the application principal
      * @callback {() => void} callback
      * @param {Error} err
      * @param {Application} application
      */

      application(callback: (err: Error, application: Application) => void): void;

      /**
      * Get the user principal
      * @callback {() => void} callback
      * @param {Error} err
      * @param {User} user
      */

      user(callback: (err: Error, user: User) => void): void;

      /**
      * Get the child role principal
      * @callback {() => void} callback
      * @param {Error} err
      * @param {User} childUser
      */

      childRole(callback: (err: Error, childUser: User) => void): void;

}

/**
* Resource owner grants/delegates permissions to client applications
*
* For a protected resource, does the client application have the authorization
* from the resource owner (user or system)?
*
* Scope has many resource access entries
*
* @class Scope
*/

declare class Scope {

      /**
      * Check if the given scope is allowed to access the model/property
      * @param {string} scope The scope name
      * @param {string} model The model name
      * @param {string} property The property/method/relation name
      * @param {string} accessType The access type
      * @callback {() => void} callback
      * @param {string|Error} err The error object
      * @param {AccessRequest} result The access permission
      */

      checkPermission(scope: string, model: string, property: string, accessType: string, callback: (err: string|Error, result: AccessRequest) => void): void;

}

/**
* Built-in User model.
* Extends LoopBack [PersistedModel](#persistedmodel-new-persistedmodel).
*
* Default `User` ACLs.
*
* - DENY EVERYONE `*`
* - ALLOW EVERYONE `create`
* - ALLOW OWNER `deleteById`
* - ALLOW EVERYONE `login`
* - ALLOW EVERYONE `logout`
* - ALLOW OWNER `findById`
* - ALLOW OWNER `updateAttributes`
*
* @property {string} username Must be unique.
* @property {string} password Hidden from remote clients.
* @property {string} email Must be valid email.
* @property {boolean} emailVerified Set when a user's email has been verified via `confirm()`.
* @property {string} verificationToken Set when `verify()` is called.
* @property {string} realm The namespace the user belongs to. See [Partitioning users with realms](docs.strongloop.com/display/public/LB/Partitioning+users+with+realms) for details.
* @property {Date} created The property is not used by LoopBack, you are free to use it for your own purposes.
* @property {Date} lastUpdated The property is not used by LoopBack, you are free to use it for your own purposes.
* @property {string} status The property is not used by LoopBack, you are free to use it for your own purposes.
* @property {any} settings Extends the `Model.settings` object.
* @property {boolean} settings.emailVerificationRequired Require the email verification
* process before allowing a login.
* @property {number} settings.ttl Default time to live (in seconds) for the `AccessToken` created by `User.login() / user.createAccessToken()`.
* Default is `1209600` (2 weeks)
* @property {number} settings.maxTTL The max value a user can request a token to be alive / valid for.
* Default is `31556926` (1 year)
* @property {boolean} settings.realmRequired Require a realm when logging in a user.
* @property {string} settings.realmDelimiter When set a realm is required.
* @property {number} settings.resetPasswordTokenTTL Time to live for password reset `AccessToken`. Default is `900` (15 minutes).
* @property {number} settings.saltWorkFactor The `bcrypt` salt work factor. Default is `10`.
* @property {boolean} settings.caseSensitiveEmail Enable case sensitive email.
*
* @class User
* @inherits {PersistedModel}
*/

declare class User {

      /**
      * Create access token for the logged in user. This method can be overridden to
      * customize how access tokens are generated
      *
      * @param {number} ttl The requested ttl
      * @param {any} [options] The options for access token, such as scope, appId
      * @callback {() => void} cb The callback function
      * @param {string|Error} err The error string or object
      * @param {AccessToken} token The generated access token object
      */

      createAccessToken(ttl: number, options?: any, cb?: (err: string|Error, token: AccessToken) => void): void;

      /**
      * Normalize the credentials
      * @param {any} credentials The credential object
      * @param {boolean} realmRequired
      * @param {string} realmDelimiter The realm delimiter, if not set, no realm is needed
      * @returns {any} The normalized credential object
      */

      normalizeCredentials(credentials: any, realmRequired: boolean, realmDelimiter: string): any;

      /**
      * Login a user by with the given `credentials`.
      *
      * ```js
      *    User.login({username: 'foo', password: 'bar'}, function (err, token) {
      *      console.log(token.id);
      *    });
      * ```
      *
      * @param {any} credentials username/password or email/password
      * @param {string[]|string} [include] Optionally set it to "user" to include
      * the user info
      * @callback {() => void} callback Callback function
      * @param {Error} err Error object
      * @param {AccessToken} token Access token if login is successful
      */

      login(credentials: any, include?: string[]|string, callback?: (err: Error, token: AccessToken) => void): void;

      /**
      * Logout a user with the given accessToken id.
      *
      * ```js
      *    User.logout('asd0a9f8dsj9s0s3223mk', function (err) {
      *      console.log(err || 'Logged out');
      *    });
      * ```
      *
      * @param {string} accessTokenID
      * @callback {() => void} callback
      * @param {Error} err
      */

      logout(accessTokenID: string, callback: (err: Error) => void): void;

      /**
      * Compare the given `password` with the users hashed password.
      *
      * @param {string} password The plain text password
      * @callback {() => void} callback Callback function
      * @param {Error} err Error object
      * @param {boolean} isMatch Returns true if the given `password` matches record
      */

      hasPassword(password: string, callback: (err: Error, isMatch: boolean) => void): void;

      /**
      * Verify a user's identity by sending them a confirmation email.
      *
      * ```js
      *    var options = {
      *      type: 'email',
      *      to: user.email,
      *      template: 'verify.ejs',
      *      redirect: '/',
      *      tokenGenerator: function (user, cb) { cb("random-token"); }
      *    };
      *
      *    user.verify(options, next);
      * ```
      *
      * @options {any} options
      * @property {string} type Must be 'email'.
      * @property {string} to Email address to which verification email is sent.
      * @property {string} from Sender email addresss, for example
      *   `'noreply@myapp.com'`.
      * @property {string} subject Subject line text.
      * @property {string} text Text of email.
      * @property {string} template Name of template that displays verification
      *  page, for example, `'verify.ejs'.
      * @property {string} redirect Page to which user will be redirected after
      *  they verify their email, for example `'/'` for root URI.
      * @property {() => void} generateVerificationToken A function to be used to
      *  generate the verification token. It must accept the user object and a
      *  callback function. This function should NOT add the token to the user
      *  object, instead simply execute the callback with the token! User saving
      *  and email sending will be handled in the `verify()` method.
      */

      verify(options: {type: string, to: string, from: string, subject: string, text: string, template: string, redirect: string, generateVerificationToken: () => void}): void;

      /**
      * A default verification token generator which accepts the user the token is
      * being generated for and a callback function to indicate completion.
      * This one uses the crypto library and 64 random bytes (converted to hex)
      * for the token. When used in combination with the user.verify() method this
      * function will be called with the `user` object as it's context (`this`).
      *
      * @param {any} user The User this token is being generated for.
      * @param {() => void} cb The generator must pass back the new token with this function call
      */

      generateVerificationToken(user: any, cb: () => void): void;

      /**
      * Confirm the user's identity.
      *
      * @param {Any} userId
      * @param {string} token The validation token
      * @param {string} redirect URL to redirect the user to once confirmed
      * @callback {() => void} callback
      * @param {Error} err
      */

      confirm(userId: any, token: string, redirect: string, callback: (err: Error) => void): void;

      /**
      * Create a short lived acess token for temporary login. Allows users
      * to change passwords if forgotten.
      *
      * @options {any} options
      * @prop {string} email The user's email address
      * @callback {() => void} callback
      * @param {Error} err
      */

      resetPassword(options: {}, callback: (err: Error) => void): void;

}