// Type definitions for Mongoose 4.5.4
// Project: http://mongoosejs.com/
// Definitions by: simonxca <https://github.com/simonxca/>, horiuchi <https://github.com/horiuchi/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../mongodb/mongodb.d.ts" />
///<reference path="../mpromise/mpromise.d.ts" />
///<reference path="../node/node.d.ts" />
///<reference path="../mongoose-promise/mongoose-promise.d.ts" />

/*
 * Guidelines for maintaining these definitions:
 * - If you spot an error here or there, please submit a PR.
 *   Give some examples/links to documentation if you can.
 *
 * For patches and minor releases:
 * - Browse the changelog at https://github.com/Automattic/mongoose/blob/master/History.md
 *   and make necessary changes. Afterwards, update the version number at the top so we know
 *   which version we are on.
 *
 * For major releases:
 * - Refer to the updated docs at http://mongoosejs.com/docs/api.html
 * - On the left-hand side of the docs is a list of .js files. Reset and update the TODO list below
 *   then go through one-by-one, making any updates to params list, return type, etc. For documentation
 *   changes just copy/paste them into here.
 * - Check the files off as you go. Some files below might not have anything in them. That's ok, this
 *   is just a simple heuristic to keep track of our progress.
 *
 * TODO for version 4.x [updated][tested]:
 * [x][x] index.js
 * [x][x] querystream.js
 * [x][x] connection.js
 * [x][x] utils.js
 * [x][x] browser.js
 * [x][x] drivers/node-mongodb-native/collection.js
 * [x][x] drivers/node-mongodb-native/connection.js
 * [x][x] error/messages.js
 * [x][x] error/validation.js
 * [x][x] error.js
 * [x][x] querycursor.js
 * [x][x] virtualtype.js
 * [x][x] schema.js
 * [x][x] document.js
 * [x][x] types/subdocument.js
 * [x][x] types/array.js
 * [x][x] types/documentarray.js
 * [x][x] types/buffer.js
 * [x][x] types/objectid.js
 * [x][x] types/embedded.js
 * [x][x] query.js
 * [x][x] schema/array.js
 * [x][x] schema/string.js
 * [x][x] schema/documentarray.js
 * [x][x] schema/number.js
 * [x][x] schema/date.js
 * [x][x] schema/buffer.js
 * [x][x] schema/boolean.js
 * [x][x] schema/objectid.js
 * [x][x] schema/mixed.js
 * [x][x] schema/embedded.js
 * [x][x] aggregate.js
 * [x][x] schematype.js
 * [x][x] promise.js
 * [x][x] ES6Promise.js
 * [x][x] model.js
 * [x][x] collection.js
 */

/*
For easier searching, add a header to each section like so:
To find a section, CTRL+F and type "section ___.js"
/*
 * section filename.js
 * http://mongoosejs.com/docs/api.html#filename-js
 */

declare module "mongoose" {
  import events = require('events');
  import mongodb = require('mongodb');
  import stream = require('stream');

  /*
   * Some mongoose classes have the same name as the native JS classes
   * Keep references to native classes using a "Native" prefix
   */
  type NativeBuffer = Buffer;
  type NativeDate = Date;
  type NativeError = Error;

  /*
   * Public API
   */
  export = mongoose;

  /*
   * section index.js
   * http://mongoosejs.com/docs/api.html#index-js
   *
   * require('mongoose') is not actually a class with static
   *   methods. It is an instance of the Mongoose class.
   *
   * Reasons we use a class with static properties below:
   * 1. MongooseThenable extends mongoose, so we need a
   *    scope to wrap everything. We can't use a namespace
   *    since namespaces can't be inherited from.
   * 2. We can't use an interface to wrap everything, since
   *    some properties of mongoose are class constructors.
   *    Exporting an interface won't, for example, let us
   *    call new mongoose.Schema({})
   * 3. We can't use a normal class since require('mongoose')
   *    is an instance object. All of its properties are
   *    immediately accessible: require('mongoose').model('')
   *    If we export a normal class and import * as mongoose
   *    we'll have to call new mongoose() before we can use
   *    any of its methods, which would be inaccurate.
   *
   * NOTE: the static properties below cannot be used for
   *   type-checking. If you want to use the names for
   *   type-checking you must add a corresponding interface
   *   inside namespace mongoose {} defined below.
   */
  /**
   * Contains all the public properties and methods that can
   *   be accessed by mongoose = require('mongoose')
   */
  class mongoose {
    /* Class constructors */
    static Aggregate: typeof _mongoose.Aggregate;
    static CastError: typeof _mongoose.CastError;
    static Collection: _mongoose.Collection;
    static Connection: typeof _mongoose.Connection;
    static Document: typeof _mongoose.Document;
    static DocumentProvider: any;
    static Error: typeof _mongoose.Error;
    static Model: _mongoose.ModelConstructor<{}>;
    static Mongoose: {
      // recursive constructor
      new(...args: any[]): typeof mongoose;
    }
    /**
     * To assign your own promise library:
     *
     * 1. Include this somewhere in your code:
     *    mongoose.Promise = YOUR_PROMISE;
     *
     * 2. Include this somewhere in your main .d.ts file:
     *    type MongoosePromise<T> = YOUR_PROMISE<T>;
     */
    static Promise: any;
    static PromiseProvider: any;
    static Query: typeof _mongoose.ModelQuery;
    static Schema: typeof _mongoose.Schema;
    static SchemaType: typeof _mongoose.SchemaType;
    static SchemaTypes: typeof _mongoose.Schema.Types;
    static Types: {
      Subdocument: typeof _mongoose.Types.Subdocument;
      Array: typeof _mongoose.Types.Array;
      DocumentArray: typeof _mongoose.Types.DocumentArray;
      Buffer: typeof _mongoose.Types.Buffer;
      ObjectId: typeof _mongoose.Types.ObjectId;
      Embedded: typeof _mongoose.Types.Embedded;
    }
    static VirtualType: typeof _mongoose.VirtualType;

    /* Properties */
    /** Expose connection states for user-land */
    static STATES: Object
    /** The default connection of the mongoose module. */
    static connection: _mongoose.Connection;
    /** The node-mongodb-native driver Mongoose uses. */
    static mongo: typeof mongodb;
    /**
     * The mquery query builder Mongoose uses.
     * Currently there is no mquery type definition.
     */
    static mquery: any;
    /** The Mongoose version */
    static version: string;

    /* Methods */
    /**
     * Opens the default mongoose connection.
     * Options passed take precedence over options included in connection strings.
     * @returns pseudo-promise wrapper around this
     */
    static connect(uris: string,
      options?: _mongoose.MongooseConnectOptions,
      callback?: (err: mongodb.MongoError) => void): typeof _mongoose.MongooseThenable;
    static connect(uris: string,
      callback?: (err: mongodb.MongoError) => void): typeof _mongoose.MongooseThenable;

    /**
     * Creates a Connection instance.
     * Each connection instance maps to a single database. This method is helpful
     *   when mangaging multiple db connections.
     * @param uri a mongodb:// URI
     * @param options options to pass to the driver
     * @returns the created Connection object
     */
    static createConnection(): _mongoose.Connection;
    static createConnection(uri: string,
      options?: _mongoose.MongooseConnectOptions
    ): _mongoose.Connection;
  	static createConnection(host: string, database_name: string, port?: number,
      options?: _mongoose.MongooseConnectOptions
    ): _mongoose.Connection;

    /**
     * Disconnects all connections.
     * @param fn called after all connection close.
     * @returns pseudo-promise wrapper around this
     */
    static disconnect(fn?: (error: any) => void): typeof _mongoose.MongooseThenable;

    /** Gets mongoose options */
    static get(key: string): any;

    /**
     * Defines a model or retrieves it.
     * Models defined on the mongoose instance are available to all connection
     *   created by the same mongoose instance.
     * @param name model name
     * @param collection (optional, induced from model name)
     * @param skipInit whether to skip initialization (defaults to false)
     */
    static model<T>(name: string, schema?: _mongoose.Schema, collection?: string,
      skipInit?: boolean): _mongoose.ModelConstructor<T>;
    static model<T, Statics>(name: string, schema?: _mongoose.Schema, collection?: string,
      skipInit?: boolean): Statics & _mongoose.ModelConstructor<T>;

    /**
     * Returns an array of model names created on this instance of Mongoose.
     * Does not include names of models created using connection.model().
     */
    static modelNames(): string[];

    /**
     * Declares a global plugin executed on all Schemas.
     * Equivalent to calling .plugin(fn) on each Schema you create.
     * @param fn plugin callback
     * @param opts optional options
     */
    static plugin(fn: Function, opts?: Object): typeof mongoose;

    /** Sets mongoose options */
    static set(key: string, value: any): void;
  }

  /** All the types that are exposed for type checking. */
  namespace mongoose {
    type Aggregate<T> = _mongoose.Aggregate<T>;
    type CastError = _mongoose.CastError;
    type Collection = _mongoose.Collection;
    type Connection = _mongoose.Connection;
    type Document = _mongoose.Document;
    type Error = _mongoose.Error;
    type ValidationError = _mongoose.ValidationError;

    /** Document created from model constructors. */
    type model<T> = _mongoose.Model<T>;
    /** Model Constructor. */
    type Model<T> = _mongoose.ModelConstructor<T>;

    type Mongoose = typeof mongoose;
    type Promise<T> = _mongoose._MongoosePromise<T>;
    type Query<T> = _mongoose.Query<T>;
    type QueryCursor<T> = _mongoose.QueryCursor<T>;
    type QueryStream = _mongoose.QueryStream;
    type Schema = _mongoose.Schema;
    namespace Schema {
      namespace Types {
        type Array = _mongoose.Schema._Types.Array;
        type String = _mongoose.Schema._Types.String;
        type DocumentArray = _mongoose.Schema._Types.DocumentArray;
        type Number = _mongoose.Schema._Types.Number;
        type Date = _mongoose.Schema._Types.Date;
        type Buffer = _mongoose.Schema._Types.Buffer;
        type Boolean = _mongoose.Schema._Types.Boolean;
        type Bool = _mongoose.Schema._Types.Boolean;
        type ObjectId = _mongoose.Schema._Types.ObjectId;
        type Oid = _mongoose.Schema._Types.ObjectId;
        type Mixed = _mongoose.Schema._Types.Mixed;
        type Object = _mongoose.Schema._Types.Mixed;
        type Embedded = _mongoose.Schema._Types.Embedded;
      }
    }
    type SchemaType = _mongoose.SchemaType;
    namespace Types {
      type Subdocument = _mongoose.Types.Subdocument;
      type Array<T> = _mongoose.Types.Array<T>;
      type DocumentArray<T extends _mongoose.Document> = _mongoose.Types.DocumentArray<T>;
      type Buffer = _mongoose.Types.Buffer;
      type ObjectId = _mongoose.Types.ObjectId;
      type Embedded = _mongoose.Types.Embedded;
    }
    type VirtualType = _mongoose.VirtualType;
    type ConnectionOptions = _mongoose.MongooseConnectOptions;
  }

