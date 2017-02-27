// Type definitions for kinvey-angular2-sdk v3.4.1
// Project: https://github.com/Kinvey/angular2-sdk
// Definitions by: Thomas P. Conner <https://github.com/thomasconner/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Rx = require('rx');

// Kinvey namespace
declare namespace Kinvey {
  function init(options: any): any;
  function initialize(options: any): PromiseLike<any>;
  class Client {}

  // Acl
  class Acl {
    constructor(entity: Object)
    // get creator(): string;
    // get readers(): Array<string>;
    // get writers(): Array<string>;
    // get readerGroups(): Array<string>;
    // get writerGroups(): Array<string>;
    // set globallyReadable(gr: boolean);
    // set globallyWritable(gw: boolean);
    addReader(user: string): this;
    addReaderGroup(group: Array<string>): this;
    addWriter(user: string): this;
    adddWriterGroup(group: Array<string>): this;
    isGloballyReadable(): boolean;
    isGloballyWritable(): boolean;
    removeReader(user: string): this;
    removeReaderGroup(group: Array<string>): this;
    removeWriter(user: string): this;
    removeWriterGroup(group: Array<string>): this;
    toPlainObject(): Object;
  }

  // Aggregation
  class Aggregation {
    constructor(options?: {
      query?: Query
      initial?: Object
      key?: Object
      reduceFn?: Function
    })
    by(field: string): this;
    toJSON(): {
      query: Object
      initial: Object
      key: Object
      reduce: Function
      reduceFn: Function
      condition: Object
    };
    static count(field: string): Aggregation;
    static sum(field: string): Aggregation;
    static min(field: string): Aggregation;
    static max(field: string): Aggregation;
    static average(field: string): Aggregation;
  }
  class Group extends Aggregation {}

  // CustomEndpoint
  class CustomEndpoint {
    static execute(endpoint: string, args: Object, options?: Object): Promise<any>
  }

  // DataStore
  enum DataStoreType {
    Cache,
    Network,
    Sync
  }
  class DataStore {
    static collection<T>(collection: string, type?: DataStoreType, options?: Object): T;
    static clearCache(options?: Object): Promise<Array<Object>>;
  }
  class NetworkStore {
    find(query?: Query, options?: Object): Rx.Observable<Array<Object>>;
    findById(id: string, options?: Object): Rx.Observable<Object>;
    group(aggregation: Aggregation, options?: Object): Rx.Observable<any>;
    count(query?: Query, options?: Object): Rx.Observable<number>;
    create(entities: Object|Array<Object>, options?: Object): Promise<Object|Array<Object>>;
    update(entities: Object|Array<Object>, options?: Object): Promise<Object|Array<Object>>;
    save(entity: Object|Array<Object>, options?: Object): Promise<Object|Array<Object>>;
    remove(query?: Query, options?:Object): Promise<Array<Object>>;
    removeById(id: string, options?: Object): Promise<Object>;
  }
  class CacheStore extends NetworkStore {
    clear(query?: Query, options?: Object): Promise<Array<Object>>;
    pendingSyncCount(query?: Query, options?: Object): Promise<number>;
    pendingSyncEntities(query?: Query, options?: Object): Promise<Array<Object>>;
    push(query?: Query, options?: Object): Promise<Array<Object>>;
    pull(query?: Query, options?: Object): Promise<Array<Object>>;
    sync(query?: Query, options?: Object): Promise<Object>;
    clearSync(query?: Query, options?: Object): Promise<Array<Object>>;
  }
  class SyncStore extends CacheStore {}

  // File
  class Files extends NetworkStore {
    download(name: string, options?: Object): Promise<Object>;
    downloadByUrl(url: string, options?: Object): Promise<Object>;
    stream(name: string, options?: Object): Promise<Object>;
    upload(file: Object, metadata?: Object, options?: Object): Promise<Object>;
  }

  // Metadata
  class Metadata {
    constructor(entity: Object);
    isLocal(): boolean;
    toPlainObject(): Object;
  }

