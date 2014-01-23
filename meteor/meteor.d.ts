// Type definitions for Meteor 0.6.5
// Project: http://www.meteor.com/
// Definitions by: Dave Allen <https://github.com/fullflavedave>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


interface IMeteor {

  /********
   * Core *
   ********/
  isClient: boolean;
  isServer: boolean;
  startup(func: Function): void;
  absoluteUrl(path: string,
              options: {
                secure?: boolean;
                replaceLocalhost?: boolean;
                rootUrl?: string;
              }): void;
  settings: Object;
  release: string;


  /*************************
   * Publish and Subscribe *
   *************************/

  /**
   * Publish a record set.
   *
   * @param name Name of the attribute set. If null, the set has no name, and the record set is
   *             automatically sent to all connected clients.
   * @param func Function called on the server each time a client subscribes. Inside the function,
   *             this is the publish handler object, described below. If the client passed arguments
   *             to subscribe, the function is called with the same arguments.
   */
  publish(name: string, func: Function): any;
  //Todo: Figure out a way to define this.userId, this.added, this.changed, etc that can be called from within publish

  /**
   * Subscribe to a record set. Returns a handle that provides stop() and ready() methods.
   *
   * @param name Name of the subscription. Matches name of server's publish() call.
   * @param arg1,arg2,arg3 Optional arguments passed to publisher function on server.
   * @param callbacks Optional. May include onError and onReady callbacks. Can be Object or Function.  If a function
   *                  is passed instead of an object, it is interpreted as an onReady callback.
   */
  subscribe(name: string, arg1?: any, arg2?: any, ars3?: any, arg4?: any, callbacks?: Object): IMeteorHandle;


  /***********
   * Methods *
   ***********/
  methods(methods: Object): void;
  Error(error: number, reason?: string, details?: string): void;
  // DA: Really should be defined like this:  call(name: string, ...args?: any[], asyncCallback?: Function): void;
  // But typescript does not allow Rest parameter (..args) to not be the last parameter defined
  call(name: string, param1?: Object, param2?: Object, param3?: Object, param4?: Object, asyncCallback?: Function): void;
  apply(name: string, options: any[], asyncCallback?: Function): void;
  defer(callback: Function): void;


  /*********************
   * ServerConnections *
   *********************/
  status(): {
    connected: boolean;
    status: string;
    retryCount: number;
    retryTime: number;
    reason: string;
  };
  reconnect(): void;
  disconnect(): void;


  /***************
   * Collections *
   ***************/
  Collection(name: string,
             options?: {
               connection?: Object;
               idGeneration?: string;
               transform?: Function;
             }): void;


  /************
   * Accounts *
   ************/
  user(): IMeteorUser;
  userId(): string;
  users: IMeteorUserCollection;
  loggingIn(): boolean;
  logout(callback?: Function): void;
  loginWithPassword(user: Object, password: string, callback?: Function): void;
  loginWithExternalService(options?: {
                             requestPermissions?: string[];
                             requestOfflineToken?: boolean;
                             forceApprovalPrompt?: boolean;
                           },
                           callback?: Function): void;
  loginWithFacebook(options?: {
                      requestPermissions?: string[];
                      requestOfflineToken?: boolean;
                      forceApprovalPrompt?: boolean;
                    },
                    callback?: Function): void;
  loginWithGithub(options?: {
                    requestPermissions?: string[];
                    requestOfflineToken?: boolean;
                    forceApprovalPrompt?: boolean;
                  },
                  callback?: Function): void;
  loginWithGoogle(options?: {
                    requestPermissions?: string[];
                    requestOfflineToken?: boolean;
                    forceApprovalPrompt?: boolean;
                  },
                  callback?: Function): void;
  loginWithMeetup(options?: {
                    requestPermissions?: string[];
                    requestOfflineToken?: boolean;
                    forceApprovalPrompt?: boolean;
                  },
                  callback?: Function): void;
  loginWithTwitter(options?: {
                    requestPermissions?: string[];
                    requestOfflineToken?: boolean;
                    forceApprovalPrompt?: boolean;
                  },
                   callback?: Function): void;
  loginWithWeibo(options?: {
                    requestPermissions?: string[];
                    requestOfflineToken?: boolean;
                    forceApprovalPrompt?: boolean;
                  },
                   callback?: Function): void;