  /*
   * Public API Details.
   */
  namespace _mongoose {
    /*
     * section index.js
     * http://mongoosejs.com/docs/api.html#index-js
     */
    class MongooseThenable extends mongoose {
      /**
       * Ability to use mongoose object as a pseudo-promise so .connect().then()
       * and .disconnect().then() are viable.
       */
      static then<TRes>(onFulfill?: () => void | TRes | PromiseLike<TRes>,
        onRejected?: (err: mongodb.MongoError) => void | TRes | PromiseLike<TRes>): _MongoosePromise<TRes>;

      /**
       * Ability to use mongoose object as a pseudo-promise so .connect().then()
       * and .disconnect().then() are viable.
       */
      static catch<TRes>(onRejected?: (err: mongodb.MongoError) => void | TRes | PromiseLike<TRes>): _MongoosePromise<TRes>;
    }

    class CastError extends _mongoose.Error {
      /**
       * The Mongoose CastError constructor
       * @param type The name of the type
       * @param value The value that failed to cast
       * @param path The path a.b.c in the doc where this cast error occurred
       * @param reason The original error that was thrown
       */
      constructor(type: string, value: any, path: string, reason?: NativeError);
    }

    interface MongooseConnectOptions extends
      ConnectionOpenOptions,
      ConnectionOpenSetOptions {}

    /*
     * section querystream.js
     * http://mongoosejs.com/docs/api.html#querystream-js
     *
     * QueryStream can only be accessed using query#stream(), we only
     *   expose its interface here to enable type-checking.
     */
    interface QueryStream extends stream.Stream {
      /**
       * Provides a Node.js 0.8 style ReadStream interface for Queries.
       * @event data emits a single Mongoose document
       * @event error emits when an error occurs during streaming. This will emit before the close event.
       * @event close emits when the stream reaches the end of the cursor or an error occurs, or the stream
       *   is manually destroyed. After this event, no more events are emitted.
       */
      constructor(query: Query<any>, options?: {
        /**
         * optional function which accepts a mongoose document. The return value
         * of the function will be emitted on data.
         */
        transform?: Function;
        [other: string]: any;
      }): QueryStream;

      /**
       * Destroys the stream, closing the underlying cursor, which emits the close event.
       * No more events will be emitted after the close event.
       */
      destroy(err?: NativeError): void;

      /** Pauses this stream. */
      pause(): void;
      /** Pipes this query stream into another stream. This method is inherited from NodeJS Streams. */
      pipe<T extends NodeJS.WritableStream>(destination: T, options?: { end?: boolean; }): T;
      /** Resumes this stream. */
      resume(): void;

      /** Flag stating whether or not this stream is paused. */
      paused: boolean;
      /** Flag stating whether or not this stream is readable. */
      readable: boolean;
    }

    /*
     * section connection.js
     * http://mongoosejs.com/docs/api.html#connection-js
     *
     * The Connection class exposed by require('mongoose')
     *   is actually the driver's NativeConnection class.
     *   connection.js defines a base class that the native
     *   versions extend. See:
     *   http://mongoosejs.com/docs/api.html#drivers-node-mongodb-native-connection-js
     */
    abstract class ConnectionBase extends events.EventEmitter {
      /**
       * For practical reasons, a Connection equals a Db.
       * @param base a mongoose instance
       * @event connecting Emitted when connection.{open,openSet}() is executed on this connection.
       * @event connected Emitted when this connection successfully connects to the db. May be emitted multiple times in reconnected scenarios.
       * @event open Emitted after we connected and onOpen is executed on all of this connections models.
       * @event disconnecting Emitted when connection.close() was executed.
       * @event disconnected Emitted after getting disconnected from the db.
       * @event close Emitted after we disconnected and onClose executed on all of this connections models.
       * @event reconnected Emitted after we connected and subsequently disconnected, followed by successfully another successfull connection.
       * @event error Emitted when an error occurs on this connection.
       * @event fullsetup Emitted in a replica-set scenario, when primary and at least one seconaries specified in the connection string are connected.
       * @event all Emitted in a replica-set scenario, when all nodes specified in the connection string are connected.
       */
      constructor(base: typeof mongoose);

      /**
       * Opens the connection to MongoDB.
       * @param mongodb://uri or the host to which you are connecting
       * @param database database name
       * @param port database port
       * @param options Mongoose forces the db option forceServerObjectId false and cannot be overridden.
       *   Mongoose defaults the server auto_reconnect options to true which can be overridden.
       *   See the node-mongodb-native driver instance for options that it understands.
       *   Options passed take precedence over options included in connection strings.
       */
      open(connection_string: string, database?: string, port?: number,
        options?: ConnectionOpenOptions, callback?: (err: any) => void): any;

      /**
       * Opens the connection to a replica set.
       * @param uris comma-separated mongodb:// URIs
       * @param database database name if not included in uris
       * @param options passed to the internal driver
       */
      openSet(uris: string, database?: string, options?: ConnectionOpenSetOptions,
        callback?: (err: any) => void): any;

      /** Closes the connection */
      close(callback?: (err: any) => void): _MongoosePromise<void>;

      /**
       * Retrieves a collection, creating it if not cached.
       * Not typically needed by applications. Just talk to your collection through your model.
       * @param name name of the collection
       * @param options optional collection options
       */
      collection(name: string, options?: Object): Collection;

      /**
       * Defines or retrieves a model.
       * When no collection argument is passed, Mongoose produces a collection name by passing
       * the model name to the utils.toCollectionName method. This method pluralizes the name.
       * If you don't like this behavior, either pass a collection name or set your schemas
       * collection name option.
       * @param name the model name
       * @param schema a schema. necessary when defining a model
       * @param collection name of mongodb collection (optional) if not given it will be induced from model name
       * @returns The compiled model
       */
      model<T>(name: string, schema?: Schema, collection?: string): ModelConstructor<T>;
      model<T, Statics>(name: string, schema?: Schema, collection?: string): Statics & ModelConstructor<T>;

      /** Returns an array of model names created on this connection. */
      modelNames(): string[];

      /** A hash of the global options that are associated with this connection */
      config: Object;

      /** The mongodb.Db instance, set when the connection is opened */
      db: mongodb.Db;

      /** A hash of the collections associated with this connection */
      collections: { [index: string]: Collection };

      /**
       * Connection ready state
       * 0 = disconnected
       * 1 = connected
       * 2 = connecting
       * 3 = disconnecting
       * Each state change emits its associated event name.
       */
      readyState: number;
    }

    interface ConnectionOptionsBase {
      /** passed to the connection db instance */
      db?: any;
      /** passed to the connection server instance(s) */
      server?: any;
      /** passed to the connection ReplSet instance */
      replset?: any;
      /** username for authentication */
      user?: string;
      /** password for authentication */
      pass?: string;
      /** options for authentication (see http://mongodb.github.com/node-mongodb-native/api-generated/db.html#authenticate) */
      auth?: any;
    }

    /** See the node-mongodb-native driver instance for options that it understands. */
    interface ConnectionOpenOptions extends ConnectionOptionsBase {
      /** mongoose-specific options */
      config?: {
        /**
         * set to false to disable automatic index creation for all
         * models associated with this connection.
         */
        autoIndex?: boolean;
      };
    }

    /** See the node-mongodb-native driver instance for options that it understands. */
    interface ConnectionOpenSetOptions extends ConnectionOptionsBase {
      /**
       * If true, enables High Availability support for mongos
       * If connecting to multiple mongos servers, set the mongos option to true.
       */
      mongos?: boolean;
    }

    /*
     * section drivers/node-mongodb-native/collection.js
     * http://mongoosejs.com/docs/api.html#drivers-node-mongodb-native-collection-js
     */
    interface Collection extends CollectionBase {
      /**
       * Collection constructor
       * @param name name of the collection
       * @param conn A MongooseConnection instance
       * @param opts optional collection options
       */
      new(name: string, conn: Connection, opts?: Object): Collection;
      /** Formatter for debug print args */
      $format(arg: any): string;
      /** Debug print helper */
      $print(name: any, i: any, args: any[]): void;
      /** Retreives information about this collections indexes. */
      getIndexes(): any;
    }

    /*
     * section drivers/node-mongodb-native/connection.js
     * http://mongoosejs.com/docs/api.html#drivers-node-mongodb-native-connection-js
     */
    class Connection extends ConnectionBase {
      /**
       * Switches to a different database using the same connection pool.
       * @param name The database name
       * @returns New Connection Object
       */
      useDb(name: string): Connection;

      /** Expose the possible connection states. */
      static STATES: Object;
    }

    /*
     * section error/validation.js
     * http://mongoosejs.com/docs/api.html#error-validation-js
     */
    class ValidationError extends Error {
      /** Console.log helper */
      toString(): string;
    }

    /*
     * section error.js
     * http://mongoosejs.com/docs/api.html#error-js
     */
    class Error extends global.Error {
      /**
       * MongooseError constructor
       * @param msg Error message
       */
      constructor(msg: string);

      /**
       * The default built-in validator error messages. These may be customized.
       * As you might have noticed, error messages support basic templating
       * {PATH} is replaced with the invalid document path
       * {VALUE} is replaced with the invalid value
       * {TYPE} is replaced with the validator type such as "regexp", "min", or "user defined"
       * {MIN} is replaced with the declared min value for the Number.min validator
       * {MAX} is replaced with the declared max value for the Number.max validator
       */
      static messages: Object;

      /** For backwards compatibility. Same as mongoose.Error.messages */
      static Messages: Object;
    }

    /*
     * section querycursor.js
     * http://mongoosejs.com/docs/api.html#querycursor-js
     *
     * Callback signatures are from: http://mongodb.github.io/node-mongodb-native/2.1/api/Cursor.html#close
     * QueryCursor can only be accessed by query#cursor(), we only
     *   expose its interface to enable type-checking.
     */
    interface QueryCursor<T> extends stream.Readable {
      /**
       * A QueryCursor is a concurrency primitive for processing query results
       * one document at a time. A QueryCursor fulfills the Node.js streams3 API,
       * in addition to several other mechanisms for loading documents from MongoDB
       * one at a time.
       * Unless you're an advanced user, do not instantiate this class directly.
       * Use Query#cursor() instead.
       * @param options query options passed to .find()
       * @event cursor Emitted when the cursor is created
       * @event error Emitted when an error occurred
       * @event data Emitted when the stream is flowing and the next doc is ready
       * @event end Emitted when the stream is exhausted
       */
      constructor(query: Query<T>, options: Object): QueryCursor<T>;

      /** Marks this cursor as closed. Will stop streaming and subsequent calls to next() will error. */
      close(callback?: (error: any, result: any) => void): _MongoosePromise<any>;

      /**
       * Execute fn for every document in the cursor. If fn returns a promise,
       * will wait for the promise to resolve before iterating on to the next one.
       * Returns a promise that resolves when done.
       * @param callback executed when all docs have been processed
       */
      eachAsync(fn: (doc: Model<T>) => any, callback?: (err: any) => void): _MongoosePromise<Model<T>>;