  // Query
  class Query {
    constructor(options?: {
      fields?: Array<any>
      filter?: Object
      sort?: string
      limit?: number
      skip?: number
    })
    isSupportedOffline(): boolean;
    equalTo(field: string, value: any): this;
    contains(field: string, values: Array<any>): this;
    containsAll(field: string, values: Array<any>): this;
    greaterThan(field: string, value: number|string): this;
    greaterThanOrEqualTo(field: string, value: number|string): this;
    lessThan(field: string, value: number|string): this;
    lessThanOrEqualTo(field: string, value: number|string): this;
    notEqualTo(field: string, value: any): this;
    notContainedIn(field: string, values: Array<any>): this;
    and(queries?: Object|Query|Array<Object>|Array<Query>): this;
    nor(queries?: Object|Query|Array<Object>|Array<Query>): this;
    or(queries?: Object|Query|Array<Object>|Array<Query>): this;
    exists(field: string, flag: boolean): this;
    mod(field: string, divisor: number, remainder: number): this;
    matches(field: string, regExp: string|RegExp, options?: Object): this;
    near(field: string, coord: Array<number>, maxDistance?: number): this;
    withinBox(field: string, bottomLeftCoord: number, upperRightCoord: number): this;
    withinPolygon(field: string, coords: Array<number>): this;
    size(field: string, size: number): this;
    ascending(field: string): this;
    descending(field: string): this;
    toPlainObject(): {
      fields: Array<any>
      filter?: Object
      sort?: string
      limit?: number
      skip?: number
    }
    toQueryString(): Object;
    toString(): string;
  }

  // User
  enum AuthorizationGrant {
    AuthorizationCodeLoginPage,
    AuthorizationCodeAPI
  }
  class User {
    constructor(data?: Object, options?: Object)
    isActive(): boolean;
    isEmailVerified(): boolean;
    static getActiveUser(client?: Client): User|null
    login(username: string, password: string): Promise<this>;
    static login(username: string, password: string): Promise<User>;
    loginWithMIC(redirectUri: string, authorizationGrant?: AuthorizationGrant, options?: Object): Promise<this>;
    static loginWithMIC(redirectUri: string, authorizationGrant?: AuthorizationGrant, options?: Object): Promise<User>;
    logout(options?: Object): Promise<this>;
    static logout(options?: Object): Promise<User|null>;
    signup(data: Object, options?: Object): Promise<this>;
    static signup(data: Object, options?: Object): Promise<User>;
    update(data: Object, options?: Object): Promise<this>;
    static update(data: Object, options?: Object): Promise<User|null>;
    me(options?: Object): Promise<this>;
    static me(options?: Object): Promise<User|null>;
    static verifyEmail(username: string, options?: Object): Promise<Object>;
    static forgotUsername(email: string, options?: Object): Promise<Object>;
    static resetPassword(username: string, options?: Object): Promise<Object>;
    static lookup(query?: Query, options?: Object): Rx.Observable<Array<Object>>;
    static exists(username: string, options?: Object): Promise<boolean>;
    static restore(id: string, options?: Object): Promise<Object>;
  }

  // Errors
  class KinveyBaseError {
    name: string
    message: string
    debug: string
    code: number
    kinveyRequestId: string
    stack: string
    constructor(message: string, debug: string, code: number, kinveyRequestId: string)
  }
  class ActiveUserError extends KinveyBaseError {}
  class ApiVersionNotAvailableError extends KinveyBaseError {}
  class ApiVersionNotImplemented extends KinveyBaseError {}
  class AppPromblemError extends KinveyBaseError {}
  class BadRequestError extends KinveyBaseError {}
  class BusinessLogicError extends KinveyBaseError {}
  class CORSDisabledError extends KinveyBaseError {}
  class DuplicateEndUsersError extends KinveyBaseError {}
  class FeatureUnavailableError extends KinveyBaseError {}
  class IncompleteRequestBodyError extends KinveyBaseError {}
  class IndirectCollectionAccessDisallowedError extends KinveyBaseError {}
  class InsufficientCredentialsError extends KinveyBaseError {}
  class InvalidCredentialsError extends KinveyBaseError {}
  class InvalidIdentifierError extends KinveyBaseError {}
  class InvalidQuerySyntaxError extends KinveyBaseError {}
  class JSONParseError extends KinveyBaseError {}
  class KinveyError extends KinveyBaseError {}
  class KinveyInternalErrorRetry extends KinveyBaseError {}
  class KinveyInternalErrorStop extends KinveyBaseError {}
  class MissingQueryError extends KinveyBaseError {}
  class MissingRequestHeaderError extends KinveyBaseError {}
  class MobileIdentityConnectError extends KinveyBaseError {}
  class NoActiveUserError extends KinveyBaseError {}
  class NoNetworkConnectionError extends KinveyBaseError {}
  class NoResponseError extends KinveyBaseError {}
  class NotFoundError extends KinveyBaseError {}
  class ParameterValueOutOfRangeError extends KinveyBaseError {}
  class PopupError extends KinveyBaseError {}
  class QueryError extends KinveyBaseError {}
  class ServerError extends KinveyBaseError {}
  class StaleRequestError extends KinveyBaseError {}
  class SyncError extends KinveyBaseError {}
  class TimeoutError extends KinveyBaseError {}
  class UserAlreadyExistsError extends KinveyBaseError {}
  class WritesToCollectionDisallowedError extends KinveyBaseError {}
}
export default Kinvey;