  /*************
   * Templates *
   *************/
  render(htmlFunc: Function): DocumentFragment;
  renderList(observable: IMeteorCursor, docFunc: Function, elseFunc?: Function): DocumentFragment;

  /**********
   * Timers *
   **********/
  setTimeout(func: Function, delay: number): void;
  setInterval(func: Function, delay: number): void;
  clearTimeout(id: number): void;
  clearInterval(id: number): void;


  /******************** Begin definitions for contributed packages from Atmosphere (or elsewhere) *******************/

  /**************************************************
   * For Paginated-Subscription contributed package *
   **************************************************/
  subscribeWithPagination(collection: string, limit: number): IMeteorHandle;
  Template(): void;

  /*************************************************
   * For Router or Iron-Router contributed package *
   *************************************************/
  Router: IMeteorRouter;

  /*********************************
   * For Error contributed package *
   *********************************/
  Errors: IMeteorErrors;

  /******************** End definitions for contributed packages from Atmosphere (or elsewhere) *********************/

}  // End Meteor.someFunction definitions


/***************
 * Collections *
 ***************/
interface IMeteorCollection {
  find(selector?, options?: Object): IMeteorCursor;
  findOne(selector, options?: Object): any;
  insert(doc: Object, callback?: Function): string;
  update(selector, modifier, options?: Object, callback?: Function): void;
  remove(selector, callback?: Function): void;
  allow(options: Object): boolean;
  deny(options: Object): boolean;
  ObjectID(hexString?: string): Object;
}

interface IMeteorCursor {
  forEach(callback: Function): void;
  map(callback: Function): void;
  fetch(): any[];
  count(): number;
  rewind(): void;
  observe(callbacks: Object): void;
  observeChanges(callbacks: Object): void;
}


/*************
 * Templates *
 *************/

/**
 *  To use Meteor's Template.templateName.function, you must define an interface in a separate file with
 *  extension ".d.ts".  Within the interface, every template name must have a property by that name that
 *  is of type IMeteorViewModel or IMeteorManager (choose either depending on your philosophical
 *  preference -- both work the same)
 *  e.g. file ".../client/views/view-model-types.d.ts":
 *
 *           interface ITemplate {
 *             postsList: IMeteorViewModel;
 *             comment: IMeteorViewModel;
 *             notifications: IMeteorViewModel;
 *             [your template name]: IMeteorViewModel;
 *           }
 *           declare var Template: ITemplate;
 */
interface IMeteorViewModel {
  rendered(callback: Function): void;
  created(callback: Function): void;
  destroyed(callback: Function): void;
  events(eventMap: {[eventName: string]: Function;}): void;
  helpers(helpers: Object): void;
  preserve(selector: Object): void;
}

interface IMeteorManager {
  rendered(callback: Function): void;
  created(callback: Function): void;
  destroyed(callback: Function): void;
  events(eventMap: {[eventType: string]: Function;}): void;
  helpers(helpers: Object): any;
  preserve(selector: Object): void;
}

// DA: Currently not used, but I'd like to figure out a way to define the function signature
// for teh callbacks in IMeteorViewModel, IMeteorManager, and many other interfaces
interface IMeteorEvent {
  type?: MeteorEventType.Value;
  target?: Element;
  currentTarget?: Element;
  which?: number;
  stopPropogation(): void;
  stopImmediatePropogation(): void;
  preventDefault(): void;
  isPropogationStopped(): boolean;
  isImmediatePropogationStopped(): boolean;
  isDefaultPrevented(): boolean;
}

declare module MeteorEventType {
  export enum Value {'click', 'dblclick', 'focus', 'blur', 'change',
      'mouseenter', 'mouseleave', 'mousedown', 'mouseup', 'keydown', 'keypress', 'keyup', 'tap'}
}

/***********
 * Session *
 ***********/
interface IMeteorSession {
  set(key: string, value: Object): void;
  setDefault(key: string, value: Object): void;
  get(key: string): Object;
  equals(key: string, value: any): void;
}

interface IMeteorHandle {
  loaded(): number;
  limit(): number;
  ready(): boolean;
  loadNextPage(): void;
}