      /**
       * Get the next document from this cursor. Will return null when there are
       * no documents left.
       */
      next(callback?: (err: any) => void): _MongoosePromise<any>;
    }

    /*
     * section virtualtype.js
     * http://mongoosejs.com/docs/api.html#virtualtype-js
     */
    class VirtualType {
      /** This is what mongoose uses to define virtual attributes via Schema.prototype.virtual. */
      constructor(options: Object, name: string);
      /** Applies getters to value using optional scope. */
      applyGetters(value: Object, scope: Object): any;
      /** Applies setters to value using optional scope. */
      applySetters(value: Object, scope: Object): any;
      /** Defines a getter. */
      get(fn: Function): this;
      /** Defines a setter. */
      set(fn: Function): this;
    }

    /*
     * section schema.js
     * http://mongoosejs.com/docs/api.html#schema-js
     */
    class Schema extends events.EventEmitter {
      /**
       * Schema constructor.
       * When nesting schemas, (children in the example above), always declare
       * the child schema first before passing it into its parent.
       * @event init Emitted after the schema is compiled into a Model.
       */
      constructor(definition?: Object, options?: SchemaOptions);

      /** Adds key path / schema type pairs to this schema. */
      add(obj: Object, prefix?: string): void;

      /**
       * Iterates the schemas paths similar to Array.forEach.
       * @param fn callback function
       * @returns this
       */
      eachPath(fn: (path: string, type: SchemaType) => void): this;

      /**
       * Gets a schema option.
       * @param key option name
       */
      get(key: string): any;

      /**
       * Defines an index (most likely compound) for this schema.
       * @param options Options to pass to MongoDB driver's createIndex() function
       * @param options.expires Mongoose-specific syntactic sugar, uses ms to convert
       *   expires option into seconds for the expireAfterSeconds in the above link.
       */
      index(fields: Object, options?: {
        expires?: string;
        [other: string]: any;
      }): this;

      /** Compiles indexes from fields and schema-level indexes */
      indexes(): any[];

      /**
       * Adds an instance method to documents constructed from Models compiled from this schema.
       * If a hash of name/fn pairs is passed as the only argument, each name/fn pair will be added as methods.
       */
      method(method: string, fn: Function): this;
      method(methodObj: { [name: string]: Function }): this;

      /**
       * Gets/sets schema paths.
       * Sets a path (if arity 2)
       * Gets a path (if arity 1)
       */
      path(path: string): SchemaType;
      path(path: string, constructor: any): this;

      /**
       * Returns the pathType of path for this schema.
       * @returns whether it is a real, virtual, nested, or ad-hoc/undefined path.
       */
      pathType(path: string): string;

      /**
       * Registers a plugin for this schema.
       * @param plugin callback
       */
      plugin(plugin: (schema: Schema, options?: Object) => void, opts?: Object): this;

      /**
       * Defines a post hook for the document
       * Post hooks fire on the event emitted from document instances of Models compiled
       *   from this schema.
       * @param method name of the method to hook
       * @param fn callback
       */
      post<T>(method: string, fn: (doc: Model<T>) => void, ...args: any[]): this;
      post<T>(method: string, fn: (doc: Model<T>, next: (err?: NativeError) => void,
        ...otherArgs: any[]) => void): this;

      /**
       * Defines a pre hook for the document.
       */
      pre(method: string, fn: (next: (err?: NativeError) => void) => void,
        errorCb?: (err: Error) => void): this;
      pre(method: string, parallel: boolean, fn: (next: (err?: NativeError) => void, done: () => void) => void,
        errorCb?: (err: Error) => void): this;

      /**
       * Adds a method call to the queue.
       * @param name name of the document method to call later
       * @param args arguments to pass to the method
       */
      queue(name: string, args: any[]): this;

      /**
       * Removes the given path (or [paths]).
       */
      remove(path: string | string[]): void;

      /**
       * @param invalidate refresh the cache
       * @returns an Array of path strings that are required by this schema.
       */
      requiredPaths(invalidate?: boolean): string[];

      /**
       * Sets/gets a schema option.
       * @param key option name
       * @param value if not passed, the current option value is returned
       */
      set(key: string): any;
      set(key: string, value: any): this;

      /**
       * Adds static "class" methods to Models compiled from this schema.
       */
      static(name: string, fn: Function): this;
      static(nameObj: { [name: string]: Function }): this;

      /** Creates a virtual type with the given name. */
      virtual(name: string, options?: Object): VirtualType;

      /** Returns the virtual type with the given name. */
      virtualpath(name: string): VirtualType;

      /** The allowed index types */
      static indexTypes: string[];

      /**
       * Reserved document keys.
       * Keys in this object are names that are rejected in schema declarations
       * b/c they conflict with mongoose functionality. Using these key name
       * will throw an error.
       */
      static reserved: Object;

      static Types: {
        Array: typeof _mongoose.Schema._Types.Array;
        String: typeof _mongoose.Schema._Types.String;
        DocumentArray: typeof _mongoose.Schema._Types.DocumentArray;
        Number: typeof _mongoose.Schema._Types.Number;
        Date: typeof _mongoose.Schema._Types.Date;
        Buffer: typeof _mongoose.Schema._Types.Buffer;
        Boolean: typeof _mongoose.Schema._Types.Boolean;
        Bool: typeof _mongoose.Schema._Types.Boolean;
        ObjectId: typeof _mongoose.Schema._Types.ObjectId;
        Oid: typeof _mongoose.Schema._Types.ObjectId;
        Mixed: typeof _mongoose.Schema._Types.Mixed;
        Object: typeof _mongoose.Schema._Types.Mixed;
        Embedded: typeof _mongoose.Schema._Types.Embedded;
      }

      /** Object of currently defined methods on this schema. */
      methods: any;
      /** Object of currently defined statics on this schema. */
      statics: any;
    }

    interface SchemaOptions {
      /** defaults to null (which means use the connection's autoIndex option) */
      autoIndex?: boolean;
      /** defaults to true */
      bufferCommands?: boolean;
      /** defaults to false */
      capped?: boolean;
      /** no default */
      collection?: string;
      /** defaults to false. */
      emitIndexErrors?: boolean;
      /** defaults to true */
      id?: boolean;
      /** defaults to true */
      _id?: boolean;
      /** controls document#toObject behavior when called manually - defaults to true */
      minimize?: boolean;
      read?: string;
      /** defaults to true. */
      safe?: boolean;
      /** defaults to null */
      shardKey?: boolean;
      /** defaults to true */
      strict?: boolean;
      /** no default */
      toJSON?: Object;
      /** no default */
      toObject?: Object;
      /** defaults to 'type' */
      typeKey?: string;
      /** defaults to false */
      useNestedStrict?: boolean;
      /** defaults to true */
      validateBeforeSave?: boolean;
      /** defaults to "__v" */
      versionKey?: boolean;
      /**
       * skipVersioning allows excluding paths from
       * versioning (the internal revision will not be
       * incremented even if these paths are updated).
       */
      skipVersioning?: Object;
      /**
       * If set timestamps, mongoose assigns createdAt
       * and updatedAt fields to your schema, the type
       * assigned is Date.
       */
      timestamps?: Object;
    }

    /*
     * section document.js
     * http://mongoosejs.com/docs/api.html#document-js
     */
    class Document {
      /** Checks if a path is set to its default. */
      $isDefault(path?: string): boolean;

      /**
       * Takes a populated field and returns it to its unpopulated state.
       * If the path was not populated, this is a no-op.
       */
      depopulate(path: string): void;

      /**
       * Returns true if the Document stores the same data as doc.
       * Documents are considered equal when they have matching _ids, unless neither document
       * has an _id, in which case this function falls back to usin deepEqual().
       * @param doc a document to compare
       */
      equals(doc: Document): boolean;

      /**
       * Explicitly executes population and returns a promise.
       * Useful for ES2015 integration.
       * @returns promise that resolves to the document when population is done
       */
      execPopulate(): _MongoosePromise<this>;

      /**
       * Returns the value of a path.
       * @param type optionally specify a type for on-the-fly attributes
       */
      get(path: string, type?: any): any;

      /**
       * Initializes the document without setters or marking anything modified.
       * Called internally after a document is returned from mongodb.
       * @param doc document returned by mongo
       * @param fn callback
       */
      init(doc: Document, fn?: () => void): this;
      init(doc: Document, opts: Object, fn?: () => void): this;

      /** Helper for console.log */
      inspect(options?: Object): any;

      /**
       * Marks a path as invalid, causing validation to fail.
       * The errorMsg argument will become the message of the ValidationError.
       * The value argument (if passed) will be available through the ValidationError.value property.
       * @param path the field to invalidate
       * @param errorMsg the error which states the reason path was invalid
       * @param value optional invalid value
       * @param kind optional kind property for the error
       * @returns the current ValidationError, with all currently invalidated paths
       */
      invalidate(path: string, errorMsg: string | NativeError, value: any, kind?: string): ValidationError | boolean;

      /** Returns true if path was directly set and modified, else false. */
      isDirectModified(path: string): boolean;

      /** Checks if path was initialized */
      isInit(path: string): boolean;

      /**
       * Returns true if this document was modified, else false.
       * If path is given, checks if a path or any full path containing path as part of its path
       * chain has been modified.
       */
      isModified(path?: string): boolean;

      /** Checks if path was selected in the source query which initialized this document. */
      isSelected(path: string): boolean;

      /**
       * Marks the path as having pending changes to write to the db.
       * Very helpful when using Mixed types.
       * @param path the path to mark modified
       */
      markModified(path: string): void;

      /** Returns the list of paths that have been modified. */
      modifiedPaths(): string[];

      /**
       * Populates document references, executing the callback when complete.
       * If you want to use promises instead, use this function with
       * execPopulate()
       * Population does not occur unless a callback is passed or you explicitly
       * call execPopulate(). Passing the same path a second time will overwrite
       * the previous path options. See Model.populate() for explaination of options.
       * @param path The path to populate or an options object
       * @param callback When passed, population is invoked
       */
      populate(callback: (err: any, res: this) => void): this;
      populate(path: string, callback?: (err: any, res: this) => void): this;
      populate(options: ModelPopulateOptions, callback?: (err: any, res: this) => void): this;

      /** Gets _id(s) used during population of the given path. If the path was not populated, undefined is returned. */
      populated(path: string): any;

      /**
       * Sets the value of a path, or many paths.
       * @param path path or object of key/vals to set
       * @param val the value to set
       * @param type optionally specify a type for "on-the-fly" attributes
       * @param options optionally specify options that modify the behavior of the set
       */
      set(path: string, val: any, options?: Object): void;
      set(path: string, val: any, type: any, options?: Object): void;
      set(value: Object): void;

      /**
       * The return value of this method is used in calls to JSON.stringify(doc).
       * This method accepts the same options as Document#toObject. To apply the
       * options to every document of your schema by default, set your schemas
       * toJSON option to the same argument.
       */
      toJSON(options?: DocumentToObjectOptions): Object;

      /**
       * Converts this document into a plain javascript object, ready for storage in MongoDB.
       * Buffers are converted to instances of mongodb.Binary for proper storage.
       */
      toObject(options?: DocumentToObjectOptions): Object;

      /** Helper for console.log */
      toString(): string;

      /**
       * Clears the modified state on the specified path.
       * @param path the path to unmark modified
       */
      unmarkModified(path: string): void;

      /** Sends an update command with this document _id as the query selector.  */
      update(doc: Object, callback?: (err: any, raw: any) => void): Query<any>;
      update(doc: Object, options: ModelUpdateOptions,
        callback?: (err: any, raw: any) => void): Query<any>;

      /**
       * Executes registered validation rules for this document.
       * @param optional options internal options
       * @param callback callback called after validation completes, passing an error if one occurred
       */
      validate(callback?: (err: any) => void): _MongoosePromise<void>;
      validate(optional: Object, callback?: (err: any) => void): _MongoosePromise<void>;

      /**
       * Executes registered validation rules (skipping asynchronous validators) for this document.
       * This method is useful if you need synchronous validation.
       * @param pathsToValidate only validate the given paths
       * @returns MongooseError if there are errors during validation, or undefined if there is no error.
       */
      validateSync(pathsToValidate: string | string[]): _mongoose.Error;

      /** Hash containing current validation errors. */
      errors: Object;
      /** The string version of this documents _id. */
      id: string;
      /** This documents _id. */
      _id: any;
      /** Boolean flag specifying if the document is new. */
      isNew: boolean;
      /** The documents schema. */
      schema: Schema;
    }

    interface DocumentToObjectOptions {
      /** apply all getters (path and virtual getters) */
      getters?: boolean;
      /** apply virtual getters (can override getters option) */
      virtuals?: boolean;
      /** remove empty objects (defaults to true) */
      minimize?: boolean;
      /**
       * A transform function to apply to the resulting document before returning
       * @param doc The mongoose document which is being converted
       * @param ret The plain object representation which has been converted
       * @param options The options in use (either schema options or the options passed inline)
       */
      transform?: (doc: Model<any>, ret: Object, options: Object) => any;
      /** depopulate any populated paths, replacing them with their original refs (defaults to false) */
      depopulate?: boolean;
      /** whether to include the version key (defaults to true) */
      versionKey?: boolean;
      /**
       * keep the order of object keys. If this is set to true,
       * Object.keys(new Doc({ a: 1, b: 2}).toObject()) will
       * always produce ['a', 'b'] (defaults to false)
       */
      retainKeyOrder?: boolean;
    }

    namespace Types {
      /*
       * section types/subdocument.js
       * http://mongoosejs.com/docs/api.html#types-subdocument-js
       */
      class Subdocument extends Document {
        /** Returns the top level document of this sub-document. */
        ownerDocument(): Document;

        /**
         * Null-out this subdoc
         * @param callback optional callback for compatibility with Document.prototype.remove
         */
        remove(callback?: (err: any) => void): void;
        remove(options: Object, callback?: (err: any) => void): void;
      }

      /*
       * section types/array.js
       * http://mongoosejs.com/docs/api.html#types-array-js
       */
      class Array<T> extends global.Array {
        /**
         * Atomically shifts the array at most one time per document save().
         * Calling this mulitple times on an array before saving sends the same command as
         * calling it once. This update is implemented using the MongoDB $pop method which
         * enforces this restriction.
         */
        $shift(): T;

        /** Alias of pull */
        remove(...args: any[]): this;

        /**
         * Pops the array atomically at most one time per document save().
         * Calling this mulitple times on an array before saving sends the same command as
         * calling it once. This update is implemented using the MongoDB $pop method which
         * enforces this restriction.
         */
        $pop(): T;

        /**
         * Adds values to the array if not already present.
         * @returns the values that were added
         */
        addToSet(...args: any[]): T[];

        /**
         * Return the index of obj or -1 if not found.
         * @param obj he item to look for
         */
        indexOf(obj: any): number;

        /** Helper for console.log */
        inspect(): any;

        /**
         * Marks the entire array as modified, which if saved, will store it as a $set
         * operation, potentially overwritting any changes that happen between when you
         * retrieved the object and when you save it.
         * @returns new length of the array
         */
        nonAtomicPush(...args: any[]): number;

        /**
         * Wraps Array#pop with proper change tracking.
         * marks the entire array as modified which will pass the entire thing to $set
         * potentially overwritting any changes that happen between when you retrieved
         * the object and when you save it.
         */
        pop(): T;

        /**
         * Pulls items from the array atomically. Equality is determined by casting
         * the provided value to an embedded document and comparing using
         * the Document.equals() function.
         */
        pull(...args: any[]): this;

        /**
         * Wraps Array#push with proper change tracking.
         * @returns new length of the array
         */
        push(...args: any[]): number;

        /** Sets the casted val at index i and marks the array modified. */
        set(i: number, val: any): this;

        /**
         * Wraps Array#shift with proper change tracking.
         * Marks the entire array as modified, which if saved, will store it as a $set operation,
         * potentially overwritting any changes that happen between when you retrieved the object
         * and when you save it.
         */
        shift(): T;

        /**
         * Wraps Array#sort with proper change tracking.
         * Marks the entire array as modified, which if saved, will store it as a $set operation,
         * potentially overwritting any changes that happen between when you retrieved the object
         * and when you save it.
         */
        sort(compareFn?: (a: T, b: T) => number): T[];

        /**
         * Wraps Array#splice with proper change tracking and casting.
         * Marks the entire array as modified, which if saved, will store it as a $set operation,
         * potentially overwritting any changes that happen between when you retrieved the object
         * and when you save it.
         */
        splice(...args: any[]): T[];

        /** Returns a native js Array. */
        toObject(options?: Object): T[];

        /**
         * Wraps Array#unshift with proper change tracking.
         * Marks the entire array as modified, which if saved, will store it as a $set operation,
         * potentially overwritting any changes that happen between when you retrieved the object
         * and when you save it.
         */
        unshift(...args: any[]): number;
      }

      /*
       * section types/documentarray.js
       * http://mongoosejs.com/docs/api.html#types-documentarray-js
       */
      class DocumentArray<T extends Document> extends _mongoose.Types.Array<T> {
        /**
         * Creates a subdocument casted to this schema.
         * This is the same subdocument constructor used for casting.
         * @param obj the value to cast to this arrays SubDocument schema
         */
        create(obj: Object): Subdocument;

        /**
         * Searches array items for the first document with a matching _id.
         * @returns the subdocument or null if not found.
         */
        id(id: ObjectId | string | number | NativeBuffer): Embedded;

        /** Helper for console.log */
        inspect(): T[];

        /**
         * Returns a native js Array of plain js objects
         * @param options optional options to pass to each documents toObject
         *   method call during conversion
         */
        toObject(options?: Object): T[];
      }

      /*
       * section types/buffer.js
       * http://mongoosejs.com/docs/api.html#types-buffer-js
       */
      class Buffer extends global.Buffer {
        /**
         * Copies the buffer.
         * Buffer#copy does not mark target as modified so you must copy
         * from a MongooseBuffer for it to work as expected. This is a
         * work around since copy modifies the target, not this.
         */
        copy(target: NativeBuffer, ...nodeBufferArgs: any[]): number;

        /** Determines if this buffer is equals to other buffer */
        equals(other: NativeBuffer): boolean;

        /** Sets the subtype option and marks the buffer modified. */
        subtype(subtype: number): void;

        /** Converts this buffer to its Binary type representation. */
        toObject(subtype?: number): mongodb.Binary;

        /** Writes the buffer. */
        write(string: string, ...nodeBufferArgs: any[]): number;
      }

      /*
       * section types/objectid.js
       * http://mongoosejs.com/docs/api.html#types-objectid-js
       */
      var ObjectId: typeof mongodb.ObjectID;
      interface ObjectId extends mongodb.ObjectID {}

      /*
       * section types/embedded.js
       * http://mongoosejs.com/docs/api.html#types-embedded-js
       */
      class Embedded extends Document {
        /** Helper for console.log */
        inspect(): Object;

        /**
         * Marks a path as invalid, causing validation to fail.
         * @param path the field to invalidate
         * @param err error which states the reason path was invalid
         */
        invalidate(path: string, err: string | NativeError): boolean;

        /** Returns the top level document of this sub-document. */
        ownerDocument(): Document;
        /** Returns this sub-documents parent document. */
        parent(): Document;
        /** Returns this sub-documents parent array. */
        parentArray(): DocumentArray<Document>;

        /** Removes the subdocument from its parent array. */
        remove(options?: {
          noop?: boolean;
        }, fn?: (err: any) => void): this;

        /**
         * Marks the embedded doc modified.
         * @param path the path which changed
         */
        markModified(path: string): void;
      }
    }

    /*
     * section query.js
     * http://mongoosejs.com/docs/api.html#query-js
     */
    type Query<T> = ModelQuery<T, any>;

    /*
     * Query.find() will return Query<Model<T>[]> however we need the
     * type T to create this so we save T in another parameter.
     */
    class ModelQuery<T, ModelType> extends mquery {
      /**
       * Specifies a javascript function or expression to pass to MongoDBs query system.
       * Only use $where when you have a condition that cannot be met using other MongoDB
       * operators like $lt. Be sure to read about all of its caveats before using.
       * @param js javascript string or function
       */
      $where(js: string | Function): this;

      /**
       * Specifies an $all query condition.
       * When called with one argument, the most recent path passed to where() is used.
       */
      all(val: number): this;
      all(path: string, val: number): this;

      /**
       * Specifies arguments for a $and condition.
       * @param array array of conditions
       */
      and(array: Object[]): this;

      /** Specifies the batchSize option. Cannot be used with distinct() */
      batchSize(val: number): this;

      /**
       * Specifies a $box condition
       * @param Upper Right Coords
       */
      box(val: Object): this;
      box(lower: number[], upper: number[]): this;

      /** Casts this query to the schema of model, If obj is present, it is cast instead of this query.*/
      cast(model: Model<any> | ModelConstructor<any>, obj?: Object): Object;

      /**
       * Executes the query returning a Promise which will be
       * resolved with either the doc(s) or rejected with the error.
       * Like .then(), but only takes a rejection handler.
       */
      catch<TRes>(reject?: (err: any) => void | TRes | PromiseLike<TRes>): _MongoosePromise<TRes>;

      /**
       * DEPRECATED Alias for circle
       * Specifies a $center or $centerSphere condition.
       * @deprecated Use circle instead.
       */
      center(area: Object): this;
      center(path: string, area: Object): this;

      /**
       * DEPRECATED Specifies a $centerSphere condition
       * @deprecated Use circle instead.
       */
      centerSphere(path: string, val: Object): this;
      centerSphere(val: Object): this;

      /** Specifies a $center or $centerSphere condition. */
      circle(area: Object): this;
      circle(path: string, area: Object): this;

      /** Specifies the comment option. Cannot be used with distinct() */
      comment(val: string): this;