/**************************
 * Accounts and Passwords *
 **************************/
interface IMeteorUser {
  _id?: string;
  username?: string;
  emails?: {
    address: string;
    verified: boolean;
  };
  profile?: any;
  services?: any;
  createdAt?: number;
}

interface IMeteorUserCollection {
  find(selector?, options?: Object): IMeteorCursor;
  findOne(selector, options?: Object): IMeteorUser;
  insert(doc: IMeteorUser, callback?: Function): IMeteorUser;
  update(selector, modifier, options?: Object, callback?: Function): void;
  remove(selector, callback?: Function): void;
  allow(options: Object): boolean;
  deny(options: Object): boolean;
  ObjectID(hexString?: string): Object;
}

interface IMeteorAccounts {
  config(options: {
           sendVerificationEmail?: boolean;
           forbidClientAccountCreation?: boolean;
         }): void;
  ui: {
    config(options: {
             requestPermissions?: Object;
             requestOfflineToken?: Object;
             passwordSignupFields?: string;
           });
  };
  validateNewUser(func: Function): void;
  onCreateUser(func: Function): void;
  createUser(options: {
               username?: string;
               email?: string;
               password?: string;
               profile?: string;
             },
             callback?: Function): void;
  changePassword(oldPassword: string, newPassword: string, callback?: Function): void;
  forgotPassword(options: {
                     email: string;
                   },
                 callback?: Function): void;
  resetPassword(token: string, newPassword: string, callback?: Function): void;
  setPassword(userId: string, newPassword: string): void;
  verifyEmail(token: string, callback?: Function): void;
  sendResetPasswordEmail(userId: string, email?: string): void;
  sendEnrollmentEmail(userId: string, email?: string): void;
  sendVerificationEmail(userId: string, email?: string): void;
  emailTemplates: {
    from: string;
    siteName: string;
    resetPassword: IMeteorEmailValues;
    enrollAccount: IMeteorEmailValues;
    verifyEmail: IMeteorEmailValues;
  };
  // DA: I didn't see the signature for this, but it appears in the examples
  loginServiceConfiguration: {
    remove(options: Object): void;
    insert(options: Object): void;
  };
}

interface IMeteorEmailValues {
  subject?: Function;
  text?: Function;
}

interface IMeteorMatch {
  test(value: any, pattern: any): boolean;
  Any;
  String;
  Number;
  Boolean;
  undefined;
  null;
  Integer;
  ObjectIncluding;
  Object;
  Optional(pattern: string);
  OneOf(...args: string[]);
  Where(condition: boolean);
}

interface IExternalServiceParams {
  options?: {
    requestPermissions?: string[];
    requestOfflineToken?: boolean;
    forceApprovalPrompt?: boolean;
  };
  callback?: Function;
}

/********
 * Deps *
 ********/
interface IMeteorDeps {
  autorun(runFunc: Function): IMeteorComputationObject;
  flush(): void;
  nonreactive(func: Function): void;
  active: boolean;
  currentComputation: IMeteorComputationObject;
  onInvalidate(callback: Function): void;
  afterFlush(callback: Function): void;

  /**
   * @constructor
   */
  Computation(): void;

  /**
   * @constructor
   */
  Dependency(): void;
}

interface IMeteorComputationObject {
  stop(): void;
  invalidate(): void;
  onInvalidate(callback: Function): void;
  stopped: boolean;
  invalidated: boolean;
  firstRun: boolean;
}

interface IMeteorDependencyObject {
  changed(): void;
  depend(fromComputation?: IMeteorComputationObject): boolean;
  hasDependents(): boolean;
}

/*********
 * EJSON *
 *********/
interface IMeteorEJSON {
  parse(str: string): void;
  stringify(val: any): string;
  fromJSONValue(val): any;
  toJSONValue(val): JSON;
  equals(any: any): boolean;
  clone(val: any): any;
  newBinary(size: number): void;
  isBinary(x: any): boolean;
  addType(name: string, factory: Function): void;
}

/****************
 * HTTP package *
 ****************/