      /**
       * Specifying this query as a count query. Passing a callback executes the query.
       * @param criteria mongodb selector
       */
      count(callback?: (err: any, count: number) => void): Query<number>;
      count(criteria: Object, callback?: (err: any, count: number) => void): Query<number>;

      /**
       * Returns a wrapper around a mongodb driver cursor. A Query<T>Cursor exposes a
       * Streams3-compatible interface, as well as a .next() function.
       */
      cursor(options?: Object): QueryCursor<T>;

      /** Declares or executes a distict() operation. Passing a callback executes the query. */
      distinct(callback?: (err: any, res: any[]) => void): Query<any[]>;
      distinct(field: string, callback?: (err: any, res: any[]) => void): Query<any[]>;
      distinct(field: string, criteria: Object | Query<any>,
        callback?: (err: any, res: any[]) => void): Query<any[]>;

      /** Specifies an $elemMatch condition */
      elemMatch(criteria: (elem: Query<any>) => void): this;
      elemMatch(criteria: Object): this;
      elemMatch(path: string | Object | Function, criteria: (elem: Query<any>) => void): this;
      elemMatch(path: string | Object | Function, criteria: Object): this;

      /** Specifies the complementary comparison value for paths specified with where() */
      equals(val: Object): this;

      /** Executes the query */
      exec(callback?: (err: any, res: T) => void): _MongoosePromise<T>;
      exec(operation: string | Function, callback?: (err: any, res: T) => void): _MongoosePromise<T>;

      /** Specifies an $exists condition */
      exists(val?: boolean): this;
      exists(path: string, val?: boolean): this;

      /**
       * Finds documents. When no callback is passed, the query is not executed. When the
       * query is executed, the result will be an array of documents.
       * @param criteria mongodb selector
       */
      find(callback?: (err: any, res: Model<ModelType>[]) => void): ModelQuery<Model<ModelType>[], ModelType>;
      find(criteria: Object,
        callback?: (err: any, res: Model<ModelType>[]) => void): ModelQuery<Model<ModelType>[], ModelType>;

      /**
       * Declares the query a findOne operation. When executed, the first found document is
       * passed to the callback. Passing a callback executes the query. The result of the query
       * is a single document.
       * @param criteria mongodb selector
       * @param projection optional fields to return
       */
      findOne(callback?: (err: any, res: Model<ModelType>) => void): ModelQuery<Model<ModelType>, ModelType>;
      findOne(criteria: Object,
        callback?: (err: any, res: Model<ModelType>) => void): ModelQuery<Model<ModelType>, ModelType>;

      /**
       * Issues a mongodb findAndModify remove command.
       * Finds a matching document, removes it, passing the found document (if any) to the
       * callback. Executes immediately if callback is passed.
       */
      findOneAndRemove(callback?: (error: any, doc: Model<ModelType>, result: any) => void): ModelQuery<Model<ModelType>, ModelType>;
      findOneAndRemove(conditions: Object,
        callback?: (error: any, doc: Model<ModelType>, result: any) => void): ModelQuery<Model<ModelType>, ModelType>;
      findOneAndRemove(conditions: Object, options: QueryFindOneAndRemoveOptions,
        callback?: (error: any, doc: Model<ModelType>, result: any) => void): ModelQuery<Model<ModelType>, ModelType>;

      /**
       * Issues a mongodb findAndModify update command.
       * Finds a matching document, updates it according to the update arg, passing any options, and returns
       * the found document (if any) to the callback. The query executes immediately if callback is passed.
       */
      findOneAndUpdate(callback?: (err: any, doc: Model<ModelType>) => void): ModelQuery<Model<ModelType>, ModelType>;
      findOneAndUpdate(update: Object,
        callback?: (err: any, doc: Model<ModelType>) => void): ModelQuery<Model<ModelType>, ModelType>;
      findOneAndUpdate(query: Object | Query<any>, update: Object,
        callback?: (err: any, doc: Model<ModelType>) => void): ModelQuery<Model<ModelType>, ModelType>;
      findOneAndUpdate(query: Object | Query<any>, update: Object, options: QueryFindOneAndUpdateOptions,
        callback?: (err: any, doc: Model<ModelType>) => void): ModelQuery<Model<ModelType>, ModelType>;

      /**
       * Specifies a $geometry condition. geometry() must come after either intersects() or within().
       * @param object Must contain a type property which is a String and a coordinates property which
       *   is an Array. See the examples.
       */
      geometry(object: { type: string, coordinates: any[] }): this;

      /**
       * Returns the current query conditions as a JSON object.
       * @returns current query conditions
       */
      getQuery(): any;

      /**
       * Returns the current update operations as a JSON object.
       * @returns current update operations
       */
      getUpdate(): any;

      /**
       * Specifies a $gt query condition.
       * When called with one argument, the most recent path passed to where() is used.
       */
      gt(val: number): this;
      gt(path: string, val: number): this;

      /**
       * Specifies a $gte query condition.
       * When called with one argument, the most recent path passed to where() is used.
       */
      gte(val: number): this;
      gte(path: string, val: number): this;

      /**
       * Sets query hints.
       * @param val a hint object
       */
      hint(val: Object): this;

      /**
       * Specifies an $in query condition.
       * When called with one argument, the most recent path passed to where() is used.
       */
      in(val: any[]): this;
      in(path: string, val: any[]): this;

      /** Declares an intersects query for geometry(). MUST be used after where(). */
      intersects(arg?: Object): this;

      /**
       * Sets the lean option.
       * Documents returned from queries with the lean option enabled are plain
       * javascript objects, not MongooseDocuments. They have no save method,
       * getters/setters or other Mongoose magic applied.
       * @param bool defaults to true
       */
      lean(bool?: boolean): Query<Object>;

      /** Specifies the maximum number of documents the query will return. Cannot be used with distinct() */
      limit(val: number): this;

      /**
       * Specifies a $lt query condition.
       * When called with one argument, the most recent path passed to where() is used.
       */
      lt(val: number): this;
      lt(path: string, val: number): this;

      /**
       * Specifies a $lte query condition.
       * When called with one argument, the most recent path passed to where() is used.
       */
      lte(val: number): this;
      lte(path: string, val: number): this;

      /**
       * Specifies a $maxDistance query condition.
       * When called with one argument, the most recent path passed to where() is used.
       */
      maxDistance(val: number): this;
      maxDistance(path: string, val: number): this;

      /** @deprecated Alias of maxScan */
      maxscan(val: number): this;
      /** Specifies the maxScan option. Cannot be used with distinct() */
      maxScan(val: number): this;

      /**
       * Merges another Query or conditions object into this one.
       * When a Query is passed, conditions, field selection and options are merged.
       */
      merge(source: Object | Query<any>): this;

      /** Specifies a $mod condition */
      mod(val: number[]): this;
      mod(path: string, val: number[]): this;

      /**
       * Specifies a $ne query condition.
       * When called with one argument, the most recent path passed to where() is used.
       */
      ne(val: any): this;
      ne(path: string, val: any): this;

      /** Specifies a $near or $nearSphere condition. */
      near(val: Object): this;
      near(path: string, val: Object): this;

      /**
       * DEPRECATED Specifies a $nearSphere condition
       * @deprecated Use query.near() instead with the spherical option set to true.
       */
      nearSphere(val: Object): this;
      nearSphere(path: string, val: Object): this;

      /**
       * Specifies a $nin query condition.
       * When called with one argument, the most recent path passed to where() is used.
       */
      nin(val: any[]): this;
      nin(path: string, val: any[]): this;

      /**
       * Specifies arguments for a $nor condition.
       * @param array array of conditions
       */
      nor(array: Object[]): this;

      /**
       * Specifies arguments for an $or condition.
       * @param array array of conditions
       */
      or(array: Object[]): this;

      /** Specifies a $polygon condition */
      polygon(...coordinatePairs: number[][]): this;
      polygon(path: string, ...coordinatePairs: number[][]): this;

      /**
       * Specifies paths which should be populated with other documents.
       * Paths are populated after the query executes and a response is received. A separate
       * query is then executed for each path specified for population. After a response for
       * each query has also been returned, the results are passed to the callback.
       * @param path either the path to populate or an object specifying all parameters
       * @param select Field selection for the population query
       * @param model The model you wish to use for population. If not specified, populate
       *   will look up the model by the name in the Schema's ref field.
       * @param match Conditions for the population query
       * @param options Options for the population query (sort, etc)
       */
      populate(path: string | Object, select?: string | Object, model?: string | Model<T>,
        match?: Object, options?: Object): this;
      populate(options: ModelPopulateOptions): this;

      /**
       * Determines the MongoDB nodes from which to read.
       * @param pref one of the listed preference options or aliases
       * @tags optional tags for this query
       */
      read(pref: string, tags?: Object[]): this;

      /**
       * Specifies a $regex query condition.
       * When called with one argument, the most recent path passed to where() is used.
       */
      regex(val: RegExp): this;
      regex(path: string, val: RegExp): this;

      /**
       * Declare and/or execute this query as a remove() operation.
       * The operation is only executed when a callback is passed. To force execution without a callback,
       * you must first call remove() and then execute it by using the exec() method.
       * @param criteria mongodb selector
       */
      remove(callback?: (err: any) => void): Query<void>;
      remove(criteria: Object | Query<any>, callback?: (err: any) => void): Query<void>;

      /** Specifies which document fields to include or exclude (also known as the query "projection") */
      select(arg: string | Object): this;
      /** Determines if field selection has been made. */
      selected(): boolean;
      /** Determines if exclusive field selection has been made.*/
      selectedExclusively(): boolean;
      /** Determines if inclusive field selection has been made. */
      selectedInclusively(): boolean;
      /** Sets query options. */
      setOptions(options: Object): this;

      /**
       * Specifies a $size query condition.
       * When called with one argument, the most recent path passed to where() is used.
       */
      size(val: number): this;
      size(path: string, val: number): this;

      /** Specifies the number of documents to skip. Cannot be used with distinct() */
      skip(val: number): this;

      /**
       * DEPRECATED Sets the slaveOk option.
       * @param v defaults to true
       * @deprecated in MongoDB 2.2 in favor of read preferences.
       */
      slaveOk(v?: boolean): this;

      /**
       * Specifies a $slice projection for an array.
       * @param val number/range of elements to slice
       */
      slice(val: number | number[]): this;
      slice(path: string, val: number | number[]): this;

      /** Specifies this query as a snapshot query. Cannot be used with distinct() */
      snapshot(v?: boolean): this;

      /**
       * Sets the sort order
       * If an object is passed, values allowed are asc, desc, ascending, descending, 1, and -1.
       * If a string is passed, it must be a space delimited list of path names. The
       * sort order of each path is ascending unless the path name is prefixed with -
       * which will be treated as descending.
       */
      sort(arg: string | Object): this;

      /** Returns a Node.js 0.8 style read stream interface. */
      stream(options?: { transform?: Function; }): QueryStream;

      /**
       * Sets the tailable option (for use with capped collections). Cannot be used with distinct()
       * @param bool defaults to true
       * @param opts options to set
       * @param opts.numberOfRetries if cursor is exhausted, retry this many times before giving up
       * @param opts.tailableRetryInterval if cursor is exhausted, wait this many milliseconds before retrying
       */
      tailable(bool?: boolean, opts?: {
        numberOfRetries?: number;
        tailableRetryInterval?: number;
      }): this;

      /** Executes this query and returns a promise */
      then<TRes>(resolve?: (res: T) => void | TRes | PromiseLike<TRes>,
        reject?: (err: any) =>  void | TRes | PromiseLike<TRes>): _MongoosePromise<TRes>;

      /**
       * Converts this query to a customized, reusable query
       * constructor with all arguments and options retained.
       */
      toConstructor(): typeof ModelQuery;

      /**
       * Declare and/or execute this query as an update() operation.
       * All paths passed that are not $atomic operations will become $set ops.
       * @param doc the update command
       */
      update(callback?: (err: any, affectedRows: number) => void): Query<number>;
      update(doc: Object, callback?: (err: any, affectedRows: number) => void): Query<number>;
      update(criteria: Object, doc: Object,
        callback?: (err: any, affectedRows: number) => void): Query<number>;
      update(criteria: Object, doc: Object, options: QueryUpdateOptions,
        callback?: (err: any, affectedRows: number) => void): Query<number>;

      /** Specifies a path for use with chaining. */
      where(path?: string | Object, val?: any): this;

      /** Defines a $within or $geoWithin argument for geo-spatial queries. */
      within(val?: Object): this;
      within(coordinate: number[], ...coordinatePairs: number[][]): this;

      /** Flag to opt out of using $geoWithin. */
      static use$geoWithin: boolean;
    }

    // https://github.com/aheckmann/mquery
    // mquery currently does not have a type definition please
    //   replace it if one is ever created
    class mquery {}

    interface QueryFindOneAndRemoveOptions {
      /** if multiple docs are found by the conditions, sets the sort order to choose which doc to update */
      sort?: any;
      /** puts a time limit on the query - requires mongodb >= 2.6.0 */
      maxTimeMS?: number;
      /** if true, passes the raw result from the MongoDB driver as the third callback parameter */
      passRawResult?: boolean;
    }

    interface QueryFindOneAndUpdateOptions extends QueryFindOneAndRemoveOptions {
      /** if true, return the modified document rather than the original. defaults to false (changed in 4.0) */
      new?: boolean;
      /** creates the object if it doesn't exist. defaults to false. */
      upsert?: boolean;
      /** Field selection. Equivalent to .select(fields).findOneAndUpdate() */
      fields?: Object | string;
      /** if true, runs update validators on this command. Update validators validate the update operation against the model's schema. */
      runValidators?: boolean;
      /**
       * if this and upsert are true, mongoose will apply the defaults specified in the model's schema if a new document
       * is created. This option only works on MongoDB >= 2.4 because it relies on MongoDB's $setOnInsert operator.
       */
      setDefaultsOnInsert?: boolean;
      /**
       * if set to 'query' and runValidators is on, this will refer to the query in custom validator
       * functions that update validation runs. Does nothing if runValidators is false.
       */
      context?: string;
    }

    interface QueryUpdateOptions extends ModelUpdateOptions {
      /**
       * if set to 'query' and runValidators is on, this will refer to the query
       * in customvalidator functions that update validation runs. Does nothing
       * if runValidators is false.
       */
      context?: string;
    }

    namespace Schema {
      namespace _Types {
        /*
         * section schema/array.js
         * http://mongoosejs.com/docs/api.html#schema-array-js
         */
        class Array extends SchemaType {
          /** Array SchemaType constructor */
          constructor(key: string, cast?: SchemaType, options?: Object);

          /**
           * Check if the given value satisfies a required validator. The given value
           * must be not null nor undefined, and have a non-zero length.
           */
          checkRequired<T extends { length: number }>(value: T): boolean;

          /** This schema type's name, to defend against minifiers that mangle function names. */
          static schemaName: string;
        }

        /*
         * section schema/string.js
         * http://mongoosejs.com/docs/api.html#schema-string-js
         */
        class String extends SchemaType {
          /** String SchemaType constructor. */
          constructor(key: string, options?: Object);

          /** Check if the given value satisfies a required validator. */
          checkRequired(value: any, doc: Document): boolean;

          /**
           * Adds an enum validator
           * @param args enumeration values
           */
          enum(args: string | string[] | Object): this;

          /** Adds a lowercase setter. */
          lowercase(): this;

          /**
           * Sets a regexp validator. Any value that does not pass regExp.test(val) will fail validation.
           * @param regExp regular expression to test against
           * @param message optional custom error message
           */
          match(regExp: RegExp, message?: string): this;

          /**
           * Sets a maximum length validator.
           * @param value maximum string length
           * @param message optional custom error message
           */
          maxlength(value: number, message?: string): this;

          /**
           * Sets a minimum length validator.
           * @param value minimum string length
           * @param message optional custom error message
           */
          minlength(value: number, message?: string): this;

          /** Adds a trim setter. The string value will be trimmed when set. */
          trim(): this;
          /** Adds an uppercase setter. */
          uppercase(): this;

          /** This schema type's name, to defend against minifiers that mangle function names. */
          static schemaName: string;

        }

        /*
         * section schema/documentarray.js
         * http://mongoosejs.com/docs/api.html#schema-documentarray-js
         */
        class DocumentArray extends Array {
          /** SubdocsArray SchemaType constructor */
          constructor(key: string, schema: Schema, options?: Object);

          /** This schema type's name, to defend against minifiers that mangle function names. */
          static schemaName: string;
        }

        /*
         * section schema/number.js
         * http://mongoosejs.com/docs/api.html#schema-number-js
         */
        class Number extends SchemaType {
          /** Number SchemaType constructor. */
          constructor(key: string, options?: Object);

          /** Check if the given value satisfies a required validator. */
          checkRequired(value: any, doc: Document): boolean;

          /**
           * Sets a maximum number validator.
           * @param maximum number
           * @param message optional custom error message
           */
          max(maximum: number, message?: string): this;

          /**
           * Sets a minimum number validator.
           * @param value minimum number
           * @param message optional custom error message
           */
          min(value: number, message?: string): this;

          /** This schema type's name, to defend against minifiers that mangle function names. */
          static schemaName: string;
        }

        /*
         * section schema/date.js
         * http://mongoosejs.com/docs/api.html#schema-date-js
         */
        class Date extends SchemaType {
          /** Date SchemaType constructor. */
          constructor(key: string, options?: Object);

          /**
           * Check if the given value satisfies a required validator. To satisfy
           * a required validator, the given value must be an instance of Date.
           */
          checkRequired(value: any, doc: Document): boolean;

          /** Declares a TTL index (rounded to the nearest second) for Date types only. */
          expires(when: number | string): this;

          /**
           * Sets a maximum date validator.
           * @param maximum date
           * @param message optional custom error message
           */
          max(maximum: NativeDate, message?: string): this;

          /**
           * Sets a minimum date validator.
           * @param value minimum date
           * @param message optional custom error message
           */
          min(value: NativeDate, message?: string): this;

          /** This schema type's name, to defend against minifiers that mangle function names. */
          static schemaName: string;
        }

        /*
         * section schema/buffer.js
         * http://mongoosejs.com/docs/api.html#schema-buffer-js
         */
        class Buffer extends SchemaType {
          /** Buffer SchemaType constructor */
          constructor(key: string, options?: Object);

          /**
           * Check if the given value satisfies a required validator. To satisfy a
           * required validator, a buffer must not be null or undefined and have
           * non-zero length.
           */
          checkRequired(value: any, doc: Document): boolean;

          /** This schema type's name, to defend against minifiers that mangle function names. */
          static schemaName: string;

        }

        /*
         * section schema/boolean.js
         * http://mongoosejs.com/docs/api.html#schema-boolean-js
         */
        class Boolean extends SchemaType {
          /** Boolean SchemaType constructor. */
          constructor(path: string, options?: Object);

          /**
           * Check if the given value satisfies a required validator. For a
           * boolean to satisfy a required validator, it must be strictly
           * equal to true or to false.
           */
          checkRequired(value: any): boolean;

          /** This schema type's name, to defend against minifiers that mangle function names. */
          static schemaName: string;
        }

        /*
         * section schema/objectid.js
         * http://mongoosejs.com/docs/api.html#schema-objectid-js
         */
        class ObjectId extends SchemaType {
          /** ObjectId SchemaType constructor. */
          constructor(key: string, options?: Object);

          /**
           * Adds an auto-generated ObjectId default if turnOn is true.
           * @param turnOn auto generated ObjectId defaults
           */
          auto(turnOn: boolean): this;

          /** Check if the given value satisfies a required validator. */
          checkRequired(value: any, doc: Document): boolean;

          /** This schema type's name, to defend against minifiers that mangle function names. */
          static schemaName: string;
        }

        /*
         * section schema/mixed.js
         * http://mongoosejs.com/docs/api.html#schema-mixed-js
         */
        class Mixed extends SchemaType {
          /** Mixed SchemaType constructor. */
          constructor(path: string, options?: Object);

          /** This schema type's name, to defend against minifiers that mangle function names. */
          static schemaName: string;
        }

        /*
         * section schema/embedded.js
         * http://mongoosejs.com/docs/api.html#schema-embedded-js
         */
        class Embedded extends SchemaType {
          /** Sub-schema schematype constructor */
          constructor(schema: Schema, key: string, options?: Object);
        }
      }
    }

    /*
     * section aggregate.js
     * http://mongoosejs.com/docs/api.html#aggregate-js
     */
    class Aggregate<T> {
      /**
       * Aggregate constructor used for building aggregation pipelines.
       * Returned when calling Model.aggregate().
       * @param ops aggregation operator(s) or operator array
       */
      constructor(ops?: Object | any[], ...args: any[]);

      /** Adds a cursor flag */
      addCursorFlag(flag: string, value: boolean): this;

      /**
       * Sets the allowDiskUse option for the aggregation query (ignored for < 2.6.0)
       * @param value Should tell server it can use hard drive to store data during aggregation.
       * @param tags optional tags for this query
       */
      allowDiskUse(value: boolean, tags?: any[]): this;

      /**
       * Appends new operators to this aggregate pipeline
       * @param ops operator(s) to append
       */
      append(...ops: Object[]): this;

      /**
       * Sets the cursor option option for the aggregation query (ignored for < 2.6.0).
       * Note the different syntax below: .exec() returns a cursor object, and no callback
       * is necessary.
       * @param options set the cursor batch size
       */
      cursor(options: Object): this;

      // If cursor option is on, could return an object
      /** Executes the aggregate pipeline on the currently bound Model. */
      exec(callback?: (err: any, result: T) => void): _MongoosePromise<T> | any;

      /** Execute the aggregation with explain */
      explain(callback?: (err: any, result: T) => void): _MongoosePromise<T>;

      /**
       * Appends a new custom $group operator to this aggregate pipeline.
       * @param arg $group operator contents
       */
      group(arg: Object): this;