interface IMeteorHTTP {
  call(method: string, url: string, options: {
    content?: string;
    data?: Object;
    query?: string;
    params?: Object;
    auth?: string;
    headers?: Object;
    timeout?: number;
    followRedirects?: boolean;
  }, asyncCallback?: Function): IMeteorHTTPResult;
  get(url: string, options?: {
    content?: string;
    data?: Object;
    query?: string;
    params?: Object;
    auth?: string;
    headers?: Object;
    timeout?: number;
    followRedirects?: boolean;
  }, asyncCallback?: Function): IMeteorHTTPResult;
  post(url: string, options?: {
    content?: string;
    data?: Object;
    query?: string;
    params?: Object;
    auth?: string;
    headers?: Object;
    timeout?: number;
    followRedirects?: boolean;
  }, asyncCallback?: Function): IMeteorHTTPResult;
  put(url: string, options?: {
    content?: string;
    data?: Object;
    query?: string;
    params?: Object;
    auth?: string;
    headers?: Object;
    timeout?: number;
    followRedirects?: boolean;
  }, asyncCallback?: Function): IMeteorHTTPResult;
  del(url: string, options?: {
    content?: string;
    data?: Object;
    query?: string;
    params?: Object;
    auth?: string;
    headers?: Object;
    timeout?: number;
    followRedirects?: boolean;
  }, asyncCallback?: Function): IMeteorHTTPResult;
}

// DA: Currently not used
// I would like to figure out a way to specify this as type for options for IMeteorHTTP methods.
// Tests don't work if I simply specify this interface as the type.
interface IMeteorHTTPCallOptions {
  content?: string;
  data?: Object;
  query?: string;
  params?: Object;
  auth?: string;
  headers?: Object;
  timeout?: number;
  followRedirects?: boolean;
}

interface IMeteorHTTPResult {
  statusCode: number;
  content: string;
  data?: JSON;
  headers: Object;
}

/*********
 * Email *
 *********/
interface IMeteorEmail {
  send(options: {
         from?: string;
         to: any;
         cc?: any;
         bcc?: any;
         replyTo?: any;
         subject?: string;
         text?: string;
         html?: string;
         headers?: Object;
       }): void;
}


/**********
 * Assets *
 **********/
interface IMeteorAssets {
  getText(assetPath: string, asyncCallback?: Function): string;
  getBinary(assetPath: string, asyncCallback?: Function): any;
}

/*******
 * DPP *
 *******/
interface IMeteorDPP {
  connect(url: string): void;
}

declare var Meteor: IMeteor;
declare var Collection: IMeteorCollection;
declare var Session: IMeteorSession;
declare var Deps: IMeteorDeps;
declare var Accounts: IMeteorAccounts;
declare var Match: IMeteorMatch;
declare function check(value: any, pattern: any): void;
declare var Computation: IMeteorComputationObject;
declare var Dependency: IMeteorDependencyObject;
declare var EJSON: IMeteorEJSON;
declare var HTTP: IMeteorHTTP;
declare var Email: IMeteorEmail;
declare var Assets: IMeteorAssets;
declare var DPP: IMeteorDPP;

declare function changed(collection: string, id: string, fields, Object): void;

/******************** Begin definitions for contributed packages from Atmosphere (or elsewhere) *********************/

/***************************************************
 * For Router and Iron-Router contributed packages *
 ***************************************************/
interface IMeteorRouter {

  // These are for Router
  page(): void;
  add(route: Object): void;
  to(path: string, ...args: any[]): void;
  filters(filtersMap: Object);
  filter(filterName: string, options?: Object);

  // These are for Iron-Router
  map(routeMap: Function): void;
  path(route: string, params?: Object): void;
  url(route: string): void;
  routes: Object;
  configure(options: IMeteorRouterConfig): void;
}

// For Iron-Router
interface IMeteorRouterConfig {
  layout: string;
  notFoundTemplate: string;
  loadingTemplate: string;
  renderTemplates: Object;
}

interface IMeteorErrors {
  throw(message: string): void;
  clear(): void;
}

// For Router and Iron-Router contributed packages
declare var Router: IMeteorRouter;

/******************** End definitions for contributed packages from Atmosphere (or elsewhere) ***********************/

/**
 * Todo:
 * Define "this.function" functions.
 * Define the signatures of callback functions and other functions.
 ***/