      /**
       * Appends a new $limit operator to this aggregate pipeline.
       * @param num maximum number of records to pass to the next stage
       */
      limit(num: number): this;

      /**
       * Appends new custom $lookup operator(s) to this aggregate pipeline.
       * @param options to $lookup as described in the above link
       */
      lookup(options: Object): this;

      /**
       * Appends a new custom $match operator to this aggregate pipeline.
       * @param arg $match operator contents
       */
      match(arg: Object): this;

      /**
       * Binds this aggregate to a model.
       * @param model the model to which the aggregate is to be bound
       */
      model(model: Model<any>): this;

      /**
       * Appends a new $geoNear operator to this aggregate pipeline.
       * MUST be used as the first operator in the pipeline.
       */
      near(parameters: Object): this;

      /**
       * Appends a new $project operator to this aggregate pipeline.
       * Mongoose query selection syntax is also supported.
       * @param arg field specification
       */
      project(arg: string | Object): this;

      /**
       * Sets the readPreference option for the aggregation query.
       * @param pref one of the listed preference options or their aliases
       * @param tags optional tags for this query
       */
      read(pref: string, tags?: Object[]): this;

      /**
       * Appends new custom $sample operator(s) to this aggregate pipeline.
       * @param size number of random documents to pick
       */
      sample(size: number): this;

      /**
       * Appends a new $skip operator to this aggregate pipeline.
       * @param num number of records to skip before next stage
       */
      skip(num: number): this;

      /**
       * Appends a new $sort operator to this aggregate pipeline.
       * If an object is passed, values allowed are asc, desc, ascending, descending, 1, and -1.
       * If a string is passed, it must be a space delimited list of path names. The sort order
       * of each path is ascending unless the path name is prefixed with - which will be treated
       * as descending.
       */
      sort(arg: string | Object): this;

      /** Provides promise for aggregate. */
      then<TRes>(resolve?: (val: T) =>  void | TRes | PromiseLike<TRes>,
        reject?: (err: any) =>  void | TRes | PromiseLike<TRes>): _MongoosePromise<TRes>

      /**
       * Appends new custom $unwind operator(s) to this aggregate pipeline.
       * Note that the $unwind operator requires the path name to start with '$'.
       * Mongoose will prepend '$' if the specified field doesn't start '$'.
       * @param fields the field(s) to unwind
       */
      unwind(...fields: string[]): this;
    }

    /*
     * section schematype.js
     * http://mongoosejs.com/docs/api.html#schematype-js
     */
    class SchemaType {
      /** SchemaType constructor */
      constructor(path: string, options?: Object, instance?: string);

      /**
       * Sets a default value for this SchemaType.
       * Defaults can be either functions which return the value to use as the
       * default or the literal value itself. Either way, the value will be cast
       * based on its schema type before being set during document creation.
       * @param val the default value
       */
      default(val: any): any;

      /** Adds a getter to this schematype. */
      get(fn: Function): this;

      /**
       * Declares the index options for this schematype.
       * Indexes are created in the background by default. Specify background: false to override.
       */
      index(options: Object | boolean | string): this;

      /**
       * Adds a required validator to this SchemaType. The validator gets added
       * to the front of this SchemaType's validators array using unshift().
       * @param required enable/disable the validator
       * @param message optional custom error message
       */
      required(required: boolean, message?: string): this;

      /** Sets default select() behavior for this path. */
      select(val: boolean): this;
      /** Adds a setter to this schematype. */
      set(fn: Function): this;
      /** Declares a sparse index. */
      sparse(bool: boolean): this;
      /** Declares a full text index. */
      text(bool: boolean): this;
      /** Declares an unique index. */
      unique(bool: boolean): this;

      /**
       * Adds validator(s) for this document path.
       * Validators always receive the value to validate as their first argument
       * and must return Boolean. Returning false means validation failed.
       * @param obj validator
       * @param errorMsg optional error message
       * @param type optional validator type
       */
      validate(obj: RegExp | Function | Object, errorMsg?: string,
        type?: string): this;
    }

    /**
     * section promise.js
     * http://mongoosejs.com/docs/api.html#promise-js
     *
     * You must assign a promise library:
     *
     * 1. To use mongoose's default promise library:
     *    Install mongoose-promise.d.ts
     *
     * 2. To use native ES6 promises, add this line to your main .d.ts file:
     *    type MongoosePromise<T> = Promise<T>;
     *
     * 3. To use another promise library (for example q):
     *    Install q.d.ts
     *    Then add this line to your main .d.ts file:
     *    type MongoosePromise<T> = Q.Promise<T>;
     */
    type _MongoosePromise<T> = MongoosePromise<T>;

    /*
     * section model.js
     * http://mongoosejs.com/docs/api.html#model-js
     *
     * Mongoose Models use multiple inheritance from Document and EventEmitter.
     * When calling methods that return a model such as mongoose.connect(),
     * they actual return an instance of the Model constructor (think of it
     * like a new class) which can then instantiate its own objects.
     */
    type ModelConstructor<T> = IModelConstructor<T> & events.EventEmitter;
    type Model<T> = T & _Model<T> & events.EventEmitter;

    interface IModelConstructor<T> {
      /**
       * Model constructor
       * Provides the interface to MongoDB collections as well as creates document instances.
       * @param doc values with which to create the document
       * @event error If listening to this event, it is emitted when a document
       *   was saved without passing a callback and an error occurred. If not
       *   listening, the event bubbles to the connection used to create this Model.
       * @event index Emitted after Model#ensureIndexes completes. If an error
       *   occurred it is passed with the event.
       * @event index-single-start Emitted when an individual index starts within
       *   Model#ensureIndexes. The fields and options being used to build the index
       *   are also passed with the event.
       * @event index-single-done Emitted when an individual index finishes within
       *   Model#ensureIndexes. If an error occurred it is passed with the event.
       *   The fields, options, and index name are also passed.
       */
      new(doc?: Object): Model<T>;

      /**
       * Finds a single document by its _id field. findById(id) is almost*
       * equivalent to findOne({ _id: id }). findById() triggers findOne hooks.
       * @param id value of _id to query by
       * @param projection optional fields to return
       */
      findById(id: Object | string | number,
        callback?: (err: any, res: Model<T>) => void): ModelQuery<Model<T>, T>;
      findById(id: Object | string | number, projection: Object,
        callback?: (err: any, res: Model<T>) => void): ModelQuery<Model<T>, T>;
      findById(id: Object | string | number, projection: Object, options: Object,
        callback?: (err: any, res: Model<T>) => void): ModelQuery<Model<T>, T>;

      model<T>(name: string): ModelConstructor<T>;
      model<T, Statics>(name: string): Statics & ModelConstructor<T>;

      /**
       * Creates a Query and specifies a $where condition.
       * @param argument is a javascript string or anonymous function
       */
      $where(argument: string | Function): ModelQuery<Model<T>[], T>;

      /**
       * Performs aggregations on the models collection.
       * If a callback is passed, the aggregate is executed and a Promise is returned.
       * If a callback is not passed, the aggregate itself is returned.
       * @param ... aggregation pipeline operator(s) or operator array
       */
      aggregate(...aggregations: Object[]): Aggregate<Object[]>;
      aggregate(...aggregationsWithCallback: Object[]): _MongoosePromise<Object[]>;

      /** Counts number of matching documents in a database collection. */
      count(conditions: Object, callback?: (err: any, count: number) => void): Query<number>;

      /**
       * Shortcut for saving one or more documents to the database. MyModel.create(docs)
       * does new MyModel(doc).save() for every doc in docs.
       * Triggers the save() hook.
       */
      create(docs: any[], callback?: (err: any, res: Model<T>[]) => void): _MongoosePromise<Model<T>[]>;
      create(...docs: Object[]): _MongoosePromise<Model<T>>;
      create(...docsWithCallback: Object[]): _MongoosePromise<Model<T>>;

      /**
       * Adds a discriminator type.
       * @param name discriminator model name
       * @param schema discriminator model schema
       */
      discriminator(name: string, schema: Schema): Model<T>;

      /** Creates a Query for a distinct operation. Passing a callback immediately executes the query. */
      distinct(field: string, callback?: (err: any, res: any[]) => void): Query<any[]>;
      distinct(field: string, conditions: Object,
        callback?: (err: any, res: any[]) => void): Query<any[]>;

      /**
       * Sends ensureIndex commands to mongo for each index declared in the schema.
       * @param options internal options
       * @param cb optional callback
       */
      ensureIndexes(callback?: (err: any) => void): _MongoosePromise<void>;
      ensureIndexes(options: Object, callback?: (err: any) => void): _MongoosePromise<void>;

      /**
       * Finds documents.
       * @param projection optional fields to return
       */
      find(callback?: (err: any, res: Model<T>[]) => void): ModelQuery<Model<T>[], T>;
      find(conditions: Object, callback?: (err: any, res: Model<T>[]) => void): ModelQuery<Model<T>[], T>;
      find(conditions: Object, projection: Object,
        callback?: (err: any, res: Model<T>[]) => void): ModelQuery<Model<T>[], T>;
      find(conditions: Object, projection: Object, options: Object,
        callback?: (err: any, res: Model<T>[]) => void): ModelQuery<Model<T>[], T>;



      /**
       * Issue a mongodb findAndModify remove command by a document's _id field.
       * findByIdAndRemove(id, ...) is equivalent to findOneAndRemove({ _id: id }, ...).
       * Finds a matching document, removes it, passing the found document (if any) to the callback.
       * Executes immediately if callback is passed, else a Query object is returned.
       * @param id value of _id to query by
       */
      findByIdAndRemove(): ModelQuery<Model<T>, T>;
      findByIdAndRemove(id: Object | number | string,
        callback?: (err: any, res: Model<T>) => void): ModelQuery<Model<T>, T>;
      findByIdAndRemove(id: Object | number | string, options: {
        /** if multiple docs are found by the conditions, sets the sort order to choose which doc to update */
        sort?: Object;
        /** sets the document fields to return */
        select?: Object;
      }, callback?: (err: any, res: Model<T>) => void): ModelQuery<Model<T>, T>;

      /**
       * Issues a mongodb findAndModify update command by a document's _id field. findByIdAndUpdate(id, ...)
       * is equivalent to findOneAndUpdate({ _id: id }, ...).
       * @param id value of _id to query by
       */
      findByIdAndUpdate(): ModelQuery<Model<T>, T>;
      findByIdAndUpdate(id: Object | number | string, update: Object,
        callback?: (err: any, res: Model<T>) => void): ModelQuery<Model<T>, T>;
      findByIdAndUpdate(id: Object | number | string, update: Object,
        options: ModelFindByIdAndUpdateOptions,
        callback?: (err: any, res: Model<T>) => void): ModelQuery<Model<T>, T>;

      /**
       * Finds one document.
       * The conditions are cast to their respective SchemaTypes before the command is sent.
       * @param projection optional fields to return
       */
      findOne(conditions?: Object,
        callback?: (err: any, res: Model<T>) => void): ModelQuery<Model<T>, T>;
      findOne(conditions: Object, projection: Object,
        callback?: (err: any, res: Model<T>) => void): ModelQuery<Model<T>, T>;
      findOne(conditions: Object, projection: Object, options: Object,
        callback?: (err: any, res: Model<T>) => void): ModelQuery<Model<T>, T>;

      /**
       * Issue a mongodb findAndModify remove command.
       * Finds a matching document, removes it, passing the found document (if any) to the callback.
       * Executes immediately if callback is passed else a Query object is returned.
       */
      findOneAndRemove(): ModelQuery<Model<T>, T>;
      findOneAndRemove(conditions: Object,
        callback?: (err: any, res: Model<T>) => void): ModelQuery<Model<T>, T>;
      findOneAndRemove(conditions: Object, options: {
        /**
         * if multiple docs are found by the conditions, sets the sort order to choose
         * which doc to update
         */
        sort?: Object;
        /** puts a time limit on the query - requires mongodb >= 2.6.0 */
        maxTimeMS?: number;
        /** sets the document fields to return */
        select?: Object;
      }, callback?: (err: any, res: Model<T>) => void): ModelQuery<Model<T>, T>;

      /**
       * Issues a mongodb findAndModify update command.
       * Finds a matching document, updates it according to the update arg, passing any options,
       * and returns the found document (if any) to the callback. The query executes immediately
       * if callback is passed else a Query object is returned.
       */
      findOneAndUpdate(): ModelQuery<Model<T>, T>;
      findOneAndUpdate(conditions: Object, update: Object,
        callback?: (err: any, res: Model<T>) => void): ModelQuery<Model<T>, T>;
      findOneAndUpdate(conditions: Object, update: Object,
        options: ModelFindOneAndUpdateOptions,
        callback?: (err: any, res: Model<T>) => void): ModelQuery<Model<T>, T>;

      /**
       * geoNear support for Mongoose
       * @param GeoJSON point or legacy coordinate pair [x,y] to search near
       * @param options for the qurery
       * @param callback optional callback for the query
       */
      geoNear(point: number[] | {
        type: string;
        coordinates: number[]
      }, options: {
        /** return the raw object */
        lean?: boolean;
        [other: string]: any;
      }, callback?: (err: any, res: Model<T>[], stats: any) => void): ModelQuery<Model<T>[], T>;

      /**
       * Implements $geoSearch functionality for Mongoose
       * @param conditions an object that specifies the match condition (required)
       * @param options for the geoSearch, some (near, maxDistance) are required
       * @param callback optional callback
       */
      geoSearch(conditions: Object, options: {
        /** x,y point to search for */
        near: number[];
        /** the maximum distance from the point near that a result can be */
        maxDistance: number;
        /** The maximum number of results to return */
        limit?: number;
        /** return the raw object instead of the Mongoose Model */
        lean?: boolean;
      }, callback?: (err: any, res: Model<T>[]) => void): ModelQuery<Model<T>[], T>;

      /**
       * Shortcut for creating a new Document from existing raw data,
       * pre-saved in the DB. The document returned has no paths marked
       * as modified initially.
       */
      hydrate(obj: Object): Model<T>;

      /**
       * Shortcut for validating an array of documents and inserting them into
       * MongoDB if they're all valid. This function is faster than .create()
       * because it only sends one operation to the server, rather than one for each
       * document.
       * This function does not trigger save middleware.
       */
      insertMany(docs: any[], callback?: (error: any, docs: Model<T>[]) => void): _MongoosePromise<Model<T>[]>;
      insertMany(doc: any, callback?: (error: any, doc: Model<T>) => void): _MongoosePromise<Model<T>>;
      insertMany(...docsWithCallback: Object[]): _MongoosePromise<Model<T>>;

      /**
       * Executes a mapReduce command.
       * @param o an object specifying map-reduce options
       * @param callbackoptional callback
       */
      mapReduce<Key, Value>(
        o: ModelMapReduceOption<Model<T>, Key, Value>,
        callback?: (err: any, res: any) => void
      ): _MongoosePromise<any>;

      /**
       * Populates document references.
       * @param docs Either a single document or array of documents to populate.
       * @param options A hash of key/val (path, options) used for population.
       * @param callback Optional callback, executed upon completion. Receives err and the doc(s).
       */
      populate(docs: Object[], options: ModelPopulateOptions | ModelPopulateOptions[],
        callback?: (err: any, res: Model<T>[]) => void): _MongoosePromise<Model<T>[]>;
      populate<T>(docs: Object, options: ModelPopulateOptions | ModelPopulateOptions[],
        callback?: (err: any, res: Model<T>) => void): _MongoosePromise<Model<T>>;

      /** Removes documents from the collection. */
      remove(conditions: Object, callback?: (err: any) => void): Query<void>;

      /**
       * Updates documents in the database without returning them.
       * All update values are cast to their appropriate SchemaTypes before being sent.
       */
      update(conditions: Object, doc: Object,
        callback?: (err: any, raw: any) => void): Query<any>;
      update(conditions: Object, doc: Object, options: ModelUpdateOptions,
        callback?: (err: any, raw: any) => void): Query<any>;

      /** Creates a Query, applies the passed conditions, and returns the Query. */
      where(path: string, val?: Object): Query<any>;
    }

    class _Model<T> extends Document {
      /** Signal that we desire an increment of this documents version. */
      increment(): this;

      /**
       * Returns another Model instance.
       * @param name model name
       */
      model<T>(name: string): ModelConstructor<T>;
      model<T, Statics>(name: string): Statics & ModelConstructor<T>;

      /**
       * Removes this document from the db.
       * @param fn optional callback
       */
      remove(fn?: (err: any, product: Model<T>) => void): _MongoosePromise<Model<T>>;

      /**
       * Saves this document.
       * @param options options optional options
       * @param options.safe overrides schema's safe option
       * @param options.validateBeforeSave set to false to save without validating.
       * @param fn optional callback
       */
      save(fn?: (err: any, product: Model<T>, numAffected: number) => void): _MongoosePromise<Model<T>>;

      /** Base Mongoose instance the model uses. */
      base: typeof mongoose;
      /**
       * If this is a discriminator model, baseModelName is the
       * name of the base model.
       */
      baseModelName: String;
      /** Collection the model uses. */
      collection: Collection;
      /** Connection the model uses. */
      db: Connection;
      /** Registered discriminators for this model. */
      discriminators: any;
      /** The name of the model */
      modelName: string;
      /** Schema the model uses. */
      schema: Schema;
    }

    interface ModelFindByIdAndUpdateOptions {
      /** true to return the modified document rather than the original. defaults to false */
      new?: boolean;
      /** creates the object if it doesn't exist. defaults to false. */
      upsert?: boolean;
      /**
       * if true, runs update validators on this command. Update validators validate the
       * update operation against the model's schema.
       */
      runValidators?: boolean;
      /**
       * if this and upsert are true, mongoose will apply the defaults specified in the model's
       * schema if a new document is created. This option only works on MongoDB >= 2.4 because
       * it relies on MongoDB's $setOnInsert operator.
       */
      setDefaultsOnInsert?: boolean;
      /** if multiple docs are found by the conditions, sets the sort order to choose which doc to update */
      sort?: Object;
      /** sets the document fields to return */
      select?: Object;
    }

    interface ModelFindOneAndUpdateOptions extends ModelFindByIdAndUpdateOptions {
      /** Field selection. Equivalent to .select(fields).findOneAndUpdate() */
      fields?: Object | string;
      /** puts a time limit on the query - requires mongodb >= 2.6.0 */
      maxTimeMS?: number;
      /** if true, passes the raw result from the MongoDB driver as the third callback parameter */
      passRawResult?: boolean;
    }

    interface ModelPopulateOptions {
      /** space delimited path(s) to populate */
      path: string;
      /** optional fields to select */
      select?: any;
      /** optional query conditions to match */
      match?: Object;
      /** optional name of the model to use for population */
      model?: string;
      /** optional query options like sort, limit, etc */
      options?: Object;
    }

    interface ModelUpdateOptions {
      /** safe mode (defaults to value set in schema (true)) */
      safe?: boolean;
      /** whether to create the doc if it doesn't match (false) */
      upsert?: boolean;
      /** whether multiple documents should be updated (false) */
      multi?: boolean;
      /**
       * If true, runs update validators on this command. Update validators validate
       * the update operation against the model's schema.
       */
      runValidators?: boolean;
      /**
       * If this and upsert are true, mongoose will apply the defaults specified in the
       * model's schema if a new document is created. This option only works on MongoDB >= 2.4
       * because it relies on MongoDB's $setOnInsert operator.
       */
      setDefaultsOnInsert?: boolean;
      /** overrides the strict option for this update */
      strict?: boolean;
      /** disables update-only mode, allowing you to overwrite the doc (false) */
      overwrite?: boolean;
      /** other options */
      [other: string]: any;
    }

    interface ModelMapReduceOption<T, Key, Val> {
      map: Function | string;
      reduce: (key: Key, vals: T[]) => Val;
      /** query filter object. */
      query?: Object;
      /** sort input objects using this key */
      sort?: Object;
      /** max number of documents */
      limit?: number;
      /** keep temporary data default: false */
      keeptemp?: boolean;
      /** finalize function */
      finalize?: (key: Key, val: Val) => Val;
      /** scope variables exposed to map/reduce/finalize during execution */
      scope?: Object;
      /** it is possible to make the execution stay in JS. Provided in MongoDB > 2.0.X default: false */
      jsMode?: boolean;
      /** provide statistics on job execution time. default: false */
      verbose?: boolean;
      readPreference?: string;
      /** sets the output target for the map reduce job. default: {inline: 1} */
      out?: {
        /** the results are returned in an array */
        inline?: number;
        /**
         * {replace: 'collectionName'} add the results to collectionName: the
         * results replace the collection
         */
        replace?: string;
        /**
         * {reduce: 'collectionName'} add the results to collectionName: if
         * dups are detected, uses the reducer / finalize functions
         */
        reduce?: string;
        /**
         * {merge: 'collectionName'} add the results to collectionName: if
         * dups exist the new docs overwrite the old
         */
        merge?: string;
      };
    }

    interface MapReduceResult<Key, Val> {
      _id: Key;
      value: Val;
    }

    /*
     * section collection.js
     * http://mongoosejs.com/docs/api.html#collection-js
     */
    interface CollectionBase extends mongodb.Collection {
      /*
       * Abstract methods. Some of these are already defined on the
       * mongodb.Collection interface so they've been commented out.
       */
      ensureIndex(...args: any[]): any;
      //find(...args: any[]): any;
      findAndModify(...args: any[]): any;
      //findOne(...args: any[]): any;
      getIndexes(...args: any[]): any;
      //insert(...args: any[]): any;
      //mapReduce(...args: any[]): any;
      //save(...args: any[]): any;
      //update(...args: any[]): any;

      /** The collection name */
      collectionName: string;
      /** The Connection instance */
      conn: Connection;
      /** The collection name */
      name: string;
    }
  }
}